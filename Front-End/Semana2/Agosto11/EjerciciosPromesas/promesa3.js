
const promesa = new Promise((resolve, reject) => {
    let edad = prompt('Ingrese su edad')
    let peso = Number(prompt('Ingrese su peso'))
        peso >100 ? resolve('La persona tiene sobrepeso')
        :reject()

    
})

promesa
.then(res => console.log(res))
.catch(error => { })  