#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform float angle = 0.5;


void main()
{
     
    mat4 rotacio = mat4(vec4(cos(angle),0,-sin(angle),0),
    			vec4(0,1,0,0),
    			vec4(sin(angle),0,cos(angle),0),
    			vec4(0,0,0,1));
    
    vec3 Normal_rotada = mat3(rotacio) * normal;
    
    //calcula p prima
    vec3 P_prima = mat3(rotacio) * vertex;
    //variable t
    float t = smoothstep(1.45,1.55,vertex.y);
    
    //nou vertex
    vec3 nou_V = mix(vertex,P_prima,t);
    //nou normal
    vec3 nou_normal = mix(normal,Normal_rotada,t);
    
    vec3 N = normalize(normalMatrix * nou_normal);   
    
    frontColor = vec4(N.z);
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(nou_V, 1.0);
    
    
}
