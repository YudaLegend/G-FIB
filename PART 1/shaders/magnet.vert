#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform float n=4;
uniform vec4 lightPosition; //eye space
uniform mat4 modelViewMatrixInverse;


void main()
{
    vec3 lightPosition_objS = (modelViewMatrixInverse*lightPosition).xyz;
    float d = sqrt(pow(lightPosition_objS.x-vertex.x,2)+pow(lightPosition_objS.y-vertex.y,2)+pow(lightPosition_objS.z-vertex.z,2));
    float w = clamp(1/pow(d,n),0,1);
    vec3 nvertex = (1.0-w)*vertex+w*lightPosition_objS;
    
    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(1,1,1,1.0) * N.z;		
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(nvertex, 1.0);
}
