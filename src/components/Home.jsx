import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Cursor from './Cursor'
import Skills from './Skills'
import Work from './Work'

const Home = () => {
  return (
    <div className='homeContainer container-fluid'>

      <div className="cursor">
        <Cursor />
      </div>

      <h1 className='homeTitle'>
        <span className='jump'>H</span>
        <span className='jump'>o</span>
        <span className='jump'>l</span>
        <span className='jump'>a</span>
        <span className='jump'>, </span>
        <br />
        <span className='jump'>S</span>
        <span className='jump'>o</span>
        <span className='jump spaceCap'>y </span>
        <span className='shadowText'>S</span>
        <span className='jump'>e</span>
        <span className='jump'>b</span>
        <span className='jump'>a</span>
        <span className='jump'>s</span>
        <span className='jump'>t</span>
        <span className='jump'>i</span>
        <span className='jump'>á</span>
        <span className='jump'>n</span>
        <span className='jump'>, </span>
        <br />
        <span className='jump'>D</span>
        <span className='jump'>e</span>
        <span className='jump'>s</span>
        <span className='jump'>a</span>
        <span className='jump'>r</span>
        <span className='jump'>r</span>
        <span className='jump'>o</span>
        <span className='jump'>l</span>
        <span className='jump'>l</span>
        <span className='jump'>a</span>
        <span className='jump'>d</span>
        <span className='jump'>o</span>
        <span className='jump spaceCap'>r </span>
        <span className='jump'> w</span>
        <span className='jump'>e</span>
        <span className='jump'>b</span>
        <span className='jump'>.</span>
      </h1>

      <h5 className='subtitleHome'>Desorrollador Front End</h5>

      <Link to='/contact'><button className='homeButton'>Contactame!</button></Link>
      <div className='scrollPage'>
        <About />
        <Skills />
        <Work />
      </div>
    </div>
  )
}

export default Home