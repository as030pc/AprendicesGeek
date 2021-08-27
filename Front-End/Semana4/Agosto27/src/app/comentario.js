class Comentario{
    
    async obtenerCategorias(){
         const res = await window.fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
         const categorias = await res.json();
         console.log(categorias)
         return categorias;
     }
 }
  
 export default Comentario
