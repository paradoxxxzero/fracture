const tokens = {
  whitespace: /^\s+/,
  imaginary: /^-?([0-9]+([.][0-9]*)?|[.][0-9]+)i/,
  float: /^-?([0-9]+([.][0-9]*)?|[.][0-9]+)/,
  integer: /^-?[0-9]+/,
  operator: /^[+\-*/^]/,
  unary: /^[~#]/,
  identifier: /^[a-zA-Z_][a-zA-Z0-9_]*/,
  pipe: /^\|/,
  lparen: /^\(/,
  rparen: /^\)/,
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

const shaderFunctions = {
  '+': 'cadd',
  '-': 'csub',
  '*': 'cmul',
  '/': 'cdiv',
  '^': 'cpow',
  '~': 'conj',
  '#': 'csign',
  abs: 'cabs',
}
const complexFunctions = {
  '+': 'add',
  '-': 'sub',
  '*': 'multiply',
  '/': 'div',
  '^': 'pow',
  '~': 'conj',
  '#': 'csign',
  abs: 'cabs',
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
        return `cpow(${this.left.toShader()}, ${this.right.toShader()})`
      }
    }
    return `${shaderFunctions[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`
  }
  toComplex() {
    return `(${this.left.toComplex()}).${complexFunctions[this.type]}(${this.right.toComplex()})`
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
    return `${shaderFunctions[this.type]}(${this.operand.toShader()})`
  }
  toComplex() {
    return `(${this.operand.toComplex()}).${complexFunctions[this.type]}()`
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
    return this.value + (this.type === 'imaginary' ? 'i' : '')
  }
  toShader() {
    if (this.type === 'identifier') {
      return this.value
    }
    return this.type === 'imaginary'
      ? `vec2(0.0, ${this.value.toFixed(6)})`
      : `vec2(${this.value.toFixed(6)}, 0.0)`
  }
  toComplex() {
    if (this.type === 'identifier') {
      return this.value
    }
    return this.type === 'imaginary'
      ? `cx(0, ${this.value})`
      : `cx(${this.value})`
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
  const parse_expression = () => {
    let node = parse_term()
    while (i < tokens.length) {
      const token = tokens[i]
      if (token.type === 'operator' && '+-'.includes(token.value)) {
        i++
        node = new BinaryOp(token.value, node, parse_term())
      } else {
        break
      }
    }
    return node
  }
  const parse_term = () => {
    let node = parse_pow()
    while (i < tokens.length) {
      const token = tokens[i]
      if (token.type === 'operator' && '*/'.includes(token.value)) {
        i++
        node = new BinaryOp(token.value, node, parse_pow())
      } else {
        break
      }
    }
    return node
  }
  const parse_pow = () => {
    let node = parse_factor()
    while (i < tokens.length) {
      const token = tokens[i]
      if (token.type === 'operator' && token.value === '^') {
        i++
        node = new BinaryOp('^', node, parse_factor())
      } else {
        break
      }
    }
    return node
  }
  const parse_factor = () => {
    const token = tokens[i]
    if (token.type === 'lparen') {
      i++
      const node = parse_expression()
      if (tokens[i].type !== 'rparen') {
        throw new Error('Expected ) at ' + tokens[i].start)
      }
      i++
      return node
    } else if (token.type === 'pipe') {
      i++
      const node = parse_expression()
      if (tokens[i].type !== 'pipe') {
        throw new Error('Expected | at ' + tokens[i].start)
      }
      i++
      return new UnaryOp('abs', node)
    } else if (token.type === 'unary') {
      i++
      return new UnaryOp(token.value, parse_factor())
    } else if (token.type === 'float' || token.type === 'integer') {
      i++
      return new Leaf('number', parseFloat(token.value))
    } else if (token.type === 'imaginary') {
      i++
      return new Leaf('imaginary', parseFloat(token.value))
    } else if (token.type === 'identifier') {
      i++
      return new Leaf('identifier', token.value)
    } else {
      throw new Error(`Unexpected token ${token}`)
    }
  }
  const ast = parse_expression()
  if (i !== tokens.length) {
    throw new Error(`Unexpected token ${tokens[i]}`)
  }
  return ast
}

export const ast = s => parse(tokenize(s))

window.tokenize = tokenize
window.parse = parse
window.ast = ast
