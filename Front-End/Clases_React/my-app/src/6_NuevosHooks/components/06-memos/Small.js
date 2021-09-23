import React, {memo} from 'react'


// El memo se usa en procesos pesados o consumos de API: el memo se usa donde se consume el Api. EL memo evita que se renderice desde que no se cambie el estado
export const Small = memo(({ value }) => { //la prop va cambiando por lo que se va a renderizar nuevamente.

    console.log(' Me volví a llamar :(  ');
    // http?

    return (
        <small> {value} </small>
    )
});

