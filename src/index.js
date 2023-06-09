import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { Store } from "../src/Redux/Store";
import { Provider } from "react-redux";

import "./Assets/boxicons-2.1.4/css/boxicons.min.css";
import "./Sass/Index.scss";

import Layout from "./Components/Layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
