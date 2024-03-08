const tokens = {
  whitespace: /^\s+/,
  float: /^([0-9]+([.][0-9]*)?|[.][0-9]+)/,
  integer: /^[0-9]+/,
  operator: /^(\*\*|[+\-*/^]|\|-\|)/,
  unaryPrefix: /^~/,
  unarySuffix: /^(\.re|\.im)/,
  identifier: /^[a-zA-Z_][a-zA-Z0-9_]*'?/,
  pipe: /^\|/,
  hash: /^#/,
  lparen: /^\(/,
  rparen: /^\)/,
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
  '|-|': 'diffabs',
}
const shaderUnary = {
  '-': '-',
  '~': 'conj',
  abs: 'abs',
  sign: 'sign',
}
const complexBinary = {
  '+': 'add',
  '-': 'subtract',
  '*': 'multiply',
  '/': 'divide',
  '^': 'pow',
}
const complexUnary = {
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
  isPureReal() {
    return (
      (this.left.isPureReal() && this.right.isPureReal()) ||
      (this.left.isPureImag() && this.right.isPureImag())
    )
  }

  isPureImag() {
    if (['+', '-'].includes(this.type)) {
      return this.left.isPureImag() && this.right.isPureImag()
    }
    if (['*', '/'].includes(this.type)) {
      // XOR here to keep pure imaginary numbers
      return (
        (this.left.isPureImag() && this.right.isPureReal()) ||
        (this.left.isPureReal() && this.right.isPureImag())
      )
    }
    return false
  }

  toTree() {
    return `<${this.type}: ${this.left.toTree()} ${this.right.toTree()}>`
  }

  toString() {
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3,
    }

    let left = this.left.toString()
    let right = this.right.toString()
    if (this.type === 'complex') {
      return `(${left} + ${right}i)`
    }
    if (
      this.left instanceof BinaryOp &&
      precedence[this.left.type] < precedence[this.type]
    ) {
      left = `(${left})`
    }
    if (
      this.right instanceof BinaryOp &&
      precedence[this.right.type] < precedence[this.type]
    ) {
      right = `(${right})`
    }
    return `${left} ${this.type} ${right}`
  }

  toShader() {
    if (
      this.type === '^' &&
      (this.right.type === 'number' ||
        (this.right instanceof UnaryOp && this.right.operand.type === 'number'))
    ) {
      let k = 0
      if (this.right instanceof UnaryOp) {
        k = this.right.operand.value * (this.right.type === '-' ? -1 : 1)
      } else {
        k = this.right.value
      }
      if (k % 1 === 0) {
        if (k === 1) {
          return this.left.toShader()
        }
        if (k > 0 && k < 10) {
          return `cpow${k}(${this.left.toShader()})`
        } else {
          return `cpow(${this.left.toShader()}, ${k})`
        }
      } else {
        return `cpow(${this.left.toShader()}, ${k})`
      }
    }

    return `${shaderBinary[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`
  }
  toComplex() {
    return `(${this.left.toComplex()}).${complexBinary[this.type]}(${this.right.toComplex()})`
  }
  toDerivative(...wrt) {
    if (['+', '-'].includes(this.type)) {
      if (
        this.left.type === 'number' ||
        (this.left.type === 'identifier' && !wrt.includes(this.left.value))
      ) {
        return this.right.toDerivative(...wrt)
      }

      if (
        this.right.type === 'number' ||
        (this.right.type === 'identifier' && !wrt.includes(this.right.value))
      ) {
        return this.left.toDerivative(...wrt)
      }
      return new BinaryOp(
        this.type,
        this.left.toDerivative(...wrt),
        this.right.toDerivative(...wrt)
      )
    }
    if (this.type === '*') {
      if (
        this.left.type === 'number' ||
        (this.left.type === 'identifier' && !wrt.includes(this.left.value))
      ) {
        return new BinaryOp('*', this.left, this.right.toDerivative(...wrt))
      }
      if (
        this.right.type === 'number' ||
        (this.right.type === 'identifier' && !wrt.includes(this.right.value))
      ) {
        return new BinaryOp('*', this.left.toDerivative(...wrt), this.right)
      }
      return new BinaryOp(
        '+',
        new BinaryOp('*', this.left.toDerivative(...wrt), this.right),
        new BinaryOp('*', this.left, this.right.toDerivative(...wrt))
      )
    }
    if (this.type === '/') {
      if (
        this.left.type === 'number' ||
        (this.left.type === 'identifier' && !wrt.includes(this.left.value))
      ) {
        return new BinaryOp(
          '/',
          this.left.toDerivative(...wrt),
          new BinaryOp('^', this.right, new Leaf('number', 2))
        )
      }
      if (
        this.right.type === 'number' ||
        (this.right.type === 'identifier' && !wrt.includes(this.right.value))
      ) {
        return new BinaryOp(
          '/',
          new BinaryOp(
            '-',
            new BinaryOp('*', this.left.toDerivative(...wrt), this.right),
            new BinaryOp('*', this.left, this.right.toDerivative(...wrt))
          ),
          new BinaryOp('^', this.right, new Leaf('number', 2))
        )
      }
      return new BinaryOp(
        '/',
        new BinaryOp(
          '-',
          new BinaryOp('*', this.left.toDerivative(...wrt), this.right),
          new BinaryOp('*', this.left, this.right.toDerivative(...wrt))
        ),
        new BinaryOp('^', this.right, new Leaf('number', 2))
      )
    }
    if (this.type === '^') {
      if (
        this.left.type === 'number' ||
        (this.left.type === 'identifier' && !wrt.includes(this.left.value))
      ) {
        return new BinaryOp(
          '*',
          new BinaryOp(
            '*',
            new BinaryOp('^', this.left, this.right),
            new FunctionOp('log', [this.left])
          ),
          this.right.toDerivative(...wrt)
        )
      }
      if (
        this.right.type === 'number' ||
        (this.right.type === 'identifier' && !wrt.includes(this.right.value))
      ) {
        return new BinaryOp(
          '*',
          new BinaryOp(
            '*',
            this.right,
            new BinaryOp(
              '^',
              this.left,
              new BinaryOp('-', this.right, new Leaf('number', 1))
            )
          ),
          this.left.toDerivative(...wrt)
        )
      }
      return new BinaryOp(
        '*',
        this,
        new FunctionOp('*', [
          new FunctionOp('log', [this.left]),
          new BinaryOp(
            '*',
            this.right,
            new FunctionOp('^', [
              this.left,
              new BinaryOp('-', this.right, new Leaf('number', 1)),
            ])
          ),
        ])
      )
    }

    return new BinaryOp(
      this.type,
      this.left.toDerivative(...wrt),
      this.right.toDerivative(...wrt)
    )
  }
  solve() {
    const left = this.left.solve()
    const right = this.right.solve()
    if (this.type === '+') {
      if (left.type === 'number' && left.value === 0) {
        return right
      }
      if (right.type === 'number' && right.value === 0) {
        return left
      }
    }
    if (this.type === '-') {
      if (right.type === 'number' && right.value === 0) {
        return left
      }
    }

    if (this.type === '*') {
      if (
        (left.type === 'number' && left.value === 0) ||
        (right.type === 'number' && right.value === 0)
      ) {
        return new Leaf('number', 0)
      }
      if (left.type === 'number' && left.value === 1) {
        return right
      }
      if (right.type === 'number' && right.value === 1) {
        return left
      }
    }
    if (this.type === '/') {
      if (left.type === 'number' && left.value === 0) {
        return new Leaf('number', 0)
      }
      if (right.type === 'number' && right.value === 1) {
        return left
      }
    }
    if (
      this.type === '^' &&
      (right.type === 'number' ||
        (right instanceof UnaryOp && right.operand.type === 'number'))
    ) {
      let k = 0
      if (right instanceof UnaryOp) {
        k = right.operand.value * (right.type === '-' ? -1 : 1)
      } else {
        k = right.value
      }
      if (k === 0) {
        return new Leaf('number', 1)
      }
      if (k === 1) {
        return left
      }
    }
    if (right.type === 'number' && left.type === 'number') {
      return new Leaf(
        'number',
        // eslint-disable-next-line no-eval
        eval(`${left.value} ${this.type} ${right.value}`)
      )
    }
    if (left.type === 'complex' && right.isPureReal()) {
      if (['+', '-'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left.real, right),
          left.imag
        ).solve()
      }
      if (['*', '/'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left.real, right),
          new BinaryOp(this.type, left.imag, right)
        ).solve()
      }
    }
    if (left.isPureReal() && right.type === 'complex') {
      if (['+', '-'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left, right.real),
          right.imag
        ).solve()
      }
      if (['*', '/'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left, right.real),
          new BinaryOp(this.type, left, right.imag)
        ).solve()
      }
    }
    if (left.type === 'complex' && right.type === 'complex') {
      if (['+', '-'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left.real, right.real),
          new BinaryOp(this.type, left.imag, right.imag)
        ).solve()
      }
      if (this.type === '*') {
        return new Complex(
          new BinaryOp(
            '-',
            new BinaryOp('*', left.real, right.real),
            new BinaryOp('*', left.imag, right.imag)
          ),
          new BinaryOp(
            '+',
            new BinaryOp('*', left.real, right.imag),
            new BinaryOp('*', left.imag, right.real)
          )
        ).solve()
      }
      if (this.type === '/') {
        const denominator = new BinaryOp(
          '+',
          new BinaryOp('^', right.real, 2),
          new BinaryOp('^', right.imag, 2)
        )
        return new Complex(
          new BinaryOp(
            '/',
            new BinaryOp(
              '+',
              new BinaryOp('*', left.real, right.real),
              new BinaryOp('*', left.imag, right.imag)
            ),
            denominator
          ),
          new BinaryOp(
            '/',
            new BinaryOp(
              '-',
              new BinaryOp('*', left.imag, right.real),
              new BinaryOp('*', left.real, right.imag)
            ),
            denominator
          )
        ).solve()
      }
    }
    return new BinaryOp(this.type, left, right)
  }
}

class UnaryOp {
  constructor(type, operand) {
    this.type = type
    this.operand = operand
  }
  isPureReal() {
    return this.operand.isPureReal() || ['.re', '.im'].includes(this.type)
  }
  isPureImag() {
    return ['+', '-', '~'].includes(this.type) && this.operand.isPureImag()
  }

  toTree() {
    return `<${this.type}: ${this.operand.toTree()}>`
  }
  toString() {
    return `${this.type}(${this.operand.toString()})`
  }
  toShader() {
    if (this.type === '.re') {
      return `${this.operand.toShader()}.x`
    }
    if (this.type === '.im') {
      return `${this.operand.toShader()}.y`
    }
    if (this.type === '+') {
      return this.operand.toShader()
    }
    return `${shaderUnary[this.type]}(${this.operand.toShader()})`
  }
  toComplex() {
    if (this.type === '+') {
      return this.operand.toComplex()
    }
    return `(${this.operand.toComplex()}).${complexUnary[this.type]}()`
  }
  toDerivative(...wrt) {
    return new UnaryOp(this.type, this.operand.toDerivative(...wrt))
  }
  solve() {
    const operand = this.operand.solve()
    if (this.type === '+') {
      return operand
    }
    if (this.type === '-' && operand.type === 'number') {
      return new Leaf('number', -operand.value)
    }
    return new UnaryOp(this.type, operand)
  }
}

class FunctionOp {
  constructor(name, args) {
    this.name = name.toLowerCase()
    this.args = args
  }
  isPureReal() {
    return ['abs', 're', 'im'].includes(this.name)
  }
  isPureImag() {
    return false // FIXME: how?
  }

  toTree() {
    return `<${this.name}(): ${this.args.map(a => a.toTree()).join(', ')}>`
  }
  toString() {
    return `${this.name}(${this.args.map(a => a.toString()).join(', ')})`
  }
  toShader() {
    return `${this.name}(${this.args.map(a => a.toShader()).join(', ')})`
  }
  toComplex() {
    return `${this.args[0].toComplex()}.${this.name}(${this.args
      .slice(1)
      .map(a => a.toComplex())
      .join(', ')})`
  }
  toDerivative(...wrt) {
    if (this.name === 'log') {
      return new BinaryOp('/', this.args[0].toDerivative(...wrt), this.args[0])
    }
    if (this.name === 'exp') {
      return new BinaryOp('*', this, this.args[0].toDerivative(...wrt))
    }
    if (this.name === 'sin') {
      return new BinaryOp(
        '*',
        new FunctionOp('cos', this.args),
        this.args[0].toDerivative(...wrt)
      )
    }
    if (this.name === 'cos') {
      return new BinaryOp(
        '*',
        new UnaryOp('-', new FunctionOp('sin', this.args)),
        this.args[0].toDerivative(...wrt)
      )
    }
    if (this.name === 'tan') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(...wrt),
        new BinaryOp('^', new FunctionOp('cos', this.args), 2)
      )
    }
    if (this.name === 'asin') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(...wrt),
        new BinaryOp(
          '^',
          new BinaryOp(
            '-',
            new Leaf('number', 1),
            new BinaryOp('^', this.args[0], 2)
          ),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'acos') {
      return new BinaryOp(
        '/',
        new UnaryOp('-', this.args[0].toDerivative(...wrt)),
        new BinaryOp(
          '^',
          new BinaryOp(
            '-',
            new Leaf('number', 1),
            new BinaryOp('^', this.args[0], 2)
          ),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'atan') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(...wrt),
        new BinaryOp(
          '+',
          new Leaf('number', 1),
          new BinaryOp('^', this.args[0], 2)
        )
      )
    }
    if (this.name === 'sinh') {
      return new BinaryOp(
        '*',
        new FunctionOp('cosh', this.args),
        this.args[0].toDerivative(...wrt)
      )
    }
    if (this.name === 'cosh') {
      return new BinaryOp(
        '*',
        new FunctionOp('sinh', this.args),
        this.args[0].toDerivative(...wrt)
      )
    }
    if (this.name === 'tanh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(...wrt),
        new BinaryOp('^', new FunctionOp('cosh', this.args), 2)
      )
    }
    if (this.name === 'asinh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(...wrt),
        new BinaryOp(
          '^',
          new BinaryOp('+', new BinaryOp('^', this.args[0], 2), 1),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'acosh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(...wrt),
        new BinaryOp(
          '^',
          new BinaryOp('-', new BinaryOp('^', this.args[0], 2), 1),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'atanh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(...wrt),
        new BinaryOp('-', 1, new BinaryOp('^', this.args[0], 2))
      )
    }
    if (this.name === 'log2') {
      return new BinaryOp(
        '/',
        new FunctionOp('log', [new Leaf('number', 2)]),
        this.args[0].toDerivative(...wrt)
      )
    }
    if (this.name === 'log10') {
      return new BinaryOp(
        '/',
        new FunctionOp('log', [new Leaf('number', 10)]),
        this.args[0].toDerivative(...wrt)
      )
    }
    return new FunctionOp(`${this.name}'`, [
      this.args[0],
      ...this.args.slice(1).map(a => a.toDerivative(...wrt)),
    ])
  }
  solve() {
    const args = this.args.map(a => a.solve())
    return new FunctionOp(this.name, args)
  }
}

class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
    this.type = 'complex'
  }
  isPureReal() {
    return false
  }
  isPureImag() {
    return false
  }

  toTree() {
    return `<complex: ${this.real.toTree()} + ${this.imag.toTree()}i>`
  }
  toString() {
    return `${this.real.toString()} + ${this.imag.toString()}i`
  }
  toShader() {
    return `vec2(${this.real.toShader()}, ${this.imag.toShader()})`
  }
  toComplex() {
    return `cx(${this.real.toComplex()}, ${this.imag.toComplex()})`
  }
  toDerivative(...wrt) {
    return new Complex(
      this.real.toDerivative(...wrt),
      this.imag.toDerivative(...wrt)
    )
  }
  solve() {
    return new Complex(this.real.solve(), this.imag.solve())
  }
}

class Leaf {
  constructor(type, value) {
    this.type = type
    this.value = value
  }
  isPureReal() {
    return this.type === 'number'
  }
  isPureImag() {
    return this.type === 'identifier' && this.value === 'i'
  }

  toTree() {
    return `<${this.type}: ${this.value}>`
  }
  toString() {
    return `${this.value}`
  }
  toShader() {
    if (this.isPureImag()) {
      return 'vec2(0., 1.)'
    }
    if (this.type === 'identifier') {
      return this.value.replace(/'/g, '_prime')
    }
    return `${this.value.toFixed(6)}`
  }
  toComplex() {
    if (this.isPureImag()) {
      return 'cx(0, 1)'
    }
    if (this.type === 'identifier') {
      return this.value.replace(/'/g, '_prime')
    }
    return `cx(${this.value})`
  }
  toDerivative(...wrt) {
    if (this.type === 'identifier' && wrt.includes(this.value)) {
      return new Leaf('identifier', `${this.value}'`)
    }
    return this
  }
  solve() {
    if (this.type === 'identifier' && this.value === 'i') {
      return new Complex(new Leaf('number', 0), new Leaf('number', 1))
    }
    return this
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
      } else if (
        token.type === 'identifier' &&
        tokens[i + 1]?.type !== 'lparen'
      ) {
        i++
        node = new BinaryOp('*', node, new Leaf('identifier', token.value))
      } else if (['lparen', 'identifier'].includes(token.type)) {
        node = new BinaryOp('*', node, factor())
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
      const identifier = new Leaf('identifier', token.value)
      if (tokens[i]?.type === 'lparen') {
        i++
        const args = []
        while (tokens[i]?.type !== 'rparen') {
          args.push(expression())
          if (!tokens[i]) {
            throw new Error('Expected ) at EOF')
          }
          if (tokens[i]?.type === 'comma') {
            i++
          }
        }
        i++
        return new FunctionOp(identifier.value, args)
      }
      return identifier
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

export const ast = s => parse(tokenize(s)).solve()

window.tokenize = tokenize
window.parse = parse
window.ast = ast
window.Ast = s => parse(tokenize(s))
