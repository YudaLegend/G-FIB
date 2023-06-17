#version 330 core

in vec4 frontColor;
out vec4 fragColor;
in vec2 vtexCoord;

uniform int mode = 2;

vec3 negre = vec3(0,0,0);
vec3 blanc = vec3(1,1,1);
vec3 gris = vec3(0.8);
vec3 pell = vec3(1.0,0.8,0.6);



void main()
{
    
    vec2 C1 = vec2(0.5,0.4);
    float d = distance(C1,vtexCoord);

    vec2 C2 = vec2(0.2,0.80);
    float d2 = distance(C2,vtexCoord);
    
    vec2 C3 = vec2(0.8,0.80);
    float d3 = distance(C3,vtexCoord);
    
    vec2 Oval1 = vec2(0.25,0.3);
    float d4 = distance(vec2(vtexCoord.x*0.5,vtexCoord.y),Oval1);
    
    vec2 Oval2 = vec2(0.43,0.22);
    float d5 = distance(vec2(vtexCoord.x,vtexCoord.y*0.5),Oval2);
    vec2 Oval3 = vec2(0.57,0.22);
    float d6 = distance(vec2(vtexCoord.x,vtexCoord.y*0.5),Oval3);
    
    vec2 Oval4 = vec2(0.55,0.25);
    float d7 = distance(vec2(vtexCoord.x,vtexCoord.y*0.5),Oval4);
    vec2 Oval5 = vec2(0.45,0.25);
    float d8 = distance(vec2(vtexCoord.x,vtexCoord.y*0.5),Oval5);
    
    vec2 Oval6 = vec2(0.45,0.23);
    float d9 = distance(vec2(vtexCoord.x,vtexCoord.y*0.5),Oval6);
    
    vec2 Oval7 = vec2(0.55,0.23);
    float d10 = distance(vec2(vtexCoord.x,vtexCoord.y*0.5),Oval7);
    
    
    if (mode >= 0 && (d < 0.38 || d2 < 0.20 || d3 < 0.2) ) {
    	fragColor = vec4(negre,1.0);
    	if (mode >= 1 && (d4 < 0.15 || d5 < 0.12 || d6 < 0.12) ) {
    		fragColor = vec4(pell,1.0);
    		if (mode >= 2 && (d7 < 0.065 || d8 < 0.065) ) {
    			fragColor = vec4(blanc,1.0);
    			if (d9 < 0.035 || d10 < 0.035) {
    				fragColor = vec4(negre,1.0);
    			}
    		}
    	}
    }
    else {
    	fragColor = vec4(gris,1.0);
    }
}
