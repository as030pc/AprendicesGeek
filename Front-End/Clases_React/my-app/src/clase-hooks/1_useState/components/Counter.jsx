import React, { useState } from 'react'


const Counter = () => {
    const value = 10
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20 
    })

    const {counter1,counter2} =counter

    const handleSubtract = () => {
        setCounter({
            counter2: counter2,
            counter1: counter1-1,
        })
    }

    const handleReset = () => {
        setCounter(value)
    }

    const handelAdd = () => {
        setCounter(counter + 1)
    }



    return (
        <div>
            <h1>Counter: {counter1} </h1>
            <h1>Counter: {counter2} </h1>
            <button type="button"
                className="btn btn-primary"
                onClick={handleSubtract}>-1
            </button>
            <button type="button"
                className="btn btn-warning"
                onClick={handleReset}>Reset
            </button>
            <button type="button"
                className="btn btn-primary"
                onClick={handelAdd}>+1
            </button>
        </div>
    )
}

export default Counter
