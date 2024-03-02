import vertexSource from './vertex.glsl?raw'
import fragmentSource from './fragment.glsl?raw'
import { c, complexFunction } from './decimal'

const maxOptimizedPower = 9

const expand = source =>
  source.replace(/cpow\(\s*(.+?)\s*,\s*(\d+).0?\s*\)/g, (_, $1, $2) =>
    +$2 < maxOptimizedPower ? `cpow${$2}(${$1})` : `cpow(${$1}, ${$2})`
  )

const preprocess = (rt, source) => {
  source = source
    .replace(
      '##CONFIG',
      [
        rt.perturb ? '#define PERTURB' : '',
        rt.fixed ? '#define FIXED' : '',
        rt.useDerivative ? '#define USE_DERIVATIVE' : '',
        rt.showDerivative ? '#define SHOW_DERIVATIVE' : '',
      ]
        .filter(Boolean)
        .join('\n')
    )
    .replace(/F\(z,\s*c\)/g, expand(rt.fzc))
    .replace(/dF\s*\/\s*dz\(z,\s*c\)/, expand(rt.dfzcdz))
    .replace(/F\(Z,\s*dz,\s*dc\)/, expand(rt.fZdzdc))
  // console.log(
  //   source
  //     .split('\n')
  //     .map((s, i) => `${i + 1}: ${s}`)
  //     .join('\n')
  // )
  return source
}

const compileShader = (rt, shaderSource, shader) => {
  const { gl } = rt
  gl.shaderSource(shader, shaderSource)
  gl.compileShader(shader)
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (!success) {
    const error = gl.getShaderInfoLog(shader)
    let relevantSource = shaderSource
    const match = error.match(/ERROR: \d+:(\d+):/)?.[1]
    if (match) {
      const errlno = parseInt(match)
      const ctx = 5
      const lines = shaderSource.split('\n')
      const start = Math.max(0, errlno - ctx)
      const end = Math.min(lines.length, errlno + ctx)
      relevantSource = lines
        .slice(start, end)
        .map((s, i) => (i === ctx - 1 ? '=>' : '  ') + s)
        .join('\n')
    }
    console.error(
      `An error occurred compiling shader: ${error}`,
      relevantSource
    )
    return error
  }
}

const linkProgram = rt => {
  const { gl } = rt
  gl.linkProgram(rt.env.program)

  const success = gl.getProgramParameter(rt.env.program, gl.LINK_STATUS)
  if (!success) {
    const error = gl.getProgramInfoLog(rt.env.program)
    console.error(`Unable to initialize the shader program: ${error}`)
    return error
  }
}

export const initializeGl = (rt, onContextLost, onContextRestored) => {
  let canvas = document.getElementById('webgl2')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.id = 'webgl2'
    document.body.insertBefore(canvas, document.body.firstChild)
  }

  const gl = canvas.getContext('webgl2', {
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance',
  })

  canvas.addEventListener('webglcontextlost', onContextLost, false)
  canvas.addEventListener('webglcontextrestored', onContextRestored, false)

  rt = { ...rt, gl }

  if (!gl) {
    console.error(
      'Unable to initialize WebGL. Your browser may not support it.'
    )
    return
  }
  rt.env = {
    vertexShader: gl.createShader(gl.VERTEX_SHADER),
    fragmentShader: gl.createShader(gl.FRAGMENT_SHADER),
    program: gl.createProgram(),
  }

  gl.attachShader(rt.env.program, rt.env.vertexShader)
  gl.attachShader(rt.env.program, rt.env.fragmentShader)

  compileShader(rt, vertexSource, rt.env.vertexShader)

  recompile(rt)

  const orbit = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, orbit)
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA32F,
    64,
    64,
    0,
    gl.RGBA,
    gl.FLOAT,
    null
  )
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)

  const textures = {
    orbit,
  }

  return {
    ...rt,
    gl,
    textures,
  }
}

export const recompile = rt => {
  const { gl } = rt
  compileShader(rt, preprocess(rt, fragmentSource), rt.env.fragmentShader)
  linkProgram(rt)
  rt.env.uniforms = {
    orbit: gl.getUniformLocation(rt.env.program, 'orbit'),
    bailout: gl.getUniformLocation(rt.env.program, 'bailout'),
    iterations: gl.getUniformLocation(rt.env.program, 'iterations'),
    maxIterations: gl.getUniformLocation(rt.env.program, 'maxIterations'),
    // coefs: gl.getUniformLocation(rt.env.program, 'coefs'),
    center: gl.getUniformLocation(rt.env.program, 'center'),
    point: gl.getUniformLocation(rt.env.program, 'point'),
    power: gl.getUniformLocation(rt.env.program, 'power'),
    scale: gl.getUniformLocation(rt.env.program, 'scale'),
    aspect: gl.getUniformLocation(rt.env.program, 'aspect'),
    derivative: gl.getUniformLocation(rt.env.program, 'derivative'),
  }

  gl.useProgram(rt.env.program) // NEEDED?
  updateUniforms(rt)
}

export const updateUniforms = rt => {
  const { uniforms } = rt.env

  uniforms.orbit && rt.gl.uniform1i(uniforms.orbit, 0)
  uniforms.scale && rt.gl.uniform1f(uniforms.scale, rt.scale)
  uniforms.bailout && rt.gl.uniform1f(uniforms.bailout, rt.bailout)
  uniforms.iterations && rt.gl.uniform1i(uniforms.iterations, rt.iterations)
  uniforms.center && rt.gl.uniform2fv(uniforms.center, rt.center.to2fv())
  uniforms.point && rt.gl.uniform2fv(uniforms.point, rt.point.to2fv())
  uniforms.derivative &&
    rt.gl.uniform1f(uniforms.derivative, 10 ** -rt.derivative)
  uniforms.aspect &&
    rt.gl.uniform1f(uniforms.aspect, rt.gl.canvas.width / rt.gl.canvas.height)
}

export const resizeCanvasToDisplaySize = (canvas, sampling) => {
  let rw = canvas.clientWidth
  let rh = canvas.clientHeight
  let cw = rw * sampling
  let ch = rh * sampling

  if (cw !== canvas.width || ch !== canvas.height) {
    cw = Math.floor(cw)
    ch = Math.floor(ch)

    canvas.width = cw
    canvas.height = ch
    return true
  }
}

// Add complex functions to global scope
window.cmul = (a, b) => c(a).multiply(b)
window.cadd = (a, b) => c(a).add(b)
window.cpow = (a, b) => c(a).pow(b)

const fillOrbit = (rt, orbit, z, cst, max, shift) => {
  const [a, b] = shift ? [2, 3] : [0, 1]
  const F = complexFunction('z', 'c', rt.fzc)

  let i = 0
  for (; i < rt.iterations; i++) {
    orbit[i * 4 + a] = z.re.toNumber()
    orbit[i * 4 + b] = z.im.toNumber()
    z = F(z, cst)

    if (z.norm2().toNumber() >= rt.bailout) {
      break
    }
  }
  max[shift ? 1 : 0] = i

  return { orbit, max: i }
}

// const coefs = [c(1), c(), c(), c()]
// const fillCoefs = (rt, z, cst, coefs) => {
//   const zx2 = z.multiply(c(2, 0))
//   const [A, B, C, D] = coefs
//   coefs[0] = A.multiply(zx2).add(c(1))
//   coefs[1] = B.multiply(zx2).add(A.multiply(A))
//   coefs[2] = C.multiply(zx2).add(B.multiply(A.multiply(c(2))))
//   coefs[3] = D.multiply(zx2)
//     .add(C.multiply(A.multiply(c(2))))
//     .add(B.multiply(B))
// }

export const render = rt => {
  if (!rt.gl) {
    // Context lost
    return
  }
  const { gl } = rt

  if (resizeCanvasToDisplaySize(gl.canvas, rt.supersampling)) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    gl.uniform1f(rt.env.uniforms.aspect, gl.canvas.width / gl.canvas.height)
  }

  // TODO: In useProcess / worker + only in prevention if still in viewPort
  if (rt.perturb) {
    const orbit = new Float32Array(64 * 64 * 4)
    const max = [0, 0]
    if (rt.fixed) {
      fillOrbit(rt, orbit, c(), rt.center, max)
      fillOrbit(rt, orbit, rt.point, rt.center, max, true)
    } else {
      fillOrbit(rt, orbit, c(), rt.point, max)
      fillOrbit(rt, orbit, rt.center, rt.point, max, true)
    }
    gl.uniform2iv(rt.env.uniforms.maxIterations, max)

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA32F,
      64,
      64,
      0,
      gl.RGBA,
      gl.FLOAT,
      orbit
    )
  }
  gl.drawArrays(gl.TRIANGLES, 0, 3)
}

window.render = render
