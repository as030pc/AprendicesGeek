// Code here

let btnFiltroAluminio = document.getElementById('filtro-aluminio')
let btnFiltroFibra = document.getElementById('filtro-fibra')


const traerProducto = async (url) =>{
let mostrarProducto = document.querySelector("#mostrarProducto");
mostrarProducto.innerHTML = "";
const resp = await fetch(url);
const data = await resp.json();
data.forEach(producto =>{
    const{imagen, Producto, Material, Rin} = producto;
    mostrarProducto.innerHTML += `
    <div>
        <div>                
            <img src="${imagen}" class="card-img" alt="...">
            <div>
                    <h5 class="card-title body2Bold">${Producto}</h5>
                    <p class="card-text body2Regular">${Material}</p>
                    <p class="card-text body2Regular">${Rin}</p>
                    </div>
        </div>
    </a>
</div>
    `
})
}

window.addEventListener("load", () => {
   traerProducto("http://localhost:4003/productos"); 
});





btnFiltroAluminio.addEventListener('click', async () => {
    let mostrarProducto = document.querySelector("#mostrarProducto");
    mostrarProducto.innerHTML = "";
    const resp = await fetch("http://localhost:4003/productos");
    const data = await resp.json();
    let filtro = data.filter(producto => producto.Material === "Aluminio")
    filtro.forEach(producto =>{
    const{imagen, Producto, Material, Rin} = producto;
    mostrarProducto.innerHTML += `
    <div>
        <div>                
            <img src="${imagen}" class="card-img" alt="...">
            <div>
                    <h5 class="card-title body2Bold">${Producto}</h5>
                    <p class="card-text body2Regular">${Material}</p>
                    <p class="card-text body2Regular">${Rin}</p>
                    </div>
        </div>
    </a>
</div>
    `
})
    
    

})

btnFiltroFibra.addEventListener('click', async () => {
    let mostrarProducto = document.querySelector("#mostrarProducto");
    mostrarProducto.innerHTML = "";
    const resp = await fetch("http://localhost:4003/productos");
    const data = await resp.json();
    let filtro = data.filter(producto => producto.Material === "Fibra de carbono")
    filtro.forEach(producto =>{
    const{imagen, Producto, Material, Rin} = producto;
    mostrarProducto.innerHTML += `
    <div>
        <div>                
            <img src="${imagen}" class="card-img" alt="...">
            <div>
                    <h5 class="card-title body2Bold">${Producto}</h5>
                    <p class="card-text body2Regular">${Material}</p>
                    <p class="card-text body2Regular">${Rin}</p>
                    </div>
        </div>
    </a>
</div>
    `
})
    
    

})