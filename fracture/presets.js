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
    showGrid: false,
    showNormGrid: false,
    showArgGrid: false,
    normShade: false,
    argShade: false,
    showZeroes: false,
    showPoles: false,
    onlyBailed: true,
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
    useCycle: false,
    useRoots: true,
    convergent: true,
    divergent: false,
    showGrid: false,
    showNormGrid: false,
    showArgGrid: false,
    normShade: false,
    argShade: false,
    showZeroes: false,
    showPoles: false,
    onlyBailed: true,
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
    showGrid: false,
    showNormGrid: false,
    showArgGrid: false,
    normShade: false,
    argShade: false,
    showZeroes: false,
    showPoles: false,
    onlyBailed: true,
    ...extra,
  },
})

// Escape time fractal of an arbitrary map (no perturbation, no derivative)
const escape = (name, f, extra = {}) => ({
  name,
  params: {
    ...brot(name, 2).params,
    f,
    f_perturb: null,
    useDerivative: false,
    ...extra,
  },
})

// Higher order root finding iterations built with the derivative operator: (f)' and (f)''
const rootFinding = (method, name, f, extra = {}) => {
  const d1 = `(${f})'`
  const d2 = `(${f})''`
  const formulas = {
    halley: `z - 2 * (${f}) * ${d1} / (2 * (${d1})^2 - (${f}) * ${d2})`,
    schroder: `z - (${f}) * ${d1} / ((${d1})^2 - (${f}) * ${d2})`,
    // Two steps method, uses the previous iterate z_1
    secant: `z - (${f}) * (z - z_1) / ((${f}) - (${f.replace(/\bz\b/g, 'z_1')}))`,
  }
  return {
    name,
    params: { ...newt(name, f, extra).params, f: `${formulas[method]} + c` },
  }
}

// Fractals defined by the digits of z in a base: z -> base * frac(z) - digit, escaping
// where the (integer) digits of the pair (re z, im z) satisfy a condition
const digits = (name, base, condition, extra = {}) => {
  const d = `floor(${base} * frac(z))`
  const isOne = part => `(1 - |${part}(${d}) - 1|)`
  const conditions = {
    both: `${isOne('re')} * ${isOne('im')}`,
    either: `(${isOne('re')} + ${isOne('im')} - ${isOne('re')} * ${isOne('im')})`,
    neither: `(1 - ${isOne('re')}) * (1 - ${isOne('im')})`,
    xor2: `re(${d}) * im(${d})`,
  }
  return {
    name,
    params: {
      args: { z: cx(0.5, 0.5), c: cx(base) },
      scale: cx(0.55),
      varying: 'z',
      // Anything outside of the unit square escapes at once (no periodic tiling)
      f: `c * frac(z) - ${d} + 1000 * (${conditions[condition]} + |re(floor(z))| + |im(floor(z))|)`,
      shading: 'bail_time',
      palette: 'turbo',
      offset: 0,
      velocity: 200,
      iterations: 100,
      useDerivative: false,
      useCycle: false,
      onlyBailed: true,
      ...extra,
    },
  }
}

const domain = (name, f, extra = {}) => ({
  name,
  params: {
    f,
    shading: 'domain_coloring',
    offset: 0,
    iterations: 1,
    varying: 'z',
    palette: 'rainbow',
    divergent: false,
    useDerivative: false,
    useCycle: false,
    usePerturbation: false,
    onlyBailed: false,
    showGrid: true,
    gridScale: 100,
    gridLog: false,
    gridWidth: 1,
    showNormGrid: true,
    normShade: true,
    normShadeValue: 70,
    normGridScale: 100,
    normGridLog: true,
    normGridWidth: 1,
    showArgGrid: true,
    argShade: true,
    argShadeValue: 40,
    argGridScale: 200,
    argGridLog: false,
    argGridWidth: 1,
    scaled: false,
    showZeroes: true,
    showPoles: true,
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
        shading: 'distance_scaled',
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
        divergent: false,
        shading: 'lyapunov_exponent',
        iterations: 250,
        useDerivative: false,
        useCycle: false,
        offset: 25,
        onlyBailed: false,
        scale: cx(3),
      }),
      brot('Invtribrot', -3, {
        args: { z: cx(10), c: cx() },
        divergent: false,
        shading: 'lyapunov_exponent',
        iterations: 250,
        useDerivative: false,
        useCycle: false,
        offset: 140,
        onlyBailed: false,
        palette: 'red_green',
        scale: cx(3),
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
          bailed: true,
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
              shading: 'distance_scaled',
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
      escape('Heart', '(|re(z)| + im(z)i)^2 + c', {
        args: { z: cx(), c: cx(-0.6) },
        scale: cx(1.6),
      }),
      escape('Perpendicular Burning Ship', '(|re(z)| - im(z)i)^2 + c', {
        args: { z: cx(), c: cx(-0.1) },
        scale: cx(2.2),
      }),
      escape('Fractional Multibrot', 'z^(5/2) + c', {
        args: { z: cx(), c: cx() },
        scale: cx(1.6),
      }),
      escape('Lambda', 'c * z * (1 - z)', {
        args: { z: cx(0.5), c: cx(2) },
        scale: cx(3.5),
      }),
      escape('Manowar', 'z^2 + z_1 + c', {
        args: { z: cx(), c: cx(-0.2) },
        scale: cx(0.9),
      }),
      escape('Phoenix Mandelbrot', 'z^2 + re(c) + im(c) * z_1', {
        args: { z: cx(), c: cx() },
        scale: cx(2),
      }),
      escape(
        'Magnet II',
        '((z^3 + 3(c - 1)z + (c - 1)(c - 2)) / (3z^2 + 3(c - 2)z + (c - 1)(c - 2) + 1))^2',
        {
          args: { z: cx(), c: cx(2) },
          scale: cx(2.2),
          convergent: true,
        }
      ),
      escape('Exponential', 'c * exp(z)', {
        args: { z: cx(), c: cx(0.3) },
        scale: cx(2.5),
      }),
      escape('Sine', 'c * sin(z)', {
        args: { z: cx(Math.PI / 2), c: cx() },
        scale: cx(3),
      }),
      escape('Cosine', 'c * cos(z)', {
        args: { z: cx(), c: cx() },
        scale: cx(3),
      }),
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
      julia('2iJulia', '(2i)', cx(), {
        useDerivative: false,
        bailout: 4.1,
        iterations: 100,
      }),
      {
        name: 'Collatz',
        params: {
          args: { z: cx(), c: cx() },
          scale: cx(2),
          f: 'z/2+(z/2+1/4)(1-exp(z*i*PI))+ c',
          varying: 'z',
          shading: 'lyapunov_exponent',
          onlyBailed: false,
          useDerivative: false,
          divergent: false,
        },
      },
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
        name: 'Floral',
        params: {
          args: { z: cx(-0.24, 0.13), c: cx(-0.348, -0.58) },
          scale: cx(3),
          varying: 'z',
          f: 'sin(z^-2) + c',
          iterations: 300,
          palette: 'yellow_green',
          lightness: 180,
          velocity: 40,
          bailout: 3,
          useDerivative: false,
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
      {
        name: 'Smokey',
        params: {
          varying: 'z',
          args: { z: cx(53.95, 211.7435), c: cx(-1.247, -0.9564) },
          scale: cx(395),
          iterations: 50,
          divergent: false,
          onlyBailed: false,
          palette: 'viridis',
          cycle: false,
          derivative: false,
          offset: 0,
          shading: 'lyapunov_exponent',
          f: 'faddeeva(z) + c',
        },
      },
      julia('Dendrite', 2, cx(0, 1)),
      julia('Douady Rabbit', 2, cx(-0.123, 0.745)),
      julia('Siegel Disk', 2, cx(-0.391, -0.587)),
      julia('Airplane', 2, cx(-1.755, 0), { scale: cx(2) }),
      julia('San Marco', 2, cx(-0.75, 0), { scale: cx(1.8) }),
      julia('Cauliflower', 2, cx(0.25, 0), { scale: cx(1.8) }),
      julia('Dragon', 2, cx(-0.8, 0.156)),
      julia('Spiral', 2, cx(-0.7269, 0.1889)),
      escape('Sine Julia', 'c * sin(z)', {
        args: { z: cx(), c: cx(1, 1) },
        varying: 'z',
        scale: cx(5),
      }),
      escape('Heart Julia', '(|re(z)| + im(z)i)^2 + c', {
        args: { z: cx(), c: cx(-0.8, 0.1) },
        varying: 'z',
        scale: cx(1.5),
      }),
      escape('Celtic Julia', '|re(z^2)| + i * im(z^2) + c', {
        args: { z: cx(), c: cx(-0.7, 0.2) },
        varying: 'z',
        scale: cx(2),
      }),
      escape('Burning Ship Julia', '(|re(z)| + |im(z)|i)^2 + c', {
        args: { z: cx(), c: cx(-1.755, -0.04) },
        varying: 'z',
        scale: cx(2),
      }),
      escape('Hénon basin', '1 - re(c) * re(z)^2 + im(z) + i * im(c) * re(z)', {
        args: { z: cx(), c: cx(1.4, 0.3) },
        varying: 'z',
        scale: cx(3),
        iterations: 100,
        shading: 'bail_time',
        palette: 'turbo',
        offset: 0,
        velocity: 200,
      }),
    ],
  },
  {
    ...newt('Newton', '(z - r)(z - s)(z - t)', {
      args: {
        r: cx(1),
        s: cx(-0.5, -0.86603),
        t: cx(-0.5, 0.86603),
        a: cx(1),
        c: cx(),
        z: cx(),
      },
    }),
    subforms: [
      newt('Newton', 'z^3 + 1'),
      newt('Newton', 'z^4 - 1'),
      newt('Newton', '(z^4 - b) / (z - d) - e', {
        args: { b: cx(-1), d: cx(3), e: cx(1), a: cx(1), z: cx(), c: cx() },
      }),
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
        divergent: false,
        convergent: false,
        offset: 100,
        velocity: 150,
        shading: 'lyapunov_exponent',
        onlyBailed: false,
        useRoots: false,
        args: { z: cx(), c: cx(), a: cx(-0.5) },
      }),
      newt('Newton generalized', 'z^4 - 1', {
        divergent: false,
        convergent: false,
        velocity: 150,
        shading: 'lyapunov_exponent',
        onlyBailed: false,
        useRoots: false,
        args: { z: cx(), c: cx(), a: cx(0.03357, -0.4829) },
        scale: cx(1.5),
        palette: 'red_green',
        offset: 220,
      }),
      newt('Newton generalized', 'z^2 - 1', {
        divergent: false,
        convergent: false,
        offset: 100,
        velocity: 150,
        shading: 'lyapunov_exponent',
        onlyBailed: false,
        iterations: 100,
        useRoots: false,
        args: { z: cx(), c: cx(), a: cx(1, 1) },
      }),
      newt('Newton generalized', 'z^(4 + 3i) - 1', {
        args: { z: cx(1, 0.25), c: cx(), a: cx(1.9) },
        scale: cx(0.05),
      }),
      newt('Newton', 'z^5 - 1'),
      newt('Newton', 'z^7 - 1'),
      newt('Newton', 'z^3 - z', { scale: cx(2.5) }),
      newt('Newton', 'z^z - 1', { scale: cx(3) }),
      newt('Newton', 'besselj(z, 0)', {
        args: { z: cx(), c: cx() },
        scale: cx(10),
      }),
      rootFinding('halley', 'Halley', 'z^3 - 1', { scale: cx(2) }),
      rootFinding('halley', 'Halley', 'z^5 - 1', { scale: cx(2) }),
      rootFinding('halley', 'Halley', 'sin(z)', {
        args: { z: cx(Math.PI / 2), c: cx() },
        scale: cx(3),
      }),
      rootFinding('schroder', 'Schroder', 'z^3 - 1'),
      rootFinding('schroder', 'Schroder', 'z^4 - 1'),
      rootFinding('secant', 'Secant', 'z^3 - 1'),
      rootFinding('secant', 'Secant', 'z^5 - 1'),
    ],
  },
  {
    ...nova('Nova', '(z - r)(z - s)(z - t)', {
      args: {
        r: cx(1),
        s: cx(-0.5, -0.86603),
        t: cx(-0.5, 0.86603),
        a: cx(1),
        z: cx(1),
        c: cx(-0.5),
      },
    }),
    subforms: [
      nova('Nova', 'z^3 - 1', {
        shading: 'lyapunov_exponent',
        convergent: false,
        divergent: false,
        onlyBailed: false,
        useCycle: false,
        iterations: 100,
      }),
      nova('Nova', 'z^4 - 1'),
      nova('Nova', '(z - 1)(z - 4 + i * sqrt(2))(z + sqrt(3) - i * sqrt(3))', {
        args: { z: cx(1), c: cx() },
        scale: cx(2),
      }),
      nova('Nova', 'z^3 - 2z + 2'),
      nova('Nova', 'z^8 + 15z^4 - 16'),
      nova('Nova', 'z^6 + z^3 - 1'),
      nova('Nova', 'z^4 * sin(z) - 1'),
      nova('Nova', 'z^5 - 1'),
      nova('Nova', 'z^3 - z'),
    ],
  },
  {
    ...digits('Sierpinski Triangle', 2, 'xor2'),
    subforms: [
      digits('Sierpinski Carpet', 3, 'both'),
      digits('Cantor Dust', 3, 'either'),
      digits('Vicsek', 3, 'neither'),
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
      domain('Logarithm', 'log(z) + c'),
      domain('Exponential Inverse', 'exp(z^-1) + c', { scale: cx(1.5) }),
      domain('Exponential Square Inverse', 'exp(-z^2) + c', {
        scale: cx(1.5),
        showPolya: true,
      }),
      domain('Square Root', 'sqrt(z) + c'),
      domain('Cubic Root', 'z^(1/3) + c'),
      domain('Complex Exponentiation', 'z^c', {
        args: { z: cx(), c: cx(2.5) },
      }),
      domain('²z', 'z^^2 + c'),
      domain('³z', 'z^^3 + c'),
      domain('⁴z', 'z^^4 + c'),
      domain('Exponential Integral', 'expint(z) + c'),
      domain('Logarithm Integral', 'lint(z) + c'),
      domain('Error Function', 'erf(z) + c'),
      domain('Faddeeva', 'faddeeva(z) + c'),
      domain('Error Function Complementary', 'erfc(z) + c'),
      domain('Error Function Scaled Complementary', 'erfcx(z) + c'),
      domain('Error Function Imaginary', 'erfi(z) + c'),
      domain('Fresnel Cosine', 'fresnelc(z) + c'),
      domain('Fresnel Sine', 'fresnels(z) + c'),
      domain('Fresnel Auxiliary F', 'fresnelf(z) + c'),
      domain('Fresnel Auxiliary G', 'fresnelg(z) + c'),
      domain('Dawson', 'dawson(z) + c'),
      domain('Lambert W', 'lambertw(z, k) + c', {
        args: { z: cx(0), k: cx(0), c: cx(0) },
      }),
      domain('Lambert Omega', 'omega(z) + c'),
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
      domain('Polygamma', 'polygamma(z, w) + c', {
        args: { z: cx(1), w: cx(1), c: cx() },
      }),
      // domain('Phi', 'phi(z) + c'),
      // domain('Xi', 'xi(z) + c'),
      domain('Tania', 'tania(z) + c'),
      domain('Atania', 'atania(z) + c'),
      domain('Doya', 'doya(z) + c'),
      domain('Filog', 'filog(z) + c'),
      domain('Tet', 'tet(z) + c'),
      domain('Ate', 'ate(z) + c'),
      domain('Tetra', 'tetra(z, c)', {
        args: { z: cx(0), c: cx(2, 2) },
      }),
    ],
  },
  {
    ...domain('Domain coloring Theta & Modular', 'theta3(z, c)', {
      args: { z: cx(), c: cx(0.3, 0.2) },
      scale: cx(3),
    }),
    subforms: [
      domain('Theta 1', 'theta1(z, c)', {
        args: { z: cx(), c: cx(0.3, 0.2) },
        scale: cx(3),
      }),
      domain('Theta 2', 'theta2(z, c)', {
        args: { z: cx(), c: cx(0.3, 0.2) },
        scale: cx(3),
      }),
      domain('Theta 3', 'theta3(z, c)', {
        args: { z: cx(), c: cx(0.3, 0.2) },
        scale: cx(3),
      }),
      domain('Theta 4', 'theta4(z, c)', {
        args: { z: cx(), c: cx(0.3, 0.2) },
        scale: cx(3),
      }),
      domain('Theta 3 (nome)', 'theta3(0, z) + c', { scale: cx(1.1), c: cx() }),
      domain('Euler Function', 'eulerq(z) + c', { scale: cx(1.1), c: cx() }),
      domain('q-Pochhammer', 'qpoch(c, z)', {
        args: { z: cx(), c: cx(0.5, 0.2) },
        scale: cx(1.1),
      }),
      domain('Dedekind Eta', 'dedekind(z) + c', {
        args: { z: cx(0, 1), c: cx() },
        scale: cx(1.5),
      }),
      domain('Eisenstein E4', 'eisenstein4(z) + c', {
        args: { z: cx(0, 1), c: cx() },
        scale: cx(1.5),
      }),
      domain('Eisenstein E6', 'eisenstein6(z) + c', {
        args: { z: cx(0, 1), c: cx() },
        scale: cx(1.5),
      }),
      domain('Klein j-invariant', 'kleinj(z) + c', {
        args: { z: cx(0, 1), c: cx() },
        scale: cx(1.5),
      }),
      domain('Modular Lambda', 'modlambda(z) + c', {
        args: { z: cx(0, 1), c: cx() },
        scale: cx(1.5),
      }),
      domain('Weierstrass on a lattice (1, c)', 'wp(z, c)', {
        args: { z: cx(), c: cx(0.2, 1) },
        scale: cx(1.5),
      }),
      domain('Complete Elliptic Integral of Second Kind', 'ellke(z) + c'),
    ],
  },
  {
    ...domain('Domain coloring Bessel & Hypergeometric', 'besselj(z, c)', {
      args: { z: cx(), c: cx(1) },
      scale: cx(10),
    }),
    subforms: [
      domain('Bessel J', 'besselj(z, c)', {
        args: { z: cx(), c: cx(1) },
        scale: cx(10),
      }),
      domain('Bessel Y', 'bessely(z, c)', {
        args: { z: cx(), c: cx(1) },
        scale: cx(10),
      }),
      domain('Hankel H1', 'besselh1(z, c)', {
        args: { z: cx(), c: cx(1) },
        scale: cx(10),
      }),
      domain('Hankel H2', 'besselh2(z, c)', {
        args: { z: cx(), c: cx(1) },
        scale: cx(10),
      }),
      domain('Modified Bessel I', 'besseli(z, c)', {
        args: { z: cx(), c: cx(1) },
        scale: cx(10),
      }),
      domain('Modified Bessel K', 'besselk(z, c)', {
        args: { z: cx(), c: cx(1) },
        scale: cx(10),
      }),
      domain('Airy Ai', 'airyai(z) + c', { scale: cx(8) }),
      domain('Airy Bi', 'airybi(z) + c', { scale: cx(8) }),
      domain('Hypergeometric 2F1', 'hyp2f1(a, b, c, z)', {
        args: { z: cx(), a: cx(0.5), b: cx(0.5), c: cx(1) },
        scale: cx(3),
      }),
      domain('Kummer 1F1', 'hyp1f1(a, c, z)', {
        args: { z: cx(), a: cx(1), c: cx(2) },
        scale: cx(8),
      }),
      domain('Hypergeometric 0F1', 'hyp0f1(c, z)', {
        args: { z: cx(), c: cx(1.5) },
        scale: cx(8),
      }),
      domain('Legendre P', 'legendre(z, c)', {
        args: { z: cx(), c: cx(2.5) },
        scale: cx(3),
      }),
      domain('Chebyshev T', 'chebyshevt(z, c)', {
        args: { z: cx(), c: cx(3.5) },
        scale: cx(3),
      }),
      domain('Chebyshev U', 'chebyshevu(z, c)', {
        args: { z: cx(), c: cx(3.5) },
        scale: cx(3),
      }),
      domain('Laguerre', 'laguerre(z, c)', {
        args: { z: cx(), c: cx(2.5) },
        scale: cx(8),
      }),
      domain('Hermite', 'hermite(z, c)', {
        args: { z: cx(), c: cx(2.5) },
        scale: cx(3),
      }),
      domain('Sine Integral', 'sinint(z) + c'),
      domain('Cosine Integral', 'cosint(z) + c'),
      domain('Hyperbolic Sine Integral', 'sinhint(z) + c'),
      domain('Hyperbolic Cosine Integral', 'coshint(z) + c'),
      domain('Lower Incomplete Gamma', 'gammal(c, z)', {
        args: { z: cx(), c: cx(2.5) },
        scale: cx(6),
      }),
      domain('Upper Incomplete Gamma', 'gammau(c, z)', {
        args: { z: cx(), c: cx(2.5) },
        scale: cx(6),
      }),
      domain('Log Gamma', 'lgamma(z) + c', { scale: cx(6) }),
      domain('Reciprocal Gamma', 'rgamma(z) + c', { scale: cx(6) }),
      domain('Trigamma', "psi'(z) + c", { scale: cx(6) }),
      domain('Riemann-Siegel Z', 'riemannz(z) + c', {
        args: { z: cx(25, 0), c: cx() },
        scale: cx(25),
      }),
      domain('Dirichlet Beta', 'dirichletbeta(z) + c', { scale: cx(8) }),
      domain('Dirichlet L (mod 3)', 'dirichletl3(z) + c', { scale: cx(8) }),
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
      domain('Weierstrass Elliptic', 'weierstrass(z) + c'),
      domain('Weierstrass', 'weierstrassr(z, c)', {
        args: { z: cx(), c: cx(0.9, 1.12) },
        scale: cx(0.35),
      }),
      domain(
        'Wilmshurst',
        'im(exp(-i*PI / 4) * z^c) + i * im(exp(i * PI / 4) * (z - 1)^c)',
        { args: { z: cx(), c: cx(4) } }
      ),
      domain('', 'sum(n, 1, 20, z^n / (c - z^n))', {
        args: { z: cx(), c: cx(1) },
      }),
      domain('', 'product(n, 1, 20, (c - z^n))', {
        args: { z: cx(), c: cx(1) },
      }),
    ],
  },
])
