import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import Home from "./Tabs/Home";
import Users from "./Tabs/Users";
import Race from "./Tabs/Race";
import Options from "./Tabs/Options";
import FreePlay from "./Tabs/FreePlay";
import Register from "./Tabs/register";

function Dashboard() {
  const [key, setKey] = useState("home");

  return (
    <Container className="">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>

        <Tab eventKey="usuarios" title="Usuarios">
          <Users />
        </Tab>

        <Tab eventKey="partida" title="Partida">
          <Race />
        </Tab>

        <Tab eventKey="options" title="Opções">
          <Options />
        </Tab>

        <Tab eventKey="freeplay" title="FreePlay">
          <FreePlay />
        </Tab>

        <Tab eventKey="register" title="Registrar">
          <Register />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Dashboard;
