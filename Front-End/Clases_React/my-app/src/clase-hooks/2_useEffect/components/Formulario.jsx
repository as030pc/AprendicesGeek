import React, { Fragment, useEffect, useState } from 'react'
import '../../style/main.css'

const Formulario = () => {

    const [data, setData] = useState({
        nombre:'',
        email:''
    })

    const {nombre, email} = data

    useEffect(() => {
        //inicio del componente
        console.log('Nombre Nuevo', nombre)
        return () => {
            //Desmonte del componente
            console.log('El componente se desmoto')
        }
    }, [nombre]) //si no se pone dato se renderiza una sola vez, aca se renderiza cada vez que nommbre cambie.

    const handleForm = (e) => {
        e.preventDefaul()
    }


    const handleInputChange=({target})=>{ //se deestructura el target para no poner e.target
        setData({
            ...data,
            [target.name]: target.value //lo que reconozca en el nombre 
        })
    }

    //Fragment: no se va a mostrar en la estructra
    return (
        <Fragment> 

            <h1>Formulario de registro</h1>
            <hr />
            
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    className="form-control mt-3"
                    name="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange = {handleInputChange}
                />

                <input
                    type="email"
                    className="form-control mt-3 "
                    name="email"
                    placeholder="Emiail"
                    value={email}
                    onChange = {handleInputChange}
                />

                <button type="button" className="btn btn-danger mt-3"> Enviar</button>
            </form>
        </Fragment>
    )
}

export default Formulario
