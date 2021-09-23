import { useState } from 'react'
//value  = 10, es un valor por defecto, si se requiere otro valor por defecto se debe hacer un objeto con los valores por defecto
const useCounter = (value = 10) => {
    
    const [counter, setCounter] = useState(value)

    const handleSubtract = () => {setCounter(counter - 1)}
    const handleReset = () => {setCounter(value)}
    const handelAdd = () => {setCounter(counter + 1)}

    return{
        counter,
        handleSubtract,
        handleReset,
        handelAdd
    }
}

export default useCounter
