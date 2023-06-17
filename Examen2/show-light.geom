#version 330 core
        
layout(triangles) in;
layout(triangle_strip, max_vertices = 36) out;

in vec4 vfrontColor[];
out vec4 gfrontColor;
out vec2 gvexCoord;
uniform vec4 lightPosition;
uniform mat4 projectionMatrix;
uniform float w = 0.3;

void main( void )
{
	for( int i = 0 ; i < 3 ; i++ )
	{
		gfrontColor = vfrontColor[i];
		gl_Position = gl_in[i].gl_Position;
		gvexCoord = vec2(-1, -1);
		EmitVertex();
	}
    EndPrimitive();

	if (gl_PrimitiveIDIn == 0){
		vec4 light = projectionMatrix * lightPosition;
		vec3 pos = vec3(light.x / light.w, light.y / light.w, light.z / light.w);
 

		// Triangle 1
		gl_Position = vec4(pos.x - w, pos.y - w, pos.z, 1);
		gvexCoord = vec2(0,0);
		EmitVertex();
		gl_Position = vec4(pos.x - w, pos.y + w, pos.z, 1);
		gvexCoord = vec2(0,1);
		EmitVertex();
		gl_Position = vec4(pos.x + w, pos.y - w, pos.z, 1);
		gvexCoord = vec2(1,0);
		EmitVertex();

		EndPrimitive();


		// Triangle 2

		gl_Position = vec4(pos.x + w, pos.y - w, pos.z, 1);
		gvexCoord = vec2(1,0);
		EmitVertex();
		gl_Position = vec4(pos.x - w, pos.y + w, pos.z, 1);
		gvexCoord = vec2(0,1);
		EmitVertex();
		gl_Position = vec4(pos.x + w, pos.y + w, pos.z, 1);
		gvexCoord = vec2(1,1);
		EmitVertex();

		EndPrimitive();


	}
}
