let cantidadTela = Number(prompt('Ingrese la cantidad de tela requerida en metros cuadrados'))

let cantidadPulgadas = cantidadTela*((1/0.0254)^2)

console.log(`La cantidad de tela que se requieren en pulgadas cuadradas es: ${cantidadPulgadas} `)