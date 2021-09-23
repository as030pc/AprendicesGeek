import React, {useState} from 'react'


const Cards = (props) => {
    const [cards,setState] = useState(['card1'])
    const imagen = async() => {
        const url = "https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu"
        const res = await fetch(url)
        const data = await res.json();
        console.log(data);
    }
    imagen()
    

    
    return (
        <div>
            <h1>{props.categoria}</h1>
        </div>
    )
}



export default Cards
