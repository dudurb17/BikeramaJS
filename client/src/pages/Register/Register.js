import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

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
        navigate("/login");
      } else {
        alert("Erro: Tente novamente");
      }
    }
  };

  return (
    <div>
      <h2>Registrar-se</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <input
          type="email"
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

        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Digite sua senha novamente"
        />

        <button onClick={handleRegister}>Registrar</button>
      </div>

      <Link to="/login">Já possui conta? Acesse agora mesmo!</Link>
    </div>
  );
};

export default Register;
