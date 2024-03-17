import { cx } from './decimal'
import { defaultParams, smoothings, palettes } from './default'

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
    f: `z^${n} + c`,
    f_perturb: `${pascal('Z', 'dz', n, 1)} + dc`,
    ...extra,
  },
})

const julia = (name, n, c, extra = {}) => ({
  name,
  params: {
    ...brot(name, n).params,
    derivative: 85,
    velocity: 7,
    varying: 'z',
    point: c,
    ...extra,
  },
})

const newt = (name, f, g, extra = {}) => ({
  name,
  params: {
    varying: 'z',
    f: `z - ${g ? `${g} * ` : ''}(${f})# + c`,
    iterations: 75,
    useDerivative: false,
    useRoots: true,
    convergent: true,
    divergent: false,
    ...extra,
  },
})

const nova = (name, f, g, extra = {}) => ({
  name,
  params: {
    center: cx(1),
    point: cx(-0.5),
    f: `z - ${g ? `${g} * ` : ''}(${f})# + c`,
    useDerivative: false,
    convergent: true,
    divergent: false,
    ...extra,
  },
})

const domain = (name, f, extra = {}) => ({
  name,
  params: {
    f,
    varying: 'z',
    palette: 'rainbow',
    divergent: false,
    useDerivative: true,
    showDerivative: true,
    scale: 2.5,
    ...extra,
  },
})

const withDefaults = presets =>
  presets.map(({ name, params, subforms }) => ({
    name,
    params: {
      ...defaultParams,
      f_perturb: null,
      ...params,
    },
    subforms: subforms ? withDefaults(subforms) : [],
  }))

export const presets = withDefaults([
  {
    ...brot('Mandelbrot', 2, { point: cx(-0.5) }),
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
    ...julia('Julia 0 + .8i', 2, cx(0, 0.8)),
    subforms: [
      julia('Julia -.7 + .27015', 2, cx(-0.7, 0.27015)),
      julia('Julia .355 + .355i', 2, cx(0.355, 0.355)),
      julia('Bijulia -.371594 + .662412i', 3, cx(-0.371594, 0.662412)),
      julia('Trijulia -.29053 - .450488i', 4, cx(-0.29053, -0.450488), {
        derivative: 175,
      }),
    ],
  },
  {
    name: 'Mandelbar',
    params: {
      ...brot('Mandelbar', 2).params,
      f: '~z^2 + c',
      f_perturb: '~(2 * Z * dz + dz^2) + dc',
    },
  },
  {
    name: 'Burningship',
    params: {
      point: cx(0.5, 0.5),
      transform: rotate(Math.PI),
      derivative: 100,
      scale: 1.5,
      f: '(|re(z)| + |im(z)|i)^2 + c',
      f_perturb:
        '(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2 * ((re(Z) * im(Z)) |-| (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz))) * i) + dc',
    },
  },
  {
    name: 'Tearbrot',
    params: {
      point: cx(0, 1),
      scale: 4,
      transform: rotate(-Math.PI / 2),
      f: '(z + 1)^2 / c',
      showDerivative: true,
      derivative: 80,
      f_perturb:
        '(C * dz^2 + 2 * C * dz * Z + 2 * C * dz - dc * Z^2 - 2 * dc * Z - dc) / (C * (C + dc))',
    },
  },
  {
    name: 'Moonbrot',
    params: {
      scale: 6,
      f: 'c / (z + 1)^2',
      derivative: 120,
    },
  },
  {
    name: 'Phoenix',
    params: {
      point: cx(0.5667),
      scale: 1.5,
      transform: rotate(-Math.PI / 2),
      varying: 'z',
      f: 'z^2 + c - 0.5 * z_1',
      useDerivative: false,
      f_perturb: '2 * Z * dz + dz^2 + dc - 0.5 * dz_1',
    },
  },
  {
    ...newt('Newton', 'z^3 - 1'),
    subforms: [
      newt('Newton', 'z^4 - 1'),
      newt('Newton', 'z^3 - 2z + 2'),
      newt('Newton', 'z^8 + 15z^4 - 16'),
      newt('Newton', 'z^5 - 3i * z^3 - (5 + 2i) * z^2 + 3z + 1'),
      newt('Newton', 'z^6 + z^3 - 1'),
      newt('Newton', 'z^^3 - 1'),
      newt('Newton', 'sin(z)', null, { center: cx(Math.PI / 2) }),
      newt('Newton', 'cosh(z) - 1'),
      newt('Newton', 'z^4 * sin(z) - 1'),
      newt('Newton generalized', 'z^3 - 1', -0.5, {
        divergent: true,
        convergent: false,
        smoothing: 'exp',
        velocity: 75,
      }),
      newt('Newton generalized', 'z^2 - 1', '(1 + i)', {
        divergent: true,
        convergent: false,
        smoothing: 'exp',
        velocity: 75,
        bailout: 1.5,
        iterations: 100,
        useRoots: false,
      }),
      newt('Newton generalized', 'z^(4 + 3i) - 1', 2, {
        center: cx(1, 0.25),
        scale: 0.05,
      }),
    ],
  },
  {
    ...nova('Nova', 'z^3 - 1'),
    subforms: [
      nova('Nova', 'z^4 - 1'),
      nova('Nova', 'z^3 - 2z + 2'),
      nova('Nova', 'z^8 + 15z^4 - 16'),
      nova('Nova', 'z^6 + z^3 - 1'),
      nova('Nova', 'z^4 * sin(z) - 1'),
    ],
  },
  {
    name: 'Frothy',
    params: {
      center: cx(0.5, 0),
      point: cx(2 + 3e-2, -1e-2),
      varying: 'z',
      scale: 3,
      f: 'z^2 - c*~z',
      f_perturb: 'dz^2 + 2 * dz * Z - C * ~dz - dc * ~Z - dc * ~dz',
    },
  },
  {
    name: 'Magnet',
    params: {
      point: cx(1),
      scale: 3,
      f: '((z^2 + c - 1) / (2z + c - 2))^2',
      useDerivative: false,
      convergent: true,
    },
  },
  {
    name: 'Tetrate',
    params: {
      center: cx(0.5),
      point: cx(1),
      scale: 3,
      f: 'c^z',
      useDerivative: false,
    },
  },
  {
    name: 'Celtic',
    params: {
      point: cx(-0.7),
      scale: 2,
      f: '|re(z^2)| + i * im(z^2) + c',
      useDerivative: false,
    },
  },
  {
    ...domain('Domain coloring', 'z + c'),
    subforms: [
      domain('Domain coloring', 'z^2 + c'),
      domain('Domain coloring', 'sin(z) + c', { scale: 3 }),
      domain('Domain coloring', 'tan(z) + c'),
      domain('Domain coloring', '(z^3 - 2 * z + i) / (z^2 + 1) + c'),
      domain('Domain coloring', 'gamma(z) + c'),
      domain('Domain coloring', 'zeta(z) + c'),
      domain('Domain coloring', 'cn(z, .5) + c'),
      domain('Domain coloring', 'sn(z, .5) + c'),
      domain('Domain coloring', 'dn(z, .5) + c'),
      domain('Domain coloring', 'z^^3 + c'),
    ],
  },
])
