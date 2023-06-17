#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform float time;
const float pi = 3.141592;
uniform float amp = 0.5;
uniform float freq = 0.25;

void main()
{
    vec3 N = normalize(normalMatrix * normal);
    
    float theta = amp*sin(2*pi*freq*time+vertex.y);
    
    mat3 m = mat3(vec3(1,0,0),vec3(0,cos(theta),sin(theta)),vec3(0,-sin(theta),cos(theta)));
    
    frontColor = vec4(color,1.0) * N.z;
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(m*vertex, 1.0);
}
