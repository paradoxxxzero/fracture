import { cx } from './decimal'
import './formula'

export const ambiances = ['calm', 'magma', 'blackAndWhite', 'colorful']

export const defaultParams = {
  center: cx(-0.5),
  scale: 1.2,
  usePerturbation: null, // Auto
  useDerivative: true,
  derivative: 50,
  useDistanceEstimate: false,
  showDerivative: false,
  useSmoothing: true,
  smoothing: 50,
  contrast: 50,
  hue: 210,
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
  roots: false,
  convergent: false,
  bailin: -6,
  divergent: true,
  bailout: 2.5,
}
