float dot2(in vec2 z) {
  return dot(z, z);
}

vec2 cadd(in vec2 z0, in vec2 z1) {
  return z0 + z1;
}
vec2 cadd(in vec2 z, in float w) {
  return z + vec2(w, 0.);
}
vec2 cadd(in float k, in vec2 w) {
  return vec2(k, 0.) + w;
}
float cadd(in float k, in float w) {
  return k + w;
}

vec2 csub(in vec2 z0, in vec2 z1) {
  return z0 - z1;
}
vec2 csub(in vec2 z, in float w) {
  return z - vec2(w, 0.);
}
vec2 csub(in float k, in vec2 w) {
  return vec2(k, 0.) - w;
}
float csub(in float k, in float w) {
  return k - w;
}

vec2 cmul(in vec2 z, in vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}
vec2 cmul(in vec2 z, in float k) {
  return k * z;
}
vec2 cmul(in float k, in vec2 w) {
  return k * w;
}
float cmul(in float k, in float w) {
  return k * w;
}

vec2 cinv(in vec2 z) {
  return z * vec2(1, -1) / dot(z, z);
}
vec2 cdiv(in vec2 z0, in vec2 z1) {
  return cmul(z0, cinv(z1));
}
vec2 cdiv(in vec2 z0, in float k) {
  return z0 / k;
}
vec2 cdiv(in float k, in vec2 w) {
  return k * cinv(w);
}
float cdiv(in float k, in float w) {
  return k / w;
}

vec2 conj(in vec2 z) {
  return vec2(z.x, -z.y);
}
float conj(in float k) {
  return k;
}

vec2 expi(in float x) {
  return vec2(cos(x), sin(x));
}
vec2 cexp(in vec2 z) {
  return exp(z.x) * expi(z.y);
}
float cexp(in float k) {
  return exp(k);
}

float cnorm(in vec2 z) {
  return length(z);
}
float cnorm(in float k) {
  return abs(k);
}
float carg(in vec2 z) {
  return atan(z.y, z.x);
}
float carg(in float k) {
  return sign(k) * ETA;
}

vec2 csqrt(in vec2 z) {
  float r = length(z);
  return vec2(sqrt(0.5 * (r + z.x)), sign(z.y) * sqrt(0.5 * (r - z.x)));
}
float csqrt(in float k) {
  return sqrt(k);
}

vec2 clog(in vec2 z) {
  return vec2(log(length(z)), atan(z.y, z.x));
}
float clog(in float k) {
  return log(k);
}

vec2 ccos(in vec2 z) {
  return vec2(cos(z.x) * cosh(z.y), -sin(z.x) * sinh(z.y));
}
float ccos(in float k) {
  return cos(k);
}

vec2 csin(in vec2 z) {
  return vec2(sin(z.x) * cosh(z.y), cos(z.x) * sinh(z.y));
}
float csin(in float k) {
  return sin(k);
}

vec2 ctan(in vec2 z) {
  return cdiv(csin(z), ccos(z));
}
float ctan(in float k) {
  return tan(k);
}

vec2 cacos(in vec2 z) {
  return cmul(-ci, clog(cadd(z, cmul(ci, csqrt(csub(c1, cmul(z, z)))))));
}
float cacos(in float k) {
  return acos(k);
}

vec2 casin(in vec2 z) {
  return cmul(-ci, clog(cadd(cmul(z, ci), csqrt(csub(c1, cmul(z, z))))));
}
float casin(in float k) {
  return asin(k);
}

vec2 catan(in vec2 z) {
  return cmul(ci * .5, clog(cdiv(cadd(ci, z), csub(ci, z))));
}
float catan(in float k) {
  return atan(k);
}

vec2 ccosh(in vec2 z) {
  return cdiv(cadd(cexp(z), cexp(cmul(-ci, z))), 2.0);
}
float ccosh(in float k) {
  return cosh(k);
}

vec2 csinh(in vec2 z) {
  return cdiv(cexp(z) - cexp(cmul(-ci, z)), 2.0);
}
float csinh(in float k) {
  return sinh(k);
}

vec2 ctanh(in vec2 z) {
  return cdiv(csinh(z), ccosh(z));
}
float ctanh(in float k) {
  return tanh(k);
}

vec2 cacosh(in vec2 z) {
  return clog(cadd(z, csqrt(csub(cmul(z, z), c1))));
}
float cacosh(in float k) {
  return acosh(k);
}

vec2 casinh(in vec2 z) {
  return clog(cadd(z, csqrt(cadd(cmul(z, z), c1))));
}
float casinh(in float k) {
  return asinh(k);
}

vec2 catanh(in vec2 z) {
  return cmul(vec2(0.5, 0.), clog(cdiv(cadd(c1, z), csub(c1, z))));
}
float catanh(in float k) {
  return atanh(k);
}

vec2 cpow(in vec2 z, in vec2 k) {
  return cexp(cmul(k, clog(z)));
}
float cpow(in float z, in float k) {
  return pow(z, k);
}
vec2 cpow(in float k, in vec2 z) {
  return cpow(vec2(k, 0.), z);
}
vec2 cpow(in vec2 z, in float k) {
  return cexp(k * clog(z));
}
vec2 cpow(in vec2 z, in int k) {
  vec2 w = vec2(1., 0.);
  if(abs(k) > 10) {
    return cpow(z, float(k));
  }
  if(k < 0) {
    z = cinv(z);
    k = -k;
  }
  for(int i = 0; i < k; i++) {
    w = cmul(w, z);
  }
  return w;
}

// Fast integer power functions
vec2 cpow0(in vec2 z) {
  return vec2(1., 0.);
}
float cpow0(in float z) {
  return 1.;
}
vec2 cpow1(in vec2 z) {
  return z;
}
float cpow1(in float z) {
  return z;
}
vec2 cpow2(in vec2 z) {
  return cmul(z, z);
}
float cpow2(in float z) {
  return z * z;
}
vec2 cpow3(in vec2 z) {
  return cmul(z, cpow2(z));
}
float cpow3(in float z) {
  return cmul(z, cpow2(z));
}
vec2 cpow4(in vec2 z) {
  return cmul(cpow2(z), cpow2(z));
}
float cpow4(in float z) {
  return cmul(cpow2(z), cpow2(z));
}
vec2 cpow5(in vec2 z) {
  return cmul(z, cpow4(z));
}
float cpow5(in float z) {
  return cmul(z, cpow4(z));
}
vec2 cpow6(in vec2 z) {
  return cpow2(cpow3(z));
}
float cpow6(in float z) {
  return cpow2(cpow3(z));
}
vec2 cpow7(in vec2 z) {
  return cmul(z, cpow6(z));
}
float cpow7(in float z) {
  return cmul(z, cpow6(z));
}
vec2 cpow8(in vec2 z) {
  return cpow2(cpow4(z));
}
float cpow8(in float z) {
  return cpow2(cpow4(z));
}
vec2 cpow9(in vec2 z) {
  return cmul(z, cpow8(z));
}
float cpow9(in float z) {
  return cmul(z, cpow8(z));
}
