import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./firebase";
const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
