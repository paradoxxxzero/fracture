#version 300 es

precision highp float;
precision highp int;

##CONFIG

#include includes
#include iterate

uniform vec3 eye;

in vec2 vPixel;
in vec3 vPosition;
in vec2 vUv;
in vec3 vNormal;

out vec4 outColor;

void main() {
    // if (min(mod(vUv.x, .05), mod(vUv.y, .05)) > .003) {
    //     discard;
    // }

    vec3 albedo = iterate(vPixel).rgb;
    vec3 eyeDirection = eye - vPosition;
    eyeDirection = normalize(eyeDirection);
    vec3 lightDirection = eyeDirection;
    float diffuse = abs(dot(vNormal, lightDirection));
    vec3 halfVector = normalize(lightDirection + eyeDirection);
    // float specular = pow(abs(dot(vNormal, halfVector)), 32.);
    float k = diffuse; //+ specular;

    outColor = vec4(vec3(k * albedo), 1.);
}
