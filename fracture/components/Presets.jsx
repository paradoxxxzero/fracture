import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { presets } from '../presets'
import Preset from './Preset'
import { debounce } from '../../utils'
import { authorIcon, backspaceIcon, closeIcon, exportIcon } from '../icons'

export default function Presets({
  open,
  onPreset,
  onExportImage,
  closePresets,
}) {
  const [shown, setShown] = useState(false)
  const [search, setSearch] = useState('')
  const [rawSearch, setRawSearch] = useState('')
  const searchRef = useRef()
  useEffect(() => {
    if (open) {
      setShown(true)
      searchRef.current.focus()
    }
  }, [open])

  const handleSearch = useCallback(e => {
    setRawSearch(e.target.value)
    debounce(setSearch(e.target.value), 50)
  }, [])
  return (
    <div style={{ display: open ? 'block' : 'none' }}>
      <div className="presets-overlay" onClick={closePresets} />
      <div className="presets">
        <div className="presets-modal">
          <div className="presets-header">
            <div className="presets-search">
              <input
                type="text"
                placeholder="Search"
                ref={searchRef}
                value={rawSearch}
                onChange={handleSearch}
              />
              <button
                className="presets-clear"
                onClick={() => {
                  setSearch('')
                  setRawSearch('')
                }}
              >
                {backspaceIcon}
              </button>
            </div>
            <div className="presets-actions">
              <a className="presets-action" href="https://florian.mounier.dev/">
                {authorIcon}
              </a>
              <button className="presets-action" onClick={onExportImage}>
                {exportIcon}
              </button>
              <button className="presets-action" onClick={closePresets}>
                {closeIcon}
              </button>
            </div>
          </div>
          <div className="presets-list">
            {presets.map(({ type, content, name, params, subforms }, i) => (
              <Fragment key={i}>
                {type === 'title' ? (
                  <h2>{content}</h2>
                ) : type === 'group' ? (
                  <h4>{content}</h4>
                ) : (
                  <Preset
                    name={name}
                    index={i}
                    params={params}
                    search={search}
                    shown={shown}
                    subforms={subforms}
                    onPreset={onPreset}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
