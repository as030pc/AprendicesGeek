import React, {useState} from 'react'
import AppRouter3 from '../routers/AppRouter'
import { UserContext1 } from './UserContext'

const MainApp = () => {
    const [user, setUser] = useState({})
    return (
        <div>
            <UserContext1.Provider value = {{user,
                 setUser}} >
                <AppRouter3/>
            </UserContext1.Provider>
            
        </div>
    )
}

export default MainApp
