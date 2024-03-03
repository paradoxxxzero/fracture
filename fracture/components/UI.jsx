import { useCallback, useEffect, useState } from 'react'

import Number from './Number.jsx'
import Complex from './Complex.jsx'
import {
  centerViewIcon,
  lockIcon,
  unlockIcon,
  moveCenterIcon,
  moveConstantIcon,
  swapIcon,
  presetsIcon,
  eyeIcon,
} from '../icons'
import Boolean from './Boolean.jsx'
import { cx } from '../decimal.js'
import ComplexFormula from './ComplexFormula.jsx'
import { presets } from '../presets.js'
import Presets from './Presets'
import Float from './Float.jsx'

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

  const handleReset = useCallback(() => {
    updateParams({
      center: cx(),
      point: cx(),
      scale: 1.2,
    })
  }, [updateParams])

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
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <aside className="controls">
              <div className="subcontrols">
                <button className="button" onClick={handleReset}>
                  {centerViewIcon}
                </button>
                <button
                  className="button"
                  onClick={() =>
                    setRuntime({ ...runtime, lockCenter: !runtime.lockCenter })
                  }
                >
                  {runtime.lockCenter ? lockIcon : unlockIcon}
                </button>
                <button
                  className="button"
                  onClick={() =>
                    setRuntime({ ...runtime, moveCenter: !runtime.moveCenter })
                  }
                >
                  {runtime.moveCenter ? moveCenterIcon : moveConstantIcon}
                </button>
              </div>
            </aside>
          ) : null}
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <aside className="formula">
              <ComplexFormula
                label="F(z, c) ="
                name="fzc"
                params={['z', 'c']}
                value={params.fzc}
                onChange={handleChange}
              />
              {params.useDerivative ? (
                <ComplexFormula
                  label="dF(z, c)/dz ="
                  name="dfzcdz"
                  params={['z', 'c']}
                  value={params.dfzcdz}
                  onChange={handleChange}
                />
              ) : null}
              {runtime.perturb ? (
                <ComplexFormula
                  label="F(Z, dz, dc) ="
                  params={['Z', 'dz', 'dc']}
                  name="fZdzdc"
                  value={params.fZdzdc}
                  onChange={handleChange}
                />
              ) : null}
            </aside>
          ) : null}
        </div>
        <div className="ui-row ui-row-middle">
          {['advanced', 'full'].includes(showUI) ? (
            <aside className="view">
              <Number
                name="iterations"
                label="Iterations"
                min={0}
                step={1}
                value={params.iterations}
                onChange={handleChange}
              />
              <Number
                name="bailout"
                label="Bailout"
                min={0}
                step={1}
                value={params.bailout}
                onChange={handleChange}
              />
              <Number
                name="smoothing"
                label="Smoothing"
                min={0}
                value={params.smoothing}
                togglerName="useSmoothing"
                toggler={params.useSmoothing}
                onChange={handleChange}
              />
              {['full'].includes(showUI) ? (
                <Number
                  name="contrast"
                  label="Contrast"
                  min={0}
                  value={params.contrast}
                  onChange={handleChange}
                />
              ) : null}
              {['full'].includes(showUI) ? (
                <Number
                  name="hue"
                  label="Hue"
                  min={0}
                  value={params.hue}
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
              <Number
                name="derivative"
                label="Derivative"
                min={0}
                value={params.derivative}
                togglerName="useDerivative"
                toggler={params.useDerivative}
                onChange={handleChange}
              />
              {params.useDerivative ? (
                <label className="boolean-label">
                  <Boolean
                    className="button"
                    name="showDerivative"
                    value={params.showDerivative}
                    onChange={handleChange}
                  />
                  Show Derivative
                </label>
              ) : null}
              {showUI === 'full' ? (
                <label className="boolean-label">
                  <Boolean
                    className="button"
                    name="usePerturbation"
                    allowNull
                    value={params.usePerturbation}
                    onChange={handleChange}
                  />
                  Use Perturbation
                </label>
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
            <aside className="parameters">
              <label className="boolean-label">
                <Boolean
                  className="button"
                  name="fixed"
                  value={params.fixed}
                  onChange={handleChange}
                />
                Fixed
              </label>
              <Complex
                name="center"
                label="Center"
                value={params.center}
                step={params.scale}
                maxWidth={null}
                onChange={handleChange}
              />
              <button
                className="button"
                onClick={() => {
                  updateParams({
                    point: params.center,
                    center: params.point,
                    fixed: !params.fixed,
                  })
                }}
              >
                {swapIcon}
              </button>
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
          {showUI === 'empty' ? <div className="spacer" /> : null}
          <button
            className={`space-button button${
              runtime.processing ? ' processing' : ''
            }${showUI === 'empty' ? ' empty' : ''}`}
            onClick={handleUI}
          >
            {eyeIcon}
          </button>
        </div>
      </main>
    </>
  )
}
