/*Importamos la data que tenemos en el archivo data.js que se encuentra en
la carpeta data*/

/*un objeto es la instancia de una clase*/
import {data} from './data.js';

const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();  //Fragmentos
const items = document.getElementById('items')

/*Recordemos que con nuestro evento DOMContentLoaded garantizamos
que nos llame a la función loadImages luego de que cargue el DOM*/
document.addEventListener('DOMContentLoaded', () => {
    cargarData(data);

})

    
const cargarData = data => {
    console.log(data);
    data.forEach(heroe => { // heroe es un objeto 

    // destructucturacion de objetos con {}
    const {id, superhero, image}= heroe;
    templateCard.querySelector('h5').textContent =  superhero;  //se captura el template card y se van asignando los atributos del objeto
    templateCard.querySelector('img').setAttribute('src', image); //Para cargar imagenes
    
    // Como se repite una cantidad de veces, entonces es necesario clonarlo
    const clone = templateCard.cloneNode(true);
    // adicion de clones en el html
    fragment.appendChild(clone); // adicion de clon en el fragmento
})

//

items.appendChild(fragment); // Adicion de fragmentos en el div de items

}


// Formulario

form.addEventListener('submit', function LocalStorage() {
    // captura de datos y almacenamieto en variables

    let inputName = document.getElementById('inputName').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let msm = document.getElementById('msm').value;

    if (inputName ==="" || email === "" || gender ==="" || msn ==="") {
        alert('Ingresar todos los campos');
         }else {

            // Para guardar
             localStorage.setItem('Nombre', inputName )
             localStorage.setItem('Email', email )
             localStorage.setItem('Genero', gender );
             localStorage.setItem('Mensaje', msm );
             getLocalStorage();

         }
        
        })


        function getLocalStorage(){
            let nameSave = localStorage.getItem("Nombre");
            let emailSave = localStorage.getItem("Email");
            let genderSave = localStorage.getItem("Genero");
            let messageSave = localStorage.getItem("Mensaje");
            alert(`The information stored is: ${nameSave} 
            ${emailSave}
            ${genderSave}
            ${messageSave}`);
        }