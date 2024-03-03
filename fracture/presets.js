import { cx } from './decimal'
import { defaultParams } from './default'

const binomialCoef = (n, k) => {
  if (k === 0 || k === n) {
    return 1
  }
  return binomialCoef(n - 1, k - 1) + binomialCoef(n - 1, k)
}

const pascal = (a, b, n, s = 0) => {
  let result = ''
  for (let k = s; k <= n; k++) {
    const coef = binomialCoef(n, k)
    if (coef === 0) {
      continue
    }
    const op1 = `${a}^${n - k}`
    const op2 = `${b}^${k}`
    const op12 = op1 && op2 ? `${op1} * ${op2}` : op1 || op2
    const operand = coef === 1 ? op12 : `${coef} * ${op12}`
    if (result) {
      result = `${operand} + ${result}`
    } else {
      result = operand
    }
  }

  return result
}

const brot = (name, n, extra = {}) => ({
  name,
  params: {
    center: cx(),
    fzc: `z^${n} + c`,
    dfzcdz: `${n} * z^${n - 1}`,
    fZdzdc: `${pascal('Z', 'dz', n, 1)} + dc`,
    ...extra,
  },
})

const julia = (name, n, c, extra = {}) => ({
  name,
  params: {
    ...brot(name, n).params,
    fixed: false,
    point: c,
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
  julia('Julia -0.7 + .27015i', 2, cx(-0.7, 0.27015)),
  julia('Julia 0 + .8i', 2, cx(0, 0.8)),
  julia('Julia 0.355 + .355i', 2, cx(0.355, 0.355)),
  julia('Bijulia -0.371594 + .662412i', 3, cx(-0.371594, 0.662412)),
  julia('Trijulia -0.29053 - 0.450488i', 4, cx(-0.29053, -0.450488), {
    derivative: 12,
  }),
  {
    name: 'Mandelbar',
    params: {
      ...brot('Mandelbar', 2).params,
      fzc: '(~z)^2 + c',
      dfzcdz: '2 * ~z',
      fZdzdc: '~(2 * Z * dz + dz^2) + dc',
    },
  },
  {
    name: 'Burningship',
    params: {
      center: cx(),
      fzc: '|z|^2 + c',
      dfzcdz: '2 * z * |z| * #z',
      fZdzdc: '2 * Z * dz + dz^2 + dc', //?
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
