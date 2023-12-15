import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";

import { useESPApi } from "../../../../hooks/useEspApi";
import { AuthContext } from "../../../../contexts/Auth/AuthContext";

export const Race = () => {
  const api = useESPApi();
  const auth = useContext(AuthContext);
  const [users, setUsers] = useState();

  const qtdVoltasFinalizar = 10;

  const [time, setTime] = useState(0);
  const [partidaIniciada, setPartidaIniciada] = useState(false);
  const [amareloFinalizou, setAmareloFinalizou] = useState(false);
  const [azulFinalizou, setAzulFinalizou] = useState(false);
  const [tempoRodando, setTempoRodando] = useState(false);

  const [userIdAmarelo, setUserIdAmarelo] = useState(0);
  const [userIdAzul, setUserIdAzul] = useState(1);
  const [userNameAmarelo, setUserNameAmarelo] = useState("");
  const [userNameAzul, setUserNameAzul] = useState("");

  const [contAmarelo, setContAmarelo] = useState(0);
  const [contAzul, setContAzul] = useState(0);
  const [vencedor, setVencedor] = useState("");
  const [tempoAmarelo, setTempoAmarelo] = useState(0);
  const [tempoAzul, setTempoAzul] = useState(0);
  const [tempoVoltaAmarelo, setTempoVoltaAmarelo] = useState(0);
  const [tempoVoltaAzul, setTempoVoltaAzul] = useState(0);
  const [melhorTempoVoltaAmarelo, setMelhorTempoVoltaAmarelo] = useState(0);
  const [melhorTempoVoltaAzul, setMelhorTempoVoltaAzul] = useState(0);
  const [selectNomesUser, setSelectNomesUser] = useState([]);

  useEffect(() => {
    handleGetAllUsers();

    const interval = setInterval(() => {
      getLap();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleGetAllUsers = async () => {
    await setUsers(await auth.getAllUsers());
  };

  const getLap = async () => {
    let response = await api.getLap();

    console.log("Pegando se passou alguma volta!", response);
  };

  const incrementUserArray = async () => {
    await users.map((item) => {
      let newSelectUser = {
        value: item.id,
        label: item.name,
      };
      setSelectNomesUser((selectNomesUser) => [
        ...selectNomesUser,
        newSelectUser,
      ]);
    });
  };

  useEffect(() => {
    incrementUserArray();
  }, [users]);

  const handleBeginRace = async () => {
    if (userIdAzul != 0 && userIdAmarelo != 0 && userIdAmarelo != userIdAzul) {
      setPartidaIniciada(true);
      setTime(0);
      setTempoRodando(true);
      await api.initRace();
    } else {
      alert("Informe os nomes dos jogadores");
    }
  };

  const handleEndRace = async () => {
    CreateNewRace();
    setTempoRodando(false);
    await api.endRace();
  };

  const handleResetRace = async () => {
    setPartidaIniciada(false);
    setTime(0);
    setContAmarelo(0);
    setContAzul(0);
    setTempoAzul(0);
    setTempoAmarelo(0);
    setVencedor(null);
    setUserIdAzul(0);
    setUserIdAmarelo(0);
    setAmareloFinalizou(false);
    setAzulFinalizou(false);
    setMelhorTempoVoltaAmarelo(0);
    setMelhorTempoVoltaAzul(0);
    await api.endRace();
  };

  const cancel = () => {
    handleResetRace();
  };

  const CreateNewRace = async () => {
    let newRaceObj = {
      bluePlayerId: userIdAzul,
      blueRaceTime: tempoAzul,
      blueBestLap: melhorTempoVoltaAzul,
      yellowPlayerId: userIdAmarelo,
      yellowRaceTime: tempoAmarelo,
      yellowBestLap: melhorTempoVoltaAmarelo,
    };
    auth.createNewRace(newRaceObj);
  };

  useEffect(() => {
    if (contAzul === qtdVoltasFinalizar) {
      setTempoAzul(time);
      setAzulFinalizou(true);
    }

    if (melhorTempoVoltaAzul == 0) setMelhorTempoVoltaAzul(time);
    else if (melhorTempoVoltaAzul > time - tempoVoltaAzul)
      setMelhorTempoVoltaAzul(time - tempoVoltaAzul);

    setTempoVoltaAzul(time);
  }, [contAzul]);

  useEffect(() => {
    if (contAmarelo == qtdVoltasFinalizar) {
      setTempoAmarelo(time);
      setAmareloFinalizou(true);
    }

    if (melhorTempoVoltaAmarelo == 0) setMelhorTempoVoltaAmarelo(time);
    else if (melhorTempoVoltaAmarelo > time - tempoVoltaAmarelo)
      setMelhorTempoVoltaAmarelo(time - tempoVoltaAmarelo);

    setTempoVoltaAmarelo(time);
  }, [contAmarelo]);

  useEffect(() => {
    if (amareloFinalizou === true && azulFinalizou === true) {
      handleEndRace();
      setVencedor(tempoAmarelo > tempoAzul ? "Azul" : "Amarelo");
    }
  }, [amareloFinalizou, azulFinalizou]);

  useEffect(() => {
    let interval = null;
    if (tempoRodando) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [tempoRodando]);

  return (
    <div>
      {!partidaIniciada && (
        <div className="d-flex flex-column align-items-center">
          <div
            className="d-flex justify-content-around"
            style={{ width: "800px" }}
          >
            <div className=" bg" style={{ width: "300px" }}>
              Jogador Azul:
              <Select
                options={selectNomesUser}
                onChange={(e) => {
                  setUserNameAzul(e.label);
                  setUserIdAzul(e.value);
                }}
              />
            </div>
            <div style={{ width: "300px" }}>
              Jogador Amarelo:
              <Select
                options={selectNomesUser}
                onChange={(e) => {
                  setUserNameAmarelo(e.label);
                  setUserIdAmarelo(e.value);
                }}
              />
            </div>
          </div>

          <button
            className="btn btn-success"
            onClick={() => handleBeginRace()}
            style={{ marginTop: "30px", width: "300px" }}
          >
            Iniciar Partida
          </button>
        </div>
      )}

      {partidaIniciada && (
        <div className="d-flex flex-column">
          <h1>
            {Math.floor((time / 60000) % 60) < 10 && 0}
            {Math.floor((time / 60000) % 60)}:
            {Math.floor((time / 1000) % 60) < 10 && 0}
            {Math.floor((time / 1000) % 60)}:{time % 1000}
          </h1>

          <div className="d-flex justify-content-around">
            <div>
              <h2>{userNameAzul}</h2>
              {vencedor == "Azul" && <h3>Venceu!</h3>}
              {azulFinalizou && (
                <h1>
                  {Math.floor((tempoAzul / 60000) % 60) < 10 && 0}
                  {Math.floor((tempoAzul / 60000) % 60)}:
                  {Math.floor((tempoAzul / 1000) % 60) < 10 && 0}
                  {Math.floor((tempoAzul / 1000) % 60)}:{tempoAzul % 1000}
                </h1>
              )}
              <h3>Volta: {contAzul}</h3>
            </div>
            <div>
              <h2>{userNameAmarelo}</h2>
              {vencedor == "Amarelo" && <h3>Venceu!</h3>}
              {amareloFinalizou && (
                <h1>
                  {Math.floor((tempoAmarelo / 60000) % 60) < 10 && 0}
                  {Math.floor((tempoAmarelo / 60000) % 60)}:
                  {Math.floor((tempoAmarelo / 1000) % 60) < 10 && 0}
                  {Math.floor((tempoAmarelo / 1000) % 60)}:{tempoAmarelo % 1000}
                </h1>
              )}

              <h3>Volta:{contAmarelo} </h3>
            </div>
          </div>
          <div className="d-flex  justify-content-around">
            <Row>
              <Col>
                <button
                  className="btn btn-primary"
                  onClick={(e) =>
                    setContAzul(
                      contAzul === qtdVoltasFinalizar ? contAzul : contAzul + 1
                    )
                  }
                >
                  +1 volta
                </button>
                <p
                  className="text-danger cursor-pointer"
                  onClick={(e) =>
                    setContAzul(
                      contAzul > 0 && contAzul < qtdVoltasFinalizar
                        ? contAzul - 1
                        : contAzul
                    )
                  }
                  style={{ marginTop: "20px" }}
                >
                  -1
                </p>
              </Col>
              <Col>
                <button
                  className="btn btn-warning"
                  onClick={(e) =>
                    setContAmarelo(
                      contAmarelo === qtdVoltasFinalizar
                        ? contAmarelo
                        : contAmarelo + 1
                    )
                  }
                >
                  +1 volta
                </button>
                <p
                  className="text-danger"
                  onClick={(e) =>
                    setContAmarelo(
                      contAmarelo > 0 && contAmarelo < qtdVoltasFinalizar
                        ? contAmarelo - 1
                        : contAmarelo
                    )
                  }
                  style={{ marginTop: "20px" }}
                >
                  -1
                </p>
              </Col>
            </Row>
          </div>

          {partidaIniciada && amareloFinalizou && azulFinalizou && (
            <button
              className="btn btn-info"
              onClick={() => handleResetRace()}
              style={{
                width: "30%",
                marginTop: "30px",

                alignSelf: "center",
              }}
            >
              Voltar
            </button>
          )}
          <button
            className="btn btn-danger"
            style={{
              marginTop: "30px",
              width: "30%",
              alignSelf: "center",
            }}
            onClick={() => cancel()}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Race;
