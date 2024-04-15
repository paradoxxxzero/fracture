import { useCallback, useEffect, useState } from 'react'

import { palettes, smoothings, varyings } from '../default.js'
import {
  eyeIcon,
  lockIcon,
  moveCenterIcon,
  moveConstantIcon,
  playIcon,
  presetsIcon,
  stopIcon,
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
import { cx } from '../decimal.js'

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
                    updateParams({
                      moveCenter: !params.moveCenter,
                    })
                  }
                >
                  {params.moveCenter ? moveCenterIcon : moveConstantIcon}
                </button>
              ) : null}
              {['advanced', 'full'].includes(showUI) ? (
                <button
                  className="button"
                  onClick={() =>
                    updateParams({
                      lockCenter: !params.lockCenter,
                    })
                  }
                >
                  {params.lockCenter ? lockIcon : unlockIcon}
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
              {params.convergent || params.divergent ? (
                <Number
                  name="iterations"
                  label="Iterations"
                  min={0}
                  step={1}
                  value={params.iterations}
                  onChange={handleChange}
                />
              ) : null}
              {['advanced', 'full'].includes(showUI) &&
              (params.convergent || params.divergent) ? (
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
              {params.convergent || params.divergent ? (
                <>
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
                  {['advanced', 'full'].includes(showUI) &&
                  params.useDerivative ? (
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
                </>
              ) : (
                <>
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
                  {['advanced', 'full'].includes(showUI) && params.showGrid ? (
                    <Boolean
                      name="gridLog"
                      label="Grid Log"
                      value={params.gridLog}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['advanced', 'full'].includes(showUI) ? (
                    <Number
                      name="normGridScale"
                      label="Norm Grid"
                      min={0}
                      value={params.normGridScale}
                      togglerName="showNormGrid"
                      toggler={params.showNormGrid}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['advanced', 'full'].includes(showUI) &&
                  params.showNormGrid ? (
                    <Boolean
                      name="normGridLog"
                      label="Norm Grid Log"
                      value={params.normGridLog}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['full'].includes(showUI) && params.showNormGrid ? (
                    <Number
                      label="Norm Grid Width"
                      step={0.1}
                      name="normGridWidth"
                      value={params.normGridWidth}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['advanced', 'full'].includes(showUI) ? (
                    <Number
                      name="argGridScale"
                      label="Arg Grid"
                      min={0}
                      value={params.argGridScale}
                      togglerName="showArgGrid"
                      toggler={params.showArgGrid}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['advanced', 'full'].includes(showUI) &&
                  params.showArgGrid ? (
                    <Boolean
                      name="argGridLog"
                      label="Arg Grid Log"
                      value={params.argGridLog}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['full'].includes(showUI) && params.showArgGrid ? (
                    <Number
                      label="Arg Grid Width"
                      step={0.1}
                      name="argGridWidth"
                      value={params.argGridWidth}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['advanced', 'full'].includes(showUI) ? (
                    <Boolean
                      label="Poles/Zeroes"
                      className="button"
                      name="showPolesZeroes"
                      value={params.showPolesZeroes}
                      onChange={handleChange}
                    />
                  ) : null}
                  {['advanced', 'full'].includes(showUI) ? (
                    <Boolean
                      label="Shade Norm"
                      className="button"
                      name="shadeNorm"
                      value={params.shadeNorm}
                      onChange={handleChange}
                    />
                  ) : null}
                </>
              )}
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
              <Complex
                name="center"
                label="Center"
                value={params.center}
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
