import { useCallback, useEffect, useState } from 'react'

import { palettes, smoothings, varyings } from '../default.js'
import {
  eyeIcon,
  lockIcon,
  moveCenterIcon,
  moveConstantIcon,
  presetsIcon,
  unlockIcon,
} from '../icons'
import { presets } from '../presets.js'
import Boolean from './Boolean.jsx'
import Complex from './Complex.jsx'
import ComplexFormula from './ComplexFormula.jsx'
import Float from './Float.jsx'
import Number from './Number.jsx'
import Presets from './Presets'
import Select from './Select.jsx'

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

  return (
    <>
      <Presets
        open={showPresets}
        onPreset={handlePreset}
        closePresets={closePresets}
      />
      <main className={runtime.error ? 'error ui' : 'ui'} title={runtime.error}>
        <div className="ui-row ui-row-top">
          <aside className="controls">
            <div className="subcontrols">
              <button className="button" onClick={handleUI}>
                {eyeIcon}
              </button>
              {['simple', 'advanced', 'full'].includes(showUI) ? (
                <button
                  className="button"
                  onClick={() =>
                    setRuntime({
                      ...runtime,
                      moveCenter: !runtime.moveCenter,
                    })
                  }
                >
                  {runtime.moveCenter ? moveCenterIcon : moveConstantIcon}
                </button>
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <button
                  className="button"
                  onClick={() =>
                    setRuntime({
                      ...runtime,
                      lockCenter: !runtime.lockCenter,
                    })
                  }
                >
                  {runtime.lockCenter ? lockIcon : unlockIcon}
                </button>
              ) : null}
            </div>
          </aside>
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <aside className="formula">
              <ComplexFormula
                label="F(z, c) ="
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
                label="Smoothing"
                name="smoothing"
                value={params.smoothing}
                options={smoothings}
                onChange={handleChange}
              />
              {['full'].includes(showUI) ? (
                <Number
                  name="offset"
                  label="Offset"
                  min={0}
                  value={params.offset}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="velocity"
                  label="Velocity"
                  min={0}
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
                  value={params.hue}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="saturation"
                  label="Saturation"
                  min={0}
                  value={params.saturation}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="lightness"
                  label="Lightness"
                  min={0}
                  value={params.lightness}
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
                min={0}
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
              {['advanced', 'full'].includes(showUI) && params.useDerivative ? (
                <Boolean
                  label="Derivative"
                  className="button"
                  name="showDerivative"
                  value={params.showDerivative}
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
            </aside>
          ) : null}
        </div>
        <div className="ui-row ui-row-bottom">
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <button
              className="preset-button button"
              onClick={() => setShowPresets(presets => !presets)}
              title="Presets"
            >
              {presetsIcon}
            </button>
          ) : null}
          {['advanced', 'full'].includes(showUI) && (
            <aside className="bounds">
              <Complex
                name="center"
                label="Center"
                value={params.center}
                step={params.scale}
                maxWidth={null}
                onChange={handleChange}
              />
              <Complex
                name="point"
                label="Point"
                maxWidth={null}
                value={params.point}
                onChange={handleChange}
              />
              <Float
                name="scale"
                label="Scale"
                maxWidth={null}
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
                  varying:
                    varyings[
                      (varyings.indexOf(params.varying) + 1) % varyings.length
                    ] || 'c',
                })
              }
            >
              {params.varying}
            </button>
          ) : null}
        </div>
      </main>
    </>
  )
}
