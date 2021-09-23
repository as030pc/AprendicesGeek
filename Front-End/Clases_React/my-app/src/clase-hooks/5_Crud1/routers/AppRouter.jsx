import React from 'react'

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { TaskApp } from '../componentes/TaskApp'
export const AppRouter5 = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route to ="/" component={TaskApp} /> 
                    <Route to ="/" component={TaskApp} /> 

                </Switch>
            </Router>
        </div>
    )
}
