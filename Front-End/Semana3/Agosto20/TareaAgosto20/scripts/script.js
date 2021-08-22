let citas = [];
let usuarios = [];
let registro = [];
let formulario = document.getElementById('formulario');
let busqueda = document.getElementById('busqueda')
let listarCitas = document.getElementById('listarCita')
let buscar = document.getElementById('btnBuscar')
let formRegistro = document.getElementById('formRegistro');
let usuarioRegistro = [];
let formLogin = document.getElementById('formLogin')
let btnEliminarCitas = document.getElementById('btnEliminarCitas')


const capturaDatos = ()=> {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }
    //unshift agrega al inicio del arreglo 
    //shift retira elementos al inicio del arreglo
    citas.unshift(registro);
    //el localstorage requiere de dos parametros: el nombre que se le da 
    localStorage.setItem('citas',JSON.stringify(citas));
    getLocalStorage();
}

//stopPropagation: evita la propagacion en los otros defectos
formulario.addEventListener('submit',e => {
    e.preventDefault(); //previene por defecto el evento
    capturaDatos(); //
    e.stopPropagation();
})

const getLocalStorage = () => {
    listarCitas.innerHTML = ''
    let citasLocalStorage = JSON.parse(localStorage.getItem('citas')); //convertir la info en un JSON
    console.log(citasLocalStorage);
    citasLocalStorage.map(cita =>{
        const {nombre, fecha, hora, sintomas} = cita; //deestructuracion de arreglos
        listarCitas.innerHTML += `
        <td>${nombre}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${sintomas}</td>
        `
    })
btnEliminarCitas.addEventListener('click', e=> {
        citasLocalStorage = [];
        getLocalStorage()
        listarCitas.innerHTML = ''
    })
}

document.addEventListener('DOMContentLoaded', ()=> {
    if (localStorage.getItem('citas') ) {
        citas = JSON.parse(localStorage.getItem('citas'));
    }
    getLocalStorage()
})

buscar.addEventListener('click', e => {
    e.preventDefault
    let inputBuscar = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('citas'))
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === inputBuscar.toLowerCase())
    busqueda.innerHTML = '';
    console.log(filtro)
    filtro.length === 0 ?  //Se revisa que el filtro esta vacio
    busqueda.innerHTML += `<div style="color:white;">El nombre ${inputBuscar} no existe</div>`
    :
    (
      filtro.map(cita => { 
          const {nombre,fecha,hora,sintomas} = cita;
          busqueda.innerHTML =
            `
            <div style="color:white; font-size:20px;">${nombre}</div>
            <div style="color:white;">${fecha}</div>
            <div style="color:white;">${hora}</div>
            <div style="color:white;">${sintomas}
            <button id = "btnBorrar${cita}" >Borrar</Button></div><br>             
`   
          
          let btnBorrar = document.getElementById(`btnBorrar${cita}`)
          //Implementacion del boton borrar
          btnBorrar.addEventListener('click', e=> {
              busqueda.innerHTML = ''
          })
        })
    )       
})

formRegistro.addEventListener('submit', e =>{
    e.preventDefault()
    registroUsuarios()
})

const registroUsuarios = () =>{
    
    let registroNombre = document.getElementById('registroNombre').value
    let registroApellido = document.getElementById('registroApellido').value
    let registroCorreo = document.getElementById('registroCorreo').value
    let registroContrasena = document.getElementById('registroContrasena').value

    let usuarioRegitro = {
        registroNombre,
        registroApellido,
        registroCorreo,
        registroContrasena
    }
    console.log(usuarioRegitro)
    usuarios.unshift(usuarioRegitro)
    console.log(usuarios)
    localStorage.setItem('usuarios',JSON.stringify(usuarios))
}


document.addEventListener('DOMContentLoaded', ()=> {
    if (localStorage.getItem('usuarios') ) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
})


formLogin.addEventListener( 'submit' ,e=> {
    e.preventDefault()
    ingreso()
})

const ingreso = () => {
    let loginCorreo = document.getElementById('loginCorreo').value
    let loginContrasena = document.getElementById('loginContrasena').value
    //console.log(loginCorreo)
    let usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const {registroCorreo,registroContrasena} = usuarios;
    if (usuarios.some(usuario => usuario.registroCorreo === loginCorreo)&&usuarios.some(usuario => usuario.registroContrasena === loginContrasena)){
        
        alert('Usuario Registrado')
    } else {
        alert('usuario No registrado')
    }
}






    


