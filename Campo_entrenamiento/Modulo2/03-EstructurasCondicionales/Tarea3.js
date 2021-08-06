// Solicitud de datos 
let nombreArticulo = prompt('Ingrese el nombre del articulo');
let claveDescuento = prompt('Ingrese la clave de descuento: 01 si el descuento es del 10% y 02 si el descuento es del 20% ')


//Inicializacion de variables
let precioDescuento = 0;

//Procedimiento
if (claveDescuento === "01") {
    let precioOriginal = Number(prompt('Ingrese el precio del articulo'));
    precioDescuento = 0.9 * precioOriginal;
    //Salida
    alert(`EL articulo ${nombreArticulo} con clave ${claveDescuento} y precio original de 
            ${precioOriginal} tiene un precio con descuento de ${precioDescuento} `);
} else if (claveDescuento === "02") {
    let precioOriginal = Number(prompt('Ingrese el precio del articulo'));
    precioDescuento = 0.8 * precioOriginal
    alert(`EL articulo ${nombreArticulo} con clave ${claveDescuento} y precio original de
            ${precioOriginal}; tiene un precio con descuento de ${precioDescuento} `)
} else {
    alert('El codigo ingresado no es valido')
};
