#version 300 es
precision highp float;

##CONFIG

uniform int iterations;
uniform float bailout;
uniform float scale;
uniform float aspect;
uniform float derivative;
uniform vec2 center;
uniform vec2 point;
uniform mat2 transform;
uniform float smoothing;
uniform float contrast;
uniform float hue;

// uniform mat4x2 coefs;

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

in vec2 uv;
out vec4 fragColor;

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

vec2 csin(in vec2 z) {
  return cdiv(cexp(vec2(-z.y, z.x)) - cexp(vec2(z.y, -z.x)), vec2(0, 2.0));
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

vec3 hslToRgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6. + vec3(0., 4., 2.), 6.) - 3.) - 1., 0., 1.);
  return c.z + c.y * (rgb - 0.5) * (1. - abs(2. * c.z - 1.));
}

#ifdef PERTURB
vec2 fetchRef(in int n, in bool shift) {
  vec4 tex = texelFetch(orbit, ivec2(n % 64, n / 64), 0);
  return shift ? tex.zw : tex.xy;
}
#endif

void main(void) {
  vec2 p = scale * vec2(aspect, 1.) * (2. * uv - 1.);

  #ifdef PERTURB
  vec2 z = vec2(0.);
    #ifdef FIXED// Mandelbrot-like
  vec2 dz = vec2(0.);
  vec2 dc = p * transform;
    #else // Julia-like
  vec2 dz = p * transform;
  vec2 dc = vec2(0.);
    #endif
  vec2 dz_1 = vec2(0.);
  #else
    #ifdef FIXED// Mandelbrot-like
  vec2 z = point;
  vec2 c = (center + p) * transform;
    #else // Julia-like
  vec2 z = (center + p) * transform;
  vec2 c = point;
    #endif
  #endif
  vec2 z_1 = vec2(0.);

  #ifdef USE_DERIVATIVE
      #ifdef USE_DISTANCE_ESTIMATE
  float z_prime_max = scale * pow(exp(-derivative * .06), 2.);
  vec2 z_prime = vec2(z_prime_max);
    #else
  float z_prime_max = exp(-derivative * .15);
  vec2 z_prime = vec2(1., 0.);
    #endif
  vec2 z_1_prime = vec2(1000., 0.);
  #endif

  #ifdef PERTURB
  int m = 0;
  bool shift = true;
  int max = maxIterations.y;
  vec2 Z = fetchRef(m, shift);
  #endif

  vec3 col = vec3(0.);
  float n = -.0;
  for(int i = 0; i < iterations; i++) {
    vec2 zt = z;
    #ifdef USE_DERIVATIVE
    vec2 z_primet = z_prime;
    #endif

    #ifdef PERTURB
    vec2 dzt = dz;
    dz = F(Z, dz, dc);
    dz_1 = dzt;
    m++;
    Z = fetchRef(m, shift);
    z = Z + dz;
    #else
    z = F(z, c);
    #endif

    float z2 = dot(z, z);

    #ifdef USE_DERIVATIVE
    z_prime = F_prime(z, c, z_prime);
      #ifdef USE_DISTANCE_ESTIMATE
    z_prime += vec2(z_prime_max);
    float z_prime2 = dot(z_prime, z_prime);
    if(z2 < z_prime2) {
      float r = length(z);
      float d = r * 2. * log(r) / length(z_prime);
      float t = clamp(d / z_prime_max, 0., 1.);
      n = float(i);
        #ifdef USE_SMOOTHING
      // n -= log2(log2(z2)) - 4.0;
        #endif
      col = 1. - contrast + contrast * cos(smoothing * n + 4. * hslToRgb(vec3(hue, 1., 0.875)));
      col = mix(col, vec3(0., 0., 0.), t);
      // col = vec3(1.);
      break;
    }
      #else
      // Keep this in DE?
    float z_prime2 = dot(z_prime, z_prime);
    if(z_prime2 < z_prime_max) {
        #ifdef SHOW_DERIVATIVE
      n = float(i) + 1.;// - 1. / (z_prime2 * log(2.) * log2(z_prime2));
      col = 1. - contrast + contrast * cos(smoothing * n + 4. * hslToRgb(vec3(hue - .5, 1., 0.875)));
        #endif
      break;
    }
      #endif
    z_1_prime = z_prime;
    #endif

    if(z2 > bailout) {
      #ifndef USE_DISTANCE_ESTIMATE
      // Smooth iteration count
      n = float(i);
        #ifdef USE_SMOOTHING
      n -= log2(log2(z2)) - 4.0;
        #endif

      col = 1. - contrast + contrast * cos(smoothing * n + 4. * hslToRgb(vec3(hue, 1., 0.875)));
      #endif
      break;
    }

    #ifdef PERTURB
    // Rebasing
    if(z2 < dot(dz, dz) || m >= max) {
      dz = z;
      m = 0;
      max = maxIterations.x;
      shift = false;
      Z = fetchRef(m, shift);
    }
    #endif

    // Store last z
    z_1 = zt;
    #ifdef USE_DERIVATIVE
    z_1_prime = z_primet;
    #endif

  }

  fragColor = vec4(col, 1.0);
}
