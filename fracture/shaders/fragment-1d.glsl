#version 300 es
precision highp float;

##CONFIG

#include includes

in vec2 uv;
out vec4 outColor;

void main(void) {
    float timeFactor = -time * speed;
    vec2 pixel = cmul(scale, vec2(aspect.x, 1.)) * (2. * uv - 1.);

    #init_args
    #transform_args

    #if defined(USE_DERIVATIVE) || SHADING == 4
    float zdzmax = exp(-derivative * .15);
    vec2 zdz = vec2(1., 0.);
    vec2 zdz_1 = vec2(0., 0.);
    #endif

    vec2 z0 = z;
    z.y = 0.;
    z = cmul(z, cis(o.x));

    for(int i = 0; i < iterations; i++) {
        #if (defined(USE_DERIVATIVE) || SHADING == 4)
        vec2 zdzt = zdz;
        zdz = F_prime_z(z, c, zdz, zdz_1);
        zdz_1 = zdzt;
        #endif

        z = F(z, c);
    }

    z = cdiv(z, cis(o.y));

    vec3 col = vec3(0.);

    #ifdef SHOW_GRID
    vec2 gridZ = z0;

    #ifdef SCALED
    gridZ /= dot2(scale);
    #endif

    #ifdef GRID_LOG
    vec2 grid = log2(abs(gridZ));
    #else
    vec2 grid = gridZ;
    #endif

    vec2 gridDist = fract((grid + vec2(timeFactor)) * gridScale);
    gridDist = min(gridDist, 1. - gridDist);
    gridDist /= fwidth(grid) * gridScale;

    col = mix(vec3(.3), col, smoothstep(0., gridWidth, gridDist.x));
    col = mix(vec3(.3), col, smoothstep(0., gridWidth, gridDist.y));

    float axisDist = min(abs(z0.x), abs(z0.y));
    axisDist /= fwidth(axisDist);
    col = mix(vec3(1.), col, smoothstep(0., gridWidth, axisDist));
    #endif

    float root = 0.;
    float dist = abs(z.x - z0.y);
    #if (defined(USE_DERIVATIVE) || SHADING == 4)
    float dd = zdz.x;
    #else
    float dd = dFdx(z.x) / (scale.x * .003 / 2.);
    #endif

    dd = min(abs(dd), 5000. / scale.x);
    dd = sqrt(1. + dd * dd) * scale.x * .003;
    dist /= dd;
    col = mix(color(0., root + timeFactor), col, smoothstep(0., gridWidth * 1.2, dist));
    col = mix(col, color(0., root + timeFactor), step(z0.y, z.x) * .1);
    outColor = vec4(col, 1.);
}
