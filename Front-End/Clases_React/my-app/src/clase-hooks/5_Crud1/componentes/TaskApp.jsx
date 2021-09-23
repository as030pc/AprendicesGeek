import { isEmpty } from 'lodash'
import React from 'react'
import { useForm } from '../hook/useForm'
import { useState } from 'react'


export const TaskApp = () => {
    const [formValue, handleInputChange, reset] = useForm({
        url:'',
        nombre:'',
        description:''
    })

    const [error, setError] = useState(false)

    const {url, nombre, description} = formValue

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(isEmpty(url) || isEmpty(nombre)|| isEmpty(description)) {
            setError(true)
            return

        }
        setError(false)

    }
    return (
        <div className="container mt-5">
        <h1>Tareas</h1>
        <hr />

        <div className="row">
            <div className="col-8">
                <h3 className="text-center">Lista de tareas</h3>
                <ul className="list-group">
                    
                            <li className="list-group-item" >
                                <span className="lead"></span>
                                <button
                                    className="btn btn-danger btm-sm float-end "
                                   
                                >
                                  borrar
                                </button>
                                <button
                                    className="btn btn-warning btm-sm float-end mx-2"
                                    
                                >
                                    Editar
                                </button>
                                <button className="btn btn-success btm-sm float-end mx-2">
                                <a href="/">
                                Detalle
                                </a>
                                </button>
                                
                                   
                                
                            </li>
                        
                    
                </ul>
            </div>

            <div className="col-4">
                <h3 className="text-center"> Agregar tareas </h3>
                {
                   error &&<div className="alert alert-danger" role="alert">
                        <div className="alert alert-danger" role="alert">
                            Todos los cambios son obligatorios!
                        </div>
                    </div>

                }
                <form className="form-group"  onSubmit = {handleOnSubmit}>
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Url"
                        name="url"
                        value = {url}
                        onChange = {handleInputChange}

                       
                       
                    />

                    <input
                        type="text"
                        className="form-control mt-2"
                        name="nombre"
                        autoComplete="off"
                        placeholder="Nombre Tarea"
                        value = {nombre}
                        onChange = {handleInputChange}

                        
                    />

                    <textarea
                        name="description"
                        className="form-control mt-2"
                        autoComplete="off"
                        value = {description}
                        onChange = {handleInputChange}
                        
                    >
                    </textarea>

                    <div className="d-grid gap-2 mx-auto mt-2">
                        <button
                            type="submit"
                            className="btn btn-dark"
                           >
                            Guardar
                            
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
    )
}
