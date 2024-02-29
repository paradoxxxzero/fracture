import { c } from './decimal'

export const defaultParams = {
  center: c(-0.5),
  scale: 1.2,
  usePerturbation: null, // Auto
  useDerivative: true,
  derivative: 5,
  showDerivative: false,
  bailout: 16 ** 2,
  iterations: 1000,
  supersampling:
    window.devicePixelRatio > 2 ? window.devicePixelRatio / 2 : 1.1,
  fixed: true,
  point: c(0, 0),
  power: 2,
}
