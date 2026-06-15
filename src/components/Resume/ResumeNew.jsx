import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const cvPath = "/Assets/Cv-Juan-Sebastian-Giraldo-Varon-frontendjr.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            href={cvPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>

        {/* El Visor Nativo del PDF */}
        <Row
          className="resume d-flex justify-content-center"
          style={{ minHeight: "750px" }}
        >
          <object
            data={cvPath}
            type="application/pdf"
            width="100%"
            height="800px"
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            {/* Mensaje de respaldo por si el navegador es muy viejo */}
            <p>
              Tu navegador no soporta ver el PDF directamente.
              <a href={cvPath}> Haz clic aquí para descargarlo.</a>
            </p>
          </object>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
