
const promesa = new Promise((resolve, reject) => {
    let num1 = Number(prompt('Ingrese el primer numero'))
    let num2 = Number(prompt('Ingrese el segundo numero'))
    let num3 = Number(prompt('Ingrese el tercer numero'))
    let promedio = (num1+num2+num3)/3;
    
    setTimeout (
        
        () => promedio > 25 ? resolve(promedio)
        :reject(new Error ('El promedio no es mayor que 25')),
        1000
    )
})

promesa
.then(res => console.log('El promedio es ' + res))
.catch(error => {
    console.warn(error)
})