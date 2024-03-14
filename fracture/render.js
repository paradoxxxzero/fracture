import { cx, m } from './decimal'
import { palettes, smoothings, uniformParams, varyings } from './default'
import { ast } from './formula'
import fragmentSource from './fragment.glsl?raw'
import includesSource from './includes.glsl?raw'
import vertexSource from './vertex.glsl?raw'

const preprocess = (rt, source) => {
  source = source
    .replace(
      '##CONFIG',
      [
        rt.perturb && rt.f_perturb ? '#define PERTURB' : '',
        rt.convergent ? '#define CONVERGENT' : '',
        rt.divergent ? '#define DIVERGENT' : '',
        rt.useDerivative && rt.f_prime_z && rt.f_prime_c
          ? '#define USE_DERIVATIVE'
          : '',
        rt.showDerivative ? '#define SHOW_DERIVATIVE' : '',
        rt.useSmoothing ? '#define USE_SMOOTHING' : '',
        rt.useDistanceEstimate ? '#define USE_DISTANCE_ESTIMATE' : '',
        rt.useRoots ? '#define USE_ROOTS' : '',
        `#define VARYING ${varyings.indexOf(rt.varying)}`,
        `#define PALETTE ${palettes.indexOf(rt.palette)}`,
        `#define SMOOTHING ${smoothings.indexOf(rt.smoothing)}`,
      ]
        .filter(Boolean)
        .join('\n')
    )
    .replace('#include includes', includesSource)
    .replace(/F\(z,\s*c\)/g, ast(rt.f).toShader())

  if (rt.f_prime_z) {
    source = source.replace(
      /F_prime_z\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,
      ast(rt.f_prime_z)
        .toShader()
        .replace(/z_prime/g, '$1')
        .replace(/z_1_prime/g, '$2')
    )
  } else {
    source = source.replace(
      /F_prime_z\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,
      'vec2(0)'
    )
  }
  if (rt.f_prime_c) {
    source = source.replace(
      /F_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,
      ast(rt.f_prime_c)
        .toShader()
        .replace(/z_prime/g, '$1')
        .replace(/z_1_prime/g, '$2')
    )
  } else {
    source = source.replace(
      /F_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,
      'vec2(0)'
    )
  }
  if (rt.f_perturb) {
    source = source.replace(/F\(Z,\s*dz,\s*dc\)/g, ast(rt.f_perturb).toShader())
  } else {
    source = source.replace(/F\(Z,\s*dz,\s*dc\)/g, 'vec2(0)')
  }

  if (window.location.search.includes('debug')) {
    console.info(
      source
        .split('\n')
        .map((s, i) => `${i + 1}: ${s}`)
        .join('\n')
    )
  }
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
    128,
    128,
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
  rt.env.uniforms = Object.keys(uniformParams).reduce((acc, name) => {
    acc[name] = gl.getUniformLocation(rt.env.program, name)
    return acc
  }, {})

  if (window.location.search.includes('debug')) {
    ;['f', 'f_prime_z', 'f_prime_c', 'f_perturb'].forEach((name, i) => {
      const st = ast(rt[name])
      console.info(name, st.toShader(), st.toComplex())
    })
  }
  gl.useProgram(rt.env.program) // NEEDED?
  updateUniforms(rt)
}

export const updateUniforms = rt => {
  const { uniforms } = rt.env

  Object.entries(uniformParams).forEach(([name, params]) => {
    if (typeof params === 'string') {
      params = { type: params, value: v => v }
    }
    const { type, value } = params
    const uniform = uniforms[name]
    if (!uniform) {
      return
    }
    const v = value(rt[name], rt)
    if (type.startsWith('m')) {
      rt.gl['uniformMatrix' + type.slice(1)](uniform, false, v)
    } else {
      rt.gl['uniform' + type](uniform, v)
    }
  })
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

const multiply = (c, matrix) => {
  return cx(
    c.re.multiply(matrix[0][0]).add(c.im.multiply(matrix[0][1])),
    c.re.multiply(matrix[1][0]).add(c.im.multiply(matrix[1][1]))
  )
}

const fillOrbit = (rt, orbit, z, c, max, shift) => {
  const [a, b] = shift ? [2, 3] : [0, 1]
  // eslint-disable-next-line no-new-func
  const F = new Function('z', 'c', 'z_1', `return ${ast(rt.f).toComplex()}`)
  const bailout = m(rt.bailout)
  let i = 0
  let z_1 = cx()
  for (; i < rt.iterations; i++) {
    orbit[i * 4 + a] = z.re.toNumber()
    orbit[i * 4 + b] = z.im.toNumber()
    let prev_z = z
    z = F(z, c, z_1)
    z_1 = prev_z

    if (z.norm2().gte(bailout)) {
      break
    }
  }
  max[shift ? 1 : 0] = i

  return { orbit, max: i }
}

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
    const orbit = new Float32Array(128 * 128 * 4)
    const max = [0, 0]
    const center = rt.varying.includes('z')
      ? multiply(rt.center, rt.transform)
      : rt.center
    const point = rt.varying.includes('c')
      ? multiply(rt.point, rt.transform)
      : rt.point
    try {
      fillOrbit(rt, orbit, cx(), point, max)
      fillOrbit(rt, orbit, center, point, max, true)
    } catch (e) {
      console.warn(e)
    }
    gl.uniform2iv(rt.env.uniforms.maxIterations, max)

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA32F,
      128,
      128,
      0,
      gl.RGBA,
      gl.FLOAT,
      orbit
    )
  }
  gl.drawArrays(gl.TRIANGLES, 0, 3)
}

window.render = render
