#version 300 es
precision highp float;

##CONFIG

uniform vec2 center;
uniform vec2 point;
uniform float scale;
uniform vec2 aspect;
uniform mat2 transform;

uniform int iterations;
uniform float bailin;
uniform float bailout;
uniform float derivative;

uniform float offset;
uniform float velocity;
uniform float hue;
uniform float saturation;
uniform float lightness;

uniform float gridScale;
uniform float gridWidth;
uniform float normGridScale;
uniform float normGridWidth;
uniform float argGridWidth;
uniform float argGridScale;

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

#include includes

in vec2 uv;
out vec4 fragColor;

void main(void) {
  vec2 p = scale * vec2(aspect.x, 1.) * (2. * uv - 1.);
  float BAILOUT = pow(10., bailout);
  float BAILIN = pow(10., bailin);

  #ifdef PERTURB
  vec2 z = vec2(0.);
  vec2 c = vec2(0.);
  vec2 dz = vec2(0.);
  vec2 dc = vec2(0.);
  vec2 C = point;
    #if VARYING == 0 || VARYING == 2
  dz += p; // Mandelbrot-like
  dz *= transform;
    #endif
    #if VARYING == 1 || VARYING == 2 
  dc += p; // Julia-like
  dc *= transform;
    #endif
  vec2 dz_1 = vec2(0.);
  #else
  vec2 z = center;
  vec2 c = point;
    #if VARYING == 0 || VARYING == 2
  z += p; // Mandelbrot-like
  z *= transform;
    #endif
    #if VARYING == 1 || VARYING == 2 
  c += p; // Julia-like
  c *= transform;
    #endif
  #endif

  vec2 z_1 = vec2(0.);
  vec2 z_2 = vec2(0.);

  #if defined(USE_DERIVATIVE) || SMOOTHING >= 3
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
  c = C + dc;
  #endif

  #if SMOOTHING == 2
  float zexp = 0.;
  #endif

  vec3 col = vec3(0.);
  for(int i = 0; i < iterations; i++) {
    #if defined(USE_DERIVATIVE) || SMOOTHING >= 3
    vec2 zdct = zdc;
    zdc = F_prime_c(z, c, zdc, zdc_1);
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
    z_2 = z_1;
    z_1 = zt;

    #if SMOOTHING == 2
    zexp += exp(-length(z) - .5 / (length(z - z_1)));
    #endif

    #if defined(USE_DERIVATIVE) && (defined(CONVERGENT) || defined(DIVERGENT))
    vec2 zdzt = zdz;
    zdz = F_prime_z(z, c, zdz, zdz_1);
    zdz_1 = zdzt;

    float zdzzdz = dot(zdz, zdz);
    if(zdzzdz < zdzmax) {
      #ifdef SHOW_DERIVATIVE
      float n = float(i) + 1.;
      #if SMOOTHING == 1
      // n -= log2(1. / log2(1. / zdzzdz));
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #endif
      col = color(n, .5);
      #endif
      break;
    }
    #endif

    #ifdef CONVERGENT
    float z_z_1 = dot2(z - z_1);
    if(z_z_1 < BAILIN) {
      float n = float(i);
      float r = 0.;
      #ifdef USE_ROOTS
      if(abs(z.y) < BAILIN) {
        z.y = 0.;
        if(abs(z.x) < BAILIN) {
          z.x = 0.;
        }
      }
      float l = length(z);
      if(l > .002) {
        r = (mod(atan(z.y, z.x) + l * TAU, TAU)) / (TAU);
      }
      #endif

      #if SMOOTHING == 1
      float diff = dot2(z - z_1);
      float prev = dot2(z_1 - z_2);
      n += log(BAILIN / prev) / log(diff / prev);
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #elif SMOOTHING >= 3
      float d = sqrt(dot(z, z) / dot(zdc, zdc)) * .5 * log(dot(z, z));
        #if SMOOTHING == 4
      d /= scale;
        #endif
      n = 130. / pow(d, .02);
      #endif
      col = color(n, r);
      break;
    }
    #endif

    #ifdef DIVERGENT
    float zz = dot(z, z);
    if(zz > BAILOUT) {
      float n = float(i);
      float r = 0.;
      #ifdef USE_ROOTS
      r = carg(z) / (cnorm(z) * TAU);
      #endif

      // Smooth iteration count
      #if SMOOTHING == 1
      n -= log2(log2(zz)) - 4.0;
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #elif SMOOTHING >= 3
      float d = sqrt(zz / dot(zdc, zdc)) * .5 * log(zz);
        #if SMOOTHING == 4
      d /= scale;
        #endif
      n = 130. / pow(d, .02);
      #endif

      col = color(n, r);
      break;
    }
    #endif

    #if !defined(CONVERGENT) && !defined(DIVERGENT)
    // Domain coloring of z:
    float h = (atan(z.y, z.x) + PI) / TAU;
    float lz = length(z);
    float ll = log2(lz);
    float l = 1. - .7 * aafract(ll);
    // float l = 2. * atan(length(z)) / PI;

    col = color(h * 100.);

    #ifdef SHADE_NORM
    col *= l;
    #endif
    //     #if AMBIANCE == 2 || AMBIANCE == 3
    // res *= scale * scale;
    //     #endif
      #ifdef SHOW_GRID
    vec2 d = fract(2. * z * gridScale);
    d = min(d, 1. - d);
    d /= fwidth(z) * gridScale;
    col = mix(vec3(0.), col, smoothstep(0., gridWidth * 3., min(d.x, d.y)));
      #endif

      #ifdef SHOW_NORM_GRID
    float dl = fract(ll * normGridScale);
    dl = min(dl, 1. - dl);
    dl /= fwidth(ll) * normGridScale / 2.;
    col = mix(col, vec3(1.), smoothstep(normGridWidth * 3., 0., dl));
      #endif

      #ifdef SHOW_ARG_GRID
    float dh = fract(2. * h * argGridScale * 12.);
    dh = min(dh, 1. - dh);
    dh /= fwidth(h) * argGridScale * 12.;
    col = mix(col, vec3(.9), smoothstep(argGridWidth * 3., 0., dh));
      #endif

      #ifdef SHOW_POLES_ZEROES
    float llz = .5 * log(dot2(z));
    col = mix(col, vec3(0.), smoothstep(4., 0., llz + 4.));
    col = mix(col, vec3(1.), smoothstep(3., 1.5, 8. - llz));
      #endif

    break;
    #endif

    #ifdef PERTURB
    // Rebasing
    if(dot(z, z) < dot(dz, dz) || m >= max) {
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
