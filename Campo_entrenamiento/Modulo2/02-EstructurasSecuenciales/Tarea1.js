
let cantidadMujeres = Number(prompt('Ingrese la cantidad de mujeres'));
let cantidadHombres = Number(prompt('Ingrese la cantidad de hombres'));

let porMujer = (cantidadMujeres/(cantidadHombres+cantidadMujeres))*100;
let porHombre = (cantidadHombres/(cantidadHombres+cantidadMujeres))*100;

alert(`El porcentaje de mujeres que hay en el salon es de ${porMujer} % y el porcentaje de hombres es de ${porHombre} %`)

