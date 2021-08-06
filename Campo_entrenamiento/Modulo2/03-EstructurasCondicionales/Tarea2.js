
// Pidiento informacion por consola

let estado = prompt("Cual es su estado: Dormido escriba D, sentado escriba S");

//Inicializacion de variables
let caloriasQuemadas = 0;

//Proceso
if (estado === "D") {
    //solicitud de info adicional
    let tiempo = Number(prompt('Ingrese la cantidad de minutos que realizo dicha actividad'))
    caloriasQuemadas = tiempo*1.08;
    //salida
    alert('Las calorias quemadas fueron: ' + caloriasQuemadas)

} else if (estado === "S") {
    let tiempo = Number(prompt('Ingrese la cantidad de minutos que realizo dicha actividad'))
    caloriasQuemadas= tiempo*1.66;
    alert('Las calorias quemadas fueron: ' + caloriasQuemadas)
} else {
    //salida por si ninguna de las opciones se cumple
    alert('Actividad ingresada invalida, siga las insctrucciones')
}
