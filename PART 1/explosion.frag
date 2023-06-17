#version 330 core

in vec4 frontColor;
out vec4 fragColor;



in vec2 vtexCoord;
uniform float time;
uniform sampler2D explosion;

 
void main()
{
    int frame = int(mod(30*time,48));
    
    int x = frame%8;
    int y=5-frame/8;

    
    vec2 coord = vtexCoord * vec2(1.0/8.0,1.0/6.0);
    
    coord.x += x/8.0;
    coord.y += y/6.0;
    
    fragColor = texture(explosion,coord);
    fragColor *= fragColor.w;

}
