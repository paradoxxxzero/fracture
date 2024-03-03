import { useCallback, useEffect, useRef } from 'react'
import { debounce } from '../../utils'
import { render } from '../render'
import { cx } from '../decimal'

export const useInteract = (runtime, updateParams) => {
  const loop = useRef(null)

  const local = useRef({
    center: runtime.center,
    point: runtime.point,
    scale: runtime.scale,
    pointers: new Map(),
  })
  const update = debounce(() => {
    updateParams({
      center: local.current.center,
      point: local.current.point,
      scale: local.current.scale,
    })
  }, 150)

  useEffect(() => {
    local.current.center = runtime.center
  }, [runtime.center])

  useEffect(() => {
    local.current.point = runtime.point
  }, [runtime.point])

  useEffect(() => {
    local.current.scale = runtime.scale
  }, [runtime.scale])

  const animate = useCallback(() => {
    loop.current = null
    render(runtime)
  }, [runtime])

  const shift = useCallback(
    (dx, dy, zoom) => {
      const aspect = runtime.gl.canvas.width / runtime.gl.canvas.height

      const width = local.current.scale * 2
      if (!runtime.moveCenter && !zoom) {
        local.current.point = local.current.point.add(
          cx(-dx * width * aspect, dy * width)
        )
      } else {
        local.current.center = local.current.center.add(
          cx(-dx * width * aspect, dy * width)
        )
      }
    },
    [runtime.gl.canvas.height, runtime.gl.canvas.width, runtime.moveCenter]
  )

  const rescale = useCallback(
    (delta, x, y) => {
      const dx = 0.5 - x
      const dy = 0.5 - y
      if (!runtime.lockCenter) {
        shift(dx * delta, dy * delta, true)
      }
      local.current.scale -= local.current.scale * delta
    },
    [shift, runtime.lockCenter]
  )

  const quickUpdate = useCallback(
    () => {
      runtime.center = local.current.center
      runtime.point = local.current.point
      runtime.scale = local.current.scale

      runtime.gl.uniform2fv(
        runtime.env.uniforms.center,
        local.current.center.to2fv()
      )
      runtime.gl.uniform2fv(
        runtime.env.uniforms.point,
        local.current.point.to2fv()
      )
      runtime.gl.uniform1f(runtime.env.uniforms.scale, local.current.scale)
      update()
      if (!loop.current) {
        loop.current = requestAnimationFrame(animate)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // Stop rendering when these change
      animate,
      runtime.type,
    ]
  )

  useEffect(() => {
    let distance = null
    let pinch = null

    const onDown = e => {
      if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
        return
      }

      local.current.pointers.set(e.pointerId, [e.clientX, e.clientY])
    }

    const onMove = e => {
      if (!local.current.pointers.has(e.pointerId)) {
        return
      }
      const last = local.current.pointers.get(e.pointerId)
      const delta = [e.clientX - last[0], e.clientY - last[1]]
      local.current.pointers.set(e.pointerId, [e.clientX, e.clientY])

      if (local.current.pointers.size > 1) {
        const vals = local.current.pointers.values()
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

        rescale(deltaDistance * 2, ...pinch)
        quickUpdate()
        return
      }

      const dx = delta[0] / window.innerWidth
      const dy = delta[1] / window.innerHeight
      shift(dx, dy)
      quickUpdate()
    }

    const onUp = e => {
      local.current.pointers.clear()
      distance = null
      pinch = null
    }

    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', onUp)

    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', onUp)
    }
  }, [shift, rescale, quickUpdate])

  useEffect(() => {
    const handleWheel = e => {
      if (e.target.tagName !== 'CANVAS') {
        return
      }
      const delta = -e.deltaY / window.innerWidth
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      rescale(delta, x, y)
      quickUpdate()
    }
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [quickUpdate, rescale])
}
