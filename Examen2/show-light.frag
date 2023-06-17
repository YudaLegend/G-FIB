#version 330 core

in vec4 gfrontColor;
out vec4 fragColor;
in vec2 gvexCoord;
uniform sampler2D colorMap;

void main()
{
    if (gvexCoord.x < 0 || gvexCoord.y < 0) fragColor = gfrontColor;
    else {
        vec4 mytexture = texture(colorMap, gvexCoord);
        
        if (mytexture[3] < 0.1) discard;
        else fragColor = mytexture * mytexture[3];
    } 
}
