import { cx } from './decimal'
import './formula'
import { columnMajor, ident } from './matrix'

export const palettes = [
  'yellow_blue',
  'rainbow',
  'red_green',
  'yellow_green',
  'orange_purple',
  'yellow_purple',
  'pink_green',
  'pink_yellow',
  'viridis',
  'plasma',
  'magma',
  'inferno',
  'turbo',
]
export const shadings = [
  'domain_coloring',
  'bail_time',
  'bail_time_log',
  'exponential_map',
  'lyapunov_exponent',
  'distance',
  'distance_scaled',
]
export const varyings = ['z', 'c', 'zc']
export const controls = ['3d', '4d', 'arg']

export const defaultParams = {
  mode: '2d',
  args: { z: cx(), c: cx() },
  scale: cx(1.2),
  varying: 'c',
  move: 'c',
  control: '3d',
  anakata: 10,
  usePerturbation: null, // Auto
  useDerivative: true,
  useCycle: true,
  derivative: 100,
  onlyBailed: true,
  shading: 'bail_time_log',
  offset: 80,
  velocity: 100,
  hue: 0,
  saturation: 100,
  lightness: 100,
  iterations: 1000,
  supersampling:
    window.devicePixelRatio > 2 ? window.devicePixelRatio / 2 : 1.1,
  transform: [
    [1, 0],
    [0, 1],
  ],
  matrix: ident(),
  rotation: 0,
  f: 'z^2 + c',
  f_prime_z: null, // Auto
  f_prime_c: null, // Auto
  f_perturb: null,
  palette: 'yellow_blue',
  useRoots: false,
  convergent: false,
  bailin: -6,
  divergent: true,
  bailout: 2.5,
  showGrid: false,
  gridScale: 100,
  gridLog: false,
  gridWidth: 1,
  showNormGrid: false,
  normShade: false,
  normShadeValue: 70,
  normGridScale: 100,
  normGridLog: true,
  normGridWidth: 1,
  showArgGrid: false,
  argShade: false,
  argShadeValue: 40,
  argGridScale: 200,
  argGridLog: false,
  argGridWidth: 1,
  scaled: false,
  showZeroes: false,
  zeroes: -4,
  showPoles: false,
  poles: 4,
  animate: false,
  speed: 100,
  showPolya: false,
  polya: 15,
  polyaColor: true,
  polyaLightness: 120,
}

export const allParams = Object.keys(defaultParams)
export const compileConstants = {
  palette: rt => palettes.indexOf(rt.palette),
  shading: rt => shadings.indexOf(rt.shading),
  perturb: rt => !!(rt.perturb && rt.f_perturb),
  useDerivative: rt => !!(rt.useDerivative && rt.f_prime_z && rt.f_prime_c),
  convergent: null,
  divergent: null,
  onlyBailed: null,
  useCycle: null,
  useRoots: null,
  showGrid: null,
  showNormGrid: null,
  normShade: null,
  showArgGrid: null,
  argShade: null,
  gridLog: null,
  normGridLog: null,
  argGridLog: null,
  showPoles: null,
  showZeroes: null,
  animate: null,
  scaled: null,
  showPolya: null,
  polyaColor: null,
}
export const compileParams = [
  'f',
  'f_prime_z',
  'f_prime_c',
  'f_perturb',
  'args',
  'varying',
  ...Object.keys(compileConstants),
]
export const uniformParams = {
  scale: {
    type: '2fv',
    value: v => v.to2fv(),
  },
  aspect: {
    type: '2fv',
    value: (_, rt) => [
      rt.gl.canvas.width / rt.gl.canvas.height,
      1 / Math.max(rt.gl.canvas.width, rt.gl.canvas.height),
    ],
  },
  transform: {
    type: 'm2fv',
    value: v => v.flat(1),
  },
  anakata: '1f',

  iterations: '1i',
  maxIterations: {
    type: '2iv',
    value: () => [0, 0],
  },
  orbit: {
    type: '1i',
    value: () => 0,
  },
  bailin: '1f',
  bailout: '1f',
  derivative: '1f',

  offset: {
    type: '1f',
    value: v => v / 25,
  },
  velocity: {
    type: '1f',
    value: v => v / 1000,
  },
  hue: {
    type: '1f',
    value: v => v / 360,
  },
  saturation: {
    type: '1f',
    value: v => v / 100,
  },
  lightness: {
    type: '1f',
    value: v => v / 100,
  },
  gridScale: {
    type: '1f',
    value: v => v / 100,
  },
  gridWidth: '1f',
  normGridScale: {
    type: '1f',
    value: v => v / 100,
  },
  normShadeValue: {
    type: '1f',
    value: v => v / 100,
  },
  normGridWidth: '1f',
  argGridScale: {
    type: '1f',
    value: v => v / 100,
  },
  argShadeValue: {
    type: '1f',
    value: v => v / 100,
  },
  argGridWidth: '1f',
  time: {
    type: '1f',
    value: () => 0,
  },
  speed: {
    type: '1f',
    value: v => v / 1000000,
  },
  zeroes: '1f',
  poles: '1f',
  polya: '1f',
  polyaLightness: {
    type: '1f',
    value: v => v / 100,
  },
  matrix: {
    type: 'm4fv',
    value: v => columnMajor(v),
  },
}
