import { types } from "../types/types"

export const inicialState = 10
export const init = (value) => {
    return value
}
export const counterReducer = (state, action) => {
    switch(action.type) {
        case types.increment:
            return state + 1
        case types.decrement:
            return state - 1
        case types.reset:
                return init(inicialState)

        default:
            return state

    }
}
