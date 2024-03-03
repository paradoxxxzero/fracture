const shifts = {
  0: BigInt(1),
  1: BigInt(10),
  2: BigInt(100),
  3: BigInt(1000),
  4: BigInt(10000),
  5: BigInt(100000),
  6: BigInt(1000000),
  7: BigInt(10000000),
  8: BigInt(100000000),
  9: BigInt(1000000000),
  10: BigInt(10000000000),
}
const shift = precision => {
  if (!shifts[precision]) {
    shifts[precision] = BigInt(10) ** BigInt(precision)
  }
  return shifts[precision]
}

const floatPrecision = 6

export class Decimal {
  constructor(value, precision) {
    if (typeof value === 'bigint') {
      this._n = value
      this.precision = precision || floatPrecision
      return
    }

    if (typeof value === 'number') {
      if (value === 0) {
        value = '0.'.padEnd(floatPrecision, '0')
      } else {
        value = value.toFixed(-Math.log10(Math.abs(value)) + floatPrecision)
      }
    }

    let [ints, decis] = value.split('.').concat('')
    this.precision = precision || decis.length || 1
    this._n = BigInt(
      ints + decis.padEnd(this.precision, '0').slice(0, this.precision)
    )
  }
  toPrecision(precision) {
    if (precision === this.precision) {
      return
    }
    if (precision > this.precision) {
      this._n *= BigInt(10) ** BigInt(precision - this.precision)
    } else {
      this._n /= BigInt(10) ** BigInt(this.precision - precision)
    }
    this.precision = precision
  }
  adapt(num) {
    num = m(num)
    if (this.precision > num.precision) {
      num.toPrecision(this.precision)
    } else if (this.precision < num.precision) {
      this.toPrecision(num.precision)
    }
    return num
  }
  add(num) {
    num = this.adapt(num)
    return m(this._n + num._n, this.precision)
  }
  subtract(num) {
    num = this.adapt(num)
    return m(this._n - num._n, this.precision)
  }
  multiply(num) {
    num = this.adapt(num)
    return m((this._n * num._n) / shift(this.precision), this.precision)
  }
  pow(num) {
    num = this.adapt(num)
    return m(this._n ** num._n / shift(this.precision), this.precision)
  }
  divide(num) {
    num = this.adapt(num)
    return m((this._n * shift(this.precision)) / num._n, this.precision)
  }
  abs() {
    return m(this._n < 0 ? -this._n : this._n, this.precision)
  }
  toNumber() {
    return Number(this._n) / Number(shift(this.precision))
  }
  toString() {
    let s = this._n
      .toString()
      .replace('-', '')
      .padStart(this.precision + 1, '0')
    s = (s.slice(0, -this.precision) + '.' + s.slice(-this.precision)).replace(
      /(\.0*|0+)$/,
      ''
    )
    return this._n < 0 ? '-' + s : s
  }
}

export const m = (v, p) => (!p && v instanceof Decimal ? v : new Decimal(v, p))

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
          return cx(1)
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
      k = cx(k)
    }
    if (this.re.toNumber() === 0 && this.im.toNumber() === 0) {
      return cx(0)
    }
    if (k.re.toNumber() === 0 && k.im.toNumber() === 0) {
      return cx(1)
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
    return cx(Math.abs(this.re), Math.abs(this.im))
  }
  csign() {
    return cx(Math.sign(this.re), Math.sign(this.im))
  }
  conj() {
    return cx(this.re, -this.im)
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

export const cx = (re = 0, im = 0) =>
  re instanceof Complex ? re : new Complex(m(re), m(im))

window.m = m
window.cx = cx
