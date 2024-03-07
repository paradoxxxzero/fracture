#version 300 es
precision highp float;

##CONFIG

uniform int iterations;
uniform float bailin;
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

vec3 hslToRgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6. + vec3(0., 4., 2.), 6.) - 3.) - 1., 0., 1.);
  return c.z + c.y * (rgb - 0.5) * (1. - abs(2. * c.z - 1.));
}

#if AMBIANCE == 0
vec3 color(float t, float p) {
  return 1. - contrast + contrast * cos(smoothing * t + 4. * hslToRgb(vec3(hue + p, 1., 0.875)));
}
#elif AMBIANCE == 1
vec3 color(float t, float p) {
  t *= pow(smoothing, 1.5);
  const vec3 c0 = vec3(-0.002136485053939582, -0.000749655052795221, -0.005386127855323933);
  const vec3 c1 = vec3(0.2516605407371642, 0.6775232436837668, 2.494026599312351);
  const vec3 c2 = vec3(8.353717279216625, -3.577719514958484, 0.3144679030132573);
  const vec3 c3 = vec3(-27.66873308576866, 14.26473078096533, -13.64921318813922);
  const vec3 c4 = vec3(52.17613981234068, -27.94360607168351, 12.94416944238394);
  const vec3 c5 = vec3(-50.76852536473588, 29.04658282127291, 4.23415299384598);
  const vec3 c6 = vec3(18.65570506591883, -11.48977351997711, -5.601961508734096);
  t *= 2.;
  if(t >= 1.) {
    t = 2. - t;
  }
  return (contrast + .5) * (c0 + t * (c1 + t * (c2 + t * (c3 + t * (c4 + t * (c5 + t * c6))))));
}
#elif AMBIANCE == 2
vec3 color(float t, float p) {
  return vec3(pow(t, .15));
}
#elif AMBIANCE == 3
vec3 color(float t, float p) {
  return 1. - contrast + contrast * hslToRgb(vec3(hue + p + pow(t, .4), .7, .8));
}
#endif

vec3 color(float t) {
  return color(t, 0.);
} 

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

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

#ifdef PERTURB
vec2 fetchRef(in int n, in bool shift) {
  vec4 tex = texelFetch(orbit, ivec2(n % 64, n / 64), 0);
  return shift ? tex.zw : tex.xy;
}
#endif

void main(void) {
  vec2 p = scale * vec2(aspect, 1.) * (2. * uv - 1.);
  float BAILOUT = pow(10., bailout);
  float BAILIN = pow(10., bailin);

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
  float zdzmax = exp(-derivative * .15);
    #ifdef FIXED// Mandelbrot-like
  vec2 zdc = vec2(0., 0.);
    #else // Julia-like
  vec2 zdc = vec2(1., 0.);
    #endif
  vec2 zdz = vec2(1., 0.);

  vec2 zdc_1 = vec2(0., 0.);
  vec2 zdz_1 = vec2(0., 0.);
  #endif

  #ifdef PERTURB
  int m = 0;
  bool shift = true;
  int max = maxIterations.y;
  vec2 Z = fetchRef(m, shift);
  z = Z + dz;
  #endif

  float zexp = 0.;
  vec3 col = vec3(0.);
  float n = -.0;
  for(int i = 0; i < iterations; i++) {
    #ifdef USE_DERIVATIVE
    vec2 zdct = zdc;
    zdc = F_prime(z, c, zdc) + vec2(1., 0.);
    zdc_1 = zdct;
    #endif

    vec2 zt = z;
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
    z_1 = zt;

    #ifdef USE_DERIVATIVE
    vec2 zdzt = zdz;
    zdz = F_prime(z, c, zdz);
    zdz_1 = zdzt;
    #endif

    #ifdef USE_DERIVATIVE
    float zdzzdz = dot(zdz, zdz);
    if(zdzzdz < zdzmax) {
        #ifdef SHOW_DERIVATIVE
      n = float(i) + 1.;
      col = color(n, .5);
        #endif
      break;
    }
    #endif

    #ifdef CONVERGENT
    zexp += exp(-length(z) - .5 / (length(z - z_1)));
    float z_z_1 = dot2(z - z_1);
    if(z_z_1 < BAILIN) {
      #ifdef USE_SMOOTHING
      col = color(10. * zexp);
      #else
      col = color(float(i));
      #endif
      break;
    }
    #endif
    float zz = dot(z, z);

    // #ifdef ROOTS
    // for(int j = 0; j < roots.length(); j++) {
    //   vec2 root = roots[j];
    //   float diff = dot2(z - root);
    //   float eps = 1e-9;
    //   if(diff < eps) {
    //     float r = float(j) / float(roots.length());
    //     n = float(i);
    //     #ifdef USE_SMOOTHING
    //     float prev = dot2(z_1 - root);
    //     n += (log(eps / prev)) / (log(diff / prev));
    //     #endif
    //     col = 1. - contrast + contrast * cos(smoothing * n + 4. * hslToRgb(vec3(hue + r, 1., 0.875)));
    //     break;
    //   }
    // }
    // if(col.g > 0.) {
    //   break;
    // }
    // #endif

    #ifdef DIVERGENT
    if(zz > BAILOUT) {
      #ifdef USE_DISTANCE_ESTIMATE
      float d = sqrt(zz / dot(zdc, zdc)) * log(zz);
      // col = vec3(pow(2e4 * smoothing * d / scale, contrast));
      // col = hslToRgb(vec3(pow(smoothing * d, .05), .5, .5));
        #if AMBIANCE == 2
      n = d;
        #else
      n = 130. / pow(d, .02);
        #endif
      #else
      // Smooth iteration count
      n = float(i);
        #ifdef USE_SMOOTHING
      n -= log2(log2(zz)) - 4.0;
        #endif

      #endif
      col = color(n);
      break;
    }
    #endif

    #ifdef PERTURB
    // Rebasing
    if(zz < dot(dz, dz) || m >= max) {
      dz = z;
      m = 0;
      max = maxIterations.x;
      shift = false;
      Z = fetchRef(m, shift);
    }
    #endif
  }

  fragColor = vec4(col, 1.0);
}
