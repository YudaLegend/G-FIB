#version 330 core

in vec4 frontColor;
out vec4 fragColor;
in vec2 vtexCoord;


const vec4 gris = vec4(0.8);
const vec4 negre = vec4(0);

void main()
{   
    vec2 aux = vtexCoord*8;
    
    if ( mod(int(floor(aux.x)),2) == 0 ^^ mod(int(floor(aux.y)),2) == 0 ) {
    	fragColor = negre;
    }
    else {
    	fragColor = gris;
    }
    

   
}
