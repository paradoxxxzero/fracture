import { useCallback } from 'react'

export default function Text({
  name,
  value,
  options,
  label,
  onChange,
  children,
  truncate,
  ...props
}) {
  const handleChange = useCallback(
    e => {
      const { value } = e.target
      if (value?.slice(-1) === '…') {
        return
      }
      onChange(name, value)
    },
    [name, onChange]
  )
  if (truncate && value.length > truncate) {
    value = value.slice(0, truncate) + '…'
  }
  let input = (
    <input
      type="text"
      name={name}
      value={value}
      className="text"
      onChange={handleChange}
      {...props}
    />
  )
  if (children) {
    input = (
      <div className="text-wrapper">
        {input}
        {children}
      </div>
    )
  }

  return (
    <label className="select-label" {...props}>
      {label}
      {input}
    </label>
  )
}
