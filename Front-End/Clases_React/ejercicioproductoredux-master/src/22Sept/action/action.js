import { types } from "../types/types";


export const AgregarCita = (cita) => {
    return {
        type: types.agregar,
        payload:cita
    }
}

export const BorrarCita = (id) => {
    return {
        type: types.borrar,
        payload:id
    }
}