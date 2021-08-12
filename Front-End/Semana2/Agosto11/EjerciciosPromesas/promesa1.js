const promesa = new Promise((resolve, reject) => {
    let nombre = prompt('Ingrese un nombre')
    setTimeout (
        () => nombre != '' ? resolve(nombre)
        :reject(new Error ('No se ingreso nada')),
        1000
    )
})

promesa
.then(res => console.log('El nombre es ' + res))
.catch(error => {
    console.warn(error)
})