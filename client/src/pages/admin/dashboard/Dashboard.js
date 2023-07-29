import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import Home from "./Tabs/Home";
import Users from "./Tabs/Users";
import Race from "./Tabs/Race";
import Options from "./Tabs/Options";

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

        <Tab className="d-flex flex-column" eventKey="partida" title="Partida">
          <Race />
        </Tab>

        <Tab className="d-flex flex-column" eventKey="options" title="Opções">
          <Options />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Dashboard;
