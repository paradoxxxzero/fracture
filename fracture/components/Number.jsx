import { useCallback, useEffect, useState } from 'react'

export const parse = (raw, min, max, step, stepLock) => {
  let valid = true
  let value = 0

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
    (stepLock && step % 1 === 0 && value % step !== 0) ||
    // Consider x.  as invalid to prevent auto deletion
    (step % 1 !== 0 && raw.endsWith('.')) ||
    (min < 0 && raw === '-0')
  )

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
  stepLock = false,
  togglerOnly = false,
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
    (newRaw, input = false) => {
      const parsed = parse(newRaw, min, max, step, stepLock)
      setRaw(parsed.raw)
      setValid(parsed.valid)
      if (parsed.valid) {
        onChange(name, parsed.value)
      }
    },
    [max, min, name, onChange, step]
  )

  const handleMinus = useCallback(() => {
    if (!valid) {
      update(`${min}`)
      return
    }
    if (raw === `${min}`) {
      // pass
    } else {
      let val =
        parseInt(step) === parseFloat(step) ? parseInt(raw) : parseFloat(raw)
      val -= step
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
      let val =
        parseInt(step) === parseFloat(step) ? parseInt(raw) : parseFloat(raw)
      val += step
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
      {label || togglerName ? (
        <div className="number-head">
          {label && <span className="number-label">{label}</span>}
          {togglerName && (
            <input
              type="checkbox"
              name={togglerName}
              checked={toggler}
              onChange={handleCheckBoxChange}
            />
          )}
        </div>
      ) : null}
      {(!togglerName || toggler) && !togglerOnly && (
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
