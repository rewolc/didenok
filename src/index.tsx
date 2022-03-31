import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();
console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);

