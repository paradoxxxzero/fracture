import { useCallback, useEffect, useRef } from 'react'
import { debounce } from '../../utils'
import { render } from '../render'
import { cx } from '../decimal'
import { columnMajor, multiply, rotate } from '../matrix'

export const useInteract = (runtime, updateParams) => {
  const loop = useRef(null)

  const local = useRef({
    args: runtime.args,
    scale: runtime.scale,
    matrix: runtime.matrix,
    anakata: runtime.anakata,
    pointers: new Map(),
  })
  const update = debounce(() => {
    updateParams({
      args: local.current.args,
      scale: local.current.scale,
      matrix: local.current.matrix,
      anakata: local.current.anakata,
    })
  }, 150)

  useEffect(() => {
    local.current.args = { ...runtime.args }
  }, [runtime.args])

  useEffect(() => {
    local.current.scale = runtime.scale
  }, [runtime.scale])

  useEffect(() => {
    local.current.matrix = runtime.matrix
  }, [runtime.matrix])

  useEffect(() => {
    local.current.anakata = runtime.anakata
  }, [runtime.anakata])

  const animate = useCallback(() => {
    loop.current = null
    render(runtime)
  }, [runtime])

  const shift = useCallback(
    (dx, dy, zoom, alt) => {
      if (runtime.dimensions > 2) {
        if (runtime.control === '4d') {
          const pairs = [
            [
              [1, 2],
              [0, 1],
            ],
            [
              [2, 3],
              [0, 3],
            ],
            [
              [1, 3],
              [0, 2],
            ],
          ]
          local.current.matrix = multiply(
            multiply(
              rotate(5 * dx, ...pairs[runtime.rotation][1]),
              rotate(5 * dy, ...pairs[runtime.rotation][0])
            ),
            local.current.matrix
          )
          return
        }
        if (runtime.control === '3d') {
          runtime.env.camera.rotation = multiply(
            runtime.env.camera.rotation,
            multiply(rotate(5 * dx, 0, 2), rotate(-5 * dy, 1, 2))
          )
          runtime.env.camera.update()
          return
        }
      }
      const aspect = runtime.gl.canvas.width / runtime.gl.canvas.height
      const height = local.current.scale.multiply(2)
      const move = zoom ? runtime.varying : runtime.move
      // alt = !alt === (zoom || runtime.moveCenter)
      move.split('').forEach(key => {
        // if (runtime.varying.includes(key) === alt) {
        local.current.args[key] = local.current.args[key].add(
          cx(-dx * aspect, dy).multiply(height)
        )
        // }
      })
    },
    [
      runtime.gl.canvas.height,
      runtime.gl.canvas.width,
      runtime.move,
      runtime.dimensions,
      runtime.control,
      runtime.rotation,
      runtime.varying,
    ]
  )

  const rescale = useCallback(
    (delta, x, y) => {
      const dx = 0.5 - x
      const dy = 0.5 - y
      if (runtime.dimensions < 3) {
        shift(dx * delta, dy * delta, true)
      }
      if (runtime.dimensions > 2) {
        if (runtime.control === '3d') {
          runtime.env.camera.zoom -= delta
          runtime.env.camera.update()
          return
        }
        if (runtime.control === '4d') {
          local.current.anakata += delta
          return
        }
      }

      const scaleDiff = local.current.scale.multiply(delta)
      const scaleDiffStr = scaleDiff.real().toString()
      const leading = scaleDiffStr.match(/^-?0\.(0*)/)
      if (leading && leading[1].length > scaleDiff.real().precision - 16) {
        scaleDiff.real().precision = leading[1].length + 16
      }
      local.current.scale = local.current.scale.subtract(scaleDiff)
    },
    [shift, runtime.dimensions, runtime.control]
  )

  const quickUpdate = useCallback(
    () => {
      runtime.args = local.current.args
      runtime.scale = local.current.scale
      runtime.matrix = local.current.matrix
      runtime.anakata = local.current.anakata

      Object.keys(runtime.args).forEach(key => {
        runtime.gl.uniform2fv(
          runtime.env.uniforms[`arg_${key}`],
          local.current.args[key].to2fv()
        )
      })
      runtime.gl.uniform2fv(
        runtime.env.uniforms.scale,
        local.current.scale.to2fv()
      )

      runtime.gl.uniformMatrix4fv(
        runtime.env.uniforms.matrix,
        false,
        columnMajor(local.current.matrix)
      )
      runtime.gl.uniform1f(runtime.env.uniforms.anakata, local.current.anakata)
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
      if (e.button !== 0 || e.target.id !== 'webgl2') {
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

      let dx =  delta[0] / window.innerWidth
      let dy =  delta[1] / window.innerHeight
      if (e.shiftKey) {
        dx += dy
        dy = 0
      }
      if (e.ctrlKey || e.metaKey) {
        dy += dx
        dx = 0
      }
      if (e.altKey) {
        const avg = (dx + dy) / 2
        dx = avg
        dy = avg
      }

      shift(dx, dy, false)
      quickUpdate()
    }

    const onUp = e => {
      update()
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
      if (e.target.id !== 'webgl2') {
        return
      }
      const delta = -e.deltaY / window.innerWidth
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      rescale(delta, x, y)
      quickUpdate()
      update()
    }
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [quickUpdate, rescale])
}
