import { useCallback } from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import Interact from './Interact'
import Render from './Render'

export default function Runtime({ runtime, setRuntime, updateParams }) {
  // Debug
  window.rt = runtime

  const handleError = useCallback(
    type => error => {
      error.type = type
      setRuntime(runtime => ({
        ...runtime,
        error,
      }))
    },
    [setRuntime]
  )

  return (
    <>
      <ErrorBoundary
        error={runtime.error?.render}
        onError={handleError('render')}
      >
        <Render runtime={runtime} setRuntime={setRuntime} />
      </ErrorBoundary>
      <ErrorBoundary
        error={runtime.error?.interact}
        onError={handleError('interact')}
      >
        <Interact runtime={runtime} updateParams={updateParams} />
      </ErrorBoundary>
    </>
  )
}
