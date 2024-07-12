export const ident = () => [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]

export const eps = x => (Math.abs(x) < 1e-9 ? 0 : x)

export const epsize = m => {
  // Set very small values to zero
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      m[i][j] = eps(m[i][j])
    }
  }
  return m
}

export const translate = (x, y, z) => {
  const matrix = ident()
  matrix[0][3] = x
  matrix[1][3] = y
  matrix[2][3] = z
  return matrix
}
export const rotate = (angle, i, j) => {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  const matrix = ident()
  matrix[i][i] = c
  matrix[i][j] = -s
  matrix[j][i] = s
  matrix[j][j] = c
  return matrix
}
export const multiplyVector = (m, v) => {
  // Multiply matrix m and vector v
  const res = new Array(m.length)
  for (let i = 0; i < m.length; i++) {
    let sum = 0
    for (let j = 0; j < m[0].length; j++) {
      sum += m[i][j] * v[j]
    }
    res[i] = sum
  }
  return res
}
export const multiply = (m1, m2) => {
  // Multiply two matrices m1, m2
  const res = new Array(m1.length)
  for (let i = 0; i < m1.length; i++) {
    res[i] = new Array(m2[0].length)
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0
      for (let k = 0; k < m2.length; k++) {
        sum += m1[i][k] * m2[k][j]
      }
      res[i][j] = sum
    }
  }
  return res
}
export const inverse = m => {
  m = epsize(m)
  // Invert a matrix m using Gauss-Jordan elimination
  // https://en.wikipedia.org/wiki/Gaussian_eliminaftion
  const n = m.length
  const aug = []
  for (let i = 0; i < n; i++) {
    aug.push([...m[i], ...ident(n)[i]])
  }

  // Forward elimination
  for (let i = 0; i < n; i++) {
    let pivot = aug[i][i]
    if (pivot === 0) {
      // Find a row to swap
      let row = i + 1
      while (row < n && aug[row][i] === 0) {
        row++
      }
      if (row === n) {
        throw new Error('Matrix is singular and cannot be inverted.')
      }
      ;[aug[i], aug[row]] = [aug[row], aug[i]]
      pivot = aug[i][i]
    }
    for (let j = 0; j < 2 * n; j++) {
      aug[i][j] /= pivot
    }
    for (let k = 0; k < n; k++) {
      if (k !== i) {
        let factor = aug[k][i]
        for (let j = 0; j < 2 * n; j++) {
          aug[k][j] -= factor * aug[i][j]
        }
      }
    }
  }

  return aug.map(row => row.slice(n))
}
export const frustum = ({ left, right, top, bottom, near, far }) => {
  const out = ident()
  out[0][0] = (2 * near) / (right - left)
  out[0][2] = (right + left) / (right - left)
  out[1][1] = (2 * near) / (top - bottom)
  out[1][2] = (top + bottom) / (top - bottom)
  out[2][2] = -(far + near) / (far - near)
  out[2][3] = (-2 * near * far) / (far - near)
  out[3][2] = -1
  out[3][3] = 0
  return out
}
export const columnMajor = m => {
  // prettier-ignore
  return [
    m[0][0], m[1][0], m[2][0], m[3][0],
    m[0][1], m[1][1], m[2][1], m[3][1],
    m[0][2], m[1][2], m[2][2], m[3][2],
    m[0][3], m[1][3], m[2][3], m[3][3],
  ]
}
