import React from 'react'
 //show incrementar viene desde el custom hook
export const ShowIncrement = React.memo(({ increment }) => { // si se necesita memorizar el componente 

    console.log(' Me volví a generar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 );
            }}   // importante hacerlo en funcion flecha
        >
            Incrementar
        </button>
    )
})
