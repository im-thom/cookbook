import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/style.scss";
import Firebase, { FirebaseContext } from "../src/components/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);