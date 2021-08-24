let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

window.addEventListener('DOMContentLoaded', async () => {

    document.getElementById('id').style.display = 'none';
    document.getElementById('label-edit').style.display = 'none';
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

let name = document.getElementById('name').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
  
    let resp = await fetch('http://localhost:4003/usuarios/',{
        method: 'POST', // Es el metodo de crear, se deben colocar el tipo de metodo el header 
        body: JSON.stringify({  //Que es lo que se va a crear
            nombre: name,
            apellido: lastName,
            correo: email
        }),             //Se envia el objeto que se va a construir
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }               // se especifica siempre este header
    }) 
   /*  let data = resp.json();
    console.log(data) */
})

btnCorreo.addEventListener('click', async () => {
    document.getElementById('id').style.display = 'block';
    document.getElementById('label-edit').style.display = 'block';
    let email = document.getElementById('email').value;
    document.getElementById('email').readOnly = true;

    let resp = await fetch('http://localhost:4003/usuarios'); //Para ir consultar en la endpoint y consumirla
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.correo === email)
    const {nombre, apellido, correo, id} = modificar;
    console.log(nombre, apellido, correo, id);
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;
})

btnEditar.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let lastNameMod = document.getElementById('lastName').value;
    let emailMod = document.getElementById('email').value;
  
    let resp = await fetch(`http://localhost:4003/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameMod,
            apellido: lastNameMod,
            correo: emailMod
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
/*     let data = resp.json();
    console.log(data); */
})

btnEliminar.addEventListener('click', async() => {

    let idModificar = document.getElementById('id').value;
    console.log(idModificar)
    let resp = await fetch(`http://localhost:4003/usuarios/${idModificar}`,{
        method: 'DELETE',
    })
/*     let data = resp.json();
    console.log(data); */
})