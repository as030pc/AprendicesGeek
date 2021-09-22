import {createStore,combineReducers} from 'redux';
import { productosReducer } from '../reducers/productosReducer';

//Combinacion de reducers, todos dentro de sus objetos
const reducers = combineReducers({
    productos: productosReducer
})

//Se exporta al store que se crea con createStore
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)