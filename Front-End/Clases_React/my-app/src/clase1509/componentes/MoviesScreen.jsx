import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router'
import { getMoviesById } from '../selectors/getMoviesById';


export const MoviesScreen = ({history}) => {

    const {id} = useParams();
    console.log(id)

    const movie = useMemo(() => getMoviesById(id), [id])  //Importante hacer la funcion flecha para completar los parametros del useMemo. Este se ejecutara cada vez que el id cambie.
    console.log(movie)
    const {name, description} = movie

    if(!movie) {
        return <Redirect to ="/"/>
    }

    console.log(history);

    const handleReturn = () => {
        history.goBack()

    }

    return (
            <div>
                <div className="row mt-5">
            <div className="col-4">
            <img
            src={`../assets/movies/${id}.jpg`}
            alt=""
            className="img-thumbnail animate__animated animate__
            fadeInLeft"
            />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
            <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b> Name: {name} </b> </li>
            <li className="list-group-item"> <b> Description: {description} </b> </li>
            </ul>
            <button
            className="btn btn-outline-info"
            onClick = {handleReturn}>
            Return
            </button>
            </div>
            </div>

            </div>
        
    )
}
