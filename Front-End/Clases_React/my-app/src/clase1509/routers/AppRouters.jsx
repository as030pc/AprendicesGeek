import React from 'react'
import {BrowserRouter as Router,
        Switch,
        Route, Redirect

} from 'react-router-dom'

import { HobbitMovies } from '../componentes/HobbitMovies'
import { Navbar } from '../componentes/Navbar'
import { SeniorMovies } from '../componentes/SeniorMovies'
import {MoviesScreen} from "../componentes/MoviesScreen"
import { MovieList } from '../componentes/MovieList'
export const AppRouters = () => {
    return (
        <div>
        <Router>
            <Navbar/>

            <Switch>
                <Route path ="/hobbit" component = {HobbitMovies}/>
                <Route path ="/senior" component = {SeniorMovies}/>
                <Route exact path = "/movie/:id" component = {MoviesScreen} />
                <Redirect to="/" component = {MovieList} />
            </Switch>
        </Router>
            
        </div>
    )
}
