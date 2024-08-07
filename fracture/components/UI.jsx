import { useCallback, useEffect, useState } from 'react'

import { controls, palettes, shadings } from '../default.js'
import {
  contrastIcon,
  eyeIcon,
  noContrastIcon,
  playIcon,
  presetsIcon,
  stopIcon,
} from '../icons'
import { presets } from '../presets.js'
import Boolean from './Boolean.jsx'
import Complex from './Complex.jsx'
import ComplexFormula from './ComplexFormula.jsx'
import Number from './Number.jsx'
import Presets from './Presets'
import Select from './Select.jsx'
import { cx } from '../decimal.js'
import { makeBigPng } from '../export.js'
import Declaration from './Declaration.jsx'
import { ident, rotate } from '../matrix.js'
import { render } from '../render.js'

const getShowUI = () => {
  try {
    return localStorage.getItem('showUI') || 'simple'
  } catch (e) {
    console.error(e)
    return 'simple'
  }
}
export default function UI({ runtime, params, setRuntime, updateParams }) {
  const [showUI, setShowUI] = useState(getShowUI)
  const [showPresets, setShowPresets] = useState(false)
  const [presetIndex, setPresetIndex] = useState(0)
  const [readable, setReadable] = useState(false)

  const openPresets = useCallback(() => {
    updateParams({
      animate: false,
    })
    setShowPresets(true)
  }, [updateParams])
  const closePresets = useCallback(() => {
    setShowPresets(false)
  }, [])

  const handlePreset = useCallback(
    (preset, index) => {
      updateParams(preset, true)
      setPresetIndex(index)
      closePresets()
    },
    [updateParams, closePresets]
  )

  const handleChange = useCallback(
    (name, value) => {
      updateParams({ [name]: value })
    },
    [updateParams]
  )

  const handleUI = useCallback(
    () =>
      setShowUI(showUI => {
        const newShowUI = {
          simple: 'advanced',
          advanced: 'full',
          full: 'empty',
          empty: 'simple',
        }[showUI]
        try {
          localStorage.setItem('showUI', newShowUI)
        } catch (e) {
          console.error(e)
        }
        return newShowUI
      }),
    []
  )

  const handleReadable = useCallback(() => {
    setReadable(readable => !readable)
  }, [])

  useEffect(() => {
    const keydown = e => {
      if (e.target.tagName === 'INPUT') {
        return
      }
      if (e.key === 'ArrowLeft' && e.ctrlKey && presetIndex > 0) {
        let prevPreset = presetIndex - 1
        while (presets[prevPreset].type) {
          if (prevPreset < 2) {
            return
          }
          prevPreset--
        }
        handlePreset(presets[prevPreset].params, prevPreset)
      } else if (
        e.key === 'ArrowRight' &&
        e.ctrlKey &&
        presetIndex < presets.length - 1
      ) {
        let nextPresets = presetIndex + 1
        while (presets[nextPresets].type) {
          if (nextPresets > presets.length - 2) {
            return
          }
          nextPresets++
        }

        handlePreset(presets[nextPresets].params, nextPresets)
      }
    }
    window.addEventListener('keydown', keydown)
    return () => {
      window.removeEventListener('keydown', keydown)
    }
  }, [handlePreset, presetIndex])

  const exportImage = useCallback(async () => {
    closePresets()
    const res = window.prompt('Select image resolution', '5000x5000')
    if (!res || !res.includes('x')) {
      console.error('Invalid resolution')
      return
    }
    const [width, height] = res.split('x').map(x => parseInt(x))
    if (isNaN(width) || isNaN(height)) {
      console.error('Invalid resolution')
      return
    }

    const url = await makeBigPng(runtime, width, height)
    if (url) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style.display = 'none'
      a.href = url
      a.download = `${document.title}-${width}x${height}`
      a.click()
    }
  }, [closePresets, runtime])

  const args = Object.keys(params.args)

  return (
    <>
      <Presets
        open={showPresets}
        onPreset={handlePreset}
        onExportImage={exportImage}
        closePresets={closePresets}
      />
      <main
        className={
          'ui' +
          (readable ? ' readable ' : '') +
          (runtime.error ? ' error' : '')
        }
        title={runtime.error}
      >
        <div className="ui-row ui-row-top">
          <aside className="controls">
            <div className="subcontrols">
              <button className="button" onClick={handleUI}>
                {eyeIcon}
              </button>
              {['advanced', 'full'].includes(showUI) ? (
                <button className="button" onClick={handleReadable}>
                  {readable ? contrastIcon : noContrastIcon}
                </button>
              ) : null}
              {['simple', 'advanced', 'full'].includes(showUI) ? (
                <button
                  className="button"
                  onClick={() =>
                    updateParams({
                      animate: !params.animate,
                    })
                  }
                >
                  {params.animate ? stopIcon : playIcon}
                </button>
              ) : null}
              {['simple', 'advanced', 'full'].includes(showUI) ? (
                <button
                  className="button"
                  onClick={() =>
                    updateParams({
                      mode: params.mode === '2d' ? '4d' : '2d',
                    })
                  }
                >
                  {params.mode}
                </button>
              ) : null}
              {params.mode === '4d' &&
              ['simple', 'advanced', 'full'].includes(showUI) ? (
                <>
                  <button
                    className="button"
                    onClick={() =>
                      updateParams({
                        control:
                          controls[
                            (controls.indexOf(params.control) + 1) %
                              controls.length
                          ],
                      })
                    }
                  >
                    {params.control}
                  </button>
                  {params.control === '4d' ? (
                    <>
                      <button
                        className="button"
                        onClick={() =>
                          updateParams({
                            matrix: ident(),
                            anakata: 10,
                          })
                        }
                      >
                        c
                      </button>
                      <button
                        className="button"
                        onClick={() =>
                          updateParams({
                            rotation: (params.rotation + 1) % 3,
                          })
                        }
                      >
                        {params.rotation}
                      </button>
                    </>
                  ) : null}
                  {params.control === '3d' ? (
                    <button
                      className="button"
                      onClick={() => {
                        runtime.env.camera.rotation = rotate(Math.PI / 2, 1, 2)
                        runtime.env.camera.zoom = 2
                        runtime.env.camera.update()
                        render(runtime)
                      }}
                    >
                      c
                    </button>
                  ) : null}
                </>
              ) : null}
            </div>
          </aside>
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <aside className="formula">
              <ComplexFormula
                label={<Declaration args={params.args} />}
                name="f"
                value={params.f}
                onChange={handleChange}
              />
              {['advanced', 'full'].includes(showUI) && params.useDerivative ? (
                <ComplexFormula
                  label="dF(z, z', c)/dz ="
                  name="f_prime_z"
                  value={runtime.f_prime_z}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) && params.useDerivative ? (
                <ComplexFormula
                  label="dF(z, z', c)/dc ="
                  name="f_prime_c"
                  value={runtime.f_prime_c}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) && runtime.perturb ? (
                <ComplexFormula
                  label="F(Z, dz, dc) ="
                  name="f_perturb"
                  value={params.f_perturb}
                  onChange={handleChange}
                />
              ) : null}
            </aside>
          ) : null}
        </div>
        <div className="ui-row ui-row-middle">
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <aside className="view">
              <Select
                label="Palette"
                name="palette"
                value={params.palette}
                options={palettes}
                onChange={handleChange}
              />
              <Select
                label="Shading"
                name="shading"
                value={params.shading}
                options={shadings}
                onChange={handleChange}
              />
              {['full'].includes(showUI) ? (
                <Number
                  name="offset"
                  label="Offset"
                  min={0}
                  step={10}
                  value={params.offset}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="velocity"
                  label="Velocity"
                  min={0}
                  step={10}
                  value={params.velocity}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="hue"
                  label="Hue"
                  min={0}
                  max={360}
                  step={10}
                  value={params.hue}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="saturation"
                  label="Saturation"
                  min={0}
                  step={10}
                  value={params.saturation}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="lightness"
                  label="Lightness"
                  min={0}
                  step={10}
                  value={params.lightness}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) && params.animate ? (
                <Number
                  name="speed"
                  label="Speed"
                  min={0}
                  value={params.speed}
                  onChange={handleChange}
                />
              ) : null}
              <Number
                name="supersampling"
                label="Supersampling"
                min={0}
                step={0.1}
                value={params.supersampling}
                onChange={handleChange}
              />
            </aside>
          ) : null}
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <aside className="params">
              <Number
                name="iterations"
                label="Iterations"
                min={1}
                step={1}
                value={params.iterations}
                onChange={handleChange}
              />
              {['advanced', 'full'].includes(showUI) ? (
                <Boolean
                  className="button"
                  label="Roots"
                  name="useRoots"
                  value={params.useRoots}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  name="bailin"
                  label="Bailin"
                  min={-Infinity}
                  step={0.1}
                  value={params.bailin}
                  togglerName="convergent"
                  toggler={params.convergent}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  name="bailout"
                  label="Bailout"
                  min={-Infinity}
                  step={0.1}
                  value={params.bailout}
                  togglerName="divergent"
                  toggler={params.divergent}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) && (
                <Boolean
                  label="Only Bailed"
                  className="button"
                  name="onlyBailed"
                  value={params.onlyBailed}
                  onChange={handleChange}
                />
              )}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  name="derivative"
                  label="Derivative"
                  min={0}
                  value={params.derivative}
                  togglerName="useDerivative"
                  toggler={params.useDerivative}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Boolean
                  name="useCycle"
                  label="Cycle"
                  value={params.useCycle}
                  onChange={handleChange}
                />
              ) : null}
              {showUI === 'full' ? (
                <Boolean
                  label="Perturbation"
                  className="button"
                  name="usePerturbation"
                  allowNull
                  value={params.usePerturbation}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Boolean
                  name="scaled"
                  label="Scaled"
                  value={params.scaled}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  name="gridScale"
                  label="Grid"
                  min={0}
                  value={params.gridScale}
                  togglerName="showGrid"
                  toggler={params.showGrid}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) && params.showGrid ? (
                <Number
                  name="gridWidth"
                  label="Grid Width"
                  step={0.1}
                  value={params.gridWidth}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) && params.showGrid ? (
                <Boolean
                  name="gridLog"
                  label="Grid Log"
                  value={params.gridLog}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}

              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  label="Norm Grid"
                  step={0.1}
                  name="normGridWidth"
                  value={params.normGridWidth}
                  togglerName="showNormGrid"
                  toggler={params.showNormGrid}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  label="Norm Shade"
                  className="button"
                  name="normShadeValue"
                  value={params.normShadeValue}
                  togglerName="normShade"
                  toggler={params.normShade}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) &&
              (params.showNormGrid || params.normShade) ? (
                <Number
                  name="normGridScale"
                  label="Norm Grid Scale"
                  min={0}
                  value={params.normGridScale}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) &&
              (params.showNormGrid || params.normShade) ? (
                <Boolean
                  name="normGridLog"
                  label="Norm Grid Log"
                  value={params.normGridLog}
                  onChange={handleChange}
                />
              ) : null}

              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  label="Arg Grid"
                  step={0.1}
                  name="argGridWidth"
                  value={params.argGridWidth}
                  togglerName="showArgGrid"
                  toggler={params.showArgGrid}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  label="Arg Shade"
                  className="button"
                  name="argShadeValue"
                  value={params.argShadeValue}
                  togglerName="argShade"
                  toggler={params.argShade}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) &&
              (params.showArgGrid || params.argShade) ? (
                <Number
                  name="argGridScale"
                  label="Arg Grid Scale"
                  min={0}
                  value={params.argGridScale}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) &&
              (params.showArgGrid || params.argShade) ? (
                <Boolean
                  name="argGridLog"
                  label="Arg Grid Log"
                  value={params.argGridLog}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  label="Zeroes"
                  className="button"
                  name="zeroes"
                  min={-Infinity}
                  value={params.zeroes}
                  togglerName="showZeroes"
                  toggler={params.showZeroes}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  label="Poles"
                  className="button"
                  name="poles"
                  min={-Infinity}
                  value={params.poles}
                  togglerName="showPoles"
                  toggler={params.showPoles}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <Number
                  name="polya"
                  label="Polya Plot"
                  min={0}
                  value={params.polya}
                  togglerName="showPolya"
                  toggler={params.showPolya}
                  togglerOnly={showUI !== 'full'}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) && params.showPolya ? (
                <Number
                  name="polyaLightness"
                  label="Polya Lightness"
                  min={0}
                  step={10}
                  togglerName="polyaColor"
                  toggler={params.polyaColor}
                  value={params.polyaLightness}
                  onChange={handleChange}
                />
              ) : null}
            </aside>
          ) : null}
        </div>
        <div className="ui-row ui-row-bottom">
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <button
              className="preset-button button"
              onClick={openPresets}
              title="Presets"
            >
              {presetsIcon}
            </button>
          ) : null}
          {['advanced', 'full'].includes(showUI) && (
            <aside className="bounds">
              {args
                .sort()
                .reverse()
                .map(arg => (
                  <Complex
                    key={arg}
                    name={arg}
                    label={arg}
                    maxWidth={null}
                    value={params.args}
                    arg
                    varying={params.varying}
                    onChange={handleChange}
                  />
                ))}
              <Complex
                name="scale"
                label="Scale"
                maxWidth={null}
                initial={cx(1, 0)}
                value={params.scale}
                onChange={handleChange}
              />
            </aside>
          )}
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <button
              className={`space-button button${
                runtime.processing ? ' processing' : ''
              }`}
              onClick={() =>
                updateParams({
                  move:
                    args[(args.indexOf(params.move) + 1) % args.length] || 'c',
                })
              }
            >
              𝚫{params.move}
            </button>
          ) : null}
        </div>
      </main>
    </>
  )
}
