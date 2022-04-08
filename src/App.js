import React from "react";
import { FooterComp, NavComp } from "./Components";
import MainRouter from "./config/Router/Router";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <NavComp />
      <MainRouter />
      <FooterComp />
    </div>
  );
}

export default App;
