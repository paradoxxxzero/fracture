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
    runtime.power,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      recompile(runtime)
      return runtime
    })
  }, [
    runtime.power,
    runtime.fixed,
    runtime.perturb,
    runtime.useDerivative,
    runtime.showDerivative,
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
    runtime.center,
    runtime.scale,
    runtime.derivative,
    runtime.useDerivative,
    runtime.showDerivative,
    runtime.perturb,
    runtime.bailout,
    runtime.iterations,
    runtime.supersampling,
    runtime.type,
    runtime.point,
    runtime.power,
    runtime.fixed,
  ])
}
