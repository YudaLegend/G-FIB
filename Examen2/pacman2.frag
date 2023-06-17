#version 330 core

in vec4 frontColor;
out vec4 fragColor;

uniform sampler2D colormap;

in vec2 vtexCoord;
const float PI = 3.1415;
const mat2 rot = mat2(cos(PI/2.), sin(PI/2.), -sin(PI/2.), cos(PI/2.));


void main()
{
    float x = floor(vtexCoord.x * 12.);
    float y = floor(vtexCoord.y * 12.);
    
    vec2 vtexCoord2 = vtexCoord * rot;
    vec2 vtexCoord3 = vtexCoord * rot * rot;
    vec2 vtexCoord4 = vtexCoord * rot * rot * rot;
    
    
    
    vec2 cor1 = vec2(fract(vtexCoord.x*12.)/6.+4./6.,vtexCoord.y*12);
    vec2 cor2 = vec2(fract(vtexCoord2.x*12.)/6.+4./6.,vtexCoord2.y*12);
    vec2 cor3 = vec2(fract(vtexCoord3.x*12.)/6.+4./6.,vtexCoord3.y*12);
    vec2 cor4 = vec2(fract(vtexCoord4.x*12.)/6.+4./6.,vtexCoord4.y*12);    
    
    vec2 LiniaV = vec2(fract(vtexCoord.x*12.)/6.+3./6.,vtexCoord.y*12);
    vec2 LiniaH = vec2(fract(vtexCoord2.x*12.)/6.+3./6.,vtexCoord2.y*12);
    
    vec2 pacman = vec2(fract(vtexCoord.x*12.)/6.+ 1./6., vtexCoord.y*12);
    vec2 ghost = vec2(fract(vtexCoord.x*12.)/6. + 0./6., vtexCoord.y*12);
    vec2 point = vec2(fract(vtexCoord.x*12.)/6. + 5./6., vtexCoord.y*12);
    
    
    if (x == 11 && y == 11) {
    	fragColor = texture(colormap, cor1);
    }
    else if (x == 0 && y == 11) {
    	fragColor = texture(colormap, cor2);
    }
    else if (x == 0 && y == 0) {
    	fragColor = texture(colormap, cor3);
    }
    else if (x == 11 && y == 0) {
    	fragColor = texture(colormap, cor4);
    }
    else if (x == 0 || x == 11) {
    	fragColor = texture(colormap, LiniaH);
    }
    else if (y == 0 || y == 11) {
    	fragColor = texture(colormap, LiniaV);
    }
    else if ( int(y)%2 == 0 && x != 1 && x != 10 && y != 1 && y!= 11) {
    	fragColor = texture(colormap, LiniaH);
    }
    else if (x == 2 && y == 1) {
    	fragColor = texture(colormap, pacman);
    }
    else if ( x == 3 && y == 1) {
    	fragColor = texture(colormap, ghost);
    }
    else {
    	fragColor = texture(colormap, point);
    }
        
}
