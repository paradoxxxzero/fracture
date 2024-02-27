export class Decimal {
  static DECIMALS = 32 // number of decimals on all instances
  static SHIFT = BigInt('1' + '0'.repeat(Decimal.DECIMALS)) // derived constant
  constructor(value) {
    if (value instanceof Decimal) return value
    let [ints, decis] = value
      .toLocaleString('fullwide', {
        useGrouping: true,
        maximumSignificantDigits: 20,
      })
      .split('.')
      .concat('')
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
  norm() {
    return this.re.multiply(this.re).add(this.im.multiply(this.im))
  }
  abs() {
    return Math.sqrt(this.norm())
  }
  toString() {
    return `${this.re} ${this.im}i`
  }
  static fromString(s) {
    const [re, im] = s.split(' ')
    return new Complex(m(re), m(im.replace(/i$/, '')))
  }
}

export const c = (re = 0, im = 0) => new Complex(m(re), m(im))
export const cs = s => Complex.fromString(s)

window.m = m
