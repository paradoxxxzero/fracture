import { useCallback } from 'react'

export default function Select({
  name,
  value,
  options,
  label,
  onChange,
  ...props
}) {
  const handleChange = useCallback(
    e => {
      const { value } = e.target
      onChange(name, value)
    },
    [name, onChange]
  )

  return (
    <label className="select-label">
      {label}
      <select
        name={name}
        value={value}
        className="select"
        onChange={handleChange}
      >
        {options.map(a => (
          <option key={a} value={a}>
            {a.replace(/_/g, ' ').replace(/./, c => c.toUpperCase())}
          </option>
        ))}
      </select>
    </label>
  )
}
