let cantidadHoras = Number(prompt('Ingrese el numero de horas'))
let horasExtra = 0;
let salario = 0;

if (cantidadHoras <=40) {
    salario = 16000*cantidadHoras

}
else {
    horasExtra = cantidadHoras - 40
    salario = (16000*(cantidadHoras-horasExtra)) + (horasExtra*20000)
}

alert(`El salario del empleado es ${salario}`)
