import { c } from './decimal'
import { defaultParams } from './default'

const binomialCoef = (n, k) => {
  if (k === 0 || k === n) {
    return 1
  }
  return binomialCoef(n - 1, k - 1) + binomialCoef(n - 1, k)
}
const pows = (a, n) => {
  if (n === 0) {
    return ''
  }
  if (n === 1) {
    return a
  }
  return `cpow(${a}, ${n}.0)`
}

const pascal = (a, b, n, s = 0) => {
  let result = ''
  for (let k = s; k <= n; k++) {
    const coef = binomialCoef(n, k)
    if (coef === 0) {
      continue
    }
    const op1 = pows(a, n - k)
    const op2 = pows(b, k)
    const op12 = op1 && op2 ? `cmul(${op1}, ${op2})` : op1 || op2
    const operand = coef === 1 ? op12 : `cmul(${coef}.0, ${op12})`
    if (result) {
      result = `cadd(${operand}, ${result})`
    } else {
      result = operand
    }
  }

  return result
}

const brot = (name, n, extra = {}) => ({
  name,
  params: {
    center: c(),
    fzc: `cadd(${pows('z', n)}, c)`,
    dfzcdz: `cmul(${n}.0, ${pows('z', n - 1)})`,
    fZdzdc: `cadd(${pascal('Z', 'dz', n, 1)}, dc)`,
    ...extra,
  },
})

const julia = (name, n, cst, extra = {}) => ({
  name,
  params: {
    ...brot(name, n).params,
    fixed: false,
    point: cst,
    ...extra,
  },
})

export const presets = [
  brot('Mandelbrot', 2),
  brot('Bibrot', 3),
  brot('Tribrot', 4),
  brot('Quadribrot', 5),
  brot('Quintibrot', 6),
  brot('Hexibrot', 7),
  brot('Heptibrot', 8),
  brot('Octibrot', 9),
  brot('Nonibrot', 10),
  brot('Decabrot', 11),
  julia('Julia -0.7 + .27015i', 2, c(-0.7, 0.27015)),
  julia('Julia 0 + .8i', 2, c(0, 0.8)),
  julia('Julia 0.355 + .355i', 2, c(0.355, 0.355)),
  julia('Bijulia -0.371594 + .662412i', 3, c(-0.371594, 0.662412)),
  julia('Trijulia -0.29053 - 0.450488i', 4, c(-0.29053, -0.450488), {
    derivative: 12,
  }),
  {
    name: 'Mandelbar',
    params: {
      ...brot('Mandelbar', 2).params,
      fzc: `cadd(cpow(conj(z), 2), c)`,
      dfzcdz: 'cmul(2., conj(z))',
      fZdzdc: 'cadd(conj(cadd(cmul(2., cmul(Z, dz)), cpow(dz, 2.))), dc)',
    },
  },
  {
    name: 'Burningship',
    params: {
      center: c(),
      fzc: 'cadd(cpow(cabs(z), 2), c)',
      dfzcdz: 'cmul(2., cabs(z))',
      fZdzdc: 'cadd(cadd(cmul(2., cmul(Z, dz)), cpow(dz, 2.)), dc)',
    },
  },

  // 'multibrot',
  // 'multijulia',
  // 'newton',
  // 'nova',
  // 'phoenix',
  // 'mandelbar',
  // "burning_ship",
  // "tricorn",
  // "celtic",
].map(({ name, params }) => ({
  name,
  params: {
    ...defaultParams,
    ...params,
  },
}))
