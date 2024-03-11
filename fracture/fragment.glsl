#version 300 es
precision highp float;

##CONFIG

uniform vec2 center;
uniform vec2 point;
uniform float scale;
uniform float aspect;
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

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

#include includes

void main(void) {
  vec2 p = scale * vec2(aspect, 1.) * (2. * uv - 1.);
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

  #if defined(USE_DERIVATIVE) || SMOOTHING == 3
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
    #if defined(USE_DERIVATIVE) || SMOOTHING == 3
    vec2 zdct = zdc;
    zdc = F_prime(z, c, zdc, zdc_1) + vec2(1., 0.);
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

    #ifdef USE_DERIVATIVE 
    vec2 zdzt = zdz;
    zdz = F_prime(z, c, zdz, zdz_1);
    zdz_1 = zdzt;

    float zdzzdz = dot(zdz, zdz);
    if(zdzzdz < zdzmax) {
      #ifdef SHOW_DERIVATIVE
      float n = float(i) + 1.;
      #if SMOOTHING == 2
      n = 10. * zexp;
      #endif
      col = color(n, .5);
      #endif
      break;
    }
    #endif

    #ifdef CONVERGENT
      #ifdef USE_ROOTS
    bool broken = false;
    for(int j = 0; j < roots.length(); j++) {
      vec2 root = roots[j];
      float diff = dot2(z - root);
      if(diff < BAILIN) {
        float r = float(j) / float(roots.length());
        float n = float(i);

        #if SMOOTHING == 1
        float prev = dot2(z_1 - root);
        n += log(BAILIN / prev) / log(diff / prev);
        #elif SMOOTHING == 2
        n = 10. * zexp;
        #elif SMOOTHING == 3
        float d = sqrt(dot(z, z) / dot(zdc, zdc)) * log(dot(z, z));
        n = 130. / pow(d, .02);
        #endif

        col = color(n, r);
        broken = true;
        break;
      }
    }
    if(broken) {
      break;
    }
      #else

    float z_z_1 = dot2(z - z_1);
    if(z_z_1 < BAILIN) {
      float n = float(i);
      #if SMOOTHING == 1
      float diff = dot2(z - z_1);
      float prev = dot2(z_1 - z_2);
      n += log(BAILIN / prev) / log(diff / prev);
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #elif SMOOTHING == 3
      float d = sqrt(dot(z, z) / dot(zdc, zdc)) * log(dot(z, z));
      n = 130. / pow(d, .02);
      #endif
      col = color(n);
      break;
    }
      #endif
    #endif

    #ifdef DIVERGENT
    float zz = dot(z, z);
    if(zz > BAILOUT) {
      float n = float(i);
      // Smooth iteration count
      #if SMOOTHING == 1
      n -= log2(log2(zz)) - 4.0;
      #elif SMOOTHING == 2
      n = 10. * zexp;
      #elif SMOOTHING == 3
      float d = sqrt(zz / dot(zdc, zdc)) * log(zz);
      n = 130. / pow(d, .02);
      #endif

      col = color(n);
      break;
    }
    #endif

    #if !defined(CONVERGENT) && !defined(DIVERGENT)
    // Domain coloring of z:
    float h = atan(z.y, z.x) / TAU;
    float s = 1.;
    #if AMBIANCE == 0
    float l = 2. * atan(length(z)) / PI;
    #elif AMBIANCE == 1
    float zz = dot(z, z);
    float l = zz / (zz + 1.);
    #elif AMBIANCE == 2
    float l = 1. - exp(-length(z));
    #else
    float l = 1. - pow(2., -length(z));
    #endif

    col = smoothstep(0., 1., hsl2rgb(vec3(h, s, l)));
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
