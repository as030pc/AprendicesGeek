let x = 6

function PromesaEje(x){
    const promesa = new Promise((resolve,reject) =>{
        if(x==10){
            resolve('La variable es igual 10')
        }else{
            reject('La variable no es igual a 10')
        }
    })
    return promesa
}


promesa.then(res=>{
    console.log('success', res)
})
.catch(error =>{
    console.log(error)
})
