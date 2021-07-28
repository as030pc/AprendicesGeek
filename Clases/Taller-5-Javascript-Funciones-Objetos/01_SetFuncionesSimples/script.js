
function capturarDatos(){
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;

    if(nombre==="" || apellido===""){
       console.log("Todos los campos son requeridos");
    }
    else{
        console.log(`Su nombre es ${nombre}
        y su apellido es ${apellido}`);
    }
}

