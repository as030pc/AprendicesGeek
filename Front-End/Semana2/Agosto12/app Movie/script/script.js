const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const form = document.querySelector('#form')
const main = document.querySelector('#main')
const search = document.querySelector('#search')


//Funcion asincrona
// async function getMovies (url) {
//     const res = await fetch(url)  //hacer peticiones al navegador, axios tambien se puede usar (requiere instalacion)
//     const data = await res.json()
//     console.log(data.results)
// }

 //Funcion anonima con fetch -await
const getMovies = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    showMovies(data.results)

}

getMovies(API_URL)

function showMovies(movie) {
    console.log(movie);
    main.innerHTML = ''
    movie.map((movie,index)  => {
        const {title, poster_path, vote_average, overview} = movie //Deestructuracion
        const movieE1 = document.createElement('div')
        movieE1.classList.add('movie')
        
        movieE1.innerHTML = `
        <div class="movie">
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${ getClassByRate (vote_average)}"> ${vote_average} </span>
            </div>
            <div class="overview">
                <h3></h3>
                ${overview}
            </div>
        </div>
        
        `
        main.appendChild(movieE1);
    })

}


function getClassByRate(vote) {
    if (vote >= 8.0) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
      
    }
})



// Mala practica: promesa interna no es lo mas conveniente
// const getMovies = (url) => {
//     const peticion  = fetch(url)
//     peticion.then(res =>{
//         res.json().then(data => {
//             console.log(data.results)
//         })
//     })
// }


//Fech .then
// const getMovies = url => {
//     const peticion = fetch(url)
//     peticion.then(res => res.json())
//             .then(data => console.log(data.results) )
// }