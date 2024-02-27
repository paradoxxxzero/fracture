import vertexSource from './vertex.glsl?raw'
import fragmentSource from './fragment.glsl?raw'
import { c, cs } from './decimal'
import { debounce } from '../utils'

let gl = null
let program = null
let vertexShader = null
let fragmentShader = null
let orbit = null
let state = null
const uniforms = {}

class State {
  constructor() {
    this.aspect = 1
    this.center = c(-0.5)
    this._scale = 1.2
    this.derive = true
    this.perturb = false
    this.bailout = 16 ** 2
    this.iterations = 1000
    this._supersampling = 1.1

    this.fromState()
    this.toState = debounce(this.toState.bind(this), 100)
    window.addEventListener('popstate', this.fromState.bind(this))
  }
  ratio(width, height) {
    this.aspect = width / height
  }
  serialize() {
    return new URLSearchParams({
      center: this.center.toString(),
      scale: this.scale.toString(),
      perturb: this.perturb,
      derive: this.derive,
      bailout: this.bailout,
      iterations: this.iterations,
      supersampling: this.supersampling,
    }).toString()
  }
  unserialize(params) {
    this.center = cs(params.get('center'))
    this.scale = parseFloat(params.get('scale'))
    this.perturb = params.get('perturb') === 'true'
    this.derive = params.get('derive') === 'true'
    this.bailout = parseFloat(params.get('bailout'))
    this.iterations = parseFloat(params.get('iterations'))
    this.supersampling = parseFloat(params.get('supersampling'))
  }
  fromState() {
    if (!location.hash) {
      return
    }
    try {
      this.unserialize(new URLSearchParams(location.hash.slice(1)))
      state && recompile()
    } catch (e) {
      console.error(e)
      location.hash = ''
    }
  }
  toState() {
    const hash = this.serialize()
    if (location.hash.slice(1) !== hash) {
      window.history.pushState(null, '', `#${this.serialize()}`)
    }
  }

  update() {
    this.toState()
    gl.uniform1f(uniforms.scale, this.scale)
    gl.uniform1f(uniforms.aspect, this.aspect)
    render()
  }
  shift(dx, dy) {
    const width = this.scale * 2
    this.center.re = this.center.re.subtract(dx * width * this.aspect)
    this.center.im = this.center.im.add(dy * width)
  }
  rescale(delta, x, y) {
    const dx = 0.5 - x
    const dy = 0.5 - y

    this.shift(dx * delta, dy * delta)
    this.scale -= this.scale * delta
  }
  get scale() {
    return this._scale
  }

  set scale(value) {
    this._scale = value
    let perturb = Math.log10(this._scale) < -4.5
    if (perturb !== this.perturb) {
      this.perturb = perturb
      state && recompile()
    }
  }

  get supersampling() {
    return this._supersampling
  }
  set supersampling(value) {
    this._supersampling = value
    state && sizeGL()
  }
}

const setConfig = source =>
  source.replace(
    '##CONFIG',
    [
      state.perturb ? '#define PERTURB' : '',
      state.derive ? '#define DERIVE' : '',
    ]
      .filter(Boolean)
      .join('\n')
  )

const compileShader = (shaderSource, shader) => {
  gl.shaderSource(shader, shaderSource)
  gl.compileShader(shader)
  window.shader = shaderSource
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (!success) {
    const error = gl.getShaderInfoLog(shader)
    console.error(`An error occurred compiling the shaders: ${error}`)
    return error
  }
}

const linkProgram = () => {
  gl.linkProgram(program)

  const success = gl.getProgramParameter(program, gl.LINK_STATUS)
  if (!success) {
    const error = gl.getProgramInfoLog(program)
    console.error(`Unable to initialize the shader program: ${error}`)
    return error
  }

  uniforms.bailout = gl.getUniformLocation(program, 'bailout')
  uniforms.iterations = gl.getUniformLocation(program, 'iterations')
  uniforms.maxIterations = gl.getUniformLocation(program, 'maxIterations')
  // uniforms.coefs = gl.getUniformLocation(program, 'coefs')
  uniforms.center = gl.getUniformLocation(program, 'center')
  uniforms.scale = gl.getUniformLocation(program, 'scale')
  uniforms.aspect = gl.getUniformLocation(program, 'aspect')
}

export const initGL = canvas => {
  gl = canvas.getContext('webgl2', { antialias: false })

  vertexShader = gl.createShader(gl.VERTEX_SHADER)
  fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

  program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  compileShader(vertexSource, vertexShader)

  state = new State()
  recompile()

  orbit = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, orbit)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG32F, 64, 64, 0, gl.RG, gl.FLOAT, null)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
  sizeGL()
}

const recompile = () => {
  compileShader(setConfig(fragmentSource), fragmentShader)
  linkProgram()

  gl.useProgram(program)
  gl.uniform1f(uniforms.scale, state.scale)
  gl.uniform1f(uniforms.aspect, state.aspect)
  gl.uniform1i(uniforms.iterations, state.iterations)
  gl.uniform1f(uniforms.bailout, state.bailout)
}

export const sizeGL = () => {
  if (!gl) {
    return
  }
  let rw = window.innerWidth
  let rh = window.innerHeight
  let cw = rw * window.devicePixelRatio * state.supersampling
  let ch = rh * window.devicePixelRatio * state.supersampling

  if (cw !== gl.canvas.width || ch !== gl.canvas.height) {
    state.ratio(cw, ch)

    rw = Math.floor(rw)
    rh = Math.floor(rh)
    cw = Math.floor(cw)
    ch = Math.floor(ch)

    gl.canvas.width = cw
    gl.canvas.height = ch

    gl.viewport(0, 0, cw, ch)
  }
  state.update()
}

const getOrbit = () => {
  let z = c()
  const coefs = [c(1), c(), c(), c()]
  let i = 0
  const orbit = new Float32Array(64 * 64 * 2)
  for (i = 0; i < state.iterations; i++) {
    orbit[i * 2] = z.re.toNumber()
    orbit[i * 2 + 1] = z.im.toNumber()

    z = z.multiply(z).add(state.center)
    // const zx2 = z.multiply(c(2, 0))

    // const [A, B, C, D] = coefs
    // coefs[0] = A.multiply(zx2).add(c(1))
    // coefs[1] = B.multiply(zx2).add(A.multiply(A))
    // coefs[2] = C.multiply(zx2).add(B.multiply(A.multiply(c(2))))
    // coefs[3] = D.multiply(zx2)
    //   .add(C.multiply(A.multiply(c(2))))
    //   .add(B.multiply(B))

    if (z.norm().toNumber() >= state.bailout) {
      break
    }
  }

  return { orbit, coefs, max: i }
}
export const render = () => {
  if (state.perturb) {
    const { orbit, max, coefs } = getOrbit()
    gl.uniform1i(uniforms.maxIterations, max)
    // gl.uniformMatrix4x2fv(uniforms.coefs, false, [
    //   coefs[0].re.toNumber(),
    //   coefs[0].im.toNumber(),
    //   coefs[1].re.toNumber(),
    //   coefs[1].im.toNumber(),
    //   coefs[2].re.toNumber(),
    //   coefs[2].im.toNumber(),
    //   coefs[3].re.toNumber(),
    //   coefs[3].im.toNumber(),
    // ])
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG32F, 64, 64, 0, gl.RG, gl.FLOAT, orbit)
  } else {
    gl.uniform2fv(uniforms.center, [
      state.center.re.toNumber(),
      state.center.im.toNumber(),
    ])
  }
  gl.drawArrays(gl.TRIANGLES, 0, 3)
}

const pointers = new Map()
let distance = null
let pinch = null

const onDown = e => {
  if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
    return
  }

  pointers.set(e.pointerId, [e.clientX, e.clientY])
}

const onMove = e => {
  if (!pointers.has(e.pointerId)) {
    return
  }
  const last = pointers.get(e.pointerId)
  const delta = [e.clientX - last[0], e.clientY - last[1]]
  pointers.set(e.pointerId, [e.clientX, e.clientY])

  if (pointers.size > 1) {
    const vals = pointers.values()
    const p1 = vals.next().value
    const p2 = vals.next().value
    if (pinch === null) {
      pinch = [
        (p1[0] + p2[0]) / (2 * window.innerWidth),
        (p1[1] + p2[1]) / (2 * window.innerHeight),
      ]
    }

    const newDistance = Math.hypot(p1[0] - p2[0], p1[1] - p2[1])
    if (distance === null) {
      distance = newDistance
      return
    }

    const deltaDistance = (newDistance - distance) / window.innerWidth
    distance = newDistance

    state.rescale(deltaDistance * 2, ...pinch)
    state.update()
    return
  }

  const dx = delta[0] / window.innerWidth
  const dy = delta[1] / window.innerHeight
  state.shift(dx, dy)
  state.update()
}

const onUp = e => {
  pointers.clear()
  distance = null
  pinch = null
}

window.addEventListener('pointerdown', onDown)
window.addEventListener('pointermove', onMove)
window.addEventListener('pointerup', onUp)
window.addEventListener('wheel', e => {
  const delta = e.deltaY / (2 * window.innerWidth)
  const x = e.clientX / window.innerWidth
  const y = e.clientY / window.innerHeight
  state.rescale(delta, x, y)
  state.update()
})
window.addEventListener('dblclick', e => {
  state.init()
  state.update()
})
