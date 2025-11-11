import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import TimeTask from "./Count";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TimeTask />
  </React.StrictMode>
);
