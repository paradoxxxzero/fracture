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

export const newtonMethod = (z0, F, c, iters = 100, eps = 1e-6) => {
  // F should be in the form of z => z - f(z) / f'(z) (+ c)
  // Use Newton's method to find the root of f(z) = 0
  let z = z0
  let z_1 = cx()
  for (let i = 0; i < iters; i++) {
    let prev_z = z
    z = F(z, c, z_1)
    z_1 = prev_z
    if (z.subtract(z_1).norm2() < eps) {
      return z
    }
  }
}
