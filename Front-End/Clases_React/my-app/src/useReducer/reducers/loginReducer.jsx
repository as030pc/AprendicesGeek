import { types } from "../types/types"

export const inicialState = {
    auth:{}
}
export const init = (value) => {
    return value
}
export const loginReducer = (state, action) => {
    switch(action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name:action.payload.displayName // deben de coincidir con los nombres de las acciones
            }
        case types.logout:
            return {}

        
        default:
            return state

    }
}