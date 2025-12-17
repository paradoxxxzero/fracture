export const grid = ({ resolution =  100 } = {}) => {
  const indices = []
  const vertices = []
  const uvs = []

  const step = 1 / resolution
  const count = 2 * resolution + 1

  for (let j = 0; j < count; j++) {
    for (let i = 0; i < count; i++) {
      vertices.push(-1 + i * step, -1 + j * step)
      uvs.push(i / (count - 1), j / (count - 1))
      if (i > 0 && j > 0) {
        const i1 = i - 1
        const j1 = j - 1
        indices.push(i + j * count, i + j1 * count, i1 + j1 * count)
        indices.push(i + j * count, i1 + j1 * count, i1 + j * count)
      }
    }
  }
  return {
    vertices,
    indices,
    uvs,
  }
}
