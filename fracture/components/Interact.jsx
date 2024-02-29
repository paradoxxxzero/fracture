import { useInteract } from '../hooks/useInteract'

export default function Interact({ runtime, updateParams }) {
  useInteract(runtime, updateParams)
  return null
}
