import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext';


export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );  // se llama solo a setUser porque solo se usa el cotexto usercontext para actualizar el estado
    const [values, handleInputChange] = useForm({
        email:"",
        password:""
    })

    const {email, password} = values

    const handleSubmit =(e) => {
        e.preventDefault()
        setUser(values)
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

        <form onSubmit = {handleSubmit}>
            <label> Email </label>
            <input type ="email"
                    value = {email}
                    name = "email"
                    onChange = {handleInputChange}
            
            /> <br />

            <label> Contraseña </label>
            <input type ="password" 
            value = {password}
            name = "password"
            onChange = {handleInputChange}/> <br />


             <button className="btn btn-primary" type="submit">
                 Login
             </button>
             
             </form>

            
        </div>
    )
}
