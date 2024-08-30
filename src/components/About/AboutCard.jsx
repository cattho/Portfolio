import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className='orange'>Sebastian Giraldo </span>
            de <span className='orange'> Ibagué, Colombia.</span>
            <br />
            Actualmente desarrollo aplicaciones de manera autonoma.
            <br />
            <br />
            Ademas de desarrollar, me encanta realizar otras actividades!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Aprender continuamente otra habilidades
            </li>
            <li className='about-activity'>
              <ImPointRight /> Jugar Videojuegos
            </li>
            <li className='about-activity'>
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "var(--accent-color)" }}>
            "La disciplina es la clave para transformar sueños en realidades tangibles!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
