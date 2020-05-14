# <a href="https://platform.sizmek.com"><img src="https://github.com/MarvinMDZ/Readme_Resources/raw/master/Images/HTML5_logo.png" alt="Sizmek" width="26" height="36" /></a> Billboard + Skies Custom Viewability <a href="https://platform.sizmek.com"><img src="https://github.com/MarvinMDZ/Readme_Resources/raw/master/Images/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Plantilla para crear formatos tipo Billboard con laterales utilizando workspaces de Sizmek.

# <p align="center"> <img src="https://github.com/MarvinMDZ/Readme_Resources/raw/master/Images/warning.png" alt="Sizmek" width="30" height="30" /> WARNING <img src="https://github.com/MarvinMDZ/Readme_Resources/raw/master/Images/warning.png" alt="Sizmek" width="30" height="30" /></p>

### <p align="center">Esta plantilla medirá los parametros de visibilidad utilizando como referencia los skies.</p>
### <p align="center">La utilización de esta plantilla implica que entiendes y aceptas este sistema de medición.</p>

## Descripción

La plantilla para montar un Billboard con skies consta de tres ficheros html, uno para el Billboard y otro para cada uno de los paneles laterales.

Esta plantilla tiene implementada la funcionalidad para lanzar los paneles de manera automática. Tan solo tendrían que modificarse los tamaños según lo que la campaña requiera y el contenido de los mismos.

## Ficheros de la plantilla

La plantilla consta de diferentes htmls para cada una de las partes que la componen; a parte de estos ficheros html, también encontraremos ficheros CSS con los estilos predefinidos y ficheros JAVASCRIPT donde se gestionan la mayoría de las funcionalidades de la plantilla.

A continuación, describimos el contenido de los ficheros principales del formato:

#### index.html

Este fichero contiene la base del formato. Dependiendo del soporte, la base puede ser de diferentes tamaños; los más comúnes suelen ser 980x90 y 980x250, en caso de duda consultar con la agencia de medios. 

***

#### panels/Sky_Der.html

Este fichero contiene el lateral derecho de nuestra creatividad. La plantilla incluye una imagen que se puede reemplazar por la de la campaña, o añadir cualquier tipo de animación y contenido html.

***

#### panels/Sky_Izq.js

Este fichero contiene el lateral izquierdo de nuestra creatividad. La plantilla incluye una imagen que se puede reemplazar por la de la campaña, o añadir cualquier tipo de animación y contenido html.

***

## Configuración en plataforma

Configurar el formato en la <a href="https://platform.sizmek.com">PLATAFORMA DE SIZMEK</a> es muy sencillo, simplemente tendrás que crear un zip con los ficheros de la creatividad, subir el zip a la plataforma y añadirlo a una creatividad; de forma automática se generará la configuración necesaria del formato y solamente tendremos que desmarcar en el apartado de paneles la opcion "Show Single Panel at a Time if Ad Contains Multiple Panels". 

La configuración necesaria para que funcione el formato sería la siguiente:

**Ad Format:** HTML5 Expandable Format

**MAIN ASSETS**
  * **Default Image:** Seleccionar la imagen de backup incluida en el zip de la creatividad. 
  * **Workspace Folder:** Fichero zip de la creatividad subido a la plataforma.

**PANELS**

Dentro del apartado de paneles tendremos que añadir los tres paneles de la creatividad con la siguiente configuracion:

1. **Sky Der**
    * **Panel Name:** Sky_Der
    * **Asset:** Seleccionamos el fichero html correspondiente al Sky_Der de la creatividad.
    * **X:** 1000
    * **Y:** 0
    * **Width:** 120
    * **Height:** 800
    * **Position Type:** Banner Relative
    * **Retractions:** Never

2. **Sky Izq**
    * **Panel Name:** Sky_Izq
    * **Asset:** Seleccionamos el fichero html correspondiente al Sky_Izq de la creatividad.
    * **X:** -20
    * **Y:** 0
    * **Width:** 120
    * **Height:** 800
    * **Position Type:** Banner Relative
    * **Retractions:** Never

Los tamaños de los paneles por defecto son 120x800 pero pueden cambiar en función del soporte.

En la misma seccion de panels tendremos que desmarcar la opción: "Show Single Panel at a Time if Ad Contains Multiple Panels"

Una vez configurado el formato, es necesario que se añada un custom script por parte del equipo de sizmek para que se ajuste correctamente. Envía un correo al equipo <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a> con el id de la creatividad y ellos te lo configurarán en tu cuenta.

***

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>

***