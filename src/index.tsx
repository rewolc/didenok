import "./index.scss"; 

import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
