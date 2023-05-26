import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Tab, Tabs, Table } from "react-bootstrap";
import { faTrash, faEdit, faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

function Dashboard() {
  const [key, setKey] = useState("home");
  const [users, setUsers] = useState();

  const auth = useContext(AuthContext);

  const handleGetAllUsers = async () => {
    setUsers(await auth.getAllUsers());
  };

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Container className="">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="usuarios" title="Usuarios">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Colorias</th>
                <th>Tempo jogado</th>
                <th>Quantidade de vitorias</th>
                <th>Quantidade de voltas</th>
                <th>Quantidade de corridas</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.calories}</td>
                    <td>00:00:00</td>
                    <td>10</td>
                    <td>+8000</td>
                    <td>2</td>
                    <td>
                      <button>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>

                      <FontAwesomeIcon icon={faEdit} />
                      <FontAwesomeIcon icon={faStar} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          <ul>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-whatsapp whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter twitter"></i>
              </a>
            </li>
          </ul>
        </Tab>
        <Tab eventKey="partidas" title="partidas" disabled></Tab>
      </Tabs>
    </Container>
  );
}

export default Dashboard;
