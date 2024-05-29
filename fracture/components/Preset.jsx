import { memo, useEffect, useState } from 'react'
import Preview from './Preview'

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

const getNodeText = node => {
  if (['string', 'number'].includes(typeof node)) {
    return node
  }
  if (node instanceof Array) {
    return node.map(getNodeText).join('')
  }
  if (typeof node === 'object' && node) {
    return getNodeText(node.props.children)
  }
}
const match = (name, search) => {
  if (typeof name === 'string') {
    return getNodeText(name).toLowerCase().includes(search.toLowerCase())
  }
  return false
}
export default memo(function Preset({
  name,
  index,
  params,
  search,
  subforms = [],
  sub = false,
  shown,
  onPreset,
}) {
  const [subshown, setSubshown] = useState(false)
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      setSubshown(true)
    }
  }, [open])

  useEffect(() => {
    if (!search) {
      setVisible(true)
      setOpen(false)
      return
    }
    if (match(name, search)) {
      setVisible(true)
      return
    }
    if (subforms.length && subforms.some(({ name }) => match(name, search))) {
      setVisible(true)
      setOpen(true)
      return
    }
    setVisible(false)
    setOpen(false)
  }, [name, search, subforms])

  const args = formatArgs(params.args)

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <div
        className={`preset${sub ? ' sub' : ''}`}
        onClick={() => onPreset(params, index)}
      >
        <div
          className={`preset-header preset-name-${subforms.length ? 'button' : 'only'
            }`}
        >
          {subforms.length ? (
            <button
              className={`preset-toggle ${open ? 'open' : 'closed'}`}
              onClick={e => {
                e.stopPropagation()
                setOpen(!open)
              }}
            >
              {open ? '-' : '+'}
            </button>
          ) : null}
          <div className="preset-content-preview">
            <div className="preset-content">
              <span className="preset-name">{name}</span>
              <code className="preset-formula">
                <span className="preset-assignment">F{args ? <sub>{args}</sub> : null}(z) = </span>
                {params.f}
              </code>
              <code className="preset-derivative_z">
                <span className="preset-assignment">dF(z, z', c)/dz = </span>
                {params.f_prime_z}
              </code>
              <code className="preset-derivative_c">
                <span className="preset-assignment">dF(z, z', c)/dc = </span>
                {params.f_prime_c}
              </code>
              {/* <code className="preset-perturb">{params.f_perturb}</code> */}
            </div>
            {shown ? <Preview params={params} /> : null}
          </div>
        </div>
      </div>
      <div className="subforms" style={{ display: open ? 'block' : 'none' }}>
        {subforms.map((subform, i) => (
          <Preset
            key={i}
            {...subform}
            sub
            search={search}
            shown={shown && subshown}
            onPreset={onPreset}
          />
        ))}
      </div>
    </div>
  )
})
