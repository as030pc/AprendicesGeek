import { data } from './data/data.js';
//console.log(data)

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [];
document.addEventListener('DOMContentLoaded', ()=> {
    loadData(data);
})
const loadData = (data) => {
    data.forEach(personaje => {
        const {id, name, image} = personaje; //Deestructuracion del arreglo
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id = id; // se puede hacer con setAttribute
        const clone = templateCard.cloneNode(true); //Creacion de nodos
        fragment.appendChild(clone);   //Adicion uno detras de otro

    });
    items.appendChild(fragment);  //Adicion en items
}

items.addEventListener('click', e => {
    addLike(e);
})

const addLike = e => {
    if(e.target.classList.contains('btn-dark')) {
        setLike(e.target.parentElement);
    }
}

const setLike = objeto => {
    const boton = {
        id:objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 0
        //console.log(objeto);
    }


    if (like.hasOwnProperty(boton.id)) {
        boton.cantidad = like[boton.id].cantidad + 1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }
    
    like[boton.id] = {...boton}
    console.log(like[boton.id])
}

