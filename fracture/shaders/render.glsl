
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

// iquilezles.org/articles/distfunctions2d
vec2 opRotate(in vec2 p, in float theta) {
  float c = cos(theta);
  float s = sin(theta);
  p *= mat2(c, s, -s, c);
  return p;
}

float sdArrow(in vec2 p, vec2 a, vec2 b, float w1, float w2, float k) {
  vec2 ba = b - a;
  float l2 = dot(ba, ba);
  float l = sqrt(l2);

  p = p - a;
  p = mat2(ba.x, -ba.y, ba.y, ba.x) * p / l;
  p.y = abs(p.y);
  vec2 pz = p - vec2(l - w2 * k, w2);

  vec2 q = p;
  q.x -= clamp(q.x, 0.0, l - w2 * k);
  q.y -= w1;
  float di = dot(q, q);
  q = pz;
  q.y -= clamp(q.y, w1 - w2, 0.0);
  di = min(di, dot(q, q));
  if(p.x < w1) // conditional is optional
  {
    q = p;
    q.y -= clamp(q.y, 0.0, w1);
    di = min(di, dot(q, q));
  }
  if(pz.x > 0.0) // conditional is optional
  {
    q = pz;
    q -= vec2(k, -1.0) * clamp((q.x * k - q.y) / (k * k + 1.0), 0.0, w2);
    di = min(di, dot(q, q));
  }

  float si = 1.0;
  float z = l - p.x;
  if(min(p.x, z) > 0.0) {
    float h = (pz.x < 0.0) ? w1 : z / k;
    if(p.y < h)
      si = -1.0;
  }
  return si * sqrt(di);
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
