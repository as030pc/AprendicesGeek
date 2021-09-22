import { types } from "../types/types";

const inicialState = {
    citas:[]
}

export const citasReducer = (state=inicialState, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                citas:[...state.citas, action.payload]
            }
        case types.borrar:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        default:
            return state
    }
}