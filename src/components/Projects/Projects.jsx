import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blockmaster from "../../Assets/Projects/block-master.png";
import playground from "../../Assets/Projects/codeEditor-fotor-20240305115022.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Mis trabajos <strong className='purple'>Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={blockmaster}
              isBlog={false}
              title='Block Master'
              description='Aplicación con Redux y API de TheMovieDB, sistema de protección de rutas, CRUD, inicio de sesión en Firebase y buscador de películas, proporcionando una experiencia completa y segura para los usuarios.'
              ghLink='https://github.com/cattho/BlockMaster-react'
              demoLink='https://block-master-sebas.netlify.app'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={playground}
              isBlog={false}
              title='Code Playground'
              description='Pequeño playground interactivo creado con ReactJS, Vite, Tailwind y el editor de código Monaco. Permite experimentar y probar rápidamente código HTML, CSS y JavaScript de manera sencilla y eficiente.'
              ghLink='https://github.com/cattho/playgroundCode'
              demoLink='https://playground-code.vercel.app'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
