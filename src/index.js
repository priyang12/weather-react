import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";
import "./styles/Global.css";

const TRACKING_ID = process.env.REACT_APP_AnaKey;
console.log(TRACKING_ID);
ReactGA.initialize(TRACKING_ID);

ReactGA.event({
  category: "User",
  action: "Created an Account",
});
ReactGA.exception({
  description: "An error ocurred",
  fatal: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
