#version 300 es
precision highp float;
precision highp int;

##CONFIG

#include includes

in vec2 vertex;
in vec2 uv;

out vec3 vPosition;
out vec2 vUv;
out vec2 vPixel;
out vec3 vNormal;

uniform mat4 matrix;
uniform mat4 viewProjection;

vec3 xproject(vec4 pos) {
    // return pos.xyz;
    // return vec3(pos.xy, length(pos.zw));
    float limit = abs(anakata);
    if (pos.w < -limit) {
        return vec3(intBitsToFloat(-1));
    }
    return vec3(limit * pos.xyz / (limit + pos.w));
}

vec4 viewProject(vec3 position) {
    return viewProjection * vec4(position, 1.);
}

void main() {
    vec2 pixel = 2. * vertex * scale.x;

    #init_args
    #transform_args
    vec2 z0 = z;
    // Tangent and bitangent
    float eps = 1e-3;
    vec2 zt = z + R(eps);
    vec2 zb = z + I(eps);
    vec2 zt0 = zt;
    vec2 zb0 = zb;

    for (int i = 0; i < iterations; i++) {
        z = F(z, c);
        zt = F(zt, c);
        zb = F(zb, c);
    }

    mat4 transformMatrix = matrix / scale.x;

    // Unshift z translation
    z0 -= arg_z;
    zt0 -= arg_z;
    zb0 -= arg_z;
    if (anakata < 0.) {
        z = clamp(z, anakata, -anakata);
    }

    vPosition = xproject(transformMatrix * vec4(z0, z));
    vec3 tangent = xproject(transformMatrix * vec4(zt0, zt)) - vPosition;
    vec3 bitangent = xproject(transformMatrix * vec4(zb0, zb)) - vPosition;

    vNormal = normalize(cross(tangent, bitangent));
    vUv = uv;
    vPixel = pixel;
    gl_Position = vec4(viewProject(vPosition));
}
