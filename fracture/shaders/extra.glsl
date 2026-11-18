// Additional elementary and special functions

// Move a value off an integer (used before reflection formulas that are singular on integers)
vec2 _nudge(in vec2 x) {
    if(abs(x.y) < 1e-3 && abs(x.x - round(x.x)) < 1e-3) {
        x.x += 2e-3;
    }
    return x;
}

// ---------------------------------------------------------------------------
// Elementary
// ---------------------------------------------------------------------------
vec2 csec(in vec2 z) {
    return cinv(ccos(z));
}
vec2 ccsc(in vec2 z) {
    return cinv(csin(z));
}
vec2 ccot(in vec2 z) {
    return cdiv(ccos(z), csin(z));
}
vec2 csech(in vec2 z) {
    return cinv(ccosh(z));
}
vec2 ccsch(in vec2 z) {
    return cinv(csinh(z));
}
vec2 ccoth(in vec2 z) {
    return cdiv(ccosh(z), csinh(z));
}
vec2 cacot(in vec2 z) {
    return catan(cinv(z));
}
vec2 casec(in vec2 z) {
    return cacos(cinv(z));
}
vec2 cacsc(in vec2 z) {
    return casin(cinv(z));
}
vec2 cacoth(in vec2 z) {
    return catanh(cinv(z));
}
vec2 casech(in vec2 z) {
    return cacosh(cinv(z));
}
vec2 cacsch(in vec2 z) {
    return casinh(cinv(z));
}
vec2 ccbrt(in vec2 z) {
    return cpow(z, R(1. / 3.));
}
vec2 croot(in vec2 z, in vec2 n) {
    return cpow(z, cinv(n));
}
vec2 csinc(in vec2 z) {
    if(dot2(z) < 1e-10) {
        return c1;
    }
    return cdiv(csin(z), z);
}
vec2 cfloor(in vec2 z) {
    return floor(z);
}
vec2 cceil(in vec2 z) {
    return ceil(z);
}
vec2 cround(in vec2 z) {
    return round(z);
}
vec2 cfrac(in vec2 z) {
    return fract(z);
}
vec2 clog2(in vec2 z) {
    return clog(z) / LN2;
}
vec2 clog10(in vec2 z) {
    return clog(z) / LN10;
}
vec2 clogb(in vec2 z, in vec2 b) {
    return cdiv(clog(z), clog(b));
}
vec2 csgn(in vec2 z) {
    float r = length(z);
    return r == 0. ? c0 : z / r;
}

// ---------------------------------------------------------------------------
// Gamma related
// ---------------------------------------------------------------------------
// Reciprocal gamma, entire
vec2 crgamma(in vec2 z) {
    if(abs(z.y) < 1e-6 && z.x <= 0. && abs(z.x - round(z.x)) < 1e-6) {
        return c0;
    }
    return cinv(cgamma(z));
}

// log(gamma(z)), continuous away from the negative real axis (does not wrap like log(gamma(z)))
vec2 clgamma(in vec2 z) {
    float sgn = z.y < 0. ? -1. : 1.;
    z.y *= sgn;
    vec2 shift = c0;
    bool refl = z.x < .5;
    vec2 w = refl ? csub(c1, z) : z;
    for(int i = 0; i < 12; i++) {
        if(w.x >= 8.) {
            break;
        }
        shift += clog(w);
        w += c1;
    }
    vec2 iw = cinv(w);
    vec2 iw2 = cmul(iw, iw);
    vec2 series = cmul(iw, R(1. / 12.) + cmul(iw2, R(-1. / 360.) + cmul(iw2, R(1. / 1260.) + cmul(iw2, R(-1. / 1680.)))));
    vec2 res = cmul(w - R(.5), clog(w)) - w + R(.5 * log(TAU)) + series - shift;
    if(refl) {
        // log sin(pi z) = log(i / 2) - i pi z + log(1 - exp(2 i pi z)), continuous for Im z > 0
        vec2 lsin = vec2(-LN2, ETA) + vec2(PI * z.y, -PI * z.x) + clog(c1 - cexp(vec2(-TAU * z.y, TAU * z.x)));
        res = R(log(PI)) - lsin - res;
    }
    res.y *= sgn;
    return res;
}

vec2 ctrigamma(in vec2 z) {
    return cpolygamma(z, c1);
}

// Incomplete gamma functions
vec2 cgammal(in vec2 s, in vec2 z) {
    vec2 t = cinv(s);
    vec2 sum = t;
    for(int k = 1; k < 120; k++) {
        t = cdiv(cmul(t, z), s + R(float(k)));
        sum += t;
        if(dot2(t) < 1e-14 * dot2(sum)) {
            break;
        }
    }
    return cmul(cmul(cpow(z, s), cexp(-z)), sum);
}

vec2 _gammau_cf(in vec2 a, in vec2 x) {
    vec2 b = x + c1 - a;
    vec2 c = R(1e30);
    vec2 d = cinv(b);
    vec2 h = d;
    for(int i = 1; i < 60; i++) {
        float fi = float(i);
        vec2 an = -fi * (R(fi) - a);
        b += R(2.);
        d = cinv(cmul(an, d) + b);
        c = b + cdiv(an, c);
        vec2 del = cmul(d, c);
        h = cmul(h, del);
        if(length(del - c1) < 1e-6) {
            break;
        }
    }
    return cmul(cexp(-x + cmul(a, clog(x))), h);
}

vec2 cgammau(in vec2 s, in vec2 z) {
    if(dot2(z) <= 4. || z.x < 0.) {
        return csub(cgamma(s), cgammal(s, z));
    }
    return _gammau_cf(s, z);
}
vec2 cgammap(in vec2 s, in vec2 z) {
    return cmul(cgammal(s, z), crgamma(s));
}
vec2 cgammaq(in vec2 s, in vec2 z) {
    return cmul(cgammau(s, z), crgamma(s));
}

// Riemann-Siegel theta and Z (analytic in t)
vec2 crstheta(in vec2 t) {
    vec2 a = clgamma(R(.25) + .5 * cmul(ci, t));
    vec2 b = clgamma(R(.25) - .5 * cmul(ci, t));
    return cmul(a - b, vec2(0., -.5)) - .5 * log(PI) * t;
}
vec2 criemannz(in vec2 t) {
    return cmul(cexp(cmul(ci, crstheta(t))), czeta(R(.5) + cmul(ci, t)));
}

// Dirichlet L-functions for the characters mod 3 and mod 4, and lambda
vec2 cdirichletbeta(in vec2 s) {
    return cmul(cpow(R(4.), -s), czeta(s, R(.25)) - czeta(s, R(.75)));
}
vec2 cdirichletl3(in vec2 s) {
    return cmul(cpow(R(3.), -s), czeta(s, R(1. / 3.)) - czeta(s, R(2. / 3.)));
}
vec2 cdirichletlambda(in vec2 s) {
    return cmul(csub(c1, cpow(R(2.), -s)), czeta(s));
}

// ---------------------------------------------------------------------------
// Theta and modular functions
// theta_k(z, q) with nome q = exp(i pi tau), |q| < 1
// ---------------------------------------------------------------------------
vec2 cqnome(in vec2 tau) {
    return cexp(vec2(-PI * tau.y, PI * tau.x));
}

vec2 ctheta1(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * cmul(cexp(k * k * lq), csin((2. * float(n) + 1.) * z));
    }
    return 2. * s;
}

vec2 ctheta2(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        s += cmul(cexp(k * k * lq), ccos((2. * float(n) + 1.) * z));
    }
    return 2. * s;
}

vec2 ctheta3(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        s += cmul(cexp(k * k * lq), ccos(2. * k * z));
    }
    return c1 + 2. * s;
}

vec2 ctheta4(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * cmul(cexp(k * k * lq), ccos(2. * k * z));
    }
    return c1 + 2. * s;
}

// Derivatives of the theta functions with respect to z
vec2 cdtheta1(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * (2. * float(n) + 1.) * cmul(cexp(k * k * lq), ccos((2. * float(n) + 1.) * z));
    }
    return 2. * s;
}

vec2 cdtheta2(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 0; n < 16; n++) {
        float k = float(n) + .5;
        s += (2. * float(n) + 1.) * cmul(cexp(k * k * lq), csin((2. * float(n) + 1.) * z));
    }
    return -2. * s;
}

vec2 cdtheta3(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        s += k * cmul(cexp(k * k * lq), csin(2. * k * z));
    }
    return -4. * s;
}

vec2 cdtheta4(in vec2 z, in vec2 q) {
    vec2 lq = clog(q);
    vec2 s = c0;
    for(int n = 1; n < 16; n++) {
        float k = float(n);
        float sg = (n % 2 == 0) ? 1. : -1.;
        s += sg * k * cmul(cexp(k * k * lq), csin(2. * k * z));
    }
    return -4. * s;
}

// q-Pochhammer (a; q)_inf and Euler function
vec2 cqpoch(in vec2 a, in vec2 q) {
    vec2 p = c1;
    vec2 qk = c1;
    for(int k = 0; k < 48; k++) {
        p = cmul(p, c1 - cmul(a, qk));
        qk = cmul(qk, q);
    }
    return p;
}
vec2 ceulerq(in vec2 q) {
    return cqpoch(q, q);
}

// Dedekind eta function of tau in the upper half plane
vec2 cdedekind(in vec2 t) {
    if(t.y <= 0.) {
        return c0;
    }
    vec2 mult = c1;
    for(int i = 0; i < 24; i++) {
        float n = round(t.x);
        if(n != 0.) {
            mult = cmul(mult, cis(PI * n / 12.));
            t.x -= n;
        }
        if(dot2(t) < .9999) {
            mult = cdiv(mult, csqrt(cmul(-ci, t)));
            t = -cinv(t);
        } else {
            break;
        }
    }
    vec2 q = cexp(vec2(-TAU * t.y, TAU * t.x));
    vec2 p = c1;
    vec2 qn = c1;
    for(int n = 1; n < 14; n++) {
        qn = cmul(qn, q);
        p = cmul(p, c1 - qn);
    }
    return cmul(mult, cmul(cexp(vec2(-PI * t.y / 12., PI * t.x / 12.)), p));
}

// Eisenstein series E4 and E6 of tau in the upper half plane
vec2 _eisenstein(in vec2 t, in int k) {
    if(t.y <= 0.) {
        return c1;
    }
    vec2 mult = c1;
    for(int i = 0; i < 24; i++) {
        t.x -= round(t.x);
        if(dot2(t) < .9999) {
            mult = cmul(mult, cpow(t, -k));
            t = -cinv(t);
        } else {
            break;
        }
    }
    vec2 q = cexp(vec2(-TAU * t.y, TAU * t.x));
    vec2 qn = c1;
    vec2 s = c0;
    for(int n = 1; n < 18; n++) {
        qn = cmul(qn, q);
        float fn = float(n);
        s += pow(fn, float(k - 1)) * cdiv(qn, c1 - qn);
    }
    float coef = k == 4 ? 240. : -504.;
    return cmul(mult, c1 + coef * s);
}
vec2 ceisenstein4(in vec2 t) {
    return _eisenstein(t, 4);
}
vec2 ceisenstein6(in vec2 t) {
    return _eisenstein(t, 6);
}

// Modular lambda function lambda(tau) = theta2^4 / theta3^4
vec2 cmodlambda(in vec2 t) {
    vec2 q = cqnome(t);
    return cdiv(cpow4(ctheta2(c0, q)), cpow4(ctheta3(c0, q)));
}

// Klein's absolute invariant j(tau), through the modular lambda function
// of tau reduced to the fundamental domain (stable for large Im tau)
vec2 ckleinj(in vec2 t) {
    if(t.y <= 0.) {
        return c0;
    }
    for(int i = 0; i < 24; i++) {
        t.x -= round(t.x);
        if(dot2(t) < .9999) {
            t = -cinv(t);
        } else {
            break;
        }
    }
    vec2 l = cmodlambda(t);
    vec2 l1 = c1 - l;
    return 256. * cdiv(cpow3(l1 + cmul(l, l)), cmul(cmul(l, l), cmul(l1, l1)));
}

// ---------------------------------------------------------------------------
// Elliptic integrals / functions
// ---------------------------------------------------------------------------
// Complete elliptic integral of the second kind E(m)
vec2 cellke(in vec2 m) {
    vec2 a = c1;
    vec2 b = csqrt(c1 - m);
    vec2 s = .5 * m;
    float pw = 1.;
    for(int i = 0; i < 12; i++) {
        vec2 h = .5 * (b - a);
        s += pw * cmul(h, h);
        pw *= 2.;
        vec2 an = a + h;
        b = csqrt(cmul(a, b));
        a = an;
        if(length(h) < 1e-7) {
            break;
        }
    }
    return cmul(PI * cinv(2. * a), c1 - s);
}

// Weierstrass p function on the lattice generated by 1 and tau (Im tau > 0)
vec2 cwp(in vec2 z, in vec2 tau) {
    vec2 q = cqnome(tau);
    vec2 t3 = ctheta3(c0, q);
    vec2 t4 = ctheta4(c0, q);
    vec2 pz = PI * z;
    vec2 k = PI * cmul(t3, t4);
    vec2 r = cmul(k, cdiv(ctheta2(pz, q), ctheta1(pz, q)));
    return PI * PI / 3. * (cpow4(t3) + cpow4(t4)) + cmul(r, r);
}

// ---------------------------------------------------------------------------
// Hypergeometric functions
// ---------------------------------------------------------------------------
vec2 chyp0f1(in vec2 b, in vec2 z) {
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 100; k++) {
        float kf = float(k);
        t = cdiv(cmul(t, z), (b + R(kf)) * (kf + 1.));
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

vec2 _hyp1f1s(in vec2 a, in vec2 b, in vec2 z) {
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 120; k++) {
        float kf = float(k);
        t = cdiv(cmul(cmul(t, a + R(kf)), z), (b + R(kf)) * (kf + 1.));
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

// Kummer confluent hypergeometric function M(a, b, z), accurate for moderate |z|
vec2 chyp1f1(in vec2 a, in vec2 b, in vec2 z) {
    if(z.x < 0.) {
        return cmul(cexp(z), _hyp1f1s(b - a, b, -z));
    }
    return _hyp1f1s(a, b, z);
}

vec2 _hyp2f1s(in vec2 a, in vec2 b, in vec2 c, in vec2 z) {
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 160; k++) {
        float kf = float(k);
        t = cdiv(cmul(cmul(t, a + R(kf)), b + R(kf)), (c + R(kf)) * (kf + 1.));
        t = cmul(t, z);
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

bool _nearint(in vec2 x) {
    return abs(x.y) < 1e-3 && abs(x.x - round(x.x)) < 1e-3;
}

// z -> 1 - z transformation, singular when c - a - b is an integer
vec2 _hyp2f1_w(in vec2 a, in vec2 b, in vec2 c, in vec2 w) {
    vec2 d = c - a - b;
    vec2 g1 = cdiv(cmul(cgamma(c), cgamma(d)), cmul(cgamma(c - a), cgamma(c - b)));
    vec2 g2 = cdiv(cmul(cgamma(c), cgamma(-d)), cmul(cgamma(a), cgamma(b)));
    vec2 f1 = cmul(g1, _hyp2f1s(a, b, c1 - d, w));
    vec2 f2 = cmul(cmul(g2, cpow(w, d)), _hyp2f1s(c - a, c - b, c1 + d, w));
    return f1 + f2;
}

// z -> 1 / z transformation, singular when b - a is an integer
vec2 _hyp2f1_iz(in vec2 a, in vec2 b, in vec2 c, in vec2 z) {
    vec2 d = b - a;
    vec2 iz = cinv(z);
    vec2 mz = -z;
    vec2 g1 = cdiv(cmul(cgamma(c), cgamma(d)), cmul(cgamma(b), cgamma(c - a)));
    vec2 g2 = cdiv(cmul(cgamma(c), cgamma(-d)), cmul(cgamma(a), cgamma(c - b)));
    vec2 f1 = cmul(cmul(g1, cpow(mz, -a)), _hyp2f1s(a, a - c + c1, c1 - d, iz));
    vec2 f2 = cmul(cmul(g2, cpow(mz, -b)), _hyp2f1s(b, b - c + c1, c1 + d, iz));
    return f1 + f2;
}

// Gauss hypergeometric function 2F1(a, b; c; z), analytically continued.
// In the degenerate (integer difference) cases the two terms of the connection
// formula are averaged over a small symmetric shift of a parameter.
vec2 chyp2f1(in vec2 a, in vec2 b, in vec2 c, in vec2 z) {
    float rz = length(z);
    vec2 w = c1 - z;
    const vec2 dl = vec2(2e-3, 0.);
    if(rz <= .9) {
        return _hyp2f1s(a, b, c, z);
    }
    if(length(w) <= .9) {
        if(_nearint(c - a - b)) {
            return .5 * (_hyp2f1_w(a, b, c + dl, w) + _hyp2f1_w(a, b, c - dl, w));
        }
        return _hyp2f1_w(a, b, c, w);
    }
    if(rz >= 1.1) {
        if(_nearint(b - a)) {
            return .5 * (_hyp2f1_iz(a, b + dl, c, z) + _hyp2f1_iz(a, b - dl, c, z));
        }
        return _hyp2f1_iz(a, b, c, z);
    }
    // Pfaff transformation
    return cmul(cpow(w, -a), _hyp2f1s(a, c - b, c, cdiv(z, z - c1)));
}

// Orthogonal polynomials (generalised to complex degree)
vec2 clegendrep(in vec2 z, in vec2 nu) {
    return chyp2f1(-nu, nu + c1, c1, .5 * (c1 - z));
}
vec2 cchebyshevt(in vec2 z, in vec2 nu) {
    return chyp2f1(-nu, nu, R(.5), .5 * (c1 - z));
}
vec2 cchebyshevu(in vec2 z, in vec2 nu) {
    return cmul(nu + c1, chyp2f1(-nu, nu + R(2.), R(1.5), .5 * (c1 - z)));
}
vec2 claguerre(in vec2 z, in vec2 nu) {
    return chyp1f1(-nu, c1, z);
}
vec2 chermite(in vec2 z, in vec2 nu) {
    vec2 z2 = cmul(z, z);
    vec2 h = .5 * (c1 - nu);
    vec2 a = cmul(chyp1f1(-.5 * nu, R(.5), z2), crgamma(h));
    vec2 b = 2. * cmul(z, cmul(chyp1f1(h, R(1.5), z2), crgamma(-.5 * nu)));
    return cmul(cmul(cpow(R(2.), nu), R(sqrt(PI))), a - b);
}

// ---------------------------------------------------------------------------
// Bessel functions
// ---------------------------------------------------------------------------
// sum_k sg^k (z/2)^(2k) / (k! (nu + 1)_k)
vec2 _bessel_series(in vec2 z, in vec2 nu, in float sg) {
    vec2 q = sg * .25 * cmul(z, z);
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 100; k++) {
        float kf = float(k);
        t = cdiv(cmul(t, q), (nu + R(kf + 1.)) * (kf + 1.));
        s += t;
        if(dot2(t) < 1e-14 * dot2(s)) {
            break;
        }
    }
    return s;
}

vec2 _besselj_series(in vec2 z, in vec2 nu) {
    return cmul(cmul(cpow(.5 * z, nu), crgamma(nu + c1)), _bessel_series(z, nu, -1.));
}
vec2 _besseli_series(in vec2 z, in vec2 nu) {
    return cmul(cmul(cpow(.5 * z, nu), crgamma(nu + c1)), _bessel_series(z, nu, 1.));
}

// Hankel asymptotic sums: s1 = sum i^k a_k / z^k, s2 = sum (-i)^k a_k / z^k
void _hankel_sums(in vec2 z, in vec2 nu, out vec2 s1, out vec2 s2) {
    vec2 mu = 4. * cmul(nu, nu);
    vec2 u = cmul(ci, cinv(z));
    vec2 t1 = c1;
    vec2 t2 = c1;
    s1 = c1;
    s2 = c1;
    float prev = 1e30;
    for(int k = 1; k < 24; k++) {
        float kf = float(k);
        float o = 2. * kf - 1.;
        vec2 f = cdiv(mu - R(o * o), R(8. * kf));
        vec2 n1 = cmul(cmul(t1, f), u);
        vec2 n2 = cmul(cmul(t2, f), -u);
        float m = dot2(n1) + dot2(n2);
        if(m > prev) {
            break;
        }
        prev = m;
        t1 = n1;
        t2 = n2;
        s1 += t1;
        s2 += t2;
        if(m < 1e-16) {
            break;
        }
    }
}

void _hankel_pair(in vec2 z, in vec2 nu, out vec2 h1, out vec2 h2) {
    vec2 s1, s2;
    _hankel_sums(z, nu, s1, s2);
    vec2 chi = z - nu * ETA - R(PI * .25);
    vec2 pref = sqrt(2. / PI) * cinv(csqrt(z));
    h1 = cmul(pref, cmul(cexp(cmul(ci, chi)), s1));
    h2 = cmul(pref, cmul(cexp(cmul(-ci, chi)), s2));
}

bool _bessel_asym(in vec2 z, in vec2 nu) {
    return dot2(z) > 36. && dot2(z) > 4. * dot2(nu);
}

vec2 _besselj_asym(in vec2 z, in vec2 nu) {
    vec2 h1, h2;
    _hankel_pair(z, nu, h1, h2);
    return .5 * (h1 + h2);
}

vec2 cbesselj(in vec2 z, in vec2 nu) {
    float sg = 1.;
    if(abs(nu.y) < 1e-6 && nu.x < 0. && abs(nu.x - round(nu.x)) < 1e-6) {
        float n = -round(nu.x);
        nu = R(n);
        sg = mod(n, 2.) < .5 ? 1. : -1.;
    }
    if(dot2(z) < 1e-20) {
        return length(nu) < 1e-6 ? c1 : c0;
    }
    if(_bessel_asym(z, nu)) {
        return sg * _besselj_asym(z, nu);
    }
    return sg * _besselj_series(z, nu);
}

bool _bessel_isint(in vec2 nu) {
    return abs(nu.y) < 1e-6 && abs(nu.x - round(nu.x)) < 1e-6 && abs(nu.x) < 9.5;
}

// Y_n and K_n for an integer order n >= 0 (logarithmic series)
void _bessel_yk_int(in vec2 z, in int n, out vec2 yn, out vec2 kn) {
    vec2 x = .5 * z;
    vec2 x2 = cmul(x, x);
    vec2 lx = clog(x);
    float nf = float(n);
    vec2 xn = cpow(x, n);

    // finite sums F = sum (n-k-1)!/k! x^(2k-n), Fa = same with (-1)^k
    vec2 F = c0;
    vec2 Fa = c0;
    float fac = 1.;
    for(int j = 2; j < 10; j++) {
        if(j >= n) {
            break;
        }
        fac *= float(j);
    }
    // fac = (n-1)! for n >= 1
    vec2 pw = n > 0 ? cinv(xn) : c0;
    float sg = 1.;
    for(int k = 0; k < 9; k++) {
        if(k >= n) {
            break;
        }
        F += fac * pw;
        Fa += sg * fac * pw;
        sg = -sg;
        fac /= max(float(n - k - 1) * float(k + 1), 1.);
        pw = cmul(pw, x2);
    }

    // power series
    float nfact = 1.;
    for(int j = 2; j < 10; j++) {
        if(j > n) {
            break;
        }
        nfact *= float(j);
    }
    vec2 t = R(1. / nfact);
    float hk = 0.;
    float hnk = 0.;
    for(int j = 1; j < 10; j++) {
        if(j > n) {
            break;
        }
        hnk += 1. / float(j);
    }
    vec2 sI = c0;
    vec2 sJ = c0;
    vec2 sY = c0;
    vec2 sK = c0;
    float alt = 1.;
    for(int k = 0; k < 80; k++) {
        float ck = -2. * GAMMA + hk + hnk;
        sI += t;
        sJ += alt * t;
        sY += alt * ck * t;
        sK += ck * t;
        float kf = float(k);
        t = cmul(t, x2) / ((kf + 1.) * (kf + 1. + nf));
        hk += 1. / (kf + 1.);
        hnk += 1. / (kf + 1. + nf);
        alt = -alt;
        if(dot2(t) < 1e-14 * dot2(sI)) {
            break;
        }
    }
    vec2 In = cmul(xn, sI);
    vec2 Jn = cmul(xn, sJ);
    yn = (2. * cmul(Jn, lx) - F - cmul(xn, sY)) / PI;
    float s = mod(nf, 2.) < .5 ? 1. : -1.;
    kn = .5 * Fa - s * cmul(lx, In) + .5 * s * cmul(xn, sK);
}

vec2 _bessely_series(in vec2 z, in vec2 nu) {
    vec2 jp = _besselj_series(z, nu);
    vec2 jm = _besselj_series(z, -nu);
    return cdiv(cmul(jp, ccos(PI * nu)) - jm, csin(PI * nu));
}

vec2 cbessely(in vec2 z, in vec2 nu) {
    if(_bessel_asym(z, nu)) {
        vec2 h1, h2;
        _hankel_pair(z, nu, h1, h2);
        return cmul(h1 - h2, vec2(0., -.5));
    }
    if(_bessel_isint(nu)) {
        vec2 yn, kn;
        int n = int(abs(round(nu.x)));
        _bessel_yk_int(z, n, yn, kn);
        return (nu.x < 0. && mod(float(n), 2.) > .5) ? -yn : yn;
    }
    if(_nearint(nu)) {
        // The reflection formula is singular for integer orders: average over nu +- delta
        return .5 * (_bessely_series(z, nu + vec2(1e-2, 0.)) + _bessely_series(z, nu - vec2(1e-2, 0.)));
    }
    return _bessely_series(z, nu);
}

vec2 cbesselh1(in vec2 z, in vec2 nu) {
    return cbesselj(z, nu) + cmul(ci, cbessely(z, nu));
}
vec2 cbesselh2(in vec2 z, in vec2 nu) {
    return cbesselj(z, nu) - cmul(ci, cbessely(z, nu));
}

vec2 cbesseli(in vec2 z, in vec2 nu) {
    if(abs(nu.y) < 1e-6 && nu.x < 0. && abs(nu.x - round(nu.x)) < 1e-6) {
        nu = R(-round(nu.x));
    }
    if(dot2(z) < 1e-20) {
        return length(nu) < 1e-6 ? c1 : c0;
    }
    if(_bessel_asym(z, nu)) {
        // I_nu(z) = exp(-+ i pi nu / 2) J_nu(+- i z), rotating z into the sector where the Hankel expansion is accurate
        float s = z.y < 0. ? -1. : 1.;
        return cmul(cexp(cmul(ci, nu) * (s * ETA)), _besselj_asym(cmul(vec2(0., -s), z), nu));
    }
    return _besseli_series(z, nu);
}

vec2 _besselk_series(in vec2 z, in vec2 nu) {
    vec2 ip = _besseli_series(z, nu);
    vec2 im = _besseli_series(z, -nu);
    return PI * .5 * cdiv(im - ip, csin(PI * nu));
}

vec2 cbesselk(in vec2 z, in vec2 nu) {
    if(dot2(z) > 25.) {
        vec2 mu = 4. * cmul(nu, nu);
        vec2 iz = cinv(z);
        vec2 t = c1;
        vec2 s = c1;
        float prev = 1e30;
        for(int k = 1; k < 24; k++) {
            float kf = float(k);
            float o = 2. * kf - 1.;
            vec2 n = cmul(cmul(t, cdiv(mu - R(o * o), R(8. * kf))), iz);
            float m = dot2(n);
            if(m > prev) {
                break;
            }
            prev = m;
            t = n;
            s += t;
            if(m < 1e-16) {
                break;
            }
        }
        return cmul(cmul(sqrt(PI / 2.) * cinv(csqrt(z)), cexp(-z)), s);
    }
    if(_bessel_isint(nu)) {
        vec2 yn, kn;
        _bessel_yk_int(z, int(abs(round(nu.x))), yn, kn);
        return kn;
    }
    if(_nearint(nu)) {
        return .5 * (_besselk_series(z, nu + vec2(1e-2, 0.)) + _besselk_series(z, nu - vec2(1e-2, 0.)));
    }
    return _besselk_series(z, nu);
}

// ---------------------------------------------------------------------------
// Airy functions
// ---------------------------------------------------------------------------
const float AIRY_AI0 = 0.35502805388781723926;
const float AIRY_AIP0 = -0.25881940379280679840;

void _airy_maclaurin(in vec2 z, out vec2 f, out vec2 g) {
    vec2 z3 = cmul(z, cmul(z, z));
    vec2 tf = c1;
    vec2 tg = z;
    f = c1;
    g = z;
    for(int k = 0; k < 60; k++) {
        float kf = float(k);
        tf = cmul(tf, z3) / ((3. * kf + 2.) * (3. * kf + 3.));
        tg = cmul(tg, z3) / ((3. * kf + 3.) * (3. * kf + 4.));
        f += tf;
        g += tg;
        if(dot2(tf) + dot2(tg) < 1e-16 * (dot2(f) + dot2(g))) {
            break;
        }
    }
}

vec2 _airy_sum(in vec2 zeta, in float alt) {
    vec2 iz = alt * cinv(zeta);
    vec2 p = c1;
    vec2 s = c1;
    float u = 1.;
    float prev = 1e30;
    for(int k = 1; k < 16; k++) {
        float kf = float(k);
        u *= (6. * kf - 5.) * (6. * kf - 3.) * (6. * kf - 1.) / ((2. * kf - 1.) * 216. * kf);
        p = cmul(p, iz);
        vec2 t = u * p;
        float m = dot2(t);
        if(m > prev) {
            break;
        }
        prev = m;
        s += t;
        if(m < 1e-16) {
            break;
        }
    }
    return s;
}

void _airy_pq(in vec2 zeta, out vec2 P, out vec2 Q) {
    vec2 iz = cinv(zeta);
    vec2 p = c1;
    float u = 1.;
    float prev = 1e30;
    P = c1;
    Q = c0;
    for(int k = 1; k < 16; k++) {
        float kf = float(k);
        u *= (6. * kf - 5.) * (6. * kf - 3.) * (6. * kf - 1.) / ((2. * kf - 1.) * 216. * kf);
        p = cmul(p, iz);
        vec2 t = u * p;
        float m = dot2(t);
        if(m > prev) {
            break;
        }
        prev = m;
        int r = k % 4;
        if(r == 0) {
            P += t;
        } else if(r == 1) {
            Q += t;
        } else if(r == 2) {
            P -= t;
        } else {
            Q -= t;
        }
        if(m < 1e-16) {
            break;
        }
    }
}

vec2 _airy_ai_asym(in vec2 z) {
    if(abs(atan(z.y, z.x)) < 2.0943951) {
        vec2 zeta = (2. / 3.) * cmul(z, csqrt(z));
        vec2 s = _airy_sum(zeta, -1.);
        return cdiv(cmul(cexp(-zeta), s), 2. * sqrt(PI) * csqrt(csqrt(z)));
    }
    vec2 w = -z;
    vec2 zeta = (2. / 3.) * cmul(w, csqrt(w));
    vec2 P, Q;
    _airy_pq(zeta, P, Q);
    vec2 th = zeta - R(PI * .25);
    return cdiv(cmul(ccos(th), P) + cmul(csin(th), Q), sqrt(PI) * csqrt(csqrt(w)));
}

vec2 cairyai(in vec2 z) {
    if(dot2(z) > 9.) {
        return _airy_ai_asym(z);
    }
    vec2 f, g;
    _airy_maclaurin(z, f, g);
    return AIRY_AI0 * f + AIRY_AIP0 * g;
}

vec2 cairybi(in vec2 z) {
    if(dot2(z) > 9.) {
        vec2 a = cairyai(cmul(z, cis(2.0943951)));
        vec2 b = cairyai(cmul(z, cis(-2.0943951)));
        return cmul(cis(PI / 6.), a) + cmul(cis(-PI / 6.), b);
    }
    vec2 f, g;
    _airy_maclaurin(z, f, g);
    return SQRT3 * (AIRY_AI0 * f - AIRY_AIP0 * g);
}

// ---------------------------------------------------------------------------
// Trigonometric / hyperbolic integrals
// ---------------------------------------------------------------------------
// Auxiliary asymptotic functions f(z) and g(z) (Re z > 0)
void _sici_fg(in vec2 z, out vec2 f, out vec2 g) {
    vec2 iz2 = cinv(cmul(z, z));
    vec2 tf = cinv(z);
    vec2 tg = cmul(tf, cinv(z));
    f = tf;
    g = tg;
    float prev = 1e30;
    for(int k = 1; k < 14; k++) {
        float kf = float(k);
        vec2 nf = -cmul(tf, iz2) * (2. * kf - 1.) * (2. * kf);
        vec2 ng = -cmul(tg, iz2) * (2. * kf) * (2. * kf + 1.);
        float m = dot2(nf) + dot2(ng);
        if(m > prev) {
            break;
        }
        prev = m;
        tf = nf;
        tg = ng;
        f += tf;
        g += tg;
        if(m < 1e-16) {
            break;
        }
    }
}

vec2 _si_series(in vec2 z) {
    vec2 mz2 = -cmul(z, z);
    vec2 t = c1;
    vec2 s = c1;
    for(int k = 0; k < 40; k++) {
        float kf = float(k);
        t = cmul(t, mz2) / ((2. * kf + 2.) * (2. * kf + 3.));
        s += t / (2. * kf + 3.);
        if(dot2(t) < 1e-16) {
            break;
        }
    }
    return cmul(z, s);
}

vec2 _ci_series(in vec2 z) {
    vec2 mz2 = -cmul(z, z);
    vec2 t = c1;
    vec2 s = c0;
    for(int k = 0; k < 40; k++) {
        float kf = float(k);
        t = cmul(t, mz2) / ((2. * kf + 1.) * (2. * kf + 2.));
        s += t / (2. * kf + 2.);
        if(dot2(t) < 1e-16) {
            break;
        }
    }
    return R(GAMMA) + clog(z) + s;
}

vec2 csinint(in vec2 z) {
    if(dot2(z) < 81.) {
        return _si_series(z);
    }
    float sg = 1.;
    if(z.x < 0.) {
        z = -z;
        sg = -1.;
    }
    vec2 f, g;
    _sici_fg(z, f, g);
    return sg * (R(ETA) - cmul(f, ccos(z)) - cmul(g, csin(z)));
}

vec2 ccosint(in vec2 z) {
    if(dot2(z) < 81.) {
        return _ci_series(z);
    }
    vec2 shift = c0;
    if(z.x < 0.) {
        shift = vec2(0., z.y < 0. ? -PI : PI);
        z = -z;
    }
    vec2 f, g;
    _sici_fg(z, f, g);
    return cmul(f, csin(z)) - cmul(g, ccos(z)) + shift;
}

vec2 csinhint(in vec2 z) {
    return cmul(vec2(0., -1.), csinint(cmul(ci, z)));
}

vec2 ccoshint(in vec2 z) {
    vec2 shift = c0;
    if(z.x < 0.) {
        shift = vec2(0., z.y < 0. ? -PI : PI);
        z = -z;
    }
    return ccosint(cmul(ci, z)) - vec2(0., ETA) + shift;
}
