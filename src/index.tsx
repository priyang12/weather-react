import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactGA from "react-ga";
import "./styles/Global.css";

const TRACKING_ID = process.env.REACT_APP_AnaKey;

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
