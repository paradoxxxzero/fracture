import { useCallback } from 'react'

import Number from './Number.jsx'
import Complex from './Complex.jsx'
import {
  centerViewIcon,
  lockIcon,
  unlockIcon,
  moveCenterIcon,
  moveConstantIcon,
  swapIcon,
} from '../icons'
import Boolean from './Boolean.jsx'
import { c } from '../decimal.js'

export default function UI({ runtime, params, setRuntime, updateParams }) {
  // const handleRawChange = useCallback(
  //   e => {
  //     let { name, value } = e.target
  //     updateParams({ [name]: value })
  //   },
  //   [updateParams]
  // )
  const handleChange = useCallback(
    (name, value) => {
      updateParams({ [name]: value })
    },
    [updateParams]
  )

  const handleReset = useCallback(() => {
    updateParams({
      center: c(),
      point: c(),
      scale: 1.2,
    })
  }, [updateParams])

  return (
    <main className={runtime.error ? 'error ui' : 'ui'} title={runtime.error}>
      <div className="ui-row ui-row-top">
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
              {params.lockCenter ? lockIcon : unlockIcon}
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
        <aside className="formula">
          <button className="button">
            <span className={params.fixed ? 'fixed' : ''}>z</span>^
            {params.power} +{' '}
            <span className={params.fixed ? '' : 'fixed'}>c</span>
            <sup>{runtime.perturb ? '*' : ''}</sup>
          </button>
        </aside>
      </div>
      <div className="ui-row ui-row-middle">
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
            name="supersampling"
            label="Supersampling"
            min={0}
            step={0.1}
            value={params.supersampling}
            onChange={handleChange}
          />
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
        </aside>
        <aside className="formula-parameters">
          <Number
            name="power"
            label="Power"
            min={0}
            step={0.1}
            value={params.power}
            onChange={handleChange}
          />
        </aside>
      </div>
      <div className="ui-row ui-row-bottom">
        <div />
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
            noPlusMinus
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
            noPlusMinus
            maxWidth={null}
            value={params.point}
            onChange={handleChange}
          />
          <Number
            name="scale"
            label="Scale"
            maxWidth={null}
            noPlusMinus
            value={params.scale}
            onChange={handleChange}
          />
        </aside>
        <div />
      </div>
    </main>
  )
}
