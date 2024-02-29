#version 300 es
precision highp float;

##CONFIG

uniform int iterations;
uniform float bailout;
uniform float scale;
uniform float aspect;
uniform float derivative;
uniform vec2 center;
uniform float power;
uniform vec2 point;

// uniform mat4x2 coefs;

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

in vec2 uv;
out vec4 fragColor;

vec2 cmul(vec2 z, vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}
vec2 cinv(vec2 z) {
  return z * vec2(1, -1) / dot(z, z);
}

vec2 cdiv(in vec2 z0, in vec2 z1) {
  return cmul(z0, cinv(z1));
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

vec2 cpow(in vec2 z, in float k) {
  return cexp(k * clog(z));
}

// Fast integer power functions
#ifdef POWER
vec2 cpow0(in vec2 z) {
  return vec2(1.);
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
#endif

#ifdef PERTURB
vec2 fetchRef(in int n, in bool shift) {
  vec4 tex = texelFetch(orbit, ivec2(n % 64, n / 64), 0);
  return shift ? tex.zw : tex.xy;
}
#endif

const float k = pow(1., 0.22) * .05;
const vec3 l = vec3(3.0, 3.5, 4.0);
void main(void) {
  vec2 p = scale * vec2(aspect, 1.) * (2. * uv - 1.);

  #ifdef PERTURB
  vec2 z = vec2(0.);
    #ifdef FIXED// Mandelbrot-like
  vec2 dz = vec2(0.);
  vec2 dc = p;
    #else // Julia-like
  vec2 dz = p;
  vec2 dc = vec2(0.);
    #endif
  #else
    #ifdef FIXED// Mandelbrot-like
  vec2 z = point;
  vec2 c = center + p;
    #else // Julia-like
  vec2 z = center + p;
  vec2 c = point;
    #endif
  #endif

  #ifdef USE_DERIVATIVE
  vec2 zd = vec2(1., 0.);
  #endif

  #ifdef PERTURB
  int m = 0;
  bool shift = true;
  int max = maxIterations.y;
  vec2 zref = fetchRef(m, shift);
  #endif

  vec3 col = vec3(0.);
  float n = -.0;
  for(int i = 0; i < iterations; i++) {
    #ifdef PERTURB
      #ifdef POWER
        #if POWER == 1
    dz = dz + dc;
        #elif POWER == 2
    dz = 2.0 * cmul(zref, dz) + cpow(dz, 2.) + dc;
        #elif POWER == 3
    dz = 3.0 * cmul(cpow(zref, 2.), dz) + 3.0 * cmul(zref, cpow(dz, 2.)) + cpow(dz, 3.) + dc;
        #elif POWER == 4
    dz = 4.0 * cmul(cpow(zref, 3.), dz) + 6.0 * cmul(cpow(zref, 2.), cpow(dz, 2.)) + 4.0 * cmul(zref, cpow(dz, 3.)) + cpow(dz, 4.) + dc;
        #elif POWER == 5
    dz = 5.0 * cmul(cpow(zref, 4.), dz) + 10.0 * cmul(cpow(zref, 3.), cpow(dz, 2.)) + 10.0 * cmul(cpow(zref, 2.), cpow(dz, 3.)) + 5.0 * cmul(zref, cpow(dz, 4.)) + cpow(dz, 5.) + dc;
        #elif POWER == 6
    dz = 6.0 * cmul(cpow(zref, 5.), dz) + 15.0 * cmul(cpow(zref, 4.), cpow(dz, 2.)) + 20.0 * cmul(cpow(zref, 3.), cpow(dz, 3.)) + 15.0 * cmul(cpow(zref, 2.), cpow(dz, 4.)) + 6.0 * cmul(zref, cpow(dz, 5.)) + cpow(dz, 6.) + dc;
        #elif POWER == 7
    dz = 7.0 * cmul(cpow(zref, 6.), dz) + 21.0 * cmul(cpow(zref, 5.), cpow(dz, 2.)) + 35.0 * cmul(cpow(zref, 4.), cpow(dz, 3.)) + 35.0 * cmul(cpow(zref, 3.), cpow(dz, 4.)) + 21.0 * cmul(cpow(zref, 2.), cpow(dz, 5.)) + 7.0 * cmul(zref, cpow(dz, 6.)) + cpow(dz, 7.) + dc;
        #elif POWER == 8
    dz = 8.0 * cmul(cpow(zref, 7.), dz) + 28.0 * cmul(cpow(zref, 6.), cpow(dz, 2.)) + 56.0 * cmul(cpow(zref, 5.), cpow(dz, 3.)) + 70.0 * cmul(cpow(zref, 4.), cpow(dz, 4.)) + 56.0 * cmul(cpow(zref, 3.), cpow(dz, 5.)) + 28.0 * cmul(cpow(zref, 2.), cpow(dz, 6.)) + 8.0 * cmul(zref, cpow(dz, 7.)) + cpow(dz, 8.) + dc;
        #elif POWER == 9
    dz = 9.0 * cmul(cpow(zref, 8.), dz) + 36.0 * cmul(cpow(zref, 7.), cpow(dz, 2.)) + 84.0 * cmul(cpow(zref, 6.), cpow(dz, 3.)) + 126.0 * cmul(cpow(zref, 5.), cpow(dz, 4.)) + 126.0 * cmul(cpow(zref, 4.), cpow(dz, 5.)) + 84.0 * cmul(cpow(zref, 3.), cpow(dz, 6.)) + 36.0 * cmul(cpow(zref, 2.), cpow(dz, 7.)) + 9.0 * cmul(zref, cpow(dz, 8.)) + cpow(dz, 9.) + dc;
        #endif
      #else
      // Good question
      #endif
    m++;
    zref = fetchRef(m, shift);
    z = zref + dz;
    #else
    z = cpow(z, power) + c;
    #endif

    #ifdef USE_DERIVATIVE
    zd = cmul(zd, power * cpow(z, power - 1.));

    float zdzd = dot(zd, zd);
    if(zdzd < derivative) {
      #ifdef SHOW_DERIVATIVE
      n = float(i) + 1.;// - 1. / (zdzd * log(2.) * log2(zdzd));
      col = 0.5 + 0.5 * cos(k * n + l.zxy);
      #endif
      break;
    }
    #endif

    float zz = dot(z, z);

    if(zz > bailout) {
      // Smooth iteration count
      n = float(i) - log2(log2(zz)) + 4.0;
      col = 0.5 + 0.5 * cos(k * n + l);

      break;
    }

    #ifdef PERTURB
    // Rebasing
    if(zz < dot(dz, dz) || m >= max) {
      dz = z;
      m = 0;
      max = maxIterations.x;
      shift = false;
      zref = fetchRef(m, shift);
    }
    #endif
  }

  fragColor = vec4(col, 1.0);
}
