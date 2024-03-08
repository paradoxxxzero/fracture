import { cx } from './fracture/decimal'
import { ast } from './fracture/formula'

export const debounce = (fn, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)

    return () => clearTimeout(timeout)
  }
}

export const range = (start, end = null, step = 1, emptyIfReversed = false) => {
  if (end === null) {
    end = start
    start = 0
  }
  if (step === 0) {
    throw new Error('Step cannot be zero.')
  }
  if ((end < start && step > 0) || (end > start && step < 0)) {
    if (emptyIfReversed) {
      return []
    }
    step = -step
  }

  return new Array(Math.ceil((end - start) / step)).fill().map((_, i) => {
    return start + i * step
  })
}

export const arrayEquals = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return a === b
  }
  if (a.length !== b.length) return false
  return a.every((v, i) =>
    Array.isArray(v) ? arrayEquals(v, b[i]) : v === b[i]
  )
}

export const getRoots = (f, c = cx()) => {
  // Use Newton's method to find the roots of f(x)

  // eslint-disable-next-line no-new-func
  const F = new Function('z', 'c', 'z_1', `return ${ast(f).toComplex()}`)
  const bounds = {
    xmin: -2,
    xmax: 2,
    ymin: -2,
    ymax: 2,
  }
  const EPSILON = 1e-6
  const MAX_ITERATIONS = 100
  const tries = 30
  const roots = []

  for (let i = 0; i < tries; i++) {
    for (let j = 0; j < tries; j++) {
      let z = cx(
        bounds.xmin + ((bounds.xmax - bounds.xmin) * i) / tries,
        bounds.ymin + ((bounds.ymax - bounds.ymin) * j) / tries
      )
      let z_1 = cx()
      for (let k = 0; k < MAX_ITERATIONS; k++) {
        let prev_z = z
        try {
          z = F(z, c, z_1)
        } catch (e) {
          break
        }
        z_1 = prev_z
        if (z.subtract(z_1).norm2() < EPSILON) {
          if (
            roots.every(
              (
                z => r =>
                  r.subtract(z).norm2() > EPSILON
              )(z)
            )
          ) {
            roots.push(z)
          }
          break
        }
      }
    }
  }
  return roots
}
