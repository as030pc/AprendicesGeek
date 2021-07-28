//capturar la lista
let listar = document.getElementById('listar');

//10 cargar la lista al cargar el DOM
document.addEventListener('DOMContentLoaded',listarData)


//2 capturar el boton enviar
let boton = document.getElementById('btnEnviar');

//3 llamar al controlador de eventos
boton.addEventListener('click',capturaDatos)

//4 prevenir los eventos por defecto del formulario
//capturamos el formulario
let form = document.getElementById('form');

//5 llamar al escuchador del evento

form.addEventListener('submit',formSumbit)

//6 funcion para prevenir el evento por defecto
function formSumbit(e){
  e.preventDefault();
}


//1 capturar datos
function capturaDatos(){
    let nombre = document.querySelector('#inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    
    guardarLocalStorage(nombre,apellido,telefono,direccion);
 
}


//7 funcion para almacenar en el local storage
function guardarLocalStorage(nom,ape,tel,dir){

    localStorage.setItem('Nombre',nom);
    localStorage.setItem('Apellido',ape);
    localStorage.setItem('Teléfono',tel);
    localStorage.setItem('Dirección',dir);
    listarData();
} 

//8 listar la información del local storage

function listarData(){
    
    let nombre = localStorage.getItem('Nombre');
    let apellido = localStorage.getItem('Apellido');
    let telefono = localStorage.getItem('Teléfono');
    let direccion = localStorage.getItem('Dirección');

    listar.innerHTML = `
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Dirección</th>
      </tr>
      <tr>
         <td>${nombre}</td>
         <td>${apellido}</td>
         <td>${telefono}</td>
         <td>${direccion}</td>
      </tr>
     </table>
    `;
}