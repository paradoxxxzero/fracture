import { initGL, render, sizeGL } from './fracture/index'

window.addEventListener('resize', sizeGL)

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gl')
  initGL(canvas)
  render()
})
