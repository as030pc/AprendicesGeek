let nombre = prompt('Ingresa nombre')
let valorCompra = Number(prompt('Ingrese valor compra'));
let bolita = prompt('Ingrese color')

if (bolita === 'blanca') {
    desc = valorCompra*0; }

else if(bolita ==='negra') {
    desc = valorCompra*0.5;
}
else {
    desc = valorCompra*0
}

valorCompra -=desc

alert(`El nombre del usuario es ${nombre} la bolita fue ${bolita} y el descuento fue ${valorCompra}`)

