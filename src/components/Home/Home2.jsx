import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col
            md={8}
            className='home-about-description'
            data-testid='home-about-section'
          >
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME CONTARTE <span className='orange'> UN POCO </span> SOBRE MI
            </h1>
            <p className='home-about-body'>
              Soy un desarrollador web con una sólida trayectoria en
              programación. A lo largo de mi carrera, he profundizado en el
              mundo del desarrollo web, especializándome en crear soluciones
              dinámicas y eficientes. 🚀
              <br />
              <br />
              Mis habilidades están profundamente enraizadas en
              <i>
                <b className='orange'> Javascript. </b>
              </i>
              <br />
              <br />
              Mi motivación radica en construir soluciones creativas y&nbsp;
              <i>
                <b className='orange'>eficientes.</b>
              </i>
              <br />
              <br />
              Siempre que sea posible, también aplico mi pasión por desarrollar
              productos con
              <b className='orange'> Node.js</b>
              <i>
                <b className='orange'>
                  {" "}
                  bibliotecas y frameworks modernos de JavaScript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className='orange'> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='web-developer-avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Sientete libre de <span className='orange'>conectar </span>conmigo
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/cattho'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/juan-sebastian-giraldo-varon-cattho/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/jgato76/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
