import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

import "./registerstyle.css";

const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      alert("As senhas não são identicas! Digite novamente!");
      return;
    }

    if (name && email && password) {
      const isRegistered = await auth.register(name, email, password);
      if (isRegistered) {
        navigate("/admin");
      } else {
        alert("Erro: Tente novamente");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-page">
        <div className="form">
          <form className="">
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
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Confirme sua Senha"
            />
            <input
              type="text"
              values={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <div className="button" onClick={handleRegister}>
              Registrar
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
