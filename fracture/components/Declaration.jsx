import { useCallback, useLayoutEffect, useRef } from 'react'

const formatArgs = argsdict => {
  const args = Object.keys(argsdict).filter(arg => arg != 'z').sort()
  if (!args.length) {
    return null
  }
  if (args.length === 1) {
    return args[0]
  }
  return `{${args.join(', ')}}`
}
export default function Declaration({ args }) {

  const fargs = formatArgs(args)

  return (
    <>
      F{fargs ? <sub>{fargs}</sub> : null}(z) =
    </>
  )
}
