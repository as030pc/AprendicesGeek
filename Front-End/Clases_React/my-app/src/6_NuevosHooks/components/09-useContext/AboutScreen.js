import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    //uso del hook useContext para poder llamar el contexto UserContext

    const { user, setUser } = useContext( UserContext );

    const handleClick = () => {
        console.log(JSON.stringify(user));
        setUser({});
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>


            <button 
                className="btn btn-warning"
                onClick={ handleClick }
            >
                Logout
            </button>

        </div>
    )
}
