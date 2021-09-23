import React, {useState} from 'react'
import CategoriesList from './CategoriesList'
export const CategoriasApp = () => {
    const [categorias, setCategorias] = useState([])
    const handleAgregar = () => {
        setCategorias (
         [...categorias, 'Risa']
        )
    }
    
    return (
        <div>
            <h1> Componentes con hooks</h1>
            <button onClick ={handleAgregar}>Agregar</button>
            
            <ol>
               <CategoriesList categorias = {categorias}/>
            </ol>

        </div>
    )
}
