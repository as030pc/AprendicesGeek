# CSS Basico

## Selector atributo
a[href="https://webdesign.tutsplus.com"] { color: green }

## Variables en CSS

:root- Variable global
var(--blue) insertar el valor


## Pseudoclases
Pseudoclases
button:hover { background-color: blue }
:link Aplica estilos cuando el enlace no ha sido visitado todavía. 
:visited Aplica estilos cuando el enlace ha sido visitado anteriormente.
 :hover Aplica estilos cuando pasamos el ratón sobre un elemento. 
 :active Aplica estilos cuando estamos pulsando sobre el elemento.

 ### Para validaciones
 :required Cuando el campo es obligatorio, o sea, tiene el atributo required.
:optional Cuando el campo es opcional (por defecto, todos los campos).
:invalid Cuando los campos no cumplen la validación HTML5.
:valid Cuando los campos cumplen la validación HTML5.
:out-of-range Cuando los campos numéricos están fuera del rango.
:in-range Cuando los campos numéricos están dentro del rango.

## Pseudoelementos
permiten hacer referencias a «comportamientos virtuales no tangibles», o lo que es lo mismo, se le puede dar estilo a elementos que no existen realmente en el HTML, y que se pueden generar desde CSS.

::before Aplica los estilos antes del elemento indicado.
::after Aplica los estilos después del elemento indicado.
::first-letter Aplica los estilos en la primera letra del texto.
::first-line Aplica los estilos en la primera línea del texto.
