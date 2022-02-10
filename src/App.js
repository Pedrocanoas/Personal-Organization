import React, { useState } from "react";
import "./styles.css";
import Logotipo from "./img/Logotipo.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function App() {
  const [passwordView, setPasswordView] = useState(false);
  const [iconView, setIconView] = useState({
    cursor: "pointer",
    display: "inline",
  });
  const [iconOff, setIconOff] = useState({
    cursor: "pointer",
    display: "none",
  });
  const togglePasswordView = () => {
    setPasswordView(!passwordView); //false = ve senha
    setIconView(passwordView ? iconView : iconOff);
    if (passwordView) {
      setIconView({ cursor: "pointer", display: "inline" });
      setIconOff({ cursor: "pointer", display: "none" });
    } else {
      setIconView({ cursor: "pointer", display: "none" });
      setIconOff({ cursor: "pointer", display: "inline" });
    }
  };
  return (
    <div className="App">
      <img src={Logotipo} className="Logotipo" alt="Logotipo" />
      <div className="square">
        <div className="infos">
          <h2>LOGIN</h2>
          <hr width="75%"></hr>
          <div className="username">
            <AccountCircleIcon />
            {/* <label>Username</label> */}
            <input
              className="username-input"
              type="text"
              value="email@gmail.com"
            ></input>
          </div>
          <div className="password">
            <VisibilityIcon
              style={iconView}
              onClick={() => togglePasswordView()}
            />
            <VisibilityOffIcon
              style={iconOff}
              onClick={() => togglePasswordView()}
            />
            {/* <label>Password</label> */}
            <input
              className="password-input"
              type={passwordView ? "text" : "password"}
              value="senha123"
            ></input>
          </div>
          <div className="end-square">
            <h5>Esqueci minha senha</h5>
            <h5>cadastrar</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
