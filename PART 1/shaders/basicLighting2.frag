#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec3 fnormal;


void main()
{
    vec3 N = normalize(fnormal);
    
    fragColor = frontColor * N.z;
}
