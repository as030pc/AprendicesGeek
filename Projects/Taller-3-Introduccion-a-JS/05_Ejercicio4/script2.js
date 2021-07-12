let fruta = prompt('Ingrese fruta')
switch (fruta.toLocaleLowerCase()) {
    case 'mango':
        alert('El precio del mango es $10000')
   break;
    default:
        alert('La fruta esta agotada');
    break
}