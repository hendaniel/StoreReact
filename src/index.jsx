import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import storeFactory from "./store";

const store = storeFactory();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
