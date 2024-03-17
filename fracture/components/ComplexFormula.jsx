import { useCallback, useEffect, useState } from 'react'
import { cx } from '../decimal'
import { ast, functionShader } from '../formula'

export default function ComplexFormula({
  name,
  label,
  togglerName,
  toggler,
  value,
  maxWidth = 50,
  onChange,
  ...props
}) {
  const defaultValue = useCallback(() => `${value}`, [value])

  const [raw, setRaw] = useState(defaultValue)

  useEffect(() => {
    setRaw(defaultValue())
    setValid(true)
  }, [defaultValue, value])

  const [valid, setValid] = useState(true)

  const update = useCallback(
    newRaw => {
      setRaw(newRaw)
      try {
        const params = [
          'z',
          'c',
          'Z',
          'dz',
          'dc',
          'z_prime',
          'z_1',
          'z_1_prime',
          'dz_1',
        ]
        // eslint-disable-next-line no-new-func
        const F = new Function(...params, `return ${ast(newRaw).toComplex()}`)
        const args = params.map(p => cx(Math.random(), Math.random()))
        F(...args)
      } catch (e) {
        if (e instanceof SyntaxError) {
          console.warn('Syntax error in formula', e)
          setValid(false)
          return
        }
        const err = e.toString()
        if (err.includes('is not a function')) {
          const funcName = err
            .match(/(.+) is not a function/)[1]
            .split('.')
            .slice(-1)[0]
            .replace('_prime', "'")
          if (!Object.keys(functionShader).includes(funcName)) {
            console.warn('Unknown function in formula', e)
            setValid(false)
            return
          }
        }

        if (
          err.includes('undeclared identifier') ||
          err.includes('is not defined')
        ) {
          console.warn('Undeclared identifier in formula', e)
          setValid(false)
          return
        }
      }
      setValid(true)
      onChange(name, newRaw)
    },
    [onChange, name]
  )

  const handleChange = event => {
    const raw = event.target.value
    update(raw)
  }

  const handleCheckBoxChange = event => {
    onChange(event.target.name, event.target.checked)
  }

  return (
    <label className={`complex-formula ${valid ? 'valid' : 'invalid'}`}>
      {label && <span className="complex-formula-label">{label}</span>}
      {togglerName && (
        <input
          type="checkbox"
          name={togglerName}
          checked={toggler}
          onChange={handleCheckBoxChange}
        />
      )}
      {(!togglerName || toggler) && (
        <input
          type="text"
          name={name}
          value={raw}
          style={{
            width: `${raw.length + 0.3}ch`,
            maxWidth: `${maxWidth}ch`,
          }}
          onChange={handleChange}
          {...props}
        />
      )}
    </label>
  )
}
