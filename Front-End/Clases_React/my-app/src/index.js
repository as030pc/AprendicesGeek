import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'




//----------------------Primera clase de Hooks----------------------------------------
// import { CategoriasApp } from './clase-hooks/4_ejercicioGuia/components/CategoriasApp';
// import { AppRouter5 } from './clase-hooks/5_Crud1/routers/AppRouter';
// import Counter from './clase-hooks/1_useState/components/Counter'
//import CounterCustom from './1_useState/components/CounterCustom'
//import Formulario from './2_useEffect/components/Formulario'
//import ApiFect from './2_useEffect/components/ApiFect'
//import RickMortyApp from './3_practica/RickMortyApp'


//------------------Clase del 15 de agosto------------------------------------------------
// import { MoviesApp } from './clase1509/containers/MoviesApp';   


//-------Clase del 17 de agosto----------------------------------------------------
//1. Memo
// import { Memorize } from './6_NuevosHooks/components/06-memos/Memorize';
//2. UseMemo
// import {MemoHook} from "./6_NuevosHooks/components/06-memos/MemoHook"
//3. Usecallback
// import { CallbackHook } from './6_NuevosHooks/components/06-memos/CallbackHook';

//4.Ejercicio
// import { Padre } from './6_NuevosHooks/components/07_TareaMemo/Padre';

//5. useContext ------------------------------------------------------------
// import { MainApp } from './6_NuevosHooks/components/09-useContext/MainApp';


// 6. UseReducer ------------------------------------------------------------
import AppRouter3 from './useReducer/routers/AppRouter';
import { UserContext } from './useReducer/components/UserContext';


ReactDOM.render(
  
    <AppRouter3/>
 , 
  
  document.getElementById('root')
);

