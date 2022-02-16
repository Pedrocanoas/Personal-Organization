import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import "./styles.css";
import { makeStyles } from "@material-ui/styles";
import Logotipo from "./img/Logotipo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles((theme) => ({
  mediumIcon: {
    minWidth: 40,
    minHeight: 40,
    cursor: "pointer",
    "& :hover": { color: "#F87618" },
  },
}));

export default function App() {
  const classes = useStyles();
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

  const handleClickLogin = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "a senha deve conter no mínimo 6 caracteres")
      .required("Campo Obrigatório"),
  });

  return (
    <div className="App">
      <img src={Logotipo} className="Logotipo" alt="Logotipo" />
      <div className="square">
        <Formik
          initialValues={{ email: "email@gmail.com", password: "senha123" }}
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
        >
          <Form>
            <div className="infos">
              <h2>LOGIN</h2>
              <hr width="75%"></hr>
              <div className="username">
                <AccountCircleIcon />
                <Field
                  className="username-input"
                  type="text"
                  defaultValue="email@gmail.com"
                  name="email"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
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
                <Field
                  className="password-input"
                  type={passwordView ? "text" : "password"}
                  defaultValue="senha123"
                  name="password"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              <button type="submit" className="submit">
                Acessar
              </button>
              <div className="end-square">
                <div className="footer">
                  <a href="forgot-password" className="forgot">
                    Esqueci minha senha
                  </a>
                  <a href="sign-in" className="singin">
                    cadastrar
                  </a>
                </div>
                <div className="icons">
                  <FacebookIcon className={classes.mediumIcon} />
                  <LinkedInIcon className={classes.mediumIcon} />
                  <GitHubIcon className={classes.mediumIcon} />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
