#ifndef _ISAFLOOR_H
#define _ISAFLOOR_H

#include "plugin.h" 
#include <QOpenGLShader>
#include <QOpenGLShaderProgram>
#include <QtMath>

class Isafloor: public QObject, public Plugin
{
	Q_OBJECT
	Q_PLUGIN_METADATA(IID "Plugin") 
	Q_INTERFACES(Plugin)

  public:
	 void onPluginLoad();
	 void preFrame();
	 void postFrame();

	 void onObjectAdd();
	 bool drawScene();
	 bool drawObject(int);

	 bool paintGL();

	 void keyPressEvent(QKeyEvent *);
	 void mouseMoveEvent(QMouseEvent *);
  private:
	// add private methods and attributes here
	QOpenGLShaderProgram* program;
	QOpenGLShader* vs;
	QOpenGLShader* fs;
	float dot_product(Vector u, Vector v);
	
	float lambda = 0.0;
};

#endif
