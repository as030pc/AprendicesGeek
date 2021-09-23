import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import {Login} from '../components/Login'
import Navbar from '../components/Navbar'
export const AuthRouter = () => {
    return (
        <div  className = "container">
            <div> 
                <div>
                    <Navbar/>
                <Switch>
                   <Route exact path = "/auth/login" component = {Login}/>
                   <Redirect exact path = "/auth/login" />
               </Switch>

                </div>
                
            </div>
            
        </div>
    )
}
