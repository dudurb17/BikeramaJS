import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

import "./login.css";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Email ou senha inválidos");
      }
    }
  };

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      alert("As senhas não são identicas! Digite novamente!");
      return;
    }

    if (name && email && password) {
      const isRegistered = await auth.register(name, email, password);
      if (isRegistered) {
        navigate("/login");
      } else {
        alert("Erro: Tente novamente");
      }
    }
  };

  const handleChangeOp = () => {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  };

  return (
    <div className="login-page">
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            {/* REGISTRAR-SE */}
            <input
              type="text"
              values={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Usuário"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <input
              type="text"
              values={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <div className="button" onClick={handleRegister}>
              Registrar-se
            </div>
            <p className="message" onClick={handleChangeOp}>
              Já possui uma conta? <a>Faça Login</a>
            </p>
          </form>
          <form className="login-form">
            {/* LOGIN */}
            <input
              type="text"
              values={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <div className="button" onClick={handleLogin}>
              Login
            </div>
            <p className="message" onClick={handleChangeOp}>
              Não está registrado? <a>Crie uma conta</a>
            </p>
          </form>
        </div>
      </div>
      {/* <div>
        <h2>Login</h2>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />

        <button onClick={handleLogin}>Logar</button>
      </div>

      <Link to="/register">Não possui conta? Registre-se agora mesmo!</Link> */}
    </div>
  );
};

export default Login;
