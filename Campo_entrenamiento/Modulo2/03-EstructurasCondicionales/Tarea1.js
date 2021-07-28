let horasSemanales = Number(prompt('Ingrese la cantidad de horas trabajasas'));

let salario = 0
let horasExtra = 0
if (horasSemanales <=40){
    salario = (16*horasSemanales);
}else {
    horasExtra = horasSemanales-40;
    salario = (16*(40)+horasExtra*20);
}

alert (`El salario es de ${salario}`)