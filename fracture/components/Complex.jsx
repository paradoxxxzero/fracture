import { cx } from '../decimal'
import Number from './Number'

export default function Complex({
  name,
  label,
  min = 0,
  max = Infinity,
  step = 1,
  value,
  toggler,
  togglerName,
  onChange,
  ...props
}) {
  const handleCheckBoxChange = event => {
    onChange(event.target.name, event.target.checked)
  }

  const handleRealChange = (_, re) => {
    onChange(name, cx(re, value.im))
  }

  const handleImaginaryChange = (_, im) => {
    onChange(name, cx(value.re, im))
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
          <Number
            name={`${name}-re`}
            value={value.re}
            onChange={handleRealChange}
            decimal
            {...props}
          />
          <span className="complex-inner-label">+</span>
          <Number
            name={`${name}-im`}
            value={value.im}
            onChange={handleImaginaryChange}
            decimal
            {...props}
          />
          <span className="complex-inner-label">i</span>
        </div>
      )}
    </label>
  )
}
