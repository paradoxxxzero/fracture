#version 300 es
precision highp float;

##CONFIG

#include includes
#include iterate

in vec2 uv;
out vec4 outColor;

void main(void) {
    vec2 pixel = cmul(scale, vec2(aspect.x, 1.)) * (2. * uv - 1.);
    outColor = iterate(pixel);
}
