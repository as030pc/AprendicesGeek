const promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()*10)

    setTimeout(
        () => number >5  ? resolve(number)
        :reject(new Error('Menor a cinco')), 
        1000
    )

})

promesa
.then(res => console.log('El numero es: ', res))
.catch(error => {
    console.warn(error)
})