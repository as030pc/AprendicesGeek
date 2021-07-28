
let num = 0
for (let i = 0; i<10; i++) {
    num = Number(prompt('Ingrese un numero negativo'))
    if (num<0) {
        num = -num
        alert(`El numero en positivo es: ${num}`)
    } else {
        alert('El numero ingresado es negativo. Ingrese otro numero')
        i = i-1
    }

}