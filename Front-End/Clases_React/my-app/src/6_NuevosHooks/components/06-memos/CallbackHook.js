import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../../main.css';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( (num) => {
        setCounter( c => c + num ); // counter + num, num provendra de increment cuando la llamamos
    }, [ setCounter ] ); // se necesita guardar la funcion en memoria, se requiere que la devolucion sea una funcion
                        // el usecallback devuelve la funcion sin ejecutar
    
    useEffect( () => {
        // ???
    }, [increment] )


    return (
        <div>
            <h1>useCallback Hook:  { counter }  </h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}
