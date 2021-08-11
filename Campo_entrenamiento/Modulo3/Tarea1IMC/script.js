
let boton = document.getElementById('boton')
let estado = document.getElementById('indiceMasa')
let arreglo =  [];
let imc = 1;
let estadoPersona

boton.addEventListener('click', evento => {
    evento.preventDefault(); //Se controla el evento
    let sexo = document.getElementById('sexo').value
    let edad = document.getElementById('edad').value
    let peso = Number(document.getElementById('peso').value)
    let estatura = Number(document.getElementById('estatura').value)
    console.log(sexo , edad ,peso, estatura)
    calcularIMC(estatura, peso, sexo,edad);
    
})



const calcularIMC = (estatura, peso, sexo, edad) => {
    imc = peso/(Math.pow(estatura,2))

    if (imc < 18.5) {
        estadoPersona = "Bajo Peso"

    } else if (imc <= 18.5 && imc >= 24.9) {
        estadoPersona = "Saludable"

    } else if (imc <= 25 && imc >= 29.9) {
        estadoPersona = "Con Sobrepeso"
    } else if (imc <= 30 && imc >= 39.9) {
        estadoPersona = "Obeso"
    } else  {
        estadoPersona = "Obesidad Extrema o de alto Riesgo"
    } 
    mostrar()
    creacionRegistro(sexo, edad, peso, estatura, imc, estadoPersona)
    guardarLocalStorage();

    //estado.innerHTML = `<p> El indice de masa corporal del usuario es ${imc.toFixed(2)} <br> Su estado de salud es ${estadoPersona}</p>`

}


const mostrar = () => {
    estado.innerHTML = `<p> El indice de masa corporal del usuario es ${imc.toFixed(2)} <br> Su estado de salud es ${estadoPersona}</p>`

}

const creacionRegistro = (sexo, edad, peso, estatura, imc, estado) => {
    let registro = {
        sexo:sexo,
        edad: edad,
        peso: peso,
        estatura: estatura,
        imc:imc,
        estado:estado

    }
    arreglo.push(registro); //Permite guardar la informacion del objeto en un arreglo
    console.log(arreglo);

}

const guardarLocalStorage = () => {
    localStorage.setItem('datos', JSON.stringify(arreglo))
}



