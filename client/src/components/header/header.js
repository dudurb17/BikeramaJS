import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Header = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const elementStyle = {
    paddingTop: "15px",
  };

  const handleLogout = async () => {
    await auth.signout();
    navigate("/");
  };

  return (
    <Container>
      {/* mostra no cll */}
      <div className="d-block d-lg-none">
        <Row className="d-flex justify-content-between" bg="light">
          <Col style={elementStyle}>
            <Link to="/">
              <Figure>
                <Figure.Image
                  width={15}
                  height={15}
                  alt="IFSC"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logotipo_IFET.svg"
                />
              </Figure>
            </Link>
          </Col>
          <Col style={elementStyle}>
            <p>Bikerama</p>
          </Col>
          <Col style={elementStyle}>
            {" "}
            {!auth.user && <Link to="/login">Login</Link>}
            {auth.user && <Link to={"/profile/" + auth.user.name}>Perfil</Link>}
            {auth.user && (
              <Button onClick={() => handleLogout()} variant="danger">
                Logout
              </Button>
            )}
          </Col>
        </Row>
      </div>
      {/* mostra no pc */}
      <div className="d-none d-lg-block  ">
        <Row className="justify-content-between ">
          <Col>
            <Figure>
              <Link to="/">
                <Figure.Image
                  width={180}
                  alt="IFSC"
                  src="https://www.ifsc.edu.br/image/layout_set_logo?img_id=1449623&t=1678857786786"
                />
              </Link>
            </Figure>
          </Col>
          <Col style={elementStyle}>Bikerama</Col>

          <Col style={elementStyle}>
            {!auth.user && <Link to="/Login">Login</Link>}
            {auth.user && <Link to={"/profile/" + auth.user.name}>Perfil</Link>}
            <br />
            {auth.user && (
              <Button onClick={() => handleLogout()} variant="danger">
                Logout
              </Button>
            )}
            {auth.user && (
              <div>
                {auth.user.level == "admin" && <Link to="/admin">admin</Link>}
              </div>
            )}
          </Col>
        </Row>
      </div>
      <hr />
    </Container>
  );
};

export default Header;
