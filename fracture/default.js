import { cx } from './decimal'
import './formula'

export const ambiances = [
  'calm',
  'stormy',
  'surreal',
  'psychedelic',
  'sunset',
  'night',
  'dawn',
  'day',
]
export const smoothings = ['none', 'log', 'exp', 'distance']

export const defaultParams = {
  center: cx(-0.5),
  scale: 1.2,
  usePerturbation: null, // Auto
  useDerivative: true,
  derivative: 50,
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
  fixed: true,
  point: cx(),
  transform: [
    [1, 0],
    [0, 1],
  ],
  f: 'z^2 + c',
  f_prime: "2 * z * z'",
  f_perturb: '2 * Z * dz + dz^2 + dc',
  ambiance: 'calm',
  useRoots: false,
  convergent: false,
  bailin: -6,
  divergent: true,
  bailout: 2.5,
}

export const allParams = Object.keys(defaultParams)
export const compileParams = [
  'f',
  'f_prime',
  'f_perturb',
  'fixed',
  'useRoots',
  'roots',
  'convergent',
  'divergent',
  'ambiance',
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
