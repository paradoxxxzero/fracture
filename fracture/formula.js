import { consts } from './decimal'

const tokens = {
  whitespace: /^\s+/,
  float: /^([0-9]+([.][0-9]*)?|[.][0-9]+)/,
  integer: /^[0-9]+/,
  operator: /^(\*\*|[+\-*/%]|\^{1,2}|\|-\|)/,
  unaryPrefix: /^~/,
  unarySuffix: /^#/,
  identifier: /^[a-zA-Z_][a-zA-Z0-9_]*'*/,
  pipe: /^\|/,
  lparen: /^\(/,
  rparen: /^\)/,
  comma: /^,/,
}
const precedence = {
  '+': 1,
  '-': 2,
  '*': 3,
  '/': 4,
  '%': 5,
  '~': 5,
  '^': 6,
  '^^': 6,
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
  '%': 'cmod',
  '^': 'cpow',
  '^^': 'ctetra',
  '|-|': 'diffabs',
}

export const functionShader = {
  R: 'R',
  I: 'I',
  sqrt: 'csqrt',
  cos: 'ccos',
  sin: 'csin',
  tan: 'ctan',
  acos: 'cacos',
  asin: 'casin',
  atan: 'catan',
  cosh: 'ccosh',
  sinh: 'csinh',
  tanh: 'ctanh',
  acosh: 'cacosh',
  asinh: 'casinh',
  atanh: 'catanh',
  log: 'clog',
  exp: 'cexp',
  expint: 'cexpint',
  lint: 'clint',
  abs: 'cnorm',
  norm: 'cnorm',
  arg: 'carg',
  polar: 'cpolar',
  unpolar: 'cunpolar',
  mod: 'cmod',
  beta: 'cbeta',
  "beta'": 'cdbeta',
  gamma: 'cgamma',
  "gamma'": 'cdgamma',
  factorial: 'cfactorial',
  eta: 'ceta',
  zeta: 'czeta',
  "zeta'": 'cdzeta',
  psi: 'cpsi',
  polygamma: 'cpolygamma',
  phi: 'cphi',
  xi: 'cxi',
  li: 'cli',
  sn: 'csn',
  cn: 'ccn',
  dn: 'cdn',
  tania: 'ctania',
  "tania'": 'cdtania',
  atania: 'catania',
  "atania'": 'cdatania',
  doya: 'cdoya',
  filog: 'cfilog',
  tet: 'ctet',
  ate: 'cate',
  tetra: 'ctetranat',
  fibonacci: 'cfibonacci',
  fibonaccir: 'cfibonaccir',
  weierstrass: 'cweierstrass',
  "weierstrass'": 'cdweierstrass',
  weierstrassr: 'cweierstrassr',
  nome: 'cnome',
  ellk: 'cellk',
  ellfi: 'cellipticFi',
  erf: 'cerf',
  "erf'": 'cderf',
  erfc: 'cerfc',
  erfcx: 'cerfcx',
  erfi: 'cerfi',
  dawson: 'cdawson',
  faddeeva: 'cfaddeeva',
  "faddeeva'": 'cdfaddeeva',
  fresnels: 'cfresnels',
  fresnelc: 'cfresnelc',
  fresnelf: 'cfresnelf',
  fresnelg: 'cfresnelg',
  lambertw: 'clambertw',
  W0: 'clambertw',
  omega: 'comega',
  sec: 'csec',
  csc: 'ccsc',
  cot: 'ccot',
  sech: 'csech',
  csch: 'ccsch',
  coth: 'ccoth',
  acot: 'cacot',
  asec: 'casec',
  acsc: 'cacsc',
  acoth: 'cacoth',
  asech: 'casech',
  acsch: 'cacsch',
  cbrt: 'ccbrt',
  root: 'croot',
  sinc: 'csinc',
  floor: 'cfloor',
  ceil: 'cceil',
  round: 'cround',
  frac: 'cfrac',
  log2: 'clog2',
  log10: 'clog10',
  logb: 'clogb',
  sgn: 'csgn',
  lgamma: 'clgamma',
  rgamma: 'crgamma',
  trigamma: 'ctrigamma',
  "psi'": 'ctrigamma',
  gammal: 'cgammal',
  gammau: 'cgammau',
  gammap: 'cgammap',
  gammaq: 'cgammaq',
  rstheta: 'crstheta',
  riemannz: 'criemannz',
  dirichletbeta: 'cdirichletbeta',
  dirichletl3: 'cdirichletl3',
  dirichletlambda: 'cdirichletlambda',
  qnome: 'cqnome',
  theta1: 'ctheta1',
  theta2: 'ctheta2',
  theta3: 'ctheta3',
  theta4: 'ctheta4',
  "theta1'": 'cdtheta1',
  "theta2'": 'cdtheta2',
  "theta3'": 'cdtheta3',
  "theta4'": 'cdtheta4',
  qpoch: 'cqpoch',
  eulerq: 'ceulerq',
  dedekind: 'cdedekind',
  eisenstein4: 'ceisenstein4',
  eisenstein6: 'ceisenstein6',
  kleinj: 'ckleinj',
  modlambda: 'cmodlambda',
  ellke: 'cellke',
  wp: 'cwp',
  hyp0f1: 'chyp0f1',
  hyp1f1: 'chyp1f1',
  hyp2f1: 'chyp2f1',
  legendre: 'clegendrep',
  chebyshevt: 'cchebyshevt',
  chebyshevu: 'cchebyshevu',
  laguerre: 'claguerre',
  hermite: 'chermite',
  besselj: 'cbesselj',
  bessely: 'cbessely',
  besselh1: 'cbesselh1',
  besselh2: 'cbesselh2',
  besseli: 'cbesseli',
  besselk: 'cbesselk',
  airyai: 'cairyai',
  airybi: 'cairybi',
  sinint: 'csinint',
  cosint: 'ccosint',
  sinhint: 'csinhint',
  coshint: 'ccoshint',
}
const opFunctions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '%': (a, b) => a % b,
  '^': (a, b) => a ** b,
  '^^': (a, b) => {
    let result = 1
    for (let i = 0; i < b; i++) {
      result = a ** result
    }
    return result
  },
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
  '%': 'mod',
  '^': 'pow',
  '^^': 'tetra',
}
const complexUnary = {
  '-': 'neg',
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
  is(other) {
    return (
      this.type === other.type &&
      this.left.is(other.left) &&
      this.right.is(other.right)
    )
  }
  clone(replace = null, value = null) {
    let left = this.left
    let right = this.right

    if (replace) {
      if (left.is(replace)) {
        left = value
      }
      if (right.is(replace)) {
        right = value
      }
    }
    return new BinaryOp(
      this.type,
      left.clone(replace, value),
      right.clone(replace, value)
    )
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
    let left = this.left.toString()
    let right = this.right.toString()
    if (this.type === 'complex') {
      return `(${left} + ${right}i)`
    }
    if (
      (this.left instanceof BinaryOp &&
        precedence[this.left.type] < precedence[this.type]) ||
      (precedence[this.left.type] === precedence[this.type] &&
        ['-', '/', '^', '^^'].includes(this.type))
    ) {
      left = `(${left})`
    }
    if (
      (this.right instanceof BinaryOp &&
        precedence[this.right.type] < precedence[this.type]) ||
      (precedence[this.right.type] === precedence[this.type] &&
        ['-', '/', '^', '^^'].includes(this.type))
    ) {
      right = `(${right})`
    }
    if (['^', '^^'].includes(this.type)) {
      return `${left}${this.type}${right}`
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
      }
    }

    return `${shaderBinary[this.type]}(${this.left.toShader()}, ${this.right.toShader()})`
  }
  toComplex() {
    return `(${this.left.toComplex()}).${complexBinary[this.type]}(${this.right.toComplex()})`
  }
  toDerivative(wrt_funs, wrt_vars) {
    const wrt = [...wrt_funs, ...wrt_vars]
    if (['+', '-'].includes(this.type)) {
      return new BinaryOp(
        this.type,
        this.left.toDerivative(wrt_funs, wrt_vars),
        this.right.toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.type === '*') {
      return new BinaryOp(
        '+',
        new BinaryOp(
          '*',
          this.left.toDerivative(wrt_funs, wrt_vars),
          this.right
        ),
        new BinaryOp(
          '*',
          this.left,
          this.right.toDerivative(wrt_funs, wrt_vars)
        )
      )
    }
    if (this.type === '/') {
      return new BinaryOp(
        '/',
        new BinaryOp(
          '-',
          new BinaryOp(
            '*',
            this.left.toDerivative(wrt_funs, wrt_vars),
            this.right
          ),
          new BinaryOp(
            '*',
            this.left,
            this.right.toDerivative(wrt_funs, wrt_vars)
          )
        ),
        new BinaryOp('^', this.right, new Leaf('number', 2))
      )
    }
    if (this.type === '^') {
      return new BinaryOp(
        '*',
        new BinaryOp(
          '^',
          this.left,
          new BinaryOp('-', this.right, new Leaf('number', 1))
        ),
        new BinaryOp(
          '+',
          new BinaryOp(
            '*',
            this.right,
            this.left.toDerivative(wrt_funs, wrt_vars)
          ),
          new BinaryOp(
            '*',
            new BinaryOp('*', this.left, new FunctionOp('log', [this.left])),
            this.right.toDerivative(wrt_funs, wrt_vars)
          )
        )
      )
    }
    if (this.type === '^^') {
      if (
        (this.left.type === 'number' ||
          (this.left.type === 'identifier' &&
            !wrt.includes(this.left.value))) &&
        (this.right.type === 'number' ||
          (this.right.type === 'identifier' && !wrt.includes(this.right.value)))
      ) {
        return this
      }
      const tetrationDerivative = (expr, n) =>
        n <= 1
          ? new Leaf('number', 1)
          : new BinaryOp(
              '*',
              new BinaryOp('^^', expr, new Leaf('number', n)),
              new BinaryOp(
                '+',
                new BinaryOp(
                  '*',
                  tetrationDerivative(expr, n - 1),
                  new FunctionOp('log', [expr])
                ),
                new BinaryOp(
                  '*',
                  new BinaryOp('^^', expr, new Leaf('number', n - 1)),
                  new BinaryOp('/', new Leaf('number', 1), expr)
                )
              )
            )
      if (this.right.type === 'number') {
        return new BinaryOp(
          '*',
          this.left.toDerivative(wrt_funs, wrt_vars),
          tetrationDerivative(this.left, this.right.value)
        )
      }
    }

    return new BinaryOp(
      this.type,
      this.left.toDerivative(wrt_funs, wrt_vars),
      this.right.toDerivative(wrt_funs, wrt_vars)
    )
  }
  simplify() {
    const left = this.left.simplify()
    const right = this.right.simplify()
    if (this.type === '+') {
      if (left.type === 'number' && left.value === 0) {
        return right
      }
      if (right.type === 'number' && right.value === 0) {
        return left
      }
    }
    if (this.type === '-') {
      if (left.type === 'number' && left.value === 0) {
        return new UnaryOp('-', right).simplify()
      }
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
      if (left.type === '^' && left.right.type === 'number') {
        return new BinaryOp(
          '^',
          left.left,
          new Leaf('number', left.right.value * k)
        ).simplify()
      }
    }
    if (
      this.type === '^^' &&
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
      const op = this.type === '**' ? '^' : this.type
      const result = opFunctions[op](left.value, right.value)
      if (result % 1 === 0) {
        return new Leaf('number', opFunctions[op](left.value, right.value))
      }
      return this
    }
    if (left.type === 'complex' && right.isPureReal()) {
      if (['+', '-'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left.real, right),
          left.imag
        ).simplify()
      }
      if (['*', '/'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left.real, right),
          new BinaryOp(this.type, left.imag, right)
        ).simplify()
      }
    }
    if (left.isPureReal() && right.type === 'complex') {
      if (['+', '-'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left, right.real),
          right.imag
        ).simplify()
      }
      if (['*', '/'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left, right.real),
          new BinaryOp(this.type, left, right.imag)
        ).simplify()
      }
    }
    if (left.type === 'complex' && right.type === 'complex') {
      if (['+', '-'].includes(this.type)) {
        return new Complex(
          new BinaryOp(this.type, left.real, right.real),
          new BinaryOp(this.type, left.imag, right.imag)
        ).simplify()
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
        ).simplify()
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
        ).simplify()
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

  is(other) {
    return this.type === other.type && this.operand.is(other.operand)
  }
  clone(replace = null, value = null) {
    let op = this.operand

    if (replace) {
      if (op.is(replace)) {
        op = value
      }
    }
    return new UnaryOp(this.type, op.clone(replace, value))
  }
  isPureReal() {
    return this.operand.isPureReal()
  }
  isPureImag() {
    return ['+', '-', '~'].includes(this.type) && this.operand.isPureImag()
  }

  toTree() {
    return `<${this.type}: ${this.operand.toTree()}>`
  }
  toString() {
    let op = this.operand.toString()
    if (
      (this.operand instanceof BinaryOp &&
        precedence[this.operand.type] < precedence[this.type]) ||
      (precedence[this.operand.type] === precedence[this.type] &&
        ['-', '/', '^'].includes(this.type))
    ) {
      op = `(${op})`
    }
    return `${this.type}${op}`
  }
  toShader() {
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
  toDerivative(wrt_funs, wrt_vars) {
    return new UnaryOp(this.type, this.operand.toDerivative(wrt_funs, wrt_vars))
  }
  simplify() {
    const operand = this.operand.simplify()
    if (this.type === '+') {
      return operand
    }
    if (this.type === "'") {
      return operand.toDerivative([], ['z', 'z_1']).simplify()
    }
    if (this.type === '#') {
      return new BinaryOp(
        '/',
        operand,
        operand.toDerivative([], ['z', 'z_1'])
      ).simplify()
    }
    if (this.type === '-' && operand.type === 'number') {
      return new Leaf('number', -operand.value)
    }
    if (
      operand instanceof UnaryOp &&
      ['-', '~'].includes(this.type) &&
      operand.type === this.type
    ) {
      return operand.operand
    }

    return new UnaryOp(this.type, operand)
  }
}

const num = v => new Leaf('number', v)
const ident = v => new Leaf('identifier', v)
const bin = (op, l, r) => new BinaryOp(op, l, r)
const fn = (name, ...args) => new FunctionOp(name, args)
const twoOverSqrtPi = () => bin('/', num(2), fn('sqrt', ident('PI')))

// Derivatives of the functions that have a closed form in terms of others.
// The derivative is taken with respect to the variable argument (the first
// one, except for hypergeometric and incomplete gamma functions: the last).
const specialDerivative = (op, wrt_funs, wrt_vars) => {
  const { name, args } = op
  const z = args[0]
  const last = args[args.length - 1]
  const dz = z.toDerivative(wrt_funs, wrt_vars)
  const dlast = last.toDerivative(wrt_funs, wrt_vars)
  const chain = (outer, d = dz) => bin('*', outer, d)
  const nu = args[1]
  const shift = k => bin(k < 0 ? '-' : '+', nu, num(Math.abs(k)))
  switch (name) {
    case 'sec':
      return chain(bin('*', fn('sec', z), fn('tan', z)))
    case 'csc':
      return chain(new UnaryOp('-', bin('*', fn('csc', z), fn('cot', z))))
    case 'cot':
      return bin('/', new UnaryOp('-', dz), bin('^', fn('sin', z), num(2)))
    case 'sech':
      return chain(new UnaryOp('-', bin('*', fn('sech', z), fn('tanh', z))))
    case 'csch':
      return chain(new UnaryOp('-', bin('*', fn('csch', z), fn('coth', z))))
    case 'coth':
      return bin('/', new UnaryOp('-', dz), bin('^', fn('sinh', z), num(2)))
    case 'cbrt':
      return bin('/', dz, bin('*', num(3), bin('^', fn('cbrt', z), num(2))))
    case 'lgamma':
      return chain(fn('psi', z))
    case 'expint':
      return chain(bin('/', fn('exp', z), z))
    case 'lint':
      return chain(bin('/', num(1), fn('log', z)))
    case 'sinint':
      return chain(bin('/', fn('sin', z), z))
    case 'cosint':
      return chain(bin('/', fn('cos', z), z))
    case 'sinhint':
      return chain(bin('/', fn('sinh', z), z))
    case 'coshint':
      return chain(bin('/', fn('cosh', z), z))
    case 'erfc':
      return chain(new UnaryOp('-', fn("erf'", z)))
    case 'erfi':
      return chain(bin('*', twoOverSqrtPi(), fn('exp', bin('^', z, num(2)))))
    case 'dawson':
      return chain(
        bin('-', num(1), bin('*', num(2), bin('*', z, fn('dawson', z))))
      )
    case 'lambertw':
    case 'W0':
      return chain(
        bin('/', op, bin('*', z, bin('+', num(1), fn('lambertw', ...args))))
      )
    case 'omega':
      return chain(bin('/', op, bin('+', num(1), op)))
    case 'besselj':
    case 'bessely':
      if (args.length === 2) {
        return chain(
          bin(
            '/',
            bin('-', fn(name, z, shift(-1)), fn(name, z, shift(1))),
            num(2)
          )
        )
      }
      return null
    case 'besseli':
      if (args.length === 2) {
        return chain(
          bin(
            '/',
            bin('+', fn(name, z, shift(-1)), fn(name, z, shift(1))),
            num(2)
          )
        )
      }
      return null
    case 'besselk':
      if (args.length === 2) {
        return chain(
          new UnaryOp(
            '-',
            bin(
              '/',
              bin('+', fn(name, z, shift(-1)), fn(name, z, shift(1))),
              num(2)
            )
          )
        )
      }
      return null
    case 'hyp2f1':
      if (args.length === 4) {
        const [a, b, c] = args
        return chain(
          bin(
            '*',
            bin('/', bin('*', a, b), c),
            fn(
              name,
              bin('+', a, num(1)),
              bin('+', b, num(1)),
              bin('+', c, num(1)),
              last
            )
          ),
          dlast
        )
      }
      return null
    case 'hyp1f1':
      if (args.length === 3) {
        const [a, b] = args
        return chain(
          bin(
            '*',
            bin('/', a, b),
            fn(name, bin('+', a, num(1)), bin('+', b, num(1)), last)
          ),
          dlast
        )
      }
      return null
    case 'hyp0f1':
      if (args.length === 2) {
        return chain(bin('/', fn(name, bin('+', z, num(1)), last), z), dlast)
      }
      return null
    case 'gammal':
    case 'gammau': {
      // derivative with respect to the second argument
      const [s] = args
      const d = bin(
        '*',
        bin('^', last, bin('-', s, num(1))),
        fn('exp', new UnaryOp('-', last))
      )
      return chain(name === 'gammal' ? d : new UnaryOp('-', d), dlast)
    }
    default:
      return null
  }
}

class FunctionOp {
  constructor(name, args) {
    this.name = name
    this.args = args
    this.type = 'function'
  }
  is(other) {
    return (
      this.type === other.type &&
      this.name === other.name &&
      this.args.every((a, i) => a.is(other.args[i]))
    )
  }
  clone(replace = null, value = null) {
    return new FunctionOp(
      this.name,
      this.args.map(a => a.clone(replace, value))
    )
  }
  isPureReal() {
    return ['abs', 're', 'im'].includes(this.name)
  }
  isPureImag() {
    return false
  }

  toTree() {
    return `<${this.name}(): ${this.args.map(a => a.toTree()).join(', ')}>`
  }
  toString() {
    return `${this.name}(${this.args.map(a => a.toString()).join(', ')})`
  }
  toShader() {
    if (
      ['sum', 'product'].includes(this.name) &&
      this.args.length === 4 &&
      this.args[0].type === 'identifier' &&
      this.args[1].type === 'number' &&
      this.args[2].type === 'number'
    ) {
      const [identifier, start, end, expr] = this.args
      let node = new Leaf('number', this.name === 'sum' ? 0 : 1)
      for (let i = start.value; i <= end.value; i++) {
        node = new BinaryOp(
          this.name === 'sum' ? '+' : '*',
          node,
          expr.clone(identifier, new Leaf('number', i))
        )
      }
      return node.simplify().toShader()
    }
    if (this.args.length === 0) {
      return `${functionShader[this.name] || this.name}()`
    }
    if (this.name === 're') {
      const child = this.args[0].toShader()
      if (this.args[0].type === 'number') {
        return child
      }
      return `vec2(${child}.x, 0.)`
    }
    if (this.name === 'im') {
      if (this.args[0].type === 'number') {
        return new Leaf('number', 0).toShader()
      }
      return `vec2(${this.args[0].toShader()}.y, 0.)`
    }
    return `${functionShader[this.name] || this.name}(${this.args.map(a => a.toShader()).join(', ')})`
  }
  toComplex() {
    let name = { re: 'real', im: 'imag' }[this.name] || this.name
    name = name.replace("'", '_prime')
    if (this.args.length === 0) {
      return `${name}()`
    }
    return `${this.args[0].toComplex()}.${name}(${this.args
      .slice(1)
      .map(a => a.toComplex())
      .join(', ')})`
  }
  toDerivative(wrt_funs, wrt_vars) {
    if (this.name === 'log') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        this.args[0]
      )
    }
    if (this.name === 'exp') {
      return new BinaryOp(
        '*',
        this,
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'abs') {
      return new BinaryOp(
        '*',
        new FunctionOp('sign', this.args),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'sqrt') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp('*', new Leaf('number', 2), this)
      )
    }
    if (this.name === 'sin') {
      return new BinaryOp(
        '*',
        new FunctionOp('cos', this.args),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'cos') {
      return new BinaryOp(
        '*',
        new UnaryOp('-', new FunctionOp('sin', this.args)),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'tan') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '^',
          new FunctionOp('cos', this.args),
          new Leaf('number', 2)
        )
      )
    }
    if (this.name === 'asin') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '^',
          new BinaryOp(
            '-',
            new Leaf('number', 1),
            new BinaryOp('^', this.args[0], new Leaf('number', 2))
          ),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'acos') {
      return new BinaryOp(
        '/',
        new UnaryOp('-', this.args[0].toDerivative(wrt_funs, wrt_vars)),
        new BinaryOp(
          '^',
          new BinaryOp(
            '-',
            new Leaf('number', 1),
            new BinaryOp('^', this.args[0], new Leaf('number', 2))
          ),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'atan') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '+',
          new Leaf('number', 1),
          new BinaryOp('^', this.args[0], new Leaf('number', 2))
        )
      )
    }
    if (this.name === 'sinh') {
      return new BinaryOp(
        '*',
        new FunctionOp('cosh', this.args),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'cosh') {
      return new BinaryOp(
        '*',
        new FunctionOp('sinh', this.args),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'tanh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '^',
          new FunctionOp('cosh', this.args),
          new Leaf('number', 2)
        )
      )
    }
    if (this.name === 'asinh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '^',
          new BinaryOp(
            '+',
            new BinaryOp('^', this.args[0], new Leaf('number', 2)),
            new Leaf('number', 1)
          ),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'acosh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '^',
          new BinaryOp(
            '-',
            new BinaryOp('^', this.args[0], new Leaf('number', 2)),
            new Leaf('number', 1)
          ),
          new Leaf('number', 0.5)
        )
      )
    }
    if (this.name === 'atanh') {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '-',
          new Leaf('number', 1),
          new BinaryOp('^', this.args[0], new Leaf('number', 2))
        )
      )
    }
    if (['log2', 'log10'].includes(this.name)) {
      return new BinaryOp(
        '/',
        this.args[0].toDerivative(wrt_funs, wrt_vars),
        new BinaryOp(
          '*',
          this.args[0],
          new FunctionOp('log', [
            new Leaf('number', this.name === 'log2' ? 2 : 10),
          ])
        )
      )
    }
    if (this.name === 'sn') {
      return new BinaryOp(
        '*',
        new BinaryOp(
          '*',
          new FunctionOp('cn', this.args),
          new FunctionOp('dn', this.args)
        ),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'cn') {
      return new BinaryOp(
        '*',
        new BinaryOp(
          '*',
          new UnaryOp('-', new FunctionOp('sn', this.args)),
          new FunctionOp('dn', this.args)
        ),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    if (this.name === 'dn') {
      return new BinaryOp(
        '*',
        new BinaryOp(
          '*',
          new BinaryOp(
            '*',
            new UnaryOp('-', this.args[1] || new Leaf('number', 0.5)),
            new FunctionOp('sn', this.args)
          ),
          new FunctionOp('cn', this.args)
        ),
        this.args[0].toDerivative(wrt_funs, wrt_vars)
      )
    }
    const special = specialDerivative(this, wrt_funs, wrt_vars)
    if (special) {
      return special
    }
    if (['re', 'im'].includes(this.name)) {
      return new FunctionOp(
        this.name,
        this.args.map(a => a.toDerivative(wrt_funs, wrt_vars))
      )
    }
    if (this.name === 'sign') {
      return new Leaf('number', 0)
    }

    return new BinaryOp(
      '*',
      new FunctionOp(`${this.name}'`, this.args),
      this.args[0].toDerivative(wrt_funs, wrt_vars)
    )
  }
  simplify() {
    const args = this.args.map(a => a.simplify())
    return new FunctionOp(this.name, args)
  }
}

class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
    this.type = 'complex'
  }
  is(other) {
    return (
      this.type === other.type &&
      this.real === other.real &&
      this.imag === other.imag
    )
  }
  clone(replace, value) {
    return new Complex(this.real, this.imag)
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
  toDerivative(wrt_funs, wrt_vars) {
    return new Leaf('number', 0)
  }
  simplify() {
    return new Complex(this.real.simplify(), this.imag.simplify())
  }
}

class Leaf {
  constructor(type, value) {
    this.type = type
    this.value = value
  }
  is(other) {
    return this.type === other.type && this.value === other.value
  }
  clone(replace, value) {
    return new Leaf(this.type, this.value)
  }
  isPureReal() {
    return this.type === 'number'
  }
  isPureImag() {
    return this.type === 'identifier' && this.value === 'i'
  }
  isConstant() {
    return Object.keys(consts).includes(this.value)
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
    if (this.isConstant()) {
      return `vec2(${this.value}, 0.)`
    }
    if (this.type === 'identifier') {
      return this.value.replace(/'/g, '_prime')
    }
    return `vec2(${this.value.toFixed(6)}, 0.)`
  }
  toComplex() {
    if (this.isPureImag()) {
      return 'cx(0, 1)'
    }
    if (this.isConstant()) {
      return `cx("${this.value}")`
    }
    if (this.type === 'identifier') {
      return this.value.replace(/'/g, '_prime')
    }
    return `cx(${this.value})`
  }
  toDerivative(wrt_funs, wrt_vars) {
    const wrt = [...wrt_funs, ...wrt_vars]
    if (this.type === 'identifier' && this.value === 'i') {
      return new Leaf('number', 0)
    }
    if (this.type === 'identifier' && wrt.includes(this.value)) {
      if (wrt_vars.includes(this.value)) {
        return new Leaf('number', 1)
      }
      return new Leaf('identifier', `${this.value}'`)
    }
    return new Leaf('number', 0)
  }
  simplify() {
    // if (this.type === 'identifier' && this.value === 'i') {
    //   return new Complex(new Leaf('number', 0), new Leaf('number', 1))
    // }
    if (this.type === 'identifier' && this.value === 'x') {
      return new FunctionOp('re', [new Leaf('identifier', 'z')])
    }
    if (this.type === 'identifier' && this.value === 'y') {
      return new FunctionOp('im', [new Leaf('identifier', 'z')])
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
  throw new SyntaxError('Tokenization error at index ' + i + ' in ' + input)
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
      if (!token) {
        throw new SyntaxError('Unexpected EOF')
      }
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
      if (!token) {
        throw new SyntaxError('Unexpected EOF')
      }
      if (token.type === 'operator' && ['*', '/', '%'].includes(token.value)) {
        i++
        node = new BinaryOp(token.value, node, exponentiation())
      } else if (['lparen', 'identifier'].includes(token.type)) {
        node = new BinaryOp('*', node, exponentiation())
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
      if (!token) {
        throw new SyntaxError('Unexpected EOF')
      }
      if (
        token.type === 'operator' &&
        ['^', '**', '^^'].includes(token.value)
      ) {
        i++
        node = new BinaryOp(
          token.value === '**' ? '^' : token.value,
          node,
          exponentiation()
        )
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
      if (!token) {
        throw new SyntaxError('Unexpected EOF')
      }
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
    if (!token) {
      throw new SyntaxError('Unexpected EOF')
    }
    if (token.type === 'lparen') {
      i++
      const node = expression()
      if (tokens[i]?.type !== 'rparen') {
        throw new SyntaxError('Expected ) at ' + (tokens[i]?.start || 'EOF'))
      }
      i++
      return node
    } else if (token.type === 'pipe') {
      i++
      const node = expression()
      if (tokens[i]?.type !== 'pipe') {
        throw new SyntaxError('Expected | at ' + (tokens[i]?.start || 'EOF'))
      }
      i++
      return new FunctionOp('abs', [node])
    } else if (token.type === 'unaryPrefix') {
      i++
      return new UnaryOp(token.value, exponentiation())
    } else if (token.type === 'operator' && '+-'.includes(token.value)) {
      i++
      return new UnaryOp(token.value, exponentiation())
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
            throw new SyntaxError('Expected ) at EOF')
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
      throw new SyntaxError(`Unexpected token ${token}`)
    }
  }
  const ast = expression()
  if (i !== tokens.length) {
    throw new SyntaxError(`Unexpected EOF ${tokens[i]}`)
  }
  return ast
}

export const vars = (ast_, ids = []) => {
  if (
    ast_.type === 'identifier' &&
    !ids.includes(ast_.value) &&
    ast_.value !== 'i'
  ) {
    ids.push(ast_.value)
  }
  if (ast_.left) {
    ids = vars(ast_.left, ids)
  }
  if (ast_.right) {
    ids = vars(ast_.right, ids)
  }
  if (ast_.args) {
    const args = [...ast_.args]
    let iter_var = null
    if (['sum', 'product'].includes(ast_.name)) {
      iter_var = args.shift().value
    }
    args.forEach(arg => {
      ids = vars(arg, ids).filter(arg => arg != iter_var)
    })
  }
  if (ast_.operand) {
    ids = vars(ast_.operand, ids)
  }

  return ids
}

export const ast = s => parse(tokenize(s)).simplify()
export const derive = (s, wrt_funs = ['z', 'z_1'], wrt_vars = []) =>
  parse(tokenize(s)).simplify().toDerivative(wrt_funs, wrt_vars).simplify()
export const evaluate = (s, values = {}) =>
  new Function(...Object.keys(values), `return ${ast(s).toComplex()}`)(
    ...Object.values(values)
  )

window.tokenize = tokenize
window.parse = parse
window.ast = ast
window.vars = vars
window.derive = derive
window.evaluate = evaluate
window.astRaw = s => parse(tokenize(s))
