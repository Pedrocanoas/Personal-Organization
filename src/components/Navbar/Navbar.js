import React from "react";
import "./navbar.css";
import Logo from "../../img/Logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="corner">
        <img src={Logo} className="Logo" alt="Logo" />
        <span className="title-navbar">Teste</span>
      </div>
      <div className="sections">
      </div>
    </nav>
  );
}
