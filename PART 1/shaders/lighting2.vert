#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform vec4 lightAmbient; // similar a gl_LightSource[0].ambient
uniform vec4 lightDiffuse; // similar a gl_LightSource[0].diffuse
uniform vec4 lightSpecular; // similar a gl_LightSource[0].specular
uniform vec4 lightPosition; // similar a gl_LightSource[0].position // (sempre estarà en eye space)

uniform vec4 matAmbient; // similar a gl_FrontMaterial.ambient
uniform vec4 matDiffuse; // similar a gl_FrontMaterial.diffuse
uniform vec4 matSpecular; // similar a gl_FrontMaterial.specular
uniform float matShininess; // similar a gl_FrontMaterial.shininess

uniform mat4 modelViewMatrix;

void main()
{
    vec3 N = normalize(normalMatrix * normal);
    vec4 evertex = modelViewMatrix * vec4(vertex,1.0);
    
    vec3 L = normalize((lightPosition - evertex).xyz);
    
    vec3 V = normalize(-evertex.xyz);
    
    float N_L = max(0.0,dot(N,L));
    
    vec3 R = normalize(2*N_L*N-L);
    
    float R_V = max(0.0,dot(R,V));
    
    vec4 Phong = (matAmbient*lightAmbient)+(matDiffuse*lightDiffuse)*(N_L)+(matSpecular*lightSpecular)*pow(R_V,matShininess);
    
    frontColor = Phong;
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
