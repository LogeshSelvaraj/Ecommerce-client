import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import {createStore} from 'redux'
import {Provider} from "react-redux"
import  {composeWithDevTools} from "redux-devtools-extension"
import allReducers from "./Reducers"

const store=createStore(allReducers,composeWithDevTools())

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);


