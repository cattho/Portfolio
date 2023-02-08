import React from 'react'
import { Link } from 'react-router-dom'
import JumperCharacter from './JumperCharacter'
import SkillsCards from './SkillsCards'

const Skills = () => {
  const text = ['Habilidades y', 'experiencia']

  return (
    <div className='skills-page'>
      <div className='text-zone'>
        <h1>
          {text.map((t, id) => (
            <div key={id}>
              {t.split('').map((char, p) => (
                <JumperCharacter
                  key={p}
                  character={char}
                  className={char === 's' ? 'titleSkills spaceCap' : 'titleSkills'}
                />
              ))}
            </div>
          ))}
        </h1>
        <p className='textSkills'>
          Desde que empecé mi viaje como desarrollador me enamore de esta profesión, siendo sincero ha sido un gran reto para mi.
          <br />
          Soy un apasionado a la tecnología y estoy desarrollando sitios web receptivos, fáciles de usar construidos con las mejores practicas. Estoy ganando experiencia en el desarrollo front end con HTML, CSS, JS con el uso de la librería de ReactJS, creando pequeñas aplicaciones personalizadas, funciones, animaciones y diseños interactivos.
          <br />
          Si estas interesado en mi trabajo puedes visitar mi perfil de <a className='linkText' href='https://www.linkedin.com/in/juan-sebastian-giraldo-varon-b36689222/' target='_blank' rel='noopener noreferrer'>Linkedin</a> o simplemente <Link className='linkText' to='/contact'>contactame</Link>.
        </p>
      </div>

      <div className='skills-details'>
        <h1 className='textSkillsDetail' >Certificaciones</h1>
        <div className='certifications'>
          <SkillsCards
            urlCertificado='https://res.cloudinary.com/dfp8qduho/image/upload/v1651589501/ofhrji2cq7rlmntbmtm9.jpg'
            entidad='Academia Geek'
            certificado='Desarrollador Front-End'
            fecha='Marzo 2022'
          />

          <SkillsCards
            urlCertificado='https://www.freecodecamp.org/certification/Cattho/front-end-development-libraries'
            entidad='freeCodeCamp'
            certificado='Front End Development Libraries'
            fecha='Febrero 2022'
          />

          <SkillsCards
            urlCertificado='https://www.freecodecamp.org/certification/Cattho/javascript-algorithms-and-data-structures'
            entidad='freeCodeCamp'
            certificado='JavaScript Algorithms and Data Structures'
            fecha='Febrero 2022'
          />
          
        </div>
      </div>
    </div>
  )
}

export default Skills