import React from "react";
import CardRank from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Rank = () => {
  return (
    <div>
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
        <CardRank />
      </Container>
      <div className="d-block d-lg-none">
        <Table responsive="sm" bordered="dark">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Tempo</th>
              <th>Calorias</th>
              <th>Quantidades</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Container className="d-none d-lg-block">
        {" "}
        <Table responsive="" bordered="dark">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Tempo</th>
              <th>Calorias</th>
              <th>Quantidades</th>
              <th>Partida mais rapida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Rank;
