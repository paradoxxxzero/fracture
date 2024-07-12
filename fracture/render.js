import { cx, m } from './decimal'
import { uniformParams, compileConstants } from './default'
import { ast } from './formula'
import fragment2dSource from './shaders/fragment-2d.glsl?raw'
import fragment4dSource from './shaders/fragment-4d.glsl?raw'
import includesSource from './shaders/includes.glsl?raw'
import globalsSource from './shaders/globals.glsl?raw'
import renderSource from './shaders/render.glsl?raw'
import colorsSource from './shaders/colors.glsl?raw'
import complexSource from './shaders/complex.glsl?raw'
import specialSource from './shaders/special.glsl?raw'
import iterateSource from './shaders/iterate.glsl?raw'
import vertexQuadSource from './shaders/vertex-quad.glsl?raw'
import vertex4dSource from './shaders/vertex-4d.glsl?raw'
import { grid } from './geometry'
import {
  columnMajor,
  frustum,
  inverse,
  multiply,
  multiplyVector,
  rotate,
  translate,
} from './matrix'

export const includes = {
  includes: includesSource,
  globals: globalsSource,
  colors: colorsSource,
  render: renderSource,
  complex: complexSource,
  special: specialSource,
  iterate: iterateSource,
}

export const camelCaseToSnakeCase = str =>
  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).toUpperCase()

export const constants = rt =>
  Object.entries(compileConstants)
    .map(([key, value]) =>
      (res =>
        res !== false
          ? `#define ${camelCaseToSnakeCase(key)}${res === true ? '' : ` ${res}`}`
          : '')(typeof value === 'function' ? value(rt) : rt[key])
    )
    .filter(s => s)
    .join('\n')

export const preprocess = (rt, source) => {
  Object.entries(includes).forEach(([key, value]) => {
    source = source.replace(`#include ${key}`, value)
  })
  source = source.replace('##CONFIG', constants(rt))
  source = source.replace(
    'uniform vec2 args;',
    Object.keys(rt.args)
      .map(arg => `uniform vec2 arg_${arg};`)
      .join('\n')
  )

  source = source.replace(
    '#init_args',
    Object.keys(rt.args)
      .map(arg => `vec2 ${arg} = arg_${arg};`)
      .join('\n')
  )
  source = source.replace(
    '#transform_args',
    Object.keys(rt.args)
      .filter(arg => rt.varying.includes(arg))
      .concat(
        rt.perturb && rt.f_perturb
          ? ['z', 'c']
              .filter(arg => rt.varying.includes(arg))
              .map(arg => `d${arg}`)
          : []
      )
      .map(arg => `${arg} += pixel;\n  ${arg} *= transform;`)
      .join('\n')
  )

  source = source.replace(
    /\bF\(\s*(.+?)\s*,\s*(.+?)\s*\)/g,
    ast(rt.f).toShader().replace(/\bz\b/g, '$1').replace(/\bc\b/g, '$2')
  )

  if (rt.f_prime_z) {
    source = source.replace(
      /\bF_prime_z\s*\(\s*(.+?)\s*,\s*(.+?)\s*,\s*(.*?)\s*,\s*(.*?)\s*\)/g,
      ast(rt.f_prime_z)
        .toShader()

        .replace(/\bz\b/g, '$1')
        .replace(/\bc\b/g, '$2')
        .replace(/\bz_prime\b/g, '$3')
        .replace(/\bz_1_prime\b/g, '$4')
    )
  } else {
    source = source.replace(
      /\bF_prime_z\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,
      'vec2(0)'
    )
  }
  if (rt.f_prime_c) {
    source = source.replace(
      /\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,
      ast(rt.f_prime_c)
        .toShader()
        .replace(/z_prime/g, '$1')
        .replace(/z_1_prime/g, '$2')
    )
  } else {
    source = source.replace(
      /\bF_prime_c\s*\(z,\s*c,\s*(.*?),\s*(.*?)\)/g,
      'vec2(0)'
    )
  }
  if (rt.f_perturb) {
    source = source.replace(
      /F_perturb\(Z,\s*dz,\s*dc\)/g,
      ast(rt.f_perturb).toShader()
    )
  } else {
    source = source.replace(/F_perturb\(Z,\s*dz,\s*dc\)/g, 'vec2(0)')
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

export const compileShader = (rt, shaderSource, shader) => {
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

export const linkProgram = rt => {
  const { gl } = rt
  gl.linkProgram(rt.env.program)

  const success = gl.getProgramParameter(rt.env.program, gl.LINK_STATUS)
  if (!success) {
    const error = gl.getProgramInfoLog(rt.env.program)
    console.error(`Unable to initialize the shader program: ${error}`)
    return error
  }
}

export const recompileVertex = rt => {
  compileShader(
    rt,
    rt.mode === '2d' ? vertexQuadSource : preprocess(rt, vertex4dSource),
    rt.env.vertexShader
  )
}

export const recompileFragment = rt => {
  const { gl } = rt
  compileShader(
    rt,
    preprocess(rt, rt.mode === '2d' ? fragment2dSource : fragment4dSource),
    rt.env.fragmentShader
  )
  linkProgram(rt)
  gl.useProgram(rt.env.program) // NEEDED?

  rt.env.uniforms = Object.keys(uniformParams)
    .concat(Object.keys(rt.args).map(arg => `arg_${arg}`))
    .reduce((acc, name) => {
      acc[name] = gl.getUniformLocation(rt.env.program, name)
      return acc
    }, {})

  if (window.location.search.includes('debug')) {
    ;['f', 'f_prime_z', 'f_prime_c', 'f_perturb'].forEach((name, i) => {
      if (!rt[name]) {
        return
      }
      const st = ast(rt[name])
      console.info(name, st.toShader(), st.toComplex())
    })
  }
  if (rt.mode === '4d') {
    rt.env.uniforms.viewProjection = gl.getUniformLocation(
      rt.env.program,
      'viewProjection'
    )
    rt.env.uniforms.eye = gl.getUniformLocation(rt.env.program, 'eye')
  }
  updateUniforms(rt)
}

export const changeProgram = rt => {
  const gl = rt.gl
  if (rt.env) {
    if (rt.env.mode === rt.mode) {
      console.warn('Mode already set', rt.mode)
      return
    }
    if (rt.env.mode === '2d') {
      gl.deleteTexture(rt.env.orbit)
    } else {
      gl.deleteBuffer(rt.env.uvBuffer)
      gl.deleteBuffer(rt.env.vertexBuffer)
      gl.deleteBuffer(rt.env.indexBuffer)
      gl.deleteVertexArray(rt.env.vao)
    }
    gl.deleteShader(rt.env.vertexShader)
    gl.deleteShader(rt.env.fragmentShader)
    gl.deleteProgram(rt.env.program)
    delete rt.env
  }

  rt.env = {
    vertexShader: gl.createShader(gl.VERTEX_SHADER),
    fragmentShader: gl.createShader(gl.FRAGMENT_SHADER),
    program: gl.createProgram(),
    mode: rt.mode,
  }

  gl.attachShader(rt.env.program, rt.env.vertexShader)
  gl.attachShader(rt.env.program, rt.env.fragmentShader)

  recompileVertex(rt)
  recompileFragment(rt)

  if (rt.mode === '2d') {
    rt.env.orbit = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, rt.env.orbit)
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
  } else {
    rt.env.camera = {
      zoom: 2,
      fov: Math.PI / 3,
      eye: [0, 0, 0],
      rotation: rotate(Math.PI / 2, 1, 2),
      near: 0.01,
      far: 100,
      update(offset) {
        const position = translate(0, 0, this.zoom)
        const eye = [0, 0, this.zoom, 0]
        this.eye = multiplyVector(this.rotation, eye).slice(0, 3)
        const viewMatrix = inverse(multiply(this.rotation, position))

        this.aspect = offset
          ? offset.fullWidth / offset.fullHeight
          : gl.canvas.clientWidth / gl.canvas.clientHeight

        const zoom = Math.min(this.aspect, 1)

        const bounds = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          near: this.near,
          far: this.far,
        }

        bounds.top = (this.near * Math.tan(this.fov / 2)) / zoom
        let height = 2 * bounds.top
        let width = this.aspect * height
        bounds.left = -0.5 * width

        if (offset) {
          bounds.left += (offset.x * width) / offset.fullWidth
          bounds.top -= (offset.y * height) / offset.fullHeight
          width *= offset.width / offset.fullWidth
          height *= offset.height / offset.fullHeight
        }

        bounds.bottom = bounds.top - height
        bounds.right = bounds.left + width

        const projectionMatrix = frustum(bounds)
        const viewProjection = multiply(projectionMatrix, viewMatrix)
        this.viewProjection = columnMajor(viewProjection)
        // this.viewProjectionInverse = columnMajor(inverse(viewProjection))
        gl.uniformMatrix4fv(
          rt.env.uniforms.viewProjection,
          false,
          this.viewProjection
        )
        gl.uniform3fv(rt.env.uniforms.eye, this.eye)
      },
      center() {
        this.eye = [0, 0, 0]
        this.rotation = rotate(Math.PI / 2, 1, 2)
        this.update()
      },
    }
    rt.env.camera.update()

    const geometry = grid()
    rt.env.elements = geometry.indices.length
    rt.env.vao = gl.createVertexArray()
    gl.bindVertexArray(rt.env.vao)
    rt.env.indiceBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, rt.env.indiceBuffer)
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(geometry.indices),
      gl.STATIC_DRAW
    )
    rt.env.vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, rt.env.vertexBuffer)
    rt.env.vertexLocation = gl.getAttribLocation(rt.env.program, 'vertex')
    gl.enableVertexAttribArray(rt.env.vertexLocation)
    gl.vertexAttribPointer(rt.env.vertexLocation, 2, gl.FLOAT, false, 0, 0)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(geometry.vertices),
      gl.STATIC_DRAW
    )
    rt.env.uvBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, rt.env.uvBuffer)
    rt.env.uvLocation = gl.getAttribLocation(rt.env.program, 'uv')
    gl.enableVertexAttribArray(rt.env.uvLocation)
    gl.vertexAttribPointer(rt.env.uvLocation, 2, gl.FLOAT, false, 0, 0)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(geometry.uvs),
      gl.STATIC_DRAW
    )
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
    // depth: false,
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
  changeProgram(rt)

  return {
    ...rt,
    gl,
  }
}

export const updateUniforms = rt => {
  const { uniforms } = rt.env

  Object.entries(uniformParams)
    .concat(
      Object.entries(rt.args).map(([arg, value]) => [
        `arg_${arg}`,
        { type: '2fv', value: () => value.to2fv() },
      ])
    )
    .forEach(([name, params]) => {
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
  rt.env.camera?.update()
}

export const resizeCanvasToDisplaySize = (canvas, sampling, forceSize) => {
  let rw = canvas.clientWidth
  let rh = canvas.clientHeight
  let cw = forceSize ? forceSize.width : rw * sampling
  let ch = forceSize ? forceSize.height : rh * sampling

  if (cw !== canvas.width || ch !== canvas.height) {
    cw = Math.floor(cw)
    ch = Math.floor(ch)

    canvas.width = cw
    canvas.height = ch
    return true
  }
  return !!forceSize
}

const multiplyC = (c, matrix) => {
  return cx(
    c.re.multiply(matrix[0][0]).add(c.im.multiply(matrix[0][1])),
    c.re.multiply(matrix[1][0]).add(c.im.multiply(matrix[1][1]))
  )
}

const fillOrbit = (rt, orbit, z, c, max, shift) => {
  const [a, b] = shift ? [2, 3] : [0, 1]
  // eslint-disable-next-line no-new-func
  const F = new Function('z', 'c', 'z_1', `return ${ast(rt.f).toComplex()}`)
  const bailout = m(Math.pow(10, rt.bailout))
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

export const render = (rt, forceSize) => {
  if (!rt.gl) {
    // Context lost
    return
  }
  const { gl } = rt
  gl.uniform1f(
    rt.env.uniforms.time,
    rt.animate ? performance.now() - rt.timeref : 0
  )
  if (resizeCanvasToDisplaySize(gl.canvas, rt.supersampling, forceSize)) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    gl.uniform2fv(rt.env.uniforms.aspect, [
      gl.canvas.width / gl.canvas.height,
      1 / Math.max(gl.canvas.width, gl.canvas.height),
    ])
    if (forceSize) {
      const { x, y, width, height, fullWidth, fullHeight } = forceSize
      const { scale, varying, args } = rt
      const { uniforms } = rt.env
      gl.uniform2fv(uniforms.aspect, [
        width / height,
        1 / Math.max(width, height),
      ])
      // Scale is the half height of the viewport so here it's fullheight/2
      // We need scale down to half height
      const newScale = scale.multiply(height / fullHeight)
      gl.uniform2fv(uniforms.scale, newScale.to2fv())
      // Next we need to shift the center to the new center
      // We need to shift by (x - fullWidth/2) * scale
      const currentCenter = cx(fullWidth / 2, fullHeight / 2)
      const newCenter = cx(x + width / 2, y + height / 2)
      const shift = newCenter
        .subtract(currentCenter)
        .multiply(scale)
        .divide(cx(fullHeight / 2))
      varying.split('').forEach(key => {
        const newVarying = args[key].add(shift)
        gl.uniform2fv(uniforms[`arg_${key}`], newVarying.to2fv())
      })
      // ...
    }
  }

  if (rt.mode === '2d') {
    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.BLEND)
    // TODO: In useProcess / worker + only in prevention if still in viewPort
    if (rt.perturb) {
      const orbit = new Float32Array(128 * 128 * 4)
      const max = [0, 0]
      const z = rt.varying.includes('z')
        ? multiplyC(rt.args.z, rt.transform)
        : rt.args.z
      const c = rt.varying.includes('c')
        ? multiplyC(rt.args.c, rt.transform)
        : rt.args.c
      try {
        fillOrbit(rt, orbit, cx(), c, max)
        fillOrbit(rt, orbit, z, c, max, true)
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
  } else {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.enable(gl.DEPTH_TEST)
    gl.enable(gl.BLEND)
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    gl.blendFunc(gl.ONE, gl.ONE)
    // gl.depthFunc(gl.LEQUAL)
    gl.depthFunc(gl.ALWAYS)
    gl.drawElements(gl.TRIANGLES, rt.env.elements, gl.UNSIGNED_SHORT, 0)
  }
}

window.render = render
