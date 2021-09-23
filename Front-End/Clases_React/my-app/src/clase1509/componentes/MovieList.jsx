import React from 'react'
import { getMoviesByCategory } from '../selectors/getMoviesByCategory'
import { MovieCard } from './MovieCard';
import { useMemo } from 'react';

export const MovieList = ({category}) => {
    
    const movies = useMemo(() =>getMoviesByCategory(category), [category]);
    return (
        <div>
            <ul>
                {
                    movies.map(movie=> (
                       <MovieCard key ={movie.id} {...movie}/>
                        ))
                }
            </ul>
            
        </div>
    )
}
