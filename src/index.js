import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./Resume";
import Contact from "./Contact";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export { Header, Resume, Contact, Footer };
