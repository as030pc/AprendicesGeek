import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "../src/22Sept/style/styles.css"


//---------Clase 21 de septiembre---------------------------
// import AppProducto from './21Sept/container/AppProducto';
// import {Provider} from 'react-redux';
// import {store} from './21Sept/store/store';

//--------Clase 22 de septiembre ----------------------
import { AppCitas } from './22Sept/container/AppCitas';
import { Provider } from 'react-redux';
import { store } from './22Sept/store/store';


ReactDOM.render(
  // <Provider store={store}>
  //   <AppProducto />
  //   </Provider>
  <Provider store = {store}>
    <AppCitas/>
  </Provider>
  ,
  document.getElementById('root')
);

