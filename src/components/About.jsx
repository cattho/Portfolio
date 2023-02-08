import React from 'react'
import { Link } from 'react-router-dom'
import JumperCharacter from './JumperCharacter';
import Sphere from './Sphere'

const About = () => {
  const text = ['¿Quién Soy?'];

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
                  className={char === 'n' ? 'titleSkills spaceCap' : 'titleSkills'}
                />
              ))}
            </div>
          ))}
        </h1>
        <p className='textSkills'>Soy un desarrollador web ubicado en la ciudad de Ibagué, Colombia. Aunque estoy iniciando mi carrera en el desarrollo web tengo una gran pasión por toda la parte de creación Front end, para brindar al usuario aplicaciones intuitivas y dinámicas.</p>

        <p className='textSkills'>Soy una persona organizada y disciplinada; puedo solucionar problemas, soy atento a los detalles, manejo la metodología SCRUM y me desempeño muy bien trabajando en equipo. Me gustan los video juegos y las actividades en el gimnasio es mi otra gran pasión. </p>

        <p className='textSkills'>Estoy interesado en todo tipo de proyectos front end con ReactJs, para trabajar junto a grandes personas</p>

        <Link className='linkText' to='/contact'><p>¿Tienes algo en mente?</p></Link>
      </div>

      <div className='animationAbout'>
        <Sphere />
      </div>
    </div>
  )
}

export default About