import React from "react";
import ReactDOM from "react-dom";
import Time from "./App";
import Logo from "./Logo";
import './reset.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Logo />
    <Time />
  </div>
);
