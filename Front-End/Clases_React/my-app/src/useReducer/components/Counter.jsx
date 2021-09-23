import React, { useReducer} from 'react'
import { counterReducer, inicialState, init } from '../reducers/counterReducer'
import { types } from '../types/types'
const Counter = () => {


    const [counter, dispatch] = useReducer (counterReducer, inicialState, init)
    

   

    return (
        <div className="container mt-3">
            <h1>Counter: {counter} </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick = {()=>dispatch({type:types.increment})}
                
            >
                +1
            </button>
            <button
                className="btn btn-primary"
                onClick = {()=>dispatch({type:types.decrement})}
                
            >
                -1
            </button>
            <button
                className="btn btn-primary"
                onClick = {()=>dispatch({type:types.reset})}
                
            >
                Reset
            </button>
        </div>   
    )
}

export default Counter
