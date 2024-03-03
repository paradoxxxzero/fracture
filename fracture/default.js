import { cx } from './decimal'
import './formula'

export const defaultParams = {
  center: cx(-0.5),
  scale: 1.2,
  usePerturbation: null, // Auto
  useDerivative: true,
  derivative: 5,
  showDerivative: false,
  useSmoothing: true,
  smoothing: 50,
  bailout: 16 ** 2,
  contrast: 50,
  hue: 210,
  iterations: 1000,
  supersampling:
    window.devicePixelRatio > 2 ? window.devicePixelRatio / 2 : 1.1,
  fixed: true,
  point: cx(0, 0),
  fzc: 'z^2 + c',
  dfzcdz: '2 * z',
  fZdzdc: '2 * Z * dz + dz^2 + dc',
}
