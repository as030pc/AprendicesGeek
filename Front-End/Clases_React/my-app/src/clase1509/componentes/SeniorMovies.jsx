import React from 'react'
import { MovieList } from './MovieList'

export const SeniorMovies = () => {
    return (
        <div>
            <h1>Senior Movies</h1>
            <hr />
            <MovieList  category = "senior"/>
        </div>
    )
}
