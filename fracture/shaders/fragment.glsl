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
    float timeFactor = -time * speed;
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

    #if SHADING >= 5
    vec2 zdc = vec2(0., 0.);
    vec2 zdc_1 = vec2(0., 0.);
    #endif

    #if defined(USE_DERIVATIVE) || SHADING == 4
    float zdzmax = exp(-derivative * .15);
    vec2 zdz = vec2(1., 0.);
    vec2 zdz_1 = vec2(0., 0.);
    #endif

    #ifdef SHOW_POLYA
    float polyaSize = 2. / polya;
    // #ifdef SCALED
    polyaSize *= scale.x;
    // #endif
    vec2 tileZ = (floor(pixel / polyaSize) + 0.5) * polyaSize;
    vec2 polyaTile = pixel - tileZ;
    #endif

    #if SHADING == 3 || SHADING == 4
    float itercoef = 0.;
    #endif

    #ifdef USE_CYCLE
    ivec4 cycle = ivec4(3, 0, 10, 0);
    vec2 cycleZRef = vec2(0.);
    #endif

    vec3 col = vec3(0.);
    float n = 0.;
    for (int i = 0; i < iterations; i++) {
        n = float(i) + 1.;

        #if SHADING >= 5
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
        tileZ = F(tileZ, c);
        #endif
        #endif
        z_2 = z_1;
        z_1 = zt;

        #if SHADING == 3
        itercoef += exp(-length(z) - .5 / (length(z - z_1)));
        #endif

        #if (defined(USE_DERIVATIVE) || SHADING == 4)
        vec2 zdzt = zdz;
        zdz = F_prime_z(z, c, zdz, zdz_1);
        zdz_1 = zdzt;
        #endif

        #if SHADING == 4
        // Prevent overflow
        itercoef += log(clamp(dot2(zdz), 1e-32, 1e32));
        #endif

        #ifdef USE_DERIVATIVE
        if (dot2(zdz) < zdzmax) {
            n = float(iterations);
            break;
        }
        #endif

        #ifdef USE_CYCLE
        if (dot2(z - cycleZRef) < 1e-16) {
            n = float(iterations);
            break;
        }

        if (cycle.x == cycle.y) {
            cycle.y = 0;
            if (cycle.z == cycle.w) {
                cycle.w = 0;
                cycle.x *= 2;
            }
            cycle.w++;
            cycleZRef = z;
        }
        cycle.y++;
        #endif

        #ifdef CONVERGENT
        if (dot2(z - z_1) < BAILIN) {
            break;
        }
        #endif

        #ifdef DIVERGENT
        if (dot2(z) > BAILOUT) {
            break;
        }
        #endif

        #ifdef PERTURB
        // Rebasing
        if (dot2(z) < dot2(dz) || m >= max) {
            dz = z;
            m = 0;
            max = maxIterations.x;
            shift = false;
            Z = fetchRef(m, shift);
        }
        #endif
    }
    // Domain coloring of z:
    float argZ = (atan(z.y, z.x)) / TAU;
    float lengthZ = length(z);
    #ifdef SCALED
    lengthZ /= sqrt(dot2(scale));
    #endif
    float log2LengthZ = log2(lengthZ);

    #ifdef ARG_GRID_LOG
    float argGrid = log2(abs(argZ));
    #else
    float argGrid = argZ;
    #endif
    #ifdef NORM_GRID_LOG
    float normGrid = log2LengthZ;
    #else
    float normGrid = lengthZ;
    #endif

    #ifdef ONLY_BAILED
    if (n < float(iterations)) {
        #endif
        float colorLevel = 0.;
        float root = 0.;
        #ifdef USE_ROOTS
        if (lengthZ > .002) {
            root = (mod((argZ + lengthZ) * TAU, TAU)) / TAU;
        }
        #endif
        #if SHADING == 0
        colorLevel = (argZ + timeFactor + .5) * 100.;
        #elif SHADING == 1
        colorLevel = n + 1.;
        #elif SHADING == 2
        colorLevel = n + 1. - log2(2. * log2(lengthZ)) - 4.0;

        #ifdef CONVERGENT
        if (dot2(z - z_1) < BAILIN) {
            float diff = dot2(z - z_1);
            float prev = dot2(z_1 - z_2);
            colorLevel = n - 1. + log(BAILIN / prev) / log(diff / prev);
        }
        #endif

        #elif SHADING == 3
        colorLevel = 10. * itercoef;
        #elif SHADING == 4
        colorLevel = itercoef / float(iterations);
        #elif SHADING >= 5
        float distEstimate = sqrt(dot2(z) / dot2(zdc)) * .5 * log(dot2(z));
        #if SHADING == 6
        distEstimate /= scale.x;
        #endif
        colorLevel = 130. / pow(distEstimate, .02);
        #endif

        col = color(colorLevel, root + timeFactor);

        #ifdef ONLY_BAILED
    }
    #endif

    #ifdef NORM_SHADE
    col *= 1. - normShadeValue * aafract(normGrid * normGridScale + timeFactor);
    #endif

    #ifdef ARG_SHADE
    col *= 1. + argShadeValue * aafract(argGrid * argGridScale + timeFactor);
    #endif

    #ifdef SHOW_GRID
    vec2 gridZ = z;

    #ifdef SCALED
    gridZ /= dot2(scale);
    #endif

    #ifdef GRID_LOG
    vec2 grid = log2(abs(gridZ));
    #else
    vec2 grid = gridZ;
    #endif

    vec2 gridDist = fract(2. * (grid + vec2(timeFactor)) * gridScale);
    gridDist = min(gridDist, 1. - gridDist);
    gridDist /= fwidth(grid) * gridScale;
    col = mix(vec3(0.), col, smoothstep(0., gridWidth * 3., gridDist.x));
    col = mix(col * .3, col, smoothstep(0., gridWidth * 4., gridDist.y));
    #endif

    #ifdef SHOW_NORM_GRID
    float normGridDist = fract((normGrid + timeFactor) * normGridScale);
    normGridDist = min(normGridDist, 1. - normGridDist);
    normGridDist /= fwidth(normGrid) * normGridScale / 2.;
    col = mix(col, vec3(1.), smoothstep(normGridWidth * 3., 0., normGridDist));
    #endif

    #ifdef SHOW_ARG_GRID
    float argGridDist = fract(2. * (argGrid + timeFactor * .25) * argGridScale);
    argGridDist = min(argGridDist, 1. - argGridDist);
    argGridDist /= min(fwidth(argGrid), .01) * argGridScale;
    col = mix(col, col + .5, smoothstep(argGridWidth * 3., 0., argGridDist));
    #endif

    #ifdef SHOW_ZEROES
    col = mix(col, vec3(1.), smoothstep(0., PI, zeroes - log2LengthZ));
    #endif

    #ifdef SHOW_POLES
    col = mix(col, vec3(0.), smoothstep(0., PI, log2LengthZ - poles));
    #endif

    #ifdef SHOW_POLYA
    vec2 polyaZ = conj(z);

    float shade = 1.;
    #ifdef ANIMATE
    shade = 1. - smoothstep(polyaSize * .3, polyaSize * .5, length(polyaTile));
    #endif

    float arrow = 0.;
    float arrowBase = length(conj(tileZ)) * .1;
    float arrowLength = clamp(arrowBase, .08, .35);
    float arrowAngle = atan(polyaZ.y, polyaZ.x);

    polyaTile = opRotate(polyaTile, arrowAngle);

    float polyaScale = 1. / polyaSize;
    polyaTile *= polyaScale;

    #ifdef ANIMATE
    polyaTile.x += timeFactor * arrowBase * 25.;
    float arrowRound = min(.35 / arrowLength, 2.);
    polyaTile.x -= round(polyaTile.x * arrowRound) / arrowRound;
    #endif

    arrow = sdArrow(polyaTile, vec2(-arrowLength, 0.), vec2(arrowLength, 0.), .02, .08, 2.);
    arrow /= polyaScale;

    #ifndef POLYA_COLOR
    float arrowCol = log2(arrowBase + .1);
    vec3 arrowColor = color(arrowCol * 5.);
    col = vec3(0.);
    #else
    vec3 arrowColor = col + polyaLightness - 1.;
    #endif

    float aaa = .003 * scale.x;
    col = mix(col, arrowColor, shade * (1.0 - smoothstep(0.0, aaa, arrow)));
    #endif

    fragColor = vec4(col, 1.0);
}
