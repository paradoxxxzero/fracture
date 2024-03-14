const float PI = 3.1415926535897932384626433832795;
const float TAU = 6.283185307179586476925286766559;
const float ETA = 1.5707963267948966192313216916398;
const vec2 c1 = vec2(1., 0.);
const vec2 ci = vec2(0., 1.);

vec3 hsl2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}
vec3 rgb2hcv(in vec3 col) {
  vec4 P = mix(vec4(col.bg, -1.0, 2.0 / 3.0), vec4(col.gb, 0.0, -1.0 / 3.0), step(col.b, col.g));
  vec4 Q = mix(vec4(P.xyw, col.r), vec4(col.r, P.yzx), step(P.x, col.r));
  float C = Q.x - min(Q.w, Q.y);
  float H = abs((Q.w - Q.y) / (6. * C + 1e-9) + Q.z);
  return vec3(H, C, Q.x);
}

vec3 rgb2hsl(in vec3 col) {
  col = rgb2hcv(col);
  float L = col.z - col.y * 0.5;
  float S = col.y / (1. - abs(L * 2. - 1.) + 1e-9);
  return vec3(col.x, S, L);
}

// vec3 hsl2rgb(in vec3 c) {
//   vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
//   return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
// }

// vec3 rgb2hsl(vec3 col) {
//   float eps = 1e-10;
//   float minc = min(col.r, min(col.g, col.b));
//   float maxc = max(col.r, max(col.g, col.b));
//   vec3 mask = step(col.grr, col.rgb) * step(col.bbg, col.rgb);
//   vec3 h = mask * (vec3(0.0, 2.0, 4.0) + (col.gbr - col.brg) / (maxc - minc + eps)) / 6.0;
//   return vec3(fract(1.0 + h.x + h.y + h.z), (maxc - minc) / (1.0 - abs(minc + maxc - 1.0) + eps), (minc + maxc) * 0.5);
// }

vec3 hueAdjust(in vec3 col, in float p) {
  vec3 hsl = rgb2hsl(col);
  hsl.x += p + hue;
  hsl.y *= saturation;
  hsl.z *= lightness;
  return hsl2rgb(hsl);
}

// https://iquilezles.org/articles/palettes
vec3 cosPalette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
  return a + b * cos(offset + TAU * (c * velocity * t + d));
}

vec3 palette(float t) {
  return cosPalette(t, 
#if PALETTE == 0
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.10, 0.20)
#elif PALETTE == 1
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67)
#elif PALETTE == 2
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.3, 0.20, 0.20)
#elif PALETTE == 3
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 0.5), vec3(0.8, 0.90, 0.30)
#elif PALETTE == 4
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 0.7, 0.4), vec3(0.0, 0.15, 0.20)
#elif PALETTE == 5
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)
#elif PALETTE == 6
  vec3(0.8, 0.5, 0.4), vec3(0.2, 0.4, 0.2), vec3(2.0, 1.0, 1.0), vec3(0.0, 0.25, 0.25)
#else
  vec3(0.731, 1.098, 0.192), vec3(0.358, 1.090, 0.657), vec3(1.077, 0.360, 0.328), vec3(0.965, 2.265, 0.837)
#endif
  );
}

vec3 color(float t, float p) {
  return hueAdjust(palette(t), p);
}

vec3 color(float t) {
  return color(t, 0.);
}

in vec2 uv;
out vec4 fragColor;

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

vec2 expi(in float x) {
  return vec2(cos(x), sin(x));
}
vec2 cexp(in vec2 z) {
  return exp(z.x) * expi(z.y);
}

vec2 csqrt(in vec2 z) {
  float r = length(z);
  return vec2(sqrt(0.5 * (r + z.x)), sign(z.y) * sqrt(0.5 * (r - z.x)));
}

vec2 clog(in vec2 z) {
  return vec2(log(length(z)), atan(z.y, z.x));
}

vec2 ccos(in vec2 z) {
  return vec2(cos(z.x) * cosh(z.y), -sin(z.x) * sinh(z.y));
}

vec2 csin(in vec2 z) {
  return vec2(sin(z.x) * cosh(z.y), cos(z.x) * sinh(z.y));
}

vec2 ctan(in vec2 z) {
  return cdiv(csin(z), ccos(z));
}

vec2 cacos(in vec2 z) {
  return cmul(-ci, clog(cadd(z, cmul(ci, csqrt(csub(c1, cmul(z, z)))))));
}

vec2 casin(in vec2 z) {
  return cmul(-ci, clog(cadd(cmul(z, ci), csqrt(csub(c1, cmul(z, z))))));
}

vec2 catan(in vec2 z) {
  return cmul(ci * .5, clog(cdiv(cadd(ci, z), csub(ci, z))));
}

vec2 ccosh(in vec2 z) {
  return cdiv(cadd(cexp(z), cexp(cmul(-ci, z))), 2.0);
}

vec2 csinh(in vec2 z) {
  return cdiv(cexp(z) - cexp(cmul(-ci, z)), 2.0);
}

vec2 ctanh(in vec2 z) {
  return cdiv(csinh(z), ccosh(z));
}

vec2 cacosh(in vec2 z) {
  return clog(cadd(z, csqrt(csub(cmul(z, z), c1))));
}

vec2 casinh(in vec2 z) {
  return clog(cadd(z, csqrt(cadd(cmul(z, z), c1))));
}

vec2 catanh(in vec2 z) {
  return cmul(vec2(0.5, 0.), clog(cdiv(cadd(c1, z), csub(c1, z))));
}

vec2 cpow(in vec2 z, in vec2 k) {
  return cexp(cmul(k, clog(z)));
}
vec2 cpow(in vec2 z, in float k) {
  return cexp(k * clog(z));
}
vec2 cpow(in vec2 z, in int k) {
  vec2 w = vec2(1., 0.);
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
vec2 cpow1(in vec2 z) {
  return z;
}
vec2 cpow2(in vec2 z) {
  return cmul(z, z);
}
vec2 cpow3(in vec2 z) {
  return cmul(z, cpow2(z));
}
vec2 cpow4(in vec2 z) {
  return cmul(cpow2(z), cpow2(z));
}
vec2 cpow5(in vec2 z) {
  return cmul(z, cpow4(z));
}
vec2 cpow6(in vec2 z) {
  return cpow2(cpow3(z));
}
vec2 cpow7(in vec2 z) {
  return cmul(z, cpow6(z));
}
vec2 cpow8(in vec2 z) {
  return cpow2(cpow4(z));
}
vec2 cpow9(in vec2 z) {
  return cmul(z, cpow8(z));
}

void sncndn(
  float u,
  float k2,
  out float sn,
  out float cn,
  out float dn
) {
  float emc = 1.0 - k2;
  float a, b, c;
  const int N = 4;
  float em[N], en[N];
  a = 1.0;
  dn = 1.0;
  for(int i = 0; i < N; i++) {
    em[i] = a;
    emc = sqrt(emc);
    en[i] = emc;
    c = 0.5 * (a + emc);
    emc = a * emc;
    a = c;
  }
  // Nothing up to here depends on u, so
  // could be precalculated.
  u = c * u;
  sn = sin(u);
  cn = cos(u);
  if(sn != 0.0) {
    a = cn / sn;
    c = a * c;
    for(int i = N - 1; i >= 0; i--) {
      b = em[i];
      a = c * a;
      c = dn * c;
      dn = (en[i] + a) / (b + a);
      a = c / b;
    }
    a = 1.0 / sqrt(c * c + 1.0);
    if(sn < 0.0)
      sn = -a;
    else
      sn = a;
    cn = c * sn;
  }
}

vec2 csn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(snu * dnv, cnu * dnu * snv * cnv);
}

vec2 ccn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(cnu * cnv, -snu * dnu * snv * dnv);
}

vec2 cdn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(dnu * cnv * dnv, -k2 * snu * cnu * snv);
}

vec2 cgamma(in vec2 z) {
  float LG = 5.65;
  float[] P = float[](2.506628275635, 225.525584619175, -268.295973841305, 80.9030806934622, -5.007578639705, 0.0114684895435);

  vec2 zz = (z.x > 1.0) ? (z) : (vec2(1.0, 0.0) - z);
  vec2 sum = vec2(P[0], 0.0) + P[1] * cinv(zz + vec2(1.0, 0.0)) + P[2] * cinv(zz + vec2(2.0, 0.0)) + P[3] * cinv(zz + vec2(3.0, 0.0)) + P[4] * cinv(zz + vec2(4.0, 0.0)) + P[5] * cinv(zz + vec2(5.0, 0.0));
  vec2 zh = zz + vec2(LG, 0.0);
  vec2 w = cexp(clog(sum) + cmul(zz + vec2(0.5, 0.0), clog(zh)) - clog(zz) - zh);

  return ((z.x > 1.0) ? (w) : (PI * cinv(cmul(w, csin(PI * z)))));
}

vec2 cpsi(in vec2 z, in int n) {
  // Abramowitz and Stegun 6.4.11

  return vec2(1.);
}

vec2 cpsi(in vec2 z) {
  return cpsi(z, 1);
}

vec2 cbeta(in vec2 z, in vec2 w) {
  return cdiv(cgamma(z) * cgamma(w), cgamma(cadd(z, w)));
}

vec2 czeta(vec2 z) {
  vec2 sum = vec2(0);
  for(float i = 1.; i < 30.; ++i) {
    sum += sin(-z.y * log(i) - vec2(1.57, 0.)) / pow(i, z.x);
  }
  return sum;
}

float diffabs(in float X, in float x) {
  if(X >= 0.) {
    if(X + x >= 0.) {
      return x;
    } else {
      return -(2. * X + x);
    }
  } else {
    if(X + x > 0.) {
      return 2. * X + x;
    } else {
      return -x;
    }
  }
}

#ifdef PERTURB
vec2 fetchRef(in int n, in bool shift) {
  vec4 tex = texelFetch(orbit, ivec2(n % 128, n / 128), 0);
  return shift ? tex.zw : tex.xy;
}
#endif

float aafract(float x) {
  float v = fract(x);
  float w = length(vec2(dFdx(x), dFdy(x)));
  return v < 1. - w ? v / (1. - w) : (1. - v) / w;
}

float aastep(float x) {
  float w = length(vec2(dFdx(x), dFdy(x)));
  return smoothstep(.7, -.7, (abs(fract(x - .25) - .5) - .25) / w);
}
