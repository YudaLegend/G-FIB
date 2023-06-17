#version 330 core

in vec4 frontColor;
out vec4 fragColor;
uniform sampler2D colorMap;

in vec2 vtexCoord;


void main()
{
    vec2 vtexCoord = vec2(vtexCoord.x*6,vtexCoord.y);
    
    //Al multiplicar por 6 lo que hacemos es que cada rango de [0,1], [1,2],[2,3] tenemos la textura
    //entera de 0123456789 i lo dividimos por 10 para seleccionar el digito que queremos i depues sumamos 
    //0.1 para coger el 1 i el 2 seleccionas el 0.2.
    
    float digits[] = float[](0.4,0.1,0.1,0.7,0.2,0.9);
    
    vec4 aux;
    for (int i = 0; i < 6; ++i) {
    	if (vtexCoord.x >= i && vtexCoord.x <= i+1) {
    		aux = texture(colorMap,vec2( fract(vtexCoord.x)/10+digits[i],vtexCoord.y));
    		if (aux.a < 0.5) {
    			discard;
    		}
    		else {
    			fragColor = vec4(0,0,1,1);
    		}
    	}
    }
    
    
    	
    
}
