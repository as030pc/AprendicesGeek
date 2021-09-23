
import { movies } from '../data/movies'
export const getMoviesByCategory = (category) => {

    const validCategory = ["senior", "hobbit"]
    if (!validCategory.includes(category)) {
        throw new Error (`La categoria ${category} no es correcta` )
    }
    return movies.filter(movie => movie.category ===category)
}