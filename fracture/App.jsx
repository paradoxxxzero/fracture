import { useEffect, useState } from 'react'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { filterParams } from './params'
import { initializeGl } from './render'

export default function App({ params, updateParams }) {
  const [runtime, setRuntime] = useState({
    ...params,
    lockCenter: false,
    perturb: false,
    animate: false,
    timeref: 0,
  })
  const [displayStack, setDisplayStack] = useState(false)

  useEffect(() => {
    if (!runtime.gl && runtime.error) {
      return
    }
    const onContextLost = e => {
      console.error('WebGL context lost', e)
      setRuntime(rt => ({
        ...rt,
        gl: null,
        error: new Error('WebGL context lost'),
      }))

      e.preventDefault()
    }
    const onContextRestored = () => {
      console.warn('WebGL context restored')
      setRuntime(rt => ({
        ...rt,
        ...initializeGl(rt, onContextLost, onContextRestored),
        error: null,
      }))
    }

    setRuntime(rt => {
      try {
        if (!rt.gl) {
          return initializeGl(rt, onContextLost, onContextRestored)
        }
        return rt
      } catch (e) {
        console.error(e)
        return {
          ...rt,
          error: e,
        }
      }
    })
  }, [runtime.gl, runtime.error])

  useEffect(() => {
    setRuntime(rt => ({
      ...rt,
      ...filterParams(params).params,
    }))
  }, [params])

  return (
    <>
      {runtime.error ? (
        <aside className="global-error">
          <div>
            {runtime.error.toString()}{' '}
            <button
              onClick={() => setDisplayStack(displayStack => !displayStack)}
            >
              {displayStack ? 'Hide' : 'Show'} stack
            </button>
          </div>
          {runtime.error.stack && displayStack ? (
            <pre>{runtime.error.stack}</pre>
          ) : null}
        </aside>
      ) : null}
      {runtime.gl ? (
        <>
          <UI
            runtime={runtime}
            params={params}
            setRuntime={setRuntime}
            updateParams={updateParams}
          />
          <Runtime
            runtime={runtime}
            setRuntime={setRuntime}
            updateParams={updateParams}
          />
        </>
      ) : null}
    </>
  )
}
