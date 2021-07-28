
let boton = document.getElementById('boton');

document.addEventListener('DOMContentLoaded',calcular)

boton.addEventListener('click', calcular)


function calcular() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)

    if (num1 >num2 && num1>num3) {
        alert(`El numero ${num1} es el mayor`) 
        
    } else if (num2 >num1 && num2>num3) {
        alert (`El numero ${num2} es el mayor`)
        
    } else if (num3 >num1 && num3>num2) {
        alert(`El numero ${num3} es el mayor`)

}
}

