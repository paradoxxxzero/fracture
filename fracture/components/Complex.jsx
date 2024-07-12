import { cx } from '../decimal'
import { backspaceIcon, monitorIcon, monitorLockIcon } from '../icons'
import Float from './Float'

export default function Complex({
  name,
  label,
  min = 0,
  max = Infinity,
  step = 1,
  initial = cx(0, 0),
  value,
  toggler,
  togglerName,
  arg,
  varying = null,
  onChange,
  ...props
}) {
  const handleCheckBoxChange = event => {
    onChange(event.target.name, event.target.checked)
  }
  const handleChange = (name, newValue) => {
    if (arg) {
      onChange('args', { ...value, [name]: newValue })
    } else {
      onChange(name, newValue)
    }
  }

  const handleVaryingChange = () => {
    if (varying.includes(name)) {
      onChange('varying', varying.replace(name, ''))
    } else {
      onChange('varying', varying + name)
    }
  }
  const complex = arg ? value[name] : value

  const handleRealChange = (_, re) => {
    handleChange(name, cx(re, complex.im))
  }

  const handleImaginaryChange = (_, im) => {
    handleChange(name, cx(complex.re, im))
  }

  return (
    <label className="complex">
      {label && <span className="complex-label">{label}</span>}
      {togglerName && (
        <input
          type="checkbox"
          name={togglerName}
          checked={toggler}
          onChange={handleCheckBoxChange}
        />
      )}
      {(!togglerName || toggler) && (
        <div className="complex-control">
          <Float
            name={`${name}-re`}
            value={complex.re}
            onChange={handleRealChange}
            decimal
            {...props}
          />
          <span className="complex-inner-label">+</span>
          <Float
            name={`${name}-im`}
            value={complex.im}
            onChange={handleImaginaryChange}
            decimal
            {...props}
          />
          <span className="complex-inner-label">i</span>
          {varying !== null ? (
            <button
              type="button"
              onClick={handleVaryingChange}
              className="button"
            >
              {varying.includes(name) ? monitorLockIcon : monitorIcon}
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => handleChange(name, initial)}
            className="button"
          >
            {backspaceIcon}
          </button>
        </div>
      )}
    </label>
  )
}
