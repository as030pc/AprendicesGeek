
let boton = document.querySelector('#boton');
const detail1 = document.getElementById('detail1');
const detail2 = document.getElementById('detail2');
const detail3 = document.getElementById('detail3');



let descripcion1 = document.querySelector('.descripcion1');
let descripcion2 = document.querySelector('.descripcion2');
let descripcion3 = document.querySelector('.descripcion3');

descripcion1.addEventListener('click', function () {
    detail1.innerHTML = ''
    detail2.innerHTML = ''
    detail3.innerHTML = ''
    detail1.innerHTML = `
    <table border="2px" align="justify">
    <tr>
        <td rowspan="3"><img src="../images/image1.jpg"  width="400" height="500"></td>
        <td align="center">
         <h1>Lucy </h1>
         <h4> Duracion: 1h 29min</h4>
         <h4> Genero: Ciencia ficción, Acción</h4>
         <h5> Dirigida por Luc Besson </h5>
         <p> Lucy (Scarlett Johanson, Don Jon) es una joven que ejerce de "mula", se dedica a ocultar droga en su cuerpo para narcotraficantes. Pero un día, inesperadamente, una de las bolsas de droga que transporta se rompe y su sistema absorbe dichos estupefacientes. Lo sorprendente es que, en lugar de ir directa al hospital, las drogas le otorgan una serie de poderes sobrehumanos tales como telequinesis, la cancelación de dolor, la habilidad de absorber el conocimiento de forma instantánea y una velocidad espectacular; poderes que, inevitablemente, cambiarán su vida para siempre, convirtiendo a Lucy en una máquina de matar.</p>
        </td>
    </tr>
</table>
    `
})

descripcion2.addEventListener('click', function () {
    detail1.innerHTML = ''
    detail2.innerHTML = ''
    detail3.innerHTML = ''
    detail2.innerHTML = `
    <table border="2px" align="center">
    <tr>
    <td rowspan="3"><img src="../images/image2.jpg"  width="400" height="500"></td>
    <td align="center">
     <h2> La llegada </h2>
     <h4> Duracion: 2h 10min </h4>
     <h4> Ciencia ficcion </h4>
     <h5> Dirigida por Luc Besson </h5>
      <p> Cuando naves extraterrestres comienzan a llegar a la Tierra, los altos mandos militares piden ayuda a una experta lingüista (Amy Adams) para intentar averiguar si los alienígenas vienen en son de paz o suponen una amenaza. Poco a poco la mujer intentará aprender a comunicarse con los extraños invasores, poseedores de un lenguaje propio, para dar con la verdadera y misteriosa razón de la visita extraterrestre... Adaptación del relato corto "The Story of Your Life" del escritor Ted Chiang, ganador de los reconocidos premios de ciencia ficción Hugo y Nebula</p>
    </td>
    </tr>
</table>
    `
})

descripcion3.addEventListener('click', function () {
    detail1.innerHTML = ''
    detail2.innerHTML = ''
    detail3.innerHTML = ''
    detail3.innerHTML = `
    <table border="2px" align="center">
    <tr>
    <td rowspan="3"><img src="../images/image3.jpg"  width="400" height="500"></td>
    <td align="center">
     <h2> Intelestelar </h2>
     <h4> Duracion: 2h 23min</h4>
     <h4>Genero: Ciencia ficción </h4>
     <h5> Dirigida por Christopher Nolan </h5>
     <p> Al ver que la vida en la Tierra llega a su fin, un grupo de exploradores, entre los que se cuenta Cooper (McConaughey), decide embarcarse en la que puede ser la misión más importante de la historia de la Humanidad. Así, empernderán un viaje más allá de nuestra galaxia para descubrir si las estrellas pueden albergar el futuro de la humanidad. </p>
    </td>




        
    </tr>
</table>
    `
})

boton.addEventListener('click', function () {

    let nombre = document.querySelector('.nombre').value;
    let email = document.querySelector('.email').value;
    let ciudad = document.querySelector('.ciudad').value;


    if (nombre == "" || email == "" || ciudad == "") {
        alert('Ingresar todos los campos requeridos');
        return true;
    }
    else {

        localStorage.setItem("Nombre", nombre);
        localStorage.setItem("Email", email);
        localStorage.setItem("Ciudad", ciudad);
        getLocalStorage();

        return false;
    }
})

function getLocalStorage() {
    let nombreGuardado = localStorage.getItem("Nombre");
    let emailGuardado = localStorage.getItem("Email");
    let ciudadGuardada = localStorage.getItem("Ciudad");
    alert(`El usuario ${nombreGuardado}, con correo ${emailGuardado} y de la ciudad de
    ${ciudadGuardada} ha quedado suscrito a NetNet`);
}








