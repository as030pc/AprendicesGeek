
import { movies } from '../data/movies'

export const getMoviesById = (id) => {
    return movies.find(movie=> movie.id ===id)
}
