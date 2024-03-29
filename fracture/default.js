import { cx } from './decimal'
import './formula'

export const palettes = [
  'yellow_blue',
  'rainbow',
  'red_green',
  'yellow_green',
  'orange_purple',
  'yellow_purple',
  'pink_green',
  'pink_yellow',
]
export const smoothings = ['none', 'log', 'exp', 'distance', 'distance_scaled']
export const varyings = ['z', 'c', 'zc']

export const defaultParams = {
  center: cx(),
  point: cx(),
  scale: 1.2,
  varying: 'c',
  usePerturbation: null, // Auto
  useDerivative: true,
  derivative: 100,
  useDistanceEstimate: false,
  showDerivative: false,
  smoothing: 'log',
  offset: 80,
  velocity: 10,
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
}

export const allParams = Object.keys(defaultParams)
export const compileParams = [
  'f',
  'f_prime_z',
  'f_prime_c',
  'f_perturb',
  'varying',
  'useRoots',
  'convergent',
  'divergent',
  'palette',
  'perturb',
  'useDerivative',
  'showDerivative',
  'useDistanceEstimate',
  'smoothing',
]
export const uniformParams = {
  center: {
    type: '2fv',
    value: v => v.to2fv(),
  },
  point: {
    type: '2fv',
    value: v => v.to2fv(),
  },
  scale: '1f',
  aspect: {
    type: '1f',
    value: (_, rt) => rt.gl.canvas.width / rt.gl.canvas.height,
  },
  transform: {
    type: 'm2fv',
    value: v => v.flat(1),
  },

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
}
