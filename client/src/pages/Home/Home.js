import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Carouselsel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Home = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    console.log(auth.userData);
  }, [auth]);

  const elementStyle = {
    textAlign: "justify",
  };
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

        <Carouselsel />
        <Row>
          <div className="col-md-6 col-lg-8">
            <h2>Post 01</h2>

            <p style={elementStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis elit tellus. Nullam pretium sed quam facilisis commodo. Morbi
              quis arcu quis lorem sollicitudin aliquet at in eros. Nunc a neque
              at elit semper sagittis id vel magna. Fusce nisi arcu, pharetra
              eget sagittis et, pellentesque sit amet mauris. Fusce tempus,
              libero et tempus elementum, turpis nisl consectetur ipsum, vitae
              eleifend nibh lectus dignissim sapien. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Donec faucibus velit eget dolor bibendum dictum. Donec
              viverra ex a erat finibus, nec placerat sem pellentesque.
              Phasellus mattis turpis mauris, eget maximus turpis consequat non.
              Nullam nec ante nec ipsum ullamcorper posuere.
            </p>
            <p style={elementStyle}>
              Aliquam erat volutpat. Duis a leo non neque elementum congue. Duis
              nec velit neque. Quisque consequat imperdiet mi et consequat.
              Maecenas et cursus quam, sed ornare est. Praesent viverra
              porttitor augue, dignissim imperdiet risus. Suspendisse dapibus
              facilisis dolor, ut convallis nibh varius et. Vestibulum dui sem,
              blandit id augue a, congue bibendum turpis. Nulla dignissim velit
              eu nulla tincidunt mollis. Nulla facilisi. Nam vel elementum
              turpis, a scelerisque ipsum. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <h2>Post 02</h2>

            <p style={elementStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis elit tellus. Nullam pretium sed quam facilisis commodo. Morbi
              quis arcu quis lorem sollicitudin aliquet at in eros. Nunc a neque
              at elit semper sagittis id vel magna. Fusce nisi arcu, pharetra
              eget sagittis et, pellentesque sit amet mauris. Fusce tempus,
              libero et tempus elementum, turpis nisl consectetur ipsum, vitae
              eleifend nibh lectus dignissim sapien. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Donec faucibus velit eget dolor bibendum dictum. Donec
              viverra ex a erat finibus, nec placerat sem pellentesque.
              Phasellus mattis turpis mauris, eget maximus turpis consequat non.
              Nullam nec ante nec ipsum ullamcorper posuere.
            </p>
            <p style={elementStyle}>
              Aliquam erat volutpat. Duis a leo non neque elementum congue. Duis
              nec velit neque. Quisque consequat imperdiet mi et consequat.
              Maecenas et cursus quam, sed ornare est. Praesent viverra
              porttitor augue, dignissim imperdiet risus. Suspendisse dapibus
              facilisis dolor, ut convallis nibh varius et. Vestibulum dui sem,
              blandit id augue a, congue bibendum turpis. Nulla dignissim velit
              eu nulla tincidunt mollis. Nulla facilisi. Nam vel elementum
              turpis, a scelerisque ipsum. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <h2>Post 03</h2>

            <p style={elementStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis elit tellus. Nullam pretium sed quam facilisis commodo. Morbi
              quis arcu quis lorem sollicitudin aliquet at in eros. Nunc a neque
              at elit semper sagittis id vel magna. Fusce nisi arcu, pharetra
              eget sagittis et, pellentesque sit amet mauris. Fusce tempus,
              libero et tempus elementum, turpis nisl consectetur ipsum, vitae
              eleifend nibh lectus dignissim sapien. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Donec faucibus velit eget dolor bibendum dictum. Donec
              viverra ex a erat finibus, nec placerat sem pellentesque.
              Phasellus mattis turpis mauris, eget maximus turpis consequat non.
              Nullam nec ante nec ipsum ullamcorper posuere.
            </p>
            <p style={elementStyle}>
              Aliquam erat volutpat. Duis a leo non neque elementum congue. Duis
              nec velit neque. Quisque consequat imperdiet mi et consequat.
              Maecenas et cursus quam, sed ornare est. Praesent viverra
              porttitor augue, dignissim imperdiet risus. Suspendisse dapibus
              facilisis dolor, ut convallis nibh varius et. Vestibulum dui sem,
              blandit id augue a, congue bibendum turpis. Nulla dignissim velit
              eu nulla tincidunt mollis. Nulla facilisi. Nam vel elementum
              turpis, a scelerisque ipsum. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <Col>
            <div className="col-md-4 col-lg-12 d-none d-lg-block">
              <h2>Sobre</h2>
              <p>Sem ideia do q colocar aqui agr</p>
              <p>TEste</p>
              <p>
                {" "}
                Aliquam erat volutpat. Duis a leo non neque elementum congue.
                Duis nec velit neque. Quisque consequat imperdiet mi et
                consequat. Maecenas et cursus quam, sed ornare est. Praesent
                viverra porttitor augue, dignissim imperdiet risus. Suspendisse
                dapibus facilisis dolor, ut convallis nibh varius et. Vestibulum
                dui sem, blandit id augue a, congue bibendum turpis. Nulla
                dignissim velit eu nulla tincidunt mollis. Nulla facilisi. Nam
                vel elementum turpis, a scelerisque ipsum. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
// d-none: Oculta o elemento em todos os dispositivos.
// d-sm-none: Oculta o elemento em dispositivos móveis (celulares) e maiores.
// d-md-none: Oculta o elemento em dispositivos médios (tablets) e maiores.
// d-lg-none: Oculta o elemento em dispositivos grandes (desktops) e maiores.
// d-xl-none: Oculta o elemento em dispositivos extra grandes e maiores.
// d-block: Exibe o elemento em todos os dispositivos.
// d-sm-block: Exibe o elemento apenas em dispositivos móveis (celulares) e maiores.
// d-md-block: Exibe o elemento apenas em dispositivos médios (tablets) e maiores.
// d-lg-block: Exibe o elemento apenas em dispositivos grandes (desktops) e maiores.
