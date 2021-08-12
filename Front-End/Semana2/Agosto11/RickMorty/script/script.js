const URL_PERSONAJES =  "https://rickandmortyapi.com/api/character"

const main = document.querySelector('#main');

const getPersonaje = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    console.log(data.results)
    console.log(data)
    showPersonaje(data.results)

}



getPersonaje(URL_PERSONAJES);


function showPersonaje(personaje) {
    main.innerHTML = ''

    personaje.map((personaje) => {
        const {name, image, species, location, status, origin } = personaje;
        let name1 = location.name;
        let name2 = origin.name;
        
      
        
        const personaje1 = document.createElement('div')
    
        personaje1.innerHTML = `
            <div id = 'tarjeta'>
                <img src=${image} alt="">
                <h1>${name}</h1>
                <br>
                <h4> Status: ${status}</h4> <h4>${species}</h4>
                <p>Origin ${name2}</p>
                <br>
                <p> Location :${name1}</p>
                
            </div>


            `
        main.appendChild(personaje1);
    })
    

 
}


