import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";

import { useESPApi } from "../../../../hooks/useEspApi";
import { AuthContext } from "../../../../contexts/Auth/AuthContext";
import { useApi } from "../../../../hooks/useApi";

const FreePlay = () => {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [users, setUsers] = useState();

  const [currentUsername, setCurrentUsername] = useState("");
  const [currentUserId, setCurrentUserId] = useState();
  const [selectNomesUser, setSelectNomesUser] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  useEffect(() => {
    RefreshTurns();
  }, [currentUserId]);

  useEffect(() => {
    incrementUserArray();
  }, [users]);

  const handleGetAllUsers = async () => {
    await setUsers(await auth.getAllUsers());
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

  const IncrementTurn = async (qtd) => {
    let t = await api.incrementTurn(currentUserId, qtd);
    setTurns(t.turns);
  };

  const RefreshTurns = async () => {
    if (currentUserId != undefined) {
      let t = await api.incrementTurn(currentUserId, 0);
      setTurns(t.turns);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <div
          className="d-flex justify-content-around"
          style={{ width: "800px" }}
        >
          <div className=" bg" style={{ width: "300px" }}>
            Jogador:
            <Select
              options={selectNomesUser}
              onChange={(e) => {
                setCurrentUsername(e.label);
                setCurrentUserId(e.value);
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <p>Voltas</p>
          <p style={{ fontSize: 32, fontWeight: "bold" }}>{turns}</p>
        </div>

        <div className="d-flex">
          <button
            className="btn btn-success"
            onClick={() => IncrementTurn(1)}
            style={{ marginTop: "30px", width: "300px" }}
          >
            Adicionar Volta
          </button>
          <button
            className="btn btn-danger"
            onClick={() => IncrementTurn(-1)}
            style={{ marginTop: "30px", width: "300px" }}
          >
            Remover Volta
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreePlay;
