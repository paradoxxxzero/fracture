import { memo, useEffect, useRef } from 'react'
import { recompileFragment, recompileVertex, preprocess } from '../render'
import { defaultParams } from '../default'

const previewSize = {
  width: 300,
  height: 150,
}

const offScreenCanvas = document.createElement('canvas')
offScreenCanvas.width = previewSize.width
offScreenCanvas.height = previewSize.height

const previewer = {
  locked: false,
  gl: null,
  env: null,
  queue: [],
  init() {
    this.gl = offScreenCanvas.getContext('webgl2', {
      antialias: false,
      depth: false,
      stencil: false,
    })
    this.env = {
      vertexShader: this.gl.createShader(this.gl.VERTEX_SHADER),
      fragmentShader: this.gl.createShader(this.gl.FRAGMENT_SHADER),
      program: this.gl.createProgram(),
    }
    recompileVertex(this, false)
    this.gl.attachShader(this.env.program, this.env.vertexShader)
    this.gl.attachShader(this.env.program, this.env.fragmentShader)
  },
  render(params) {
    if (!this.gl) {
      this.init()
    }
    const rt = {
      gl: this.gl,
      env: this.env,
      ...defaultParams,
      ...params,
      perturb: false,
    }
    recompileFragment(rt)
    this.gl.clearColor(0, 0, 0, 1)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    this.gl.viewport(0, 0, previewSize.width, previewSize.height)
    this.gl.uniform2fv(this.env.uniforms.aspect, [
      previewSize.width / previewSize.height,
      1 / Math.max(previewSize.width, previewSize.height),
    ])
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3)
    const pixels = new Uint8Array(previewSize.width * previewSize.height * 4)
    this.gl.readPixels(
      0,
      0,
      previewSize.width,
      previewSize.height,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      pixels
    )
    return pixels
  },
}

export default memo(function Preview({ params }) {
  const canvas = useRef()

  useEffect(() => {
    setTimeout(() => {
      const pixels = previewer.render(params)
      canvas.current.width = previewSize.width
      canvas.current.height = previewSize.height
      const ctx = canvas.current.getContext('2d')
      const imageData = new ImageData(
        new Uint8ClampedArray(pixels),
        previewSize.width,
        previewSize.height
      )
      ctx.putImageData(imageData, 0, 0)
      ctx.scale(1, -1)
      ctx.translate(0, -previewSize.height)
      ctx.drawImage(canvas.current, 0, 0)
    }, 5)
  }, [params])

  return <canvas ref={canvas} className="preview" style={previewSize} />
})
