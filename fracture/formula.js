const tokens = {
  whitespace: /^\s+/,
  float: /^-?([0-9]+([.][0-9]*)?|[.][0-9]+)/,
  integer: /^-?[0-9]+/,
  operator: /^(\*\*|[+\-*/^]|\|-\|)/,
  unaryPrefix: /^~/,
  unarySuffix: /^(\.re|\.im)/,
  identifier: /^[a-zA-Z_][a-zA-Z0-9_]*/,
  pipe: /^\|/,
  hash: /^#/,
  lparen: /^\(/,
  rparen: /^\)/,
  lt: /^</,
  gt: /^>/,
  comma: /^,/,
}

class Token {
  constructor(type, value, start, end) {
    this.type = type
    this.value = value
    this.start = start
    this.end = end
  }

  toString() {
    return `<${this.type}: ${this.value} at ${this.start}-${this.end}>`
  }
}

const shaderBinary = {
  '+': 'cadd',
  '-': 'csub',
  '*': 'cmul',
  '/': 'cdiv',
  '^': 'cpow',
  '**': 'cpow',
  '|-|': 'diffabs',
  complex: 'vec2',
}
const shaderUnary = {
  '+': '+',
  '-': '-',
  '~': 'conj',
  abs: 'abs',
  sign: 'sign',
}
const complexBinary = {
  '+': 'add',
  '-': 'sub',
  '*': 'multiply',
  '/': 'div',
  '^': 'pow',
  '**': 'pow',
}
const complexUnary = {
  '+': 'nop',
  '-': 'neg',
  '.re': 'real',
  '.im': 'imag',
  '~': 'conj',
  abs: 'abs',
  sign: 'sign',
}

class BinaryOp {
  constructor(type, left, right) {
    this.type = type
    this.left = left
    this.right = right
  }

  toString() {
    return `<${this.type}: ${this.left.toString()} ${this.right.toString()}>`
  }

  toFull() {
    if (this.type === 'complex') {
      return `(${this.left.toFull()} + ${this.right.toFull()}i)`
    }
    return `(${this.left.toFull()} ${this.type} ${this.right.toFull()})`
  }
  toShader() {
    if (this.type === '^' && this.right.type === 'number') {
      if (this.right.value % 1 === 0) {
        if (this.right.value === 1) {
          return this.left.toShader()
        }
        if (this.right.value < 10) {
          return `cpow${this.right.value}(${this.left.toShader()})`
        } else {
          return `cpow(${this.left.toShader()}, ${this.right.value})`
        }
      } else {
        return `cpow(${this.left.toShader()}, ${this.right.value})`
      }
    }
    return `${shaderBinary[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`
  }
  toComplex() {
    if (this.type === 'complex') {
      return `cx(${this.left.toComplex()}, ${this.right.toComplex()})`
    }
    return `(${this.left.toComplex()}).${complexBinary[this.type]}(${this.right.toComplex()})`
  }
}

class UnaryOp {
  constructor(type, operand) {
    this.type = type
    this.operand = operand
  }

  toString() {
    return `<${this.type}: ${this.operand.toString()}>`
  }
  toFull() {
    return `${this.type}(${this.operand.toFull()})`
  }
  toShader() {
    if (this.type === '.re') {
      return `${this.operand.toShader()}.x`
    }
    if (this.type === '.im') {
      return `${this.operand.toShader()}.y`
    }
    return `${shaderUnary[this.type]}(${this.operand.toShader()})`
  }
  toComplex() {
    return `(${this.operand.toComplex()}).${complexUnary[this.type]}()`
  }
}

class Leaf {
  constructor(type, value) {
    this.type = type
    this.value = value
  }

  toString() {
    return `<${this.type}: ${this.value}>`
  }
  toFull() {
    return this.value
  }
  toShader() {
    if (this.type === 'identifier') {
      return this.value
    }
    return `${this.value.toFixed(6)}`
  }
  toComplex() {
    if (this.type === 'identifier') {
      return this.value
    }
    return `cx(${this.value})`
  }
}

const readToken = (input, i) => {
  const tokensRegexps = Object.entries(tokens)
  for (let j = 0; j < tokensRegexps.length; j++) {
    const [type, regexp] = tokensRegexps[j]
    const result = input.slice(i).match(regexp)
    if (result !== null) {
      const text = result[0]
      return new Token(type, text, i, i + text.length)
    }
  }
  throw new Error('Tokenization error at index ' + i + ' in ' + input)
}

const tokenize = input => {
  let tokens = []
  for (let i = 0; i < input.length; ) {
    const token = readToken(input, i)
    i = token.end
    if (token.type !== 'whitespace') {
      tokens.push(token)
    }
  }
  return tokens
}

// Create the ast from the tokens
const parse = tokens => {
  let i = 0
  const expression = () => {
    let node = term()
    while (i < tokens.length) {
      const token = tokens[i]
      if (
        token.type === 'operator' &&
        ['+', '-', '|-|'].includes(token.value)
      ) {
        i++
        node = new BinaryOp(token.value, node, term())
      } else {
        break
      }
    }
    return node
  }
  const term = () => {
    let node = exponentiation()
    while (i < tokens.length) {
      const token = tokens[i]
      if (token.type === 'operator' && ['*', '/'].includes(token.value)) {
        i++
        node = new BinaryOp(token.value, node, exponentiation())
      } else if (token.type === 'identifier') {
        i++
        node = new BinaryOp('*', node, new Leaf('identifier', token.value))
      } else {
        break
      }
    }
    return node
  }
  const exponentiation = () => {
    let node = suffix()
    while (i < tokens.length) {
      const token = tokens[i]
      if (token.type === 'operator' && ['^', '**'].includes(token.value)) {
        i++
        node = new BinaryOp('^', node, suffix())
      } else {
        break
      }
    }
    return node
  }
  const suffix = () => {
    let node = factor()
    while (i < tokens.length) {
      const token = tokens[i]
      if (token.type === 'unarySuffix') {
        i++
        node = new UnaryOp(token.value, node)
      } else {
        break
      }
    }
    return node
  }
  const factor = () => {
    const token = tokens[i]
    if (token.type === 'lparen') {
      i++
      const node = expression()
      if (tokens[i].type !== 'rparen') {
        throw new Error('Expected ) at ' + tokens[i].start)
      }
      i++
      return node
    } else if (token.type === 'pipe') {
      i++
      const node = expression()
      if (tokens[i].type !== 'pipe') {
        throw new Error('Expected | at ' + tokens[i].start)
      }
      i++
      return new UnaryOp('abs', node)
    } else if (token.type === 'hash') {
      i++
      const node = expression()
      if (tokens[i].type !== 'hash') {
        throw new Error('Expected # at ' + tokens[i].start)
      }
      i++
      return new UnaryOp('sign', node)
    } else if (token.type === 'lt') {
      i++
      const node = expression()
      if (tokens[i].type !== 'comma') {
        throw new Error('Expected , at ' + tokens[i].start)
      }
      i++
      const node2 = expression()
      if (tokens[i].type !== 'gt') {
        throw new Error('Expected > at ' + tokens[i].start)
      }
      i++
      return new BinaryOp('complex', node, node2)
    } else if (token.type === 'unaryPrefix') {
      i++
      return new UnaryOp(token.value, factor())
    } else if (token.type === 'operator' && '+-'.includes(token.value)) {
      i++
      return new UnaryOp(token.value, factor())
    } else if (token.type === 'float' || token.type === 'integer') {
      i++
      return new Leaf('number', parseFloat(token.value))
    } else if (token.type === 'identifier') {
      i++
      return new Leaf('identifier', token.value)
    } else {
      throw new Error(`Unexpected token ${token}`)
    }
  }
  const ast = expression()
  if (i !== tokens.length) {
    throw new Error(`Unexpected EOF ${tokens[i]}`)
  }
  return ast
}

export const ast = s => parse(tokenize(s))

window.tokenize = tokenize
window.parse = parse
window.ast = ast
