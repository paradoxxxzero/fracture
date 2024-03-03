import { useCallback, useEffect, useState } from 'react'
import { m } from '../decimal'

export const parse = (raw, min, max, step, decimal) => {
  let valid = true
  let value = 0

  if (decimal) {
    try {
      value = m(raw)
      raw = value.toString()
    } catch (e) {
      valid = false
    }
  } else {
    const float = parseInt(step) !== parseFloat(step)
    if (float) {
      value = raw === '' ? '' : parseFloat(raw)
    } else {
      value = raw === '' ? '' : parseInt(raw)
    }

    valid = !(
      value === '' ||
      isNaN(value) ||
      value < min ||
      value > max ||
      (step % 1 === 0 && value % step !== 0) ||
      // Consider x.  as invalid to prevent auto deletion
      (step % 1 !== 0 && raw.endsWith('.')) ||
      (min < 0 && raw === '-0')
    )
  }

  return {
    valid,
    raw,
    value,
  }
}

export default function Number({
  name,
  label,
  min = 0,
  max = Infinity,
  step = 1,
  value,
  toggler,
  maxWidth = 5,
  togglerName,
  noPlusMinus,
  decimal,
  onChange,
  ...props
}) {
  const defaultValue = useCallback(() => `${value}`, [value])

  const [raw, setRaw] = useState(defaultValue)

  useEffect(() => {
    setRaw(defaultValue())
  }, [defaultValue, value])

  const [valid, setValid] = useState(true)

  const update = useCallback(
    (newRaw, input = false) => {
      const parsed = parse(newRaw, min, max, step, decimal)
      setRaw(parsed.raw)
      setValid(parsed.valid)
      if (parsed.valid) {
        onChange(name, parsed.value)
      }
    },
    [max, min, name, decimal, onChange, step]
  )

  const handleMinus = useCallback(() => {
    if (!valid) {
      update(`${min}`)
      return
    }
    if (raw === `${min}`) {
      // pass
    } else {
      const val =
        (parseInt(step) === parseFloat(step)
          ? parseInt(raw)
          : parseFloat(raw)) - step
      if (step > 0 && step < 1) {
        update(val.toFixed(step.toString().split('.')[1].length))
      } else {
        update(val.toString())
      }
    }
  }, [min, raw, step, update, valid])

  const handlePlus = useCallback(() => {
    if (!valid) {
      update(`${min}`)
      return
    }
    if (raw === `${max}`) {
      // pass
    } else {
      const val =
        (parseInt(step) === parseFloat(step)
          ? parseInt(raw)
          : parseFloat(raw)) + step
      if (step > 0 && step < 1) {
        update(val.toFixed(step.toString().split('.')[1].length))
      } else {
        update(val.toString())
      }
    }
  }, [max, min, raw, step, update, valid])

  const handleChange = event => {
    const raw = event.target.value
    update(raw, true)
  }

  const handleCheckBoxChange = event => {
    onChange(event.target.name, event.target.checked)
  }

  return (
    <label className={`number ${valid ? 'valid' : 'invalid'}`}>
      {label && <span className="number-label">{label}</span>}
      {togglerName && (
        <input
          type="checkbox"
          name={togglerName}
          checked={toggler}
          onChange={handleCheckBoxChange}
        />
      )}
      {(!togglerName || toggler) && (
        <div className={`number-control${noPlusMinus ? ' noplusminus' : ''}`}>
          <input
            type="text"
            name={name}
            value={raw}
            style={{
              width: `${
                Math.max(...[step, raw].map(c => c.toString().length)) + 0.3
              }ch`,
              maxWidth: `${maxWidth}ch`,
            }}
            onChange={handleChange}
            {...props}
          />
          {!noPlusMinus && (
            <>
              <button
                className="plusminus minus"
                onClick={handleMinus}
                tabIndex={-1}
              >
                −
              </button>
              <button
                className="plusminus plus"
                onClick={handlePlus}
                tabIndex={-1}
              >
                +
              </button>
            </>
          )}
        </div>
      )}
    </label>
  )
}