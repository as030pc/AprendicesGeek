import Comentario from './comentario';
async function inicio(){
    const com = new Comentario();
    const res = await com.obtenerCategorias();
    console.log(res.categories);
}
console.log("Entrro!!!");

inicio()