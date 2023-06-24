import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppRotes from "./routes/AppRotes";
import Netflixcontext from "./context/netflixcontext";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Netflixcontext>
    <BrowserRouter>
      <AppRotes />
    </BrowserRouter>
  </Netflixcontext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
