let usuario = document.getElementById('Usuario').value;
let contrasena = document.getElementById('contrasena').value;

let boton = document.getElementById('boton')


boton.addEventListener('click',localStorage)

function localStorage() {
    localStorage.setItem('Usuario', usuario);
    localStorage.setItem('Contraseña', contrasena);
}
