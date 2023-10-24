import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
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
        <div className="">
          <div className="">
            <h2>Introdução:</h2>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="https://th.bing.com/th/id/OIP.G3Pnp9HvjfUl5WJf5UfAEQHaFh?pid=ImgDet&rs=1"
                  rounded
                />
              </Col>
              <Col xs={11} md={8}>
                <p style={elementStyle}>
                  O bikerama é um projeto desenvolvido pelos alunos do instituto
                  federal de santa catarina (IFSC) campus chapecó
                </p>
                <p style={elementStyle}>
                  O Projeto de Extensão "Bikerama" é uma iniciativa desenvolvida
                  no Instituto Federal de Santa Catarina (IFSC) que visa unir
                  diversão, sustentabilidade e tecnologia. Com o objetivo de
                  criar um autorama inovador e ecologicamente correto, o
                  Bikerama utiliza energia gerada por meio da pedalada em bikes
                  ergonômicas para alimentar o sistema de funcionamento do
                  autorama. Além disso, o projeto contempla o desenvolvimento de
                  um site para armazenar e disponibilizar os dados coletados
                  durante as atividades.
                </p>
              </Col>
            </Row>

            <h2>Descrição do Projeto:</h2>
            <Row>
              <Col xs={11} md={8}>
                <p style={elementStyle}>
                  O Bikerama busca explorar a interação entre a prática
                  esportiva, a sustentabilidade e a tecnologia. O autorama
                  tradicional foi adaptado para que os carros se movam através
                  da energia gerada pelas bicicletas ergonômicas. Dessa forma,
                  os participantes são convidados a pedalar, convertendo seu
                  esforço físico em energia elétrica para alimentar o sistema do
                  autorama.
                </p>
                <p style={elementStyle}>
                  O projeto conta com um conjunto de bikes ergonômicas
                  conectadas a um mecanismo que converte a energia cinética em
                  energia elétrica. Essa energia é direcionada para o sistema de
                  funcionamento do autorama, permitindo que os carros se movam
                  ao longo da pista. Quanto mais as pessoas pedalarem, mais
                  energia será produzida e, consequentemente, maior será a
                  velocidade dos carros no autorama.
                </p>
                <p style={elementStyle}>
                  Além da interação física e energética, o Bikerama também
                  possui um componente digital. Foi desenvolvido um site
                  exclusivo para o projeto, que possui uma interface intuitiva e
                  permite aos participantes registrarem suas pedaladas e
                  acompanhar o desempenho individual e coletivo. O site armazena
                  os dados de energia produzida, distância percorrida e
                  velocidade alcançada, promovendo a competição saudável entre
                  os participantes.
                </p>
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://th.bing.com/th/id/R.61b255d2cbdf92a129888daf43f4b02a?rik=PfTKXzTsqonnUQ&riu=http%3a%2f%2fwww.bikemoto.net%2fimagem%2findex%2f5069049%2fG%2fmoskito2014curvapreta1000.jpg&ehk=EWUMzLIN9tkTmexD0hGuyuWnMfUId9PQZT9LqIlV5v4%3d&risl=&pid=ImgRaw&r=0"
                  rounded
                />
              </Col>
            </Row>

            <h2>Objetivos e Benefícios:</h2>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="https://th.bing.com/th/id/R.d93223a05228c620d2778538ac577c8f?rik=zVtdmSloa0a9tg&pid=ImgRaw&r=0"
                  rounded
                />
              </Col>
              <Col xs={11} md={8}>
                <p style={elementStyle}>
                  O Projeto de Extensão Bikerama tem como principal objetivo
                  promover a conscientização ambiental, incentivar a prática de
                  atividades físicas e proporcionar momentos de lazer e diversão
                  para a comunidade acadêmica e o público em geral. Ao utilizar
                  uma fonte de energia renovável e limpa, o projeto demonstra de
                  maneira prática como é possível aliar a sustentabilidade ao
                  entretenimento.
                </p>
                <p style={elementStyle}>
                  Além disso, o Bikerama busca fomentar a integração entre os
                  participantes, promovendo a interação social e estimulando a
                  colaboração em equipe. A competição saudável entre os
                  ciclistas cria um ambiente de motivação e superação pessoal.
                </p>
                <p style={elementStyle}>
                  O Projeto de Extensão Bikerama, desenvolvido no IFSC, oferece
                  uma abordagem inovadora ao unir diversão, sustentabilidade e
                  tecnologia. Ao transformar a energia cinética gerada pela
                  pedalada em energia elétrica para alimentar
                </p>
              </Col>
            </Row>

            <Row>
              <h2>Conclusão</h2>
              <Col xs={11} md={8}>
                <p style={elementStyle}>
                  A criação do site exclusivo para o projeto também tem como
                  objetivo incentivar a participação contínua dos interessados.
                  Os dados registrados no site permitem que os participantes
                  acompanhem seu progresso pessoal ao longo do tempo,
                  estabeleçam metas e desafios individuais e compartilhem suas
                  conquistas com a comunidade. Além disso, o site também pode
                  servir como uma ferramenta educativa, proporcionando
                  informações sobre energia renovável e sustentabilidade.
                </p>
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://th.bing.com/th/id/R.49ee5797535b7fa9e3911a2ca307d3a6?rik=U2sarKTR3SR4cg&riu=http%3a%2f%2fwww.hrwlawyers.com%2fassets%2fstock-footage-stamp-final.jpg&ehk=38K0oglYfpMzABZeOMuV9sglsGi%2bG9VHhrKxEi2j1s0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                  rounded
                />
              </Col>
            </Row>
          </div>

          <div>
            <div className="col-md-4 col-lg-12 d-none d-lg-block"></div>
          </div>
        </div>
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
