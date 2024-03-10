const float PI = 3.1415926535897932384626433832795;
const float TAU = 6.283185307179586476925286766559;
const float ETA = 1.5707963267948966192313216916398;
const vec2 c1 = vec2(1., 0.);
const vec2 ci = vec2(0., 1.);

vec3 hsl2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

vec3 rgb2hsl(vec3 col) {
  float eps = 1e-10;
  float minc = min(col.r, min(col.g, col.b));
  float maxc = max(col.r, max(col.g, col.b));
  vec3 mask = step(col.grr, col.rgb) * step(col.bbg, col.rgb);
  vec3 h = mask * (vec3(0.0, 2.0, 4.0) + (col.gbr - col.brg) / (maxc - minc + eps)) / 6.0;
  return vec3(fract(1.0 + h.x + h.y + h.z), (maxc - minc) / (1.0 - abs(minc + maxc - 1.0) + eps), (minc + maxc) * 0.5);
}

vec3 hueAdjust(in vec3 col, in float p) {
  vec3 hsl = rgb2hsl(col);
  hsl.x += p + hue;
  hsl.y *= saturation;
  hsl.z *= lightness;
  return hsl2rgb(hsl);
}

// https://iquilezles.org/articles/palettes
vec3 pal(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
  return a + b * cos(offset + TAU * (c * velocity * t + d));
}

vec3 ambiance(float t) {
  return pal(t, 
#if AMBIANCE == 0
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.10, 0.20)
#elif AMBIANCE == 1
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67)
#elif AMBIANCE == 2
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.4, 0.60, 0.05)
#elif AMBIANCE == 3
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.3, 0.20, 0.20)
#elif AMBIANCE == 4
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 0.5), vec3(0.8, 0.90, 0.30)
#elif AMBIANCE == 5
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 0.7, 0.4), vec3(0.0, 0.15, 0.20)
#elif AMBIANCE == 6
  vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)
#elif AMBIANCE == 7
  vec3(0.8, 0.5, 0.4), vec3(0.2, 0.4, 0.2), vec3(2.0, 1.0, 1.0), vec3(0.0, 0.25, 0.25)
#endif
  );
}

vec3 color(float t, float p) {
  return hueAdjust(ambiance(t), p + hue);
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
  vec4 tex = texelFetch(orbit, ivec2(n % 64, n / 64), 0);
  return shift ? tex.zw : tex.xy;
}
#endif
