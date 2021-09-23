import React from 'react'
import Cards from './Cards'

const CategoriesList = ({categorias}) => {
    return (
        <div>
            <h1>Lista categorias</h1>
            {
                    categorias.map((peli, index)=>(
                            <Cards categoria ={peli}/>
                    ))
                }
            
        </div>
    )
}

export default CategoriesList
