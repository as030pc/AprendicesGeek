import { types } from "../types/types";

export const AgregarProducto = (producto) => {
    return{
        type: types.agregar,
        payload: producto //informacion adicional
    }
}

