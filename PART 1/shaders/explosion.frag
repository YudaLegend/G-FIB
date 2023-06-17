#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec2 vtexCoord;

uniform sampler2D explosion;
uniform float time;

void main()
{   
    float slice = 1/30;
    float columna = 1/8; 
    float fila = 1/6;
    int n = 1;
    if (time < slice) {
    	slice = slice + n*slice;
    	++n;
    }
    vec2 asd = vec2((vtexCoord.x*2/8),vtexCoord.y/6);
    
    
    fragColor = frontColor * texture(explosion,asd);
}
