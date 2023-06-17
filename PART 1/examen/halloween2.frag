#version 330 core

in vec4 frontColor;
out vec4 fragColor;
in vec2 vtexCoord;

vec4 orange = vec4(1,0.7,0,1);
vec4 negre = vec4(0,0,0,1);

void main()
{
    float x = vtexCoord.s;
    float y = vtexCoord.t;
    
    float dis = distance(vtexCoord,vec2(0.5,0.5));
    float ss = smoothstep(0,0.6,dis);
    dis = ss;
    
    vec2 Oval1 = vec2(0.45,0.5);
    float d4 = distance(vec2(vtexCoord.x*0.9,vtexCoord.y),Oval1);
    
    vec2 ull1 = vec2(0.35,0.6);
    float d1 = distance(vec2(vtexCoord.x*0.9,vtexCoord.y),ull1);
    
    vec2 ull2 = vec2(0.55,0.6);
    float d2 = distance(vec2(vtexCoord.x*0.9,vtexCoord.y),ull2);
    
    vec2 somr = vec2(0.45,0.5);
    float d5 = distance(vec2(vtexCoord.x*0.9,vtexCoord.y),somr);
    
    vec2 somr1 = vec2(0.45,0.6);
    float d6 = distance(vec2(vtexCoord.x*0.9,vtexCoord.y),somr1);
    
    if (d4 < 0.3 || (x > 0.47 && x < 0.53 && y > 0.77 && y < 0.9)) {
    	fragColor = vec4(0,0,0,1);
    	if (d1 < 0.08 || d2 < 0.08)  {
    		vec4 asd = mix(orange,negre,dis);
    		fragColor = asd;
    	}
    	if (d5 < 0.2 && d6 >= 0.23 ) {
    		vec4 asd = mix(orange,negre,dis);
    		fragColor = asd;
    	}
    	 
    }
    else {
    	vec4 asd = mix(orange,negre,dis);
        fragColor = asd;
    }
    
    
}
