"""Run GLSL expressions on the GPU (WebGL2 in a headless browser) and compare with mpmath.

The shader sources are the very files used by the application (globals, complex,
special and extra). Every test case becomes a case of a `switch` in a small
fragment shader that reads its inputs from two float textures and writes the
result to a float framebuffer, one pixel per input point.
"""
import http.server
import json
import math
import os
import shutil
import struct
import subprocess
import tempfile
import threading
import time
from pathlib import Path

import mpmath as mp

ROOT = Path(__file__).resolve().parent.parent
SHADERS = ROOT / 'fracture' / 'shaders'
# Same order as in includes.glsl. colors and render need the application's uniforms
SOURCES = ['globals', 'complex', 'special', 'extra']

HEAD = '''#version 300 es
precision highp float;
precision highp int;
out vec4 outColor;
uniform sampler2D t0;
uniform sampler2D t1;
uniform int fn;
'''

MAIN = '''
void main() {
    ivec2 p = ivec2(gl_FragCoord.xy);
    vec4 u = texelFetch(t0, p, 0);
    vec4 v = texelFetch(t1, p, 0);
    vec2 a = u.xy; vec2 b = u.zw; vec2 c = v.xy; vec2 d = v.zw;
    vec2 r = vec2(0.);
    switch(fn) {
%s
    }
    outColor = vec4(r, 0., 0.);
}
'''

PAGE = '''<!doctype html><meta charset=utf-8><body><script>
const CHUNKS = %s;
const VERT = '#version 300 es\\nvoid main(){ vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2); gl_Position = vec4(p * 2. - 1., 0., 1.); }';
(async () => {
  const out = { fatal: null, chunks: [] };
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) throw new Error('WebGL2 is not available');
    if (!gl.getExtension('EXT_color_buffer_float')) throw new Error('EXT_color_buffer_float is not available');
    const shader = (type, source) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    const texture = (n, data) => {
      const t = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, n, 1, 0, gl.RGBA, gl.FLOAT, data);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      return t;
    };
    for (const chunk of CHUNKS) {
      const res = { error: null, results: [] };
      out.chunks.push(res);
      try {
        const program = gl.createProgram();
        gl.attachShader(program, shader(gl.VERTEX_SHADER, VERT));
        gl.attachShader(program, shader(gl.FRAGMENT_SHADER, chunk.fs));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
        gl.useProgram(program);
        chunk.data.forEach((rows, i) => {
          const n = rows.length;
          const d0 = new Float32Array(n * 4), d1 = new Float32Array(n * 4);
          rows.forEach((r, j) => { for (let k = 0; k < 4; k++) { d0[j * 4 + k] = r[k]; d1[j * 4 + k] = r[4 + k]; } });
          gl.activeTexture(gl.TEXTURE0); const t0 = texture(n, d0);
          gl.activeTexture(gl.TEXTURE1); const t1 = texture(n, d1);
          gl.uniform1i(gl.getUniformLocation(program, 't0'), 0);
          gl.uniform1i(gl.getUniformLocation(program, 't1'), 1);
          gl.uniform1i(gl.getUniformLocation(program, 'fn'), i);
          gl.activeTexture(gl.TEXTURE2);
          const target = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, target);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, n, 1, 0, gl.RGBA, gl.FLOAT, null);
          const fb = gl.createFramebuffer();
          gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target, 0);
          gl.viewport(0, 0, n, 1);
          gl.drawArrays(gl.TRIANGLES, 0, 3);
          const px = new Float32Array(n * 4);
          gl.readPixels(0, 0, n, 1, gl.RGBA, gl.FLOAT, px);
          res.results.push(Array.from(px));
          [t0, t1, target].forEach(t => gl.deleteTexture(t));
          gl.deleteFramebuffer(fb);
        });
        gl.deleteProgram(program);
      } catch (e) { res.error = String(e); }
    }
  } catch (e) { out.fatal = String(e); }
  await fetch('/post', { method: 'POST', body: JSON.stringify(out) });
})();
</script>'''

BROWSERS = ['firefox', 'chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable', 'chrome']


class InfrastructureError(Exception):
    pass


def find_browser(name=None):
    for candidate in [name] if name else BROWSERS:
        path = shutil.which(candidate)
        if path:
            return path
    raise InfrastructureError('no browser found (tried %s); use --browser' % ', '.join([name] if name else BROWSERS))


def browser_command(path, profile, url):
    if 'firefox' in os.path.basename(path):
        return [path, '--headless', '--no-remote', '--profile', profile, url]
    # Chromium family: software WebGL through SwiftShader (not tested in CI)
    return [path, '--headless=new', '--no-sandbox', '--ignore-gpu-blocklist', '--use-angle=swiftshader',
            '--enable-unsafe-swiftshader', '--user-data-dir=' + profile, url]


def load_source():
    return '\n'.join((SHADERS / (name + '.glsl')).read_text() for name in SOURCES)


def f32(x):
    return struct.unpack('f', struct.pack('f', x))[0]


def encode_inputs(test):
    """Pad to 8 floats and round to float32 so that the reference sees exactly what the GPU sees."""
    return [[f32(x) for x in list(row) + [0.] * (8 - len(row))] for row in test['inputs']]


def build_chunks(tests, source, size):
    """Large switch statements miscompile on some software rasterizers (llvmpipe), so batch the tests."""
    chunks = []
    for start in range(0, len(tests), size):
        part = tests[start:start + size]
        cases = '\n'.join('        case %d: r = %s; break;' % (i, t['glsl']) for i, t in enumerate(part))
        chunks.append(dict(fs=HEAD + source + MAIN % cases, data=[encode_inputs(t) for t in part],
                           names=[t['name'] for t in part]))
    return chunks


def run_page(html, browser, timeout):
    """Serve the page, run it in a headless browser and wait for it to post its results."""
    tmp = tempfile.mkdtemp(prefix='fracture-test-')
    result = {}

    class Handler(http.server.BaseHTTPRequestHandler):
        def do_GET(self):
            body = html.encode()
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_POST(self):
            result['data'] = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
            self.send_response(200)
            self.end_headers()

        def log_message(self, *args):
            pass

    server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    proc = None
    try:
        url = 'http://127.0.0.1:%d/' % server.server_address[1]
        proc = subprocess.Popen(browser_command(browser, tmp, url), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        start = time.time()
        while 'data' not in result:
            if proc.poll() is not None and 'data' not in result:
                time.sleep(1)  # the page may have posted right before exiting
                if 'data' not in result:
                    raise InfrastructureError('the browser exited before reporting results')
            if time.time() - start > timeout:
                raise InfrastructureError('timeout after %ds waiting for the browser' % timeout)
            time.sleep(.2)
        return result['data']
    finally:
        if proc and proc.poll() is None:
            proc.kill()
        server.shutdown()
        shutil.rmtree(tmp, ignore_errors=True)


def as_complex(re, im):
    nan = float('nan')
    return complex(nan if re is None else re, nan if im is None else im)


def compare(test, rows, got):
    """Return a result dict for one test. Relative error is |got - ref| / max(|ref|, 1e-3)."""
    worst, worst_info, nan, skipped, errors = 0., None, 0, 0, []
    for j, row in enumerate(rows):
        args = [mp.mpc(row[2 * k], row[2 * k + 1]) for k in range(4)]
        try:
            ref = complex(test['ref'](*args))
        except Exception:  # the reference is undefined here (pole, branch...)
            skipped += 1
            continue
        g = as_complex(got[4 * j], got[4 * j + 1])
        shown = [round(x, 4) for x in row[:2 * test['nin']]]
        if math.isnan(g.real) or math.isnan(g.imag) or math.isinf(abs(g)):
            nan += 1
            err = float('inf')
        else:
            err = abs(g - ref) / max(abs(ref), 1e-3)
        errors.append((shown, ref, g, err))
        if err > worst or worst_info is None:
            worst, worst_info = err, (shown, ref, g)
    return dict(name=test['name'], tag=test['tag'], tol=test['tol'], worst=worst, n=len(rows), nan=nan,
                skipped=skipped, points=errors, worst_at=worst_info, passed=worst <= test['tol'] and bool(errors))


def run(tests, browser=None, chunk=6, timeout=180):
    """Run the tests and return a list of result dicts (see `compare`). Failed chunks give failed results."""
    browser = find_browser(browser)
    chunks = build_chunks(tests, load_source(), chunk)
    data = run_page(PAGE % json.dumps(chunks), browser, timeout)
    if data['fatal']:
        raise InfrastructureError(data['fatal'])
    results = []
    for ci, (chunk_data, out) in enumerate(zip(chunks, data['chunks'])):
        part = tests[ci * chunk:(ci + 1) * chunk]
        for i, test in enumerate(part):
            if out['error']:
                results.append(dict(name=test['name'], tag=test['tag'], tol=test['tol'], worst=float('inf'),
                                    n=len(test['inputs']), nan=0, skipped=0, points=[], worst_at=None,
                                    passed=False, error=out['error']))
            else:
                results.append(compare(test, chunk_data['data'][i], out['results'][i]))
    return results
