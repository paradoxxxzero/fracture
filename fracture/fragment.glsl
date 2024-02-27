#version 300 es
precision highp float;

##CONFIG

uniform int iterations;
uniform float bailout;
uniform float scale;
uniform float aspect;

// uniform mat4x2 coefs;

#ifdef PERTURB
uniform sampler2D orbit;
uniform int maxIterations;
#else
uniform vec2 center;
#endif

in vec2 uv;
out vec4 fragColor;

vec2 cmul(vec2 z, vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

const float k = pow(1., 0.22) * .05;
const vec3 l = vec3(3.0, 3.5, 4.0);
void main(void) {
  // fragColor = vec4(texture(orbit, uv).xy, 0.0, 1.0);
  // return;
  vec2 z = vec2(0.0);

  #ifdef DERIVE
  vec2 zd = vec2(1., 0.0);
  #endif

  vec2 dc = scale * vec2(aspect, 1.) * (2. * uv - 1.);
  #ifndef PERTURB
  dc += center;
  #endif

  vec2 dz = vec2(0.0);

  // vec2 dc2 = cmul(dc, dc);
  // vec2 dc3 = cmul(dc2, dc);
  // vec2 dc4 = cmul(dc2, dc2);
  // vec2 dz = cmul(coefs[0], dc) + cmul(coefs[1], dc2) + cmul(coefs[2], dc3) + cmul(coefs[3], dc4);
  #ifdef PERTURB
  int m = 0;
  vec2 zm = texelFetch(orbit, ivec2(m % 64, m / 64), 0).xy;
  #endif

  vec3 col = vec3(0.0);
  for(int i = 0; i < iterations; i++) {
    #ifdef PERTURB
    dz = cmul(2.0 * dz, zm) + cmul(dz, dz) + dc;
    // dz = cmul(2.0 * z + dz, dz) + dc;
    m++;
    zm = texelFetch(orbit, ivec2(m % 64, m / 64), 0).xy;
    z = zm + dz;
    #else
    z = cmul(z, z) + dc;
    #endif

    #ifdef DERIVE
    zd = cmul(2. * zd, z);
    if(dot(zd, zd) < 1e-5) {
      break;
    }
    #endif

    float zz = dot(z, z);
    if(zz > bailout) {
      // Smooth iteration count
      float mu = float(i) - log2(log2(zz)) + 4.0;
      col = 0.5 + 0.5 * cos(k * mu + l);
      break;
    }
    #ifdef PERTURB
    if(dot(z, z) < dot(dz, dz) || m >= maxIterations) {
      dz = z;
      m = 0;
      zm = texelFetch(orbit, ivec2(m % 64, m / 64), 0).xy;
    }
    #endif
  }

  fragColor = vec4(col, 1.0);
}
