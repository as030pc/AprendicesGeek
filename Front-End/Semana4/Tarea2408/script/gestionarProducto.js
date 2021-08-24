// code here
let crear = document.getElementById("crear");
let buscar = document.getElementById("buscar");
let modificar = document.getElementById("modificar");
let eliminar = document.getElementById("eliminar");


crear.addEventListener("click", async (e)=>{
    e.preventDefault();
    let nombreProducto = document.getElementById("validationDefault01").value;
    let colorProducto = document.getElementById("validationDefault02").value;
    let garantia = document.getElementById("validationDefault03").value;
    let rin = document.getElementById("validationDefault04").value;
    let material = document.getElementById("validationDefault05").value;
    let referencia = document.getElementById("validationDefault06").value;
    //let imagen = document.getElementById("validationDefault07").value;

    let resp = await fetch("http://localhost:4003/productos", {
        method: 'POST',
        body: JSON.stringify({
            
                Producto: nombreProducto,
                Garantia: garantia,
                Rin: rin,
                Material: material,
                //imagen: imagen,
                color: colorProducto,
                Referencia: referencia
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        } 
    })
})

buscar.addEventListener('click', async(e)=>{
    e.preventDefault();

    let campoReferencia = document.getElementById("validationDefault06").value;
    campoReferencia = document.getElementById("validationDefault06").value.readOnly = true
    let resp = await fetch("http://localhost:4003/productos")
    let data = await resp.json();
    let modificar = data.find(producto => producto.Referencia === campoReferencia )
    const {Producto,Garantia, Rin, Material, color, Referencia} = modificar;
    document.getElementById("validationDefault01").value = Producto;
    document.getElementById("validationDefault02").value = color;
    document.getElementById("validationDefault03").value = Garantia;
    document.getElementById("validationDefault04").value = Rin;
    document.getElementById("validationDefault05").value = Material;
    document.getElementById("validationDefault06").value = Referencia;

})






modificar.addEventListener('click',  async (e)=> {
    let nombreProducto = document.getElementById("validationDefault01").value;
    let colorProducto = document.getElementById("validationDefault02").value;
    let garantia = document.getElementById("validationDefault03").value;
    let rin = document.getElementById("validationDefault04").value;
    let material = document.getElementById("validationDefault05").value;
    let referenciaModif = document.getElementById("validationDefault06").value;

    let resp = await fetch(`http://localhost:4003/productos/${referenciaModif}`)
})






eliminar.addEventListener("click", async() =>{
   let elementoBorrar = document.getElementById("id").value;
   let resp = await fetch(`http://localhost:4003/productos/${elementoBorrar}`);
    
});