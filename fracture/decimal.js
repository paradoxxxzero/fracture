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
const floatPrecision = 16
const approx = 16
export class Decimal {
  constructor(value = 0, precision) {
    if (typeof value === 'bigint') {
      this._n = value
      this.precision = precision || floatPrecision
      return
    }

    if (typeof value === 'number') {
      if (value === 0) {
        value = '0.0'
      } else {
        value = value.toFixed(-Math.log10(Math.abs(value)) + floatPrecision)
      }
    }
    if (typeof value === 'string' && value.match(/e/)) {
      value = parseFloat(value).toFixed(floatPrecision)
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
    if (num instanceof Complex) {
      return num.add(this)
    }
    num = this.adapt(num)
    return m(this._n + num._n, this.precision)
  }
  subtract(num) {
    if (num instanceof Complex) {
      return num.neg().add(this)
    }
    num = this.adapt(num)
    return m(this._n - num._n, this.precision)
  }
  multiply(num) {
    if (num instanceof Complex) {
      return num.multiply(this)
    }
    num = this.adapt(num)
    return m((this._n * num._n) / shift(this.precision), this.precision)
  }
  divide(num) {
    if (num instanceof Complex) {
      return num.pow(-1).multiply(this)
    }
    num = this.adapt(num)
    return m((this._n * shift(this.precision)) / num._n, this.precision)
  }
  pow(num) {
    if (num instanceof Complex) {
      return num.pow(this)
    }
    let res = this
    if (num % 1 === 0) {
      for (let i = 1; i < num; i++) {
        res = res.multiply(this)
      }
      return res
    }
    num = this.adapt(num)
    return res.log().multiply(num).exp()
  }
  abs() {
    return m(this._n < 0 ? -this._n : this._n, this.precision)
  }
  sign() {
    return m(this._n < 0 ? -1 : this._n > 0 ? 1 : 0)
  }
  neg() {
    this._n = -this._n
    return this
  }
  nop() {
    return this
  }
  sqrt() {
    const precision = this.precision
    let n = this._n
    let x = n
    let y = (n + 1n) / 2n
    while (y < x) {
      x = y
      y = (x + n / x) / 2n
    }
    return m(x, precision)
  }
  atan() {
    const precision = this.precision
    let x = this
    let y = m(0, precision)
    for (let i = 1; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i))
      x = x.neg()
    }
    return y
  }
  exp() {
    // Full precision exp
    const precision = this.precision
    let x = this
    let y = m(1, precision)
    for (let i = 1; i < approx; i++) {
      y = y.add(x.pow(i).divide(i))
    }
    return y
  }
  frexp() {
    let x = this
    let e = m()
    while (x.gt(m(1))) {
      x = x.divide(2)
      e = e.add(1)
    }
    return [x, e]
  }
  log() {
    // Compute approximation of log(x)
    // Decompose x = 2^e * p
    // log(x) = e * log(2) + log(p)
    const precision = this.precision
    const [p, e] = this.frexp()
    // Compute log(p) using Taylor series
    let x = p.subtract(1)
    let y = m()
    let sign = 1
    for (let i = 1; i < precision; i++) {
      y = y.add(x.pow(i).divide(i).multiply(sign))
      sign *= -1
    }
    return y.add(e.multiply(LN2(precision)))
  }
  cos() {
    // Full precision cos
    const precision = this.precision
    let x = this
    let y = m(1, precision)
    let sign = -1
    for (let i = 2; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i).neg().multiply(sign))
      sign *= -1
    }
    return y
  }
  sin() {
    // Full precision sin
    let x = this
    let y = x
    let sign = -1
    for (let i = 3; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i).neg().multiply(sign))
      sign *= -1
    }
    return y
  }
  tan() {
    // Full precision tan
    const precision = this.precision
    let x = this
    let y = x
    let sign = 1
    for (let i = 3; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i).multiply(sign))
      sign *= -1
    }
    return y
  }
  sinh() {
    // Full precision sinh
    const precision = this.precision
    let x = this
    let y = m(1, precision)
    for (let i = 2; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i))
    }
    return y
  }
  cosh() {
    // Full precision cosh
    const precision = this.precision
    let x = this
    let y = m(1, precision)
    for (let i = 2; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i))
    }
    return y
  }
  acos() {
    // Full precision acos
    const precision = this.precision
    let x = this
    let y = m(0, precision)
    let sign = 1
    for (let i = 1; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i).multiply(sign))
      sign *= -1
    }
    return y
  }
  asin() {
    // Full precision asin
    const precision = this.precision
    let x = this
    let y = m(0, precision)
    let sign = 1
    for (let i = 1; i < approx; i += 2) {
      y = y.add(x.pow(i).divide(i).multiply(sign))
      sign *= -1
    }
    return y
  }
  toExp() {}
  eq(num) {
    num = this.adapt(num)
    return this._n === num._n
  }
  gt(num) {
    num = this.adapt(num)
    return this._n > num._n
  }
  lt(num) {
    num = this.adapt(num)
    return this._n < num._n
  }
  gte(num) {
    num = this.adapt(num)
    return this._n >= num._n
  }
  lte(num) {
    num = this.adapt(num)
    return this._n <= num._n
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
    c = cx(c)
    return new Complex(this.re.add(c.re), this.im.add(c.im))
  }
  subtract(c) {
    c = cx(c)
    return new Complex(this.re.subtract(c.re), this.im.subtract(c.im))
  }
  multiply(c) {
    c = cx(c)
    return new Complex(
      this.re.multiply(c.re).subtract(this.im.multiply(c.im)),
      this.re.multiply(c.im).add(this.im.multiply(c.re))
    )
  }
  divide(c) {
    c = cx(c)
    const d = c.re.multiply(c.re).add(c.im.multiply(c.im))
    return new Complex(
      this.re.multiply(c.re).add(this.im.multiply(c.im)).divide(d),
      this.im.multiply(c.re).subtract(this.re.multiply(c.im)).divide(d)
    )
  }
  neg() {
    return new Complex(this.re.neg(), this.im.neg())
  }
  exp() {
    const r = this.re.exp()
    return new Complex(this.im.cos().multiply(r), this.im.sin().multiply(r))
  }
  arg() {
    return this.atan2()
  }
  atan2() {
    // Full precision atan2
    const { re, im } = this
    const absRe = re.abs()
    const absIm = im.abs()
    if (absRe._n === 0n && absIm._n === 0n) {
      return m(0)
    }
    if (absRe._n === 0n) {
      if (im > 0n) {
        return m(Math.PI / 2)
      }
      return m(-Math.PI / 2)
    }
    const t = im.divide(re)
    const atan = t.atan()
    if (re._n > 0n) {
      return atan
    }
    if (im._n >= 0n) {
      return atan.add(Math.PI)
    }
    return atan.subtract(Math.PI)
  }
  sqrt() {
    const r = this.abs().sqrt()
    const theta = this.arg().divide(2)
    return new Complex(r.multiply(theta.cos()), r.multiply(theta.sin()))
  }
  cos() {
    return new Complex(
      this.re.cos().multiply(this.im.sinh()),
      this.re.sin().multiply(this.im.cosh())
    )
  }
  sin() {
    return new Complex(
      this.re.sin().multiply(this.im.cosh()),
      this.re.cos().multiply(this.im.sinh())
    )
  }
  tan() {
    return this.sin().divide(this.cos())
  }
  sinh() {
    return new Complex(
      this.re.sinh().multiply(this.im.cos()),
      this.re.cosh().multiply(this.im.sin())
    )
  }
  cosh() {
    return new Complex(
      this.re.cosh().multiply(this.im.cos()),
      this.re.sinh().multiply(this.im.sin())
    )
  }
  tanh() {
    return this.sinh().divide(this.cosh())
  }
  asin() {
    return this.multiply(this)
      .neg()
      .add(1)
      .sqrt()
      .add(this.im)
      .log()
      .neg()
      .multiply(cx(0, 1))
  }
  acos() {
    return this.multiply(this)
      .neg()
      .add(1)
      .sqrt()
      .add(this)
      .log()
      .neg()
      .multiply(cx(0, 1))
  }
  atan() {
    return this.add(cx(0, 1)).log().neg().multiply(cx(0, 0.5))
  }
  asinh() {
    return this.multiply(this).add(1).sqrt().add(this).log()
  }
  acosh() {
    return this.multiply(this).subtract(1).sqrt().add(this).log()
  }
  atanh() {
    return this.add(1).divide(this.neg().add(1)).log().multiply(cx(0.5))
  }
  log() {
    return new Complex(this.abs().log(), this.arg())
  }

  pow(k) {
    k = cx(k)
    if (k.im.toNumber() === 0) {
      const p = k.re.toNumber()
      if (p % 1 === 0) {
        if (p === 0) {
          return cx(1)
        }
        if (p === 1) {
          return this
        }
        if (p === 2) {
          return this.multiply(this)
        }
        if (p === 3) {
          return this.multiply(this).multiply(this)
        }
        if (p === 4) {
          const z2 = this.multiply(this)
          return z2.multiply(z2)
        }
        if (p === 5) {
          const z2 = this.multiply(this)
          return z2.multiply(z2).multiply(this)
        }
        if (p === 6) {
          const z2 = this.multiply(this)
          return z2.multiply(z2).multiply(z2)
        }
        if (p === 7) {
          const z2 = this.multiply(this)
          return z2.multiply(z2).multiply(z2).multiply(this)
        }
        if (p === 8) {
          const z2 = this.multiply(this)
          const z4 = z2.multiply(z2)
          return z4.multiply(z4)
        }
        if (p === 9) {
          const z2 = this.multiply(this)
          const z4 = z2.multiply(z2)
          return z4.multiply(z4).multiply(this)
        }
        let res = this
        for (let i = 1; i < p; i++) {
          res = res.multiply(res)
        }
        return res
      }
    }
    if (this.re.toNumber() === 0 && this.im.toNumber() === 0) {
      return cx(0)
    }
    if (k.re.toNumber() === 0 && k.im.toNumber() === 0) {
      return cx(1)
    }
    return this.log().multiply(k).exp()
  }
  norm2() {
    return this.re.multiply(this.re).add(this.im.multiply(this.im))
  }
  abs() {
    return m(this.norm2().sqrt())
  }
  conj() {
    return cx(this.re, -this.im)
  }
  real() {
    return this.re
  }
  imag() {
    return this.im
  }
  //TODO
  gamma() {
    return this
  }
  psi() {
    return this
  }
  beta(w) {
    return this
  }
  zeta() {
    return this
  }
  cn() {
    return this
  }
  sn() {
    return this
  }
  dn() {
    return this
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

const LN2 = p =>
  m(
    '0.6931471805599453094172321214581765680755001343602552541206800094933936219696947156058633269964186875420014810205706857336855202357581305570326707516350759619307275708283714351903070386238916734711233501153644979552391204751726815749320651555247341395258829504530070953263666426541042391578149520437404303855008019441706416715186447128399681717845469570262716310645461502572074024816377733896385506952606683411372738737229289564935470257626520988596932019650585547647033067936544325476327449512504060694381471046899465',
    p
  )
export const cx = (re = 0, im = 0) =>
  re instanceof Complex ? re : new Complex(m(re), m(im))

window.m = m
window.cx = cx
