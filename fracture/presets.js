import { range } from '../utils'
import { cx } from './decimal'
import { defaultParams } from './default'
import { derive } from './formula'

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
    velocity: 70,
    varying: 'z',
    args: { z: cx(), c },
    ...extra,
  },
})

const newt = (name, f, extra = {}) => ({
  name,
  params: {
    varying: 'z',
    f: `z - ${extra?.args?.a ? 'a * ' : ''}(${f})# + c`,
    iterations: 75,
    useDerivative: false,
    useRoots: true,
    convergent: true,
    divergent: false,
    ...extra,
  },
})

const nova = (name, f, extra = {}) => ({
  name,
  params: {
    args: { z: cx(1), c: cx(-0.5) },
    f: `z - ${extra?.args?.a ? 'a * ' : ''}(${f})# + c`,
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
    iterations: 1,
    varying: 'z',
    palette: 'rainbow',
    divergent: false,
    useDerivative: false,
    usePerturbation: false,
    scale: cx(2.5),
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
      f_prime_z: params.f_prime_z || derive(params.f, ['z', 'z_1']).toString(),
      f_prime_c:
        params.f_prime_c || derive(params.f, ['z', 'z_1'], ['c']).toString(),
    },
    subforms: subforms ? withDefaults(subforms) : [],
  }))

export const presets = withDefaults([
  {
    ...brot('Mandelbrot', 2, { args: { z: cx(), c: cx(-0.5) } }),
    subforms: [
      brot('Minibrot', 2, {
        args: { z: cx(), c: cx(-1.71121, 0.00002) },
        scale: cx(0.00085),
        smoothing: 'distance_scaled',
        velocity: 70,
        saturation: 0,
        lightness: 250,
      }),
      brot('Bibrot', 3),
      brot('Tribrot', 4),
      brot('Quadribrot', 5),
      brot('Quintibrot', 6),
      brot('Hexibrot', 7),
      brot('Heptibrot', 8),
      brot('Octibrot', 9),
      brot('Nonibrot', 10),
      brot('Decabrot', 11),
      brot('Invbibrot', -2, {
        args: { z: cx(10), c: cx() },
        convergent: true,
        scale: cx(3),
        derivative: 250,
      }),
      brot('Invtribrot', -3, {
        args: { z: cx(10), c: cx() },
        convergent: true,
        scale: cx(3),
        derivative: 350,
      }),
      {
        name: 'Mandelbar',
        params: {
          ...brot('Mandelbar', 2).params,
          f: '~z^2 + c',
          f_perturb: '~(2 * Z * dz + dz^2) + dc',
        },
      },
      {
        name: 'Tearbrot',
        params: {
          args: { z: cx(), c: cx(0, 1) },
          scale: cx(4),
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
          scale: cx(6),
          f: 'c / (z + 1)^2',
          derivative: 120,
        },
      },
      {
        name: 'Mothbrot',
        params: {
          scale: cx(1.5),
          f: 'z^2 * (|re(z)| + |im(z)|i)^3 + c',
          derivative: 120,
        },
      },

      {
        name: 'Burningship',
        params: {
          args: { z: cx(), c: cx(0.5, 0.5) },
          transform: rotate(Math.PI),
          derivative: 100,
          scale: cx(1.5),
          f: '(|re(z)| + |im(z)|i)^2 + c',
          f_perturb:
            '(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2 * (diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) * i) + dc',
        },
        subforms: [
          {
            name: 'Miniship',
            params: {
              args: { z: cx(), c: cx(1.85982, 0.004584) },
              transform: rotate(Math.PI),
              derivative: 100,
              smoothing: 'distance_scaled',
              scale: cx(0.008069),
              velocity: 62,
              lightness: 300,
              saturation: 0,
              f: '(|re(z)| + |im(z)|i)^2 + c',
              f_perturb:
                '(2 * re(dz) * re(Z) + re(dz) * re(dz) - 2 * im(Z) * im(dz) - im(dz) * im(dz) + 2i * diffabs((re(Z) * im(Z)), (re(Z) * im(dz) + re(dz) * im(Z) + re(dz) * im(dz)))) + dc',
            },
          },
          {
            name: 'Bird of Prey',
            params: {
              transform: rotate((-3 * Math.PI) / 4),
              derivative: 100,
              scale: cx(1.5),
              f: '(|re(z)| + |im(z)|i)^3 + c',
              f_perturb:
                '(re(Z)^2 - 3 * im(Z)^2) * diffabs(re(Z), re(dz)) + (2 * (re(Z) * re(dz)) + re(dz)^2 - 6 * (im(Z) * im(dz)) - 3 * im(dz)^2) * abs(re(Z) + re(dz)) + i * ((3 * re(Z)^2 - im(Z)^2) * diffabs(im(Z), im(dz)) + (6 * (re(Z) * re(dz)) + 3 * re(dz)^2 - 2 * (im(Z) * im(dz)) - im(dz)^2) * abs(im(Z) + im(dz))) + dc',
            },
          },
          {
            name: 'Buffalo',
            params: {
              transform: rotate(Math.PI),
              f: '(|re(z)| + |im(z)|i)^2 - (|re(z)| + |im(z)|i) + c',
            },
          },
          {
            name: 'Bird',
            params: {
              f: '(re(z) - |im(z)|i)^2 + c',
            },
          },
        ],
      },
      {
        name: 'Magnet',
        params: {
          args: { z: cx(), c: cx(1) },
          scale: cx(3),
          f: '((z^2 + c - 1) / (2z + c - 2))^2',
          useDerivative: false,
          convergent: true,
        },
      },
      {
        name: 'Tetrate',
        params: {
          args: { z: cx(0.5), c: cx(1) },
          scale: cx(3),
          f: 'c^z',
          useDerivative: false,
        },
      },
      {
        name: 'Celtic',
        params: {
          args: { z: cx(), c: cx(-0.7) },
          scale: cx(2),
          f: '|re(z^2)| + i * im(z^2) + c',
          useDerivative: false,
        },
      },
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
      julia('2iJulia', '(2i)', cx(), { useDerivative: false, bailout: 4.1, iterations: 100 }),
      {
        name: 'Phoenix',
        params: {
          args: { z: cx(), c: cx(0.5667) },
          scale: cx(1.5),
          transform: rotate(-Math.PI / 2),
          varying: 'z',
          f: 'z^2 + c - 0.5 * z_1',
          useDerivative: false,
          f_perturb: '2 * Z * dz + dz^2 + dc - 0.5 * dz_1',
        },
      },
      {
        name: 'Frothy',
        params: {
          args: { z: cx(0.5), c: cx(2 + 3e-2, -1e-2) },
          varying: 'z',
          scale: cx(3),
          f: 'z^2 - c*~z',
          f_perturb: 'dz^2 + 2 * dz * Z - C * ~dz - dc * ~Z - dc * ~dz',
        },
      },
      {
        name: 'Whirlpool',
        params: {
          varying: 'z',
          args: { z: cx(), c: cx(2, 0) },
          scale: cx(3),
          f: '(c/z + (im(z)*z - re(z))/c)^2',
        },
      },
    ],
  },
  {
    ...newt('Newton', '(z - r)(z - s)(z - t)', { args: { r: cx(1), s: cx(-.5, -.86603), t: cx(-.5, .86603), a: cx(1), c: cx(), z: cx() } }),
    subforms: [
      newt('Newton', 'z^3 + 1'),
      newt('Newton', 'z^4 - 1'),
      newt('Newton', '(z^4 - b) / (z - d) - e', { args: { b: cx(-1), d: cx(3), e: cx(1), a: cx(1), z: cx(), c: cx() } }),
      newt('Newton', 'z^3 - 2z + 2'),
      newt('Newton', 'z^8 + 15z^4 - 16'),
      newt('Newton', 'z^5 - 3i * z^3 - (5 + 2i) * z^2 + 3z + 1'),
      newt('Newton', 'z^6 + z^3 - 1'),
      newt('Newton', 'z^^3 - 1'),
      newt('Newton', 'sin(z)', { args: { z: cx(Math.PI / 2), c: cx() } }),
      newt('Newton', 'cosh(z) - 1', {
        args: { z: cx(-3.14, -3.14), c: cx() },
      }),
      newt('Newton', 'z^4 * sin(z) - 1'),
      newt('Newton generalized', 'z^3 - 1', {
        divergent: true,
        convergent: false,
        smoothing: 'exp',
        velocity: 750,
        args: { z: cx(), c: cx(), a: cx(-0.5) },
      }),
      newt('Newton generalized', 'z^2 - 1', {
        divergent: true,
        convergent: false,
        smoothing: 'exp',
        velocity: 750,
        bailout: 1.5,
        iterations: 100,
        useRoots: false,
        args: { z: cx(), c: cx(), a: cx(1, 1) },
      }),
      newt('Newton generalized', 'z^(4 + 3i) - 1', {
        args: { z: cx(1, 0.25), c: cx(), a: cx(1.9) },
        scale: cx(0.05),
      }),
    ],
  },
  {
    ...nova('Nova', '(z - r)(z - s)(z - t)', { args: { r: cx(1), s: cx(-.5, -.86603), t: cx(-.5, .86603), a: cx(1), z: cx(1), c: cx(-0.5) } }),
    subforms: [
      nova('Nova', 'z^3 - 1'),
      nova('Nova', 'z^4 - 1'),
      nova('Nova', '(z - 1)(z - 4 + i * sqrt(2))(z + sqrt(3) - i * sqrt(3))', {
        args: { z: cx(1), c: cx() }, scale: cx(2)
      }),
      nova('Nova', 'z^3 - 2z + 2'),
      nova('Nova', 'z^8 + 15z^4 - 16'),
      nova('Nova', 'z^6 + z^3 - 1'),
      nova('Nova', 'z^4 * sin(z) - 1'),
    ],
  },
  {
    ...domain('Domain coloring Polynomial', 'z + c'),
    subforms: [
      domain('z²', 'z^2 + c'),
      domain('', '((z - 1)(z + 1)^2) / ((z + i)(z - i)^2) + c'),
      domain('', '(z^3 - 2 * z + i) / (z^2 + 1) + c'),
      domain('', 'z / 2 + 1 / (2 * z) + c'),
    ],
  },
  {
    ...domain('Domain coloring Trigonometry', 'sin(z) + c', {
      scale: cx(3),
    }),
    subforms: [
      domain('Cos', 'cos(z) + c'),
      domain('Tan', 'tan(z) + c'),
      domain('Acos', 'acos(z) + c'),
      domain('Asin', 'asin(z) + c'),
      domain('Atan', 'atan(z) + c'),
      domain('Cosh', 'cosh(z) + c'),
      domain('Sinh', 'sinh(z) + c'),
      domain('Tanh', 'tanh(z) + c'),
      domain('Acosh', 'acosh(z) + c'),
      domain('Asinh', 'asinh(z) + c'),
      domain('Atanh', 'atanh(z) + c'),
      domain('Cn', 'cn(z, .5) + c'),
      domain('Sn', 'sn(z, .5) + c'),
      domain('Dn', 'dn(z, .5) + c'),
      domain('Cn', 'cn(z, .5) / cos(z) + c'),
      domain('Complete Elliptic Integral of First Kind', 'ellk(z) + c'),
      domain('Incomplet Elliptic Integral of First Kind', 'ellfi(z, .5) + c'),
      domain('Nome', 'nome(z) + c'),
    ],
  },
  {
    ...domain('Domain coloring Transcendental', 'exp(z) + c'),
    subforms: [
      domain('Log', 'log(z) + c'),
      domain('', 'exp(z^-1) + c', { scale: cx(1.5) }),
      domain('', 'exp(-z^2) + c', { scale: cx(1.5), showPolya: true }),
      domain('Square Root', 'sqrt(z) + c'),
      domain('Cubic Root', 'z^(1/3) + c'),
      domain('Complex Exponentiation', 'z^c', {
        args: { z: cx(), c: cx(2.5) },
      }),
      domain('²z', 'z^^2 + c'),
      domain('³z', 'z^^3 + c'),
      domain('⁴z', 'z^^4 + c'),
      domain('Beta', 'beta(z, c)', { args: { z: cx(), c: cx(2) } }),
      domain('Beta First derivative', "beta'(z, c)", {
        args: { z: cx(), c: cx(2) },
      }),
      domain('Gamma', 'gamma(z) + c'),
      domain('Gamma First derivative', "gamma'(z) + c"),
      domain('Eta', 'eta(z) + c'),
      domain('Zeta', 'zeta(z) + c'),
      domain('Zeta First derivative', "zeta'(z) + c"),
      domain('Psi (Digamma)', 'psi(z) + c'),
      // domain('Phi', 'phi(z) + c'),
      domain('Tania', 'tania(z) + c'),
      domain('Atania', 'atania(z) + c'),
      domain('Doya', 'doya(z) + c'),
      domain('Filog', 'filog(z) + c'),
      domain('Tet', 'tet(z) + c'),
      domain('Ate', 'ate(z) + c'),
      domain('Tetra', 'tetra(z, c)', {
        args: { z: cx(0, -1), c: cx() },
        args: { z: cx(), c: cx(2, 2) },
      }),
    ],
  },
  {
    ...domain('Domain coloring Misc', 'fibonacci(z) + c'),
    subforms: [
      domain('Arg', 'arg(z) + c'),
      domain('Norm', 'norm(z) + c'),
      domain('', 'z^-1 + z^-2 + z^-3 + z^-4 + z^-5 + c'),
      domain('', 'z * sin(z^-1) + c'),
      domain('', 'sin(z^-2) + c', { scale: cx(1.5) }),
      domain('', '(z^-18 - z^-1) / (z^-1 - 1) + c'),
      domain('', 'sqrt(1 - z^-2 + z^3) + c'),
      domain('', '((z - 2 - i)^2 * (z^2 - 1)) / (z^2 + 2 + i) + c'),
      domain('', 'z^(2/3 + i) + c'),
      domain('', '(exp(z) - 1) / z^2 + c'),
      domain('', 'cos(z) / z^2 + c'),
      domain('', 'sinh(z) / z^4 + c'),
      domain('', '(1 - cos(z)) / z^2 + c'),
      domain('', 'sin(z) / z + c'),
      domain('', 'z / (exp(z) - 1) + c'),
      domain('', '(z - 1) cos(1 / z) + c'),
      domain('', 'z / i - i / z + c'),
      domain('', 'z^(4z^(3z^(2z^z))) + c'),
      domain(
        'Wilmshurst',
        'im(exp(-i*PI / 4) * z^c) + i * im(exp(i * PI / 4) * (z - 1)^c)',
        { args: { z: cx(), c: cx(4) } }
      ),
      domain(
        '',
        range(1, 21)
          .map(i => `z^${i} / (1 - z^${i})`)
          .join(' + ') + ' + c'
      ),
    ],
  },
])
