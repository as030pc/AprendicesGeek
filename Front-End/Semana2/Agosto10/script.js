const formulario = document.getElementById('formulario');
const listaNotas = document.querySelector('#listaNotas');
let arreglo = [];



formulario.addEventListener("submit",evento => {
    evento.preventDefault(); //Se controla el evento
    let estudiante = document.getElementById('nom').value;
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    let p3 = document.getElementById('p3').value;
    console.log(estudiante, p1, p2, p3);
    crearRegistro(estudiante,p1,p2,p3)
    guardarDatos();
})







const crearRegistro = (nombre, p1,p2,p3) => {
    let registro = {
        nombre: nombre,
        periodo1: p1,
        periodo2: p2,
        periodo3: p3 
    }
    arreglo.push(registro); //Permite guardar la informacion del objeto en un arreglo
    console.log(arreglo);

}

const guardarDatos = () => {
    localStorage.setItem('notas', JSON.stringify(arreglo)) //Convierta un objeto JavaScript en una cadena
    listarDatos();
}

const listarDatos = () => {
    listaNotas.innerHTML = '';
    arreglo = JSON.parse(localStorage.getItem('notas')); //JSON.parse: los datos se convertirán en un objeto JavaScript.
    //console.log(arreglo);
    arreglo.forEach(element => {
        const {nombre, periodo1, periodo2, periodo3} = element;
        listaNotas.innerHTML += `
        <div class="alert alert-primary" 
        role="alert"><i class="material-icons float-left mr-2">accessibility</i>
        <span>${nombre}</span><b>${periodo1}</b>
        <span>${periodo2}</span><span>${periodo3}</span>
        <i class="material-icons">delete</i></span></div></div>

        `
        
    });
}

document.addEventListener('DOMContentLoaded', listarDatos);

listaNotas.addEventListener('click', (e) => {
    let texto = e.path[1].childNodes[2].innerHTML;

    if (e.target.innerHTML === 'delete') {
        eliminarDatos(texto);
    }
})

const eliminarDatos = (estudiante) => {
    let indexArreglo;
    arreglo.forEach((elemento, index) => {
        if(elemento.nombre === estudiante) {
            indexArreglo = index;
        }
    })
    arreglo.splice(indexArreglo,1); //remove el indexArreglo,
    guardarDatos();
}



