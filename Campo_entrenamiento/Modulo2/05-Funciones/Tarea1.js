function revisar(num) {
    if (num>0){
        return `El numero ${num} es positivo`;
    }else if (num<0){
        return `El numero ${num} es negativo`;

} else {
    return `El numero ${num} es neutro`;
}
}

for (i = 0;i<20;i++) {
    let numero = Number(prompt('Ingrese un numero'))
    alert(revisar(numero));
}