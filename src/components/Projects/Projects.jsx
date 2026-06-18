import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mis trabajos <strong className="orange">Recientes </strong>
        </h1>
        <p style={{ color: "var(--text-color)" }}>
          Aqui hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="Assets/Projects/project-code-playground.svg"
              isBlog={false}
              title="Code Playground"
              description="Pequeño playground interactivo creado con ReactJS, Vite, Tailwind y el editor de código Monaco. Permite experimentar y probar rápidamente código HTML, CSS y JavaScript de manera sencilla y eficiente."
              ghLink="https://github.com/cattho/playgroundCode"
              demoLink="https://playground-code.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="Assets/Projects/project-digital-store.svg"
              isBlog={false}
              title="Catalogo digital MVP"
              description="MVP de catálogo interactivo para pequeños negocios. Desarrollado con React Router 7 y TypeScript, integrado con Supabase para la gestión de base de datos relacional y autenticación, permitiendo una administración ágil y directa de productos."
              ghLink="https://github.com/cattho/digital-catalog"
              demoLink="https://digital-catalog-jbm9zgqzm-sebastian-giraldos-projects-8f606108.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
