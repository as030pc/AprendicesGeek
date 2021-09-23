import React, { useState, useMemo } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../../main.css';


export const MemoHook = () => {

    const { counter, increment } =  useCounter( 100 );
    const [ show, setShow ] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]); //el proceso pesado viene del helpers

    // se usa cuando el proceso es un proceso o una funcion. No se actualiza en memoria. Cuando se quiera recordar una funcion.
   //se usa para memorizar funciones y el [] permite que se actualice cuando se cambie lo que esta dentro de los corchetes.
   //se usa para retornar el valor de la funcion
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small>  </h3>
            <hr />

            <p> { memoProcesoPesado } </p>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
