export class Decimal {
  static DECIMALS = 32 // number of decimals on all instances
  static SHIFT = BigInt('1' + '0'.repeat(Decimal.DECIMALS)) // derived constant
  constructor(value) {
    if (value instanceof Decimal) {
      return value
    }
    if (typeof value === 'number') {
      value = value.toFixed(Decimal.DECIMALS)
    }
    let [ints, decis] = value.split('.').concat('')
    this._n = BigInt(
      ints + decis.padEnd(Decimal.DECIMALS, '0').slice(0, Decimal.DECIMALS)
    )
  }
  static fromBigInt(bigint) {
    return Object.assign(Object.create(Decimal.prototype), { _n: bigint })
  }
  add(num) {
    return Decimal.fromBigInt(this._n + new Decimal(num)._n)
  }
  subtract(num) {
    return Decimal.fromBigInt(this._n - new Decimal(num)._n)
  }
  static _divRound(dividend, divisor) {
    return Decimal.fromBigInt(dividend / divisor)
  }
  multiply(num) {
    return Decimal._divRound(this._n * new Decimal(num)._n, Decimal.SHIFT)
  }
  pow(num) {
    return Decimal._divRound(this._n ** new Decimal(num), Decimal.SHIFT)
  }
  divide(num) {
    return Decimal._divRound(this._n * Decimal.SHIFT, new Decimal(num)._n)
  }
  toNumber() {
    return Number(this._n) / Number(Decimal.SHIFT)
  }
  toString() {
    let s = this._n
      .toString()
      .replace('-', '')
      .padStart(Decimal.DECIMALS + 1, '0')
    s = (
      s.slice(0, -Decimal.DECIMALS) +
      '.' +
      s.slice(-Decimal.DECIMALS)
    ).replace(/(\.0*|0+)$/, '')
    return this._n < 0 ? '-' + s : s
  }
}

export class Float {
  constructor(value) {
    this._n = typeof value === 'string' ? parseFloat(value) : value
  }
  add(num) {
    return new Float(this._n + (num._n ? num._n : num))
  }
  subtract(num) {
    return new Float(this._n - (num._n ? num._n : num))
  }
  multiply(num) {
    return new Float(this._n * (num._n ? num._n : num))
  }
  divide(num) {
    return new Float(this._n / (num._n ? num._n : num))
  }
  toNumber() {
    return this._n
  }
  toString() {
    return this._n.toString()
  }
}

export const m = window.location.search.includes('float')
  ? v => new Float(v)
  : v => new Decimal(v)

export class Complex {
  constructor(re, im) {
    this.re = re
    this.im = im
  }
  add(c) {
    return new Complex(this.re.add(c.re), this.im.add(c.im))
  }
  subtract(c) {
    return new Complex(this.re.subtract(c.re), this.im.subtract(c.im))
  }
  multiply(c) {
    return new Complex(
      this.re.multiply(c.re).subtract(this.im.multiply(c.im)),
      this.re.multiply(c.im).add(this.im.multiply(c.re))
    )
  }
  divide(c) {
    const d = c.re.multiply(c.re).add(c.im.multiply(c.im))
    return new Complex(
      this.re.multiply(c.re).add(this.im.multiply(c.im)).divide(d),
      this.im.multiply(c.re).subtract(this.re.multiply(c.im)).divide(d)
    )
  }
  exp() {
    const r = Math.exp(this.re.toNumber())
    return new Complex(
      m(r * Math.cos(this.im.toNumber())),
      m(r * Math.sin(this.im.toNumber()))
    )
  }
  arg() {
    return m(Math.atan2(this.im.toNumber(), this.re.toNumber()))
  }
  cos() {
    return new Complex(
      m(Math.cos(this.re.toNumber()) * Math.cosh(this.im.toNumber())),
      m(-Math.sin(this.re.toNumber()) * Math.sinh(this.im.toNumber()))
    )
  }
  sin() {
    return new Complex(
      m(Math.sin(this.re.toNumber()) * Math.cosh(this.im.toNumber())),
      m(Math.cos(this.re.toNumber()) * Math.sinh(this.im.toNumber()))
    )
  }
  ln() {
    const length = this.abs()
    if (length === 0) {
      return new Complex(m(-1e10), m(0))
    }
    return new Complex(m(Math.log(this.abs())), this.arg())
  }
  pow(k) {
    if (!(k instanceof Complex)) {
      if (k % 1 === 0) {
        if (k === 0) {
          return c(1)
        }
        if (k === 1) {
          return this
        }
        if (k === 2) {
          return this.multiply(this)
        }
        if (k === 3) {
          return this.multiply(this).multiply(this)
        }
        if (k === 4) {
          const z2 = this.multiply(this)
          return z2.multiply(z2)
        }
        if (k === 5) {
          const z2 = this.multiply(this)
          return z2.multiply(z2).multiply(this)
        }
        if (k === 6) {
          const z2 = this.multiply(this)
          return z2.multiply(z2).multiply(z2)
        }
        if (k === 7) {
          const z2 = this.multiply(this)
          return z2.multiply(z2).multiply(z2).multiply(this)
        }
        if (k === 8) {
          const z2 = this.multiply(this)
          const z4 = z2.multiply(z2)
          return z4.multiply(z4)
        }
        if (k === 9) {
          const z2 = this.multiply(this)
          const z4 = z2.multiply(z2)
          return z4.multiply(z4).multiply(this)
        }
      }
      k = c(k)
    }
    if (this.re.toNumber() === 0 && this.im.toNumber() === 0) {
      return c(0)
    }
    if (k.re.toNumber() === 0 && k.im.toNumber() === 0) {
      return c(1)
    }
    return this.ln().multiply(k).exp()
  }
  norm2() {
    return this.re.multiply(this.re).add(this.im.multiply(this.im))
  }
  abs() {
    return Math.sqrt(this.norm2())
  }
  cabs() {
    return c(Math.abs(this.re), Math.abs(this.im))
  }
  conj() {
    return c(this.re, -this.im)
  }
  toString() {
    return `complex: <${this.re}+${this.im}i>`
  }
  to2fv() {
    return [this.re.toNumber(), this.im.toNumber()]
  }
  static isComplexString(s) {
    return s.match(/^complex: <.+\+.+i>$/)
  }
  static fromString(s) {
    const match = s.match(/^complex: <(.+)\+(.+)i>$/)
    if (!match) {
      throw new Error('Invalid complex string')
    }

    const [, re, im] = match
    return new Complex(m(re), m(im))
  }
}

export const c = (re = 0, im = 0) =>
  re instanceof Complex ? re : new Complex(m(re), m(im))

window.m = m

export const complexFunction = (...args) => {
  const scope = {
    cmul: (a, b) => c(a).multiply(b),
    cadd: (a, b) => c(a).add(b),
    cpow: (a, b) => c(a).pow(b),
    cabs: a => a.cabs(),
    conj: a => a.conj(),
  }
  const f = args.pop()
  args.push(`with(this) return ${f}`)
  // eslint-disable-next-line no-new-func
  return new Function(...args).bind(scope)
}
