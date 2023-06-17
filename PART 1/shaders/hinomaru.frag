#version 330 core

in vec4 frontColor;
out vec4 fragColor;
in vec2 vtexCoord;


void main()
{
    vec2 C = vec2(0.5,0.5);
    float x = C.x-vtexCoord.x;
    float y = C.y-vtexCoord.y;
    
    float d = sqrt(x*x+y*y);
    
    if (d < 0.2) {
    	fragColor = vec4(1,0,0,0);
    }
    else {
    	fragColor = vec4(1,1,1,1);
    }
}
