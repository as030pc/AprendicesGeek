import React, { useState } from 'react'
import { AppRouterH } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {
  //Se debe crear un estado global para pasarlo como props al usercontext.provider
    const [user, setUser] = useState({});
    

    return (
        //Con el provider, le provee el contexto a la etiqueta AppRouter
        <UserContext.Provider value={{
            user,
            setUser
        }}>

            <AppRouterH />

        </UserContext.Provider>
    )
}
