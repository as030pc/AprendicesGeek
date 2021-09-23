import {createStore,combineReducers} from 'redux';
import { guardarLocalStorage, obtenerLocalStorage } from '../localStorage';
import { citasReducer } from '../reducers/citasReducer';
//Combinacion de reducers, todos dentro de sus objetos
const storeState = obtenerLocalStorage()
const reducers = combineReducers({
    citas: citasReducer
})

//Se exporta al store que se crea con createStore
export const store = createStore(
    reducers,
    storeState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    guardarLocalStorage({
        citas:store.getState().citas // Accede al estado que tiene el nombre de citas.
    })

})
