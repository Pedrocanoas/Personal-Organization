import React from "react";
import "./navbar.css";
import flipLogo from "../../img/flip-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="corner">
        <img src={flipLogo} className="flipLogo" alt="flipLogo" />
        <span className="title-navbar">Kanban</span>
      </div>
      <div className="sections">
      </div>
    </nav>
  );
}
