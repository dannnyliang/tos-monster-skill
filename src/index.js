import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase";

import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.css";

const config = {
  apiKey: "AIzaSyD6pgSmBR4_ZbhhPh57QHcWyT7v0ACRi-A",
  authDomain: "tosmonsterskill.firebaseapp.com",
  databaseURL: "https://tosmonsterskill.firebaseio.com/",
  storageBucket: "tosmonsterskill.appspot.com"
};
initializeApp(config);

ReactDOM.render(<AppRouter />, document.getElementById("root"));
