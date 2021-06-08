import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AdminHome from "./config-product/admin-home-page";
import App from "./App";
import AuthStore from "./store/authStore";
ReactDOM.render(
  <AuthStore>
    <App />
  </AuthStore>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
