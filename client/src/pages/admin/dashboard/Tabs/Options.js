import React from "react";
import { useESPApi } from "../../../../hooks/useEspApi";

const Options = () => {
  const api = useESPApi();

  const iniciaCorrida = async () => {
    await api.initRace();
  };

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => iniciaCorrida()}
        style={{ marginTop: "30px", width: "300px" }}
      >
        Iniciar Partida
      </button>
    </div>
  );
};

export default Options;
