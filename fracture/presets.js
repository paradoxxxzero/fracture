import { cx } from './decimal'
import { defaultParams } from './default'

const rotate = o => [
  [Math.cos(o), -Math.sin(o)],
  [Math.sin(o), Math.cos(o)],
]

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
    const pow = (x, p) => (p === 0 ? '' : p === 1 ? x : `${x}^${p}`)
    const op1 = pow(a, n - k)
    const op2 = pow(b, k)
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
    f: `z^${n} + c`,
    f_prime: `${n} * z^${n - 1} * z'`.replace('^1', ''),
    f_perturb: `${pascal('Z', 'dz', n, 1)} + dc`,
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

const withDefaults = presets =>
  presets.map(({ name, params, subforms }) => ({
    name,
    params: {
      ...defaultParams,
      ...params,
    },
    subforms: subforms ? withDefaults(subforms) : [],
  }))

export const presets = withDefaults([
  {
    ...brot('Mandelbrot', 2, { center: cx(-0.5) }),
    subforms: [
      brot('Bibrot', 3),
      brot('Tribrot', 4),
      brot('Quadribrot', 5),
      brot('Quintibrot', 6),
      brot('Hexibrot', 7),
      brot('Heptibrot', 8),
      brot('Octibrot', 9),
      brot('Nonibrot', 10),
      brot('Decabrot', 11),
    ],
  },
  {
    ...julia('Julia', 2, cx(-0.7, 0.27015)),
    subforms: [
      julia('Julia 0 + .8i', 2, cx(0, 0.8)),
      julia('Julia 0.355 + .355i', 2, cx(0.355, 0.355)),
      julia('Bijulia -0.371594 + .662412i', 3, cx(-0.371594, 0.662412)),
      julia('Trijulia -0.29053 - 0.450488i', 4, cx(-0.29053, -0.450488), {
        derivative: 80,
      }),
    ],
  },
  {
    name: 'Mandelbar',
    params: {
      ...brot('Mandelbar', 2).params,
      f: '~z^2 + c',
      f_prime: "2 * ~z * z'",
      f_perturb: '~(2 * Z * dz + dz^2) + dc',
    },
  },
  {
    name: 'Burningship',
    params: {
      center: cx(0.5, 0.5),
      transform: rotate(Math.PI),
      scale: 1.5,
      f: '<|z.re|, |z.im|>^2 + c',
      f_prime: "2 * z * <|z.re|, |z.im|> * <#z.re#, #z.im#> * z'",
      f_perturb:
        '<2 * dz.re * Z.re + dz.re * dz.re - 2 * Z.im * dz.im - dz.im * dz.im, 2 * ((Z.re * Z.im) |-| (Z.re * dz.im + dz.re * Z.im + dz.re * dz.im))> + dc',
    },
  },
  {
    name: 'Tearbrot',
    params: {
      center: cx(0, 1),
      scale: 4,
      transform: rotate(-Math.PI / 2),
      f: '(z + 1)^2 / c',
      f_prime: "2 * (z + 1) / c * z'",
      usePerturbation: false, // TODO
      showDerivative: true,
      derivative: 80,
    },
  },
  {
    name: 'Moonbrot',
    params: {
      center: cx(),
      scale: 6,
      f: 'c / (z + 1)^2',
      f_prime: "- 2 * c / (z + 1)^3 * z'",
      derivative: 120,
      usePerturbation: false, // TODO
    },
  },
  {
    name: 'Phoenix',
    params: {
      center: cx(),
      point: cx(0.5667),
      scale: 1.5,
      transform: rotate(-Math.PI / 2),
      fixed: false,
      f: 'z^2 + c - 0.5 * z_1',
      useDerivative: false,
      f_prime: "2 * z * z' - 0.5 * z_1 * z_1'",
      f_perturb: '2 * Z * dz + dz^2 + dc - 0.5 * dz_1',
    },
  },
  {
    name: 'Newton',
    params: {
      center: cx(),
      fixed: false,
      f: 'z - (z^3 - 1) / (3 * z^2) + c',
      f_prime: "2(z^3 - 1) * z' / (3 * z^3)",
      f_perturb: '3 * Z^2 * dz + dc',
      useDerivative: false, // TODO
      usePerturbation: false, // TODO
      useRoots: true,
      convergent: true,
      divergent: false,
    },
  },
  {
    name: 'Nova',
    params: {
      center: cx(-0.5),
      point: cx(1),
      f: 'z - (z^3 - 1) / (3 * z^2) + c',
      f_prime: "2(z^3 - 1) * z' / (3 * z^3)",
      f_perturb: '3 * Z^2 * dz + dc',
      roots: [cx(1), cx(-0.5, Math.sqrt(3) / 2), cx(-0.5, -Math.sqrt(3) / 2)],
      useDerivative: false, // TODO
      usePerturbation: false, // TODO
      convergent: true,
      divergent: false,
    },
  },
])
