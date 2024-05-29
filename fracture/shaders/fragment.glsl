#version 300 es
precision highp float;

##CONFIG

uniform vec2 args;
uniform vec2 scale;
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
uniform float normShadeValue;
uniform float argGridWidth;
uniform float argGridScale;
uniform float argShadeValue;
uniform float zeroes;
uniform float poles;
uniform float polya;
uniform float polyaLightness;

uniform float speed;
uniform float time;

#ifdef PERTURB
uniform sampler2D orbit;
uniform ivec2 maxIterations;
#endif

#include includes

in vec2 uv;
out vec4 fragColor;

void main(void) {
    float k = -time * speed;
    vec2 pixel = cmul(scale, vec2(aspect.x, 1.)) * (2. * uv - 1.);
    float BAILOUT = pow(10., bailout);
    float BAILIN = pow(10., bailin);

    #init_args

    #ifdef PERTURB
    vec2 dz = vec2(0.);
    vec2 dz_1 = vec2(0.);
    vec2 dc = vec2(0.);
    int m = 0;
    bool shift = true;
    int max = maxIterations.y;
    vec2 C = c;
    vec2 Z = fetchRef(m, shift);
    z = Z + dz;
    c = C + dc;
    #endif

    #transform_args

    vec2 z_1 = vec2(0.);
    vec2 z_2 = vec2(0.);

    #if SMOOTHING >= 3
    vec2 zdc = vec2(0., 0.);
    vec2 zdc_1 = vec2(0., 0.);
    #endif

    #ifdef USE_DERIVATIVE
    float zdzmax = exp(-derivative * .15);
    vec2 zdz = vec2(1., 0.);
    vec2 zdz_1 = vec2(0., 0.);
    #endif

    #ifdef SHOW_POLYA
    float polyasize = 2. / polya;
    // #ifdef SCALED
    polyasize *= scale.x;
    // #endif
    vec2 ztile = (floor(pixel / polyasize) + 0.5) * polyasize;
    vec2 ptile = pixel - ztile;
    #endif

    #if SMOOTHING == 2
    float zexp = 0.;
    #endif

    vec3 col = vec3(0.);
    for (int i = 0; i < iterations; i++) {
        float n = float(i) + 1.;
        #if SMOOTHING >= 3
        vec2 zdct = zdc;
        zdc = F_prime_c(z, c, zdc, zdc_1);
        zdc_1 = zdct;
        #endif

        vec2 zt = z;
        #ifdef PERTURB
        vec2 dzt = dz;
        dz = F_perturb(Z, dz, dc);
        dz_1 = dzt;
        m++;
        Z = fetchRef(m, shift);
        z = Z + dz;
        #else
        z = F(z, c);
        #ifdef SHOW_POLYA
        ztile = F(ztile, c);
        #endif
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
        if (zdzzdz < zdzmax) {
            #ifdef SHOW_DERIVATIVE
            float c = n;
            #if SMOOTHING == 1
            // n -= log2(1. / log2(1. / zdzzdz));
            #elif SMOOTHING == 2
            c = 10. * zexp;
            #endif
            col = color(c, .5 + k);
            #endif
            break;
        }
        #endif

        #ifdef CONVERGENT
        float z_z_1 = dot2(z - z_1);
        if (z_z_1 < BAILIN) {
            float r = 0.;
            #ifdef USE_ROOTS
            if (abs(z.y) < BAILIN) {
                z.y = 0.;
                if (abs(z.x) < BAILIN) {
                    z.x = 0.;
                }
            }
            float l = length(z);
            if (l > .002) {
                r = (mod(atan(z.y, z.x) + l * TAU, TAU)) / (TAU);
            }
            #endif

            #if SMOOTHING == 1
            float diff = dot2(z - z_1);
            float prev = dot2(z_1 - z_2);
            float c = n - 1. + log(BAILIN / prev) / log(diff / prev);
            #elif SMOOTHING == 2
            c = 10. * zexp;
            #elif SMOOTHING >= 3
            float d = sqrt(dot(z, z) / dot(zdc, zdc)) * .5 * log(dot(z, z));
            #if SMOOTHING == 4
            d /= scale.x;
            #endif
            c = 130. / pow(d, .02);
            #endif
            col = color(c, r + k);
            break;
        }
        #endif

        #ifdef DIVERGENT
        float zz = dot(z, z);
        if (zz > BAILOUT) {
            float c = n - 1.;
            float r = 0.;
            #ifdef USE_ROOTS
            r = atan(z.y, z.x) / (length(z) * TAU);
            #endif

            // Smooth iteration count
            #if SMOOTHING == 1
            c -= log2(log2(zz)) - 4.0;
            #elif SMOOTHING == 2
            c = 10. * zexp;
            #elif SMOOTHING >= 3
            float d = sqrt(zz / dot(zdc, zdc)) * .5 * log(zz);
            #if SMOOTHING == 4
            d /= scale.x;
            #endif
            c = 130. / pow(d, .02);
            #endif

            col = color(c, r + k);
            break;
        }
        #endif

        #ifdef PERTURB
        // Rebasing
        if (dot(z, z) < dot(dz, dz) || m >= max) {
            dz = z;
            m = 0;
            max = maxIterations.x;
            shift = false;
            Z = fetchRef(m, shift);
        }
        #endif
    }

    #if !defined(CONVERGENT) && !defined(DIVERGENT)
    // Domain coloring of z:
    float h = (atan(z.y, z.x)) / TAU;
    float lz = length(z);
    #ifdef SCALED
    lz /= sqrt(dot2(scale));
    #endif
    float ll = log2(lz);

    #ifdef ARG_GRID_LOG
    float ag = log2(abs(h));
    #else
    float ag = h;
    #endif
    #ifdef NORM_GRID_LOG
    float ng = ll;
    #else
    float ng = lz;
    #endif

    #if !defined(SHOW_POLYA) || defined(POLYA_COLOR)
    col = color((h + k) * 100.);
    #endif

    #ifdef SHADE_NORM
    col *= 1. - normShadeValue * aafract(ng * normGridScale + k);
    #endif
    #ifdef SHADE_ARG
    col *= 1. + argShadeValue * aafract(ag * argGridScale + k);
    #endif

    #ifdef SHOW_GRID
    vec2 zs = z;
    #ifdef SCALED
    zs /= dot2(scale);
    #endif
    #ifdef GRID_LOG
    vec2 g = log2(abs(zs));
    #else
    vec2 g = zs;
    #endif
    vec2 d = fract(2. * (g + vec2(k)) * gridScale);
    d = min(d, 1. - d);
    d /= fwidth(g) * gridScale;
    col = mix(vec3(0.), col, smoothstep(0., gridWidth * 3., d.x));
    col = mix(col * .3, col, smoothstep(0., gridWidth * 4., d.y));
    #endif

    #ifdef SHOW_NORM_GRID
    float dl = fract((ng + k) * normGridScale);
    dl = min(dl, 1. - dl);
    dl /= fwidth(ng) * normGridScale / 2.;
    col = mix(col, vec3(1.), smoothstep(normGridWidth * 3., 0., dl));
    #endif

    #ifdef SHOW_ARG_GRID
    float dh = fract(2. * (ag + k * .25) * argGridScale);

    dh = min(dh, 1. - dh);
    dh /= min(fwidth(ag), .01) * argGridScale;

    col = mix(col, col + .5, smoothstep(argGridWidth * 3., 0., dh));

    #endif

    #ifdef SHOW_ZEROES
    col = mix(col, vec3(1.), smoothstep(0., PI, zeroes - ll));
    #endif
    #ifdef SHOW_POLES
    col = mix(col, vec3(0.), smoothstep(0., PI, ll - poles));
    #endif
    #endif

    #ifdef SHOW_POLYA

    vec2 zp = conj(z);
    vec2 zr = conj(ztile);

    float shade = 1.;
    #ifdef ANIMATE
    shade = 1. - smoothstep(polyasize * .3, polyasize * .5, length(ptile));
    #endif

    float arrow = 0.;
    float base = length(zr) * .1;
    float len = clamp(base, .08, .35);
    float angle = atan(zp.y, zp.x);

    ptile = opRotate(ptile, angle);

    float sc = 1. / polyasize;
    ptile *= sc;
    #ifdef ANIMATE
    ptile.x += k * base * 25.;
    float r = min(.35 / len, 2.);
    ptile.x -= round(ptile.x * r) / r;
    #endif
    arrow = sdArrow(ptile, vec2(-len, 0.), vec2(len, 0.), .02, .08, 2.);
    arrow /= sc;
    vec3 arrowColor = col + polyaLightness - 1.;
    #ifndef POLYA_COLOR
    float al = log2(base + .1);
    arrowColor = color(al * 5.);
    #endif

    float aaa = .003 * scale.x;
    col = mix(col, arrowColor, shade * (1.0 - smoothstep(0.0, aaa, arrow)));

    #endif

    fragColor = vec4(col, 1.0);
}
