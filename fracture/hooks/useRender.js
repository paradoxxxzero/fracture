import { useEffect } from 'react'
import { recompile, render, updateUniforms } from '../render'
import { getRoots } from '../../utils'
import { allParams, compileParams, uniformParams } from '../default'

const params = (runtime, keys) => keys.map(key => runtime[key])

export const useRender = (runtime, setRuntime) => {
  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.useRoots) {
        return {
          ...runtime,
          roots: getRoots(runtime.f),
        }
      }
      return runtime
    })
  }, [runtime.f, runtime.useRoots, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      return {
        ...runtime,
        perturb:
          runtime.usePerturbation === null
            ? Math.log10(runtime.scale) < -4.5
            : runtime.usePerturbation,
      }
    })
  }, [runtime.scale, runtime.usePerturbation, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      updateUniforms(runtime)
      return runtime
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...params(runtime, Object.keys(uniformParams)), setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      recompile(runtime)
      return runtime
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...params(runtime, compileParams), setRuntime])

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
