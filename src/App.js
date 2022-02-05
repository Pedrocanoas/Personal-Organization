import React, { useState } from "react";
import "./styles.css";
import Logotipo from "./img/Logotipo.png";

export default function App() {
  return (
    <div className="App">
       <img src={Logotipo} className="Logotipo" alt="Logotipo" />
    </div>
  );
}
