import { useEffect, useRef } from 'react'
import { allParams, compileParams, uniformParams } from '../default'
import {
  recompileFragment,
  recompileVertex,
  render,
  updateUniforms,
  changeProgram,
} from '../render'
import { use } from 'react'

const params = (runtime, keys) => keys.map(key => runtime[key])
const argValue = args =>
  Object.entries(args)
    .map(([key, arg]) => `${key}|${arg}`)
    .join('#')

export const useRender = (runtime, setRuntime) => {
  useEffect(() => {
    setRuntime(runtime => {
      return {
        ...runtime,
        perturb:
          runtime.usePerturbation === null
            ? Math.log10(runtime.scale.real().toNumber()) < -4.5
            : runtime.usePerturbation,
      }
    })
  }, [runtime.scale, runtime.usePerturbation, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      changeProgram(runtime)
      return runtime
    })
  }, [runtime.dimensions, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      recompileVertex(runtime)
      recompileFragment(runtime)
      return runtime
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...params(runtime, compileParams), setRuntime])

  useEffect(() => {
    if (!runtime.texture) {
      return
    }
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      setRuntime(runtime => {
        const gl = runtime.gl
        gl.activeTexture(gl.TEXTURE2)
        gl.bindTexture(gl.TEXTURE_2D, runtime.env.texture)
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          img.width,
          img.height,
          0,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          img
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        return {
          ...runtime,
          textureElement: img,
        }
      })
    }
    img.src = runtime.texture
  }, [runtime.texture])

  useEffect(() => {
    setRuntime(runtime => {
      updateUniforms(runtime)
      return runtime
    })
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...params(runtime, Object.keys(uniformParams)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    argValue(runtime.args),
    runtime.textureElement,
    setRuntime,
  ])

  useEffect(() => {
    if (!runtime.gl.canvas) {
      return
    }
    // Resize observer calls render on setup
    const resizeObserver = new ResizeObserver(() => {
      render(runtime)
    })
    resizeObserver.observe(runtime.gl.canvas, { box: 'content-box' })

    return () => resizeObserver.disconnect()
  }, [runtime, runtime.gl.canvas])

  const raf = useRef(null)
  useEffect(() => {
    if (runtime.animate) {
      runtime.timeref = performance.now()
      const loop = () => {
        render(runtime)
        raf.current = requestAnimationFrame(loop)
      }

      loop()
      return () => {
        cancelAnimationFrame(raf.current)
        raf.current = null
      }
    }
  }, [runtime.animate])

  useEffect(
    () => {
      setRuntime(runtime => {
        render(runtime)
        return runtime
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    params(runtime, allParams)
  )
}
