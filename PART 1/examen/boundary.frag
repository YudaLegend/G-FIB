#version 330 core

in vec4 frontColor;
out vec4 fragColor;

uniform float edge0 = 0.35;
uniform float edge1 = 0.4;

in vec3 fN;
in vec3 Vsco;

void main()
{
    vec3 V = normalize(Vsco);
    vec3 fN = normalize(fN);
    
    float c = dot(fN,-V);
    if (c < edge0) {
    	fragColor = vec4(0,0,0,1);
    }
    else if (c > edge1) {
    	fragColor = vec4(1,1,1,1);
    }
    else {
    	float nou_c = smoothstep(edge0,edge1,c);
    	fragColor = mix(vec4(0,0,0,0),vec4(1,1,1,0),nou_c);
    }
    
    
    
}
