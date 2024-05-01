import { arrayEquals } from '../utils'
import { cx } from './decimal'
import { defaultParams } from './default'
import { ast, derive, vars } from './formula'

export const filterParams = (maybeBadParams, changed = [], oldParams) => {
  const params = {
    ...maybeBadParams,
  }
  const badParams = []
  // Remove bad params
  Object.entries(params).forEach(([key, value]) => {
    if (typeof defaultParams[key] === 'number') {
      if (value === '' || isNaN(value)) {
        delete params[key]
        badParams.push(key)
      }
    } else if (Array.isArray(defaultParams[key])) {
      // arrays of arrays of numbers
      if (Array.isArray(value[0])) {
        if (value.find(c => c.find(d => value === '' || isNaN(d)))) {
          delete params[key]
          badParams.push(key)
        }
      } else {
        // arrays of numbers
        if (value.find(c => value === '' || isNaN(c))) {
          delete params[key]
          badParams.push(key)
        }
      }
    }
  })
  if (changed.includes('f')) {
    const args = vars(ast(params.f)).filter(a => a.length === 1)
    if (!args.includes('z')) {
      args.push('z')
    }
    const currentArguments = Object.keys(params.args)
    if (!arrayEquals(args, currentArguments)) {
      params.args = args.reduce((acc, a) => {
        acc[a] = params.args[a] || cx(1)
        return acc
      }, {})
    }
    if (!changed.includes('f_prime_z') || params.f_prime_z === null) {
      try {
        params.f_prime_z = derive(params.f, ['z', 'z_1']).toString()
      } catch (e) {
        badParams.push('f_prime_z')
        console.warn(e)
      }
    }
    if (!changed.includes('f_prime_c') || params.f_prime_c === null) {
      try {
        params.f_prime_c = derive(params.f, ['z', 'z_1'], ['c']).toString()
      } catch (e) {
        badParams.push('f_prime_c')
        console.warn(e)
      }
    }
  }
  if (changed.includes('convergent') || changed.includes('divergent')) {
    if (!params.convergent && !params.divergent) {
      // params.useDerivative = false
      params.usePerturbation = false
      params.iterations = 1
    }
  }
  if (!params.args.z) {
    params.args.z = cx()
  }
  // if (changed.includes('type')) {
  //   ;[params.center, params.point] = [params.point, params.center]
  // }
  return { params, badParams }
}
