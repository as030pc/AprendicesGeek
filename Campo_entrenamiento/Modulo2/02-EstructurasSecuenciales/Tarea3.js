//Pidiendo datos por consola
let parcial1 = Number(prompt('Ingrese la nota del parcial 1'))
let parcial2 = Number(prompt('Ingrese la nota del parcial 2'))
let parcial3 = Number(prompt('Ingrese la nota del parcial 3'))
let parcialFinal = Number(prompt('Ingrese la nota del parcial Final'))
let trabajoFinal = Number(prompt('Ingrese la nota del trabajo Final'))

//Declaracion de variables
let notaFinal = 0;

//Procedimiento
notaFinal = (((parcial1+parcial2+parcial3)/3)* 0.55)+(parcialFinal*0.3) +(trabajoFinal*0.15);

//Salida
alert("La nota final es: " + notaFinal.toFixed(2));  //toFixed permite redondear el numero
