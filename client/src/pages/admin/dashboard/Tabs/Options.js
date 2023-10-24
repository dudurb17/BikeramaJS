import React, { useState } from "react";
import { useESPApi } from "../../../../hooks/useEspApi";
import Form from "react-bootstrap/Form";

const Options = () => {
  const api = useESPApi();

  const [velocidadeAzul, setVelocidadeAzul] = useState(0);
  const [velocidadeAmarelo, setVelocidadeAmarelo] = useState(0);
  const [testeIniciado, setTesteIniciado] = useState(false);

  const iniciaCorrida = async () => {
    setTesteIniciado(true);
    await api.enableLanes(velocidadeAmarelo, velocidadeAzul);
  };
  const terminaCorrida = async () => {
    setVelocidadeAzul(0);
    setVelocidadeAmarelo(0);
    setTesteIniciado(false);
    await api.enableLanes(velocidadeAmarelo, velocidadeAzul);
  };

  return (
    <div>
      {testeIniciado === false && (
        <div className="d-flex flex-column align-items-center">
          <div
            className="d-flex justify-content-around"
            style={{ width: "800px" }}
          >
            <div className=" bg" style={{ width: "300px" }}>
              Amarelo
              <Form.Control
                type="number"
                max={100}
                min={0}
                onChange={(e) => setVelocidadeAmarelo(e.target.value)}
              ></Form.Control>
            </div>
            <div className=" bg" style={{ width: "300px" }}>
              Azul
              <Form.Control
                type="number"
                max={100}
                min={0}
                onChange={(e) => setVelocidadeAzul(e.target.value)}
              ></Form.Control>
            </div>
          </div>
          <button
            className="btn btn-success"
            onClick={() => iniciaCorrida()}
            style={{ marginTop: "30px", width: "300px" }}
          >
            Iniciar teste
          </button>
        </div>
      )}
      {testeIniciado === true && (
        <button
          className="btn btn-success"
          onClick={() => terminaCorrida()}
          style={{ marginTop: "30px", width: "300px" }}
        >
          Finalizar teste
        </button>
      )}
    </div>
  );
};

export default Options;
