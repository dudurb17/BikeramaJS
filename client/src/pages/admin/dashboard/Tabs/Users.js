import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/Auth/AuthContext";
import { Button, Table } from "react-bootstrap";
import { faEdit, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Users = () => {
  const auth = useContext(AuthContext);

  const handleGetAllUsers = async () => {
    await setUsers(await auth.getAllUsers());
  };

  const [users, setUsers] = useState();

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  return (
    <div>
      <Button
        variant="info"
        class="m-3"
        style={{ marginBottom: 10 }}
        onClick={() => handleGetAllUsers()}
      >
        Atualizar
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            {/* <th>Colorias</th> */}
            {/* <th>Tempo jogado</th> */}
            {/* <th>Quantidade de vitorias</th> */}
            <th>Quantidade de voltas</th>
            {/* <th>Quantidade de corridas</th> */}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item) => {
              if (item.level == "user")
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    {/* <td>{item.calories}</td> */}
                    {/* <td>00:00:00</td> */}
                    {/* <td>10</td> */}
                    <td>{item.turns}</td>
                    {/* <td>2</td> */}
                    <td>
                      <button>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>

                      <FontAwesomeIcon icon={faEdit} />
                      <FontAwesomeIcon icon={faStar} />
                    </td>
                  </tr>
                );
            })}
        </tbody>
      </Table>

      <ul>
        <li>
          <a href="#">
            <i className="fa-brands fa-instagram instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-whatsapp whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Users;
