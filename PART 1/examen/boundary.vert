#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform mat4 modelViewMatrix;

out vec3 fN;
out vec3 Vsco;
void main()
{
    fN = normalMatrix * normal;
    Vsco = (modelViewMatrix * vec4(vertex, 1.0)).xyz;
    
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
