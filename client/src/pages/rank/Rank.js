import React, { useState, useEffect, useContext } from "react";
import CardRank from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Rank = () => {
  const [users, setUsers] = useState([]);
  const auth = useContext(AuthContext);

  const getUsers = async () => {
    setUsers(await auth.getRank());
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="mh-100 w-auto">
      <Container>
        <Nav className="nav nav-underline flex justify-content-between">
          <Nav.Item className="nav-item">
            <Link to="/" aria-current="page">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/rank">ranking</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="link-2">Escola</Link>
          </Nav.Item>
        </Nav>
      </Container>
      <div className="d-block d-lg-none " style={{ marginTop: "30px" }}>
        <Table responsive="sm" bordered="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Partida mais rápida</th>
              <th>Volta mais rápida</th>
              <th>Tempo Total Jogado</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.partidaMaisRapida / 1000}s</td>
                  <td>{item.voltaMaisRapida / 1000}s</td>
                  <td>{item.totalPlayed / 1000}s</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Container className="d-none d-lg-block" style={{ marginTop: "30px" }}>
        {" "}
        <Table striped bordered>
          <thead>
            <tr style={{ background: "#242424", color: "white" }}>
              <th>Nome</th>
              <th>Partida mais rápida</th>
              <th>Volta mais rápida</th>
              <th>Tempo Total Jogado</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.partidaMaisRapida / 1000}s</td>
                  <td>{item.voltaMaisRapida / 1000}s</td>
                  <td>{item.totalPlayed / 1000}s</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Rank;
