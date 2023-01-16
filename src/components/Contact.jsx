import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { sendDataAsync } from '../actions/userAction';

const Contact = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const asunto = e.target.asunto.value;
    const mensaje = e.target.mensaje.value;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
      Swal.fire({
        background: '#1d1d1d',
        color: '#8c9096',
        position: 'center',
        icon: 'warning',
        title: 'Asegurate de haber rellenado todos los campos',
        showConfirmButton: true,
        confirmButtonColor: '#05fdd8',
        timer: 3500
      })
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      Swal.fire({
        background: '#1d1d1d',
        color: '#8c9096',
        position: 'center',
        icon: 'error',
        title: 'Correo Electrónico no valido',
        showConfirmButton: true,
        confirmButtonColor: '#05fdd8',
        timer: 3500
      })
      return;
    }


    Swal.fire({
      background: '#1d1d1d',
      color: '#8c9096',
      position: 'center',
      icon: 'success',
      title: 'Gracias por contactarme, pronto me pondre en contacto contigo',
      showConfirmButton: true,
      confirmButtonColor: '#05fdd8',
      timer: 3500
    })

    dispatch(sendDataAsync(nombre, email, asunto, mensaje))
  };


  return (
    <div className='container contact-page'>
      <h1>
        <span className='jump titleSkills ml'>C</span>
        <span className='jump titleSkills'>o</span>
        <span className='jump titleSkills'>n</span>
        <span className='jump titleSkills'>t</span>
        <span className='jump titleSkills'>a</span>
        <span className='jump titleSkills'>c</span>
        <span className='jump titleSkills'>t</span>
        <span className='jump titleSkills'>a</span>
        <span className='jump titleSkills'>m</span>
        <span className='jump titleSkills spaceCap'>e</span>
        <span className='jump titleSkills'>!</span>
      </h1>

      <div className="form-map-container">
        <form onSubmit={handleSubmit} className='formContact' >
          <p className='textSkills'>Estoy interesado en oportunidades laborales o proyectos freelance. Sin embargo si tienes otra petición o pregunta, no dudes en hacérmelo saber!</p>
          <input
            className='inputContact'
            placeholder='Nombre'
            type='text'
            name='nombre' />
          <br />
          <input
            className='inputContact midIn form-control'
            placeholder='Email'
            type='text'
            name='email' />
          <br />
          <input
            className='inputContact form-control'
            type='text'
            placeholder='Asunto'
            name='asunto' />
          <br />
          <textarea
            className='inputContact form-control'
            type='text'
            placeholder='Mensaje'
            name='mensaje' />

          <div className="button-container">
            <button type='submit' className='contactButton'>Enviar Mensaje!</button>
          </div>
        </form>


        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127295.79546459236!2d-75.25681815558085!3d4.412286216249967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c491115f4d5f%3A0xe0cae43859d2401e!2zSWJhZ3XDqSwgVG9saW1h!5e0!3m2!1ses-419!2sco!4v1650742161637!5m2!1ses-419!2sco" loading="lazy" title='Google-maps'/>
        <Link to='/' className='comeback-btn-container'>
          <button type='submit' className='comeback-btn'>Volver al inicio</button>
        </Link>
      </div>
    </div>
  )
}

export default Contact