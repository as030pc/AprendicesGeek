let l = Number(prompt('Ingrese el largo del rectangulo'))
let a = Number(prompt('Ingrese el ancho del rectangulo'))

function calcularArea(largo, ancho) {
    let areaRectangulo = largo*ancho;

    return `El area del rectangulo es ${areaRectangulo} `
}

alert (calcularArea(l,a))