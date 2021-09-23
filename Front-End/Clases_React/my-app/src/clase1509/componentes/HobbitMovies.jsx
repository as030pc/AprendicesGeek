import React from 'react'
import { MovieList } from './MovieList'

export const HobbitMovies = () => {
    return (
        <div>
            <h1>Hobbit Movies</h1>
            <hr />
            <MovieList category ="hobbit"/>
        </div>
    )
}
