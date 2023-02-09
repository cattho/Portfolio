import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Cursor from './Cursor'
import JumperCharacter from './JumperCharacter'
import MainButton from './MainButton'
import Skills from './Skills'
import Work from './Work'

const Home = () => {
  const text = ['Hola,', 'Soy Sebastián,', 'Desarrollador Web'];
  return (
    <div className='homeContainer container-fluid'>

      <div className="cursor">
        <Cursor />
      </div>

      <h1 className='homeTitle'>
        {text.map((t, id) => (
          <div key={id}>
            {t.split('').map((char, p) => (
              <JumperCharacter
                key={p}
                character={char}
                className={char === 'S' && p === 4 ? 'shadowText' : '' || char === 'y' ? 'spaceCap' : '' || char === 'r' && p === 12 ? 'spaceCap' : ''}
              />
            ))}
          </div>
        ))}
      </h1>

      <h5 className='subtitleHome'>Desorrollador Front End</h5>

      <Link to='/contact'>
        <MainButton>Contactame!</MainButton>
      </Link>
      <div className='scrollPage'>
        <About />
        <Skills />
        <Work />
      </div>
    </div>
  )
}

export default Home