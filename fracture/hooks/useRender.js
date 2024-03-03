import { useEffect } from 'react'
import { recompile, render, updateUniforms } from '../render'

export const useRender = (runtime, setRuntime) => {
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
  }, [
    runtime.scale,
    runtime.bailout,
    runtime.iterations,
    runtime.maxIterations,
    runtime.center,
    runtime.point,
    runtime.derivative,
    runtime.smoothing,
    runtime.contrast,
    runtime.hue,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      recompile(runtime)
      return runtime
    })
  }, [
    runtime.fzc,
    runtime.dfzcdz,
    runtime.fZdzdc,
    runtime.fixed,
    runtime.perturb,
    runtime.useDerivative,
    runtime.showDerivative,
    runtime.useSmoothing,
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
  }, [runtime.gl.canvas])

  useEffect(() => {
    setRuntime(runtime => {
      render(runtime)
      return runtime
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    runtime.fzc,
    runtime.dfzcdz,
    runtime.fZdzdc,
    runtime.center,
    runtime.scale,
    runtime.derivative,
    runtime.useDerivative,
    runtime.useSmoothing,
    runtime.showDerivative,
    runtime.perturb,
    runtime.bailout,
    runtime.hue,
    runtime.contrast,
    runtime.iterations,
    runtime.smoothing,
    runtime.supersampling,
    runtime.type,
    runtime.point,
    runtime.fixed,
  ])
}
