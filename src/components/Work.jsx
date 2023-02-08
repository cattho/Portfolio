import React, { Fragment as div } from 'react'
import { CardGroup } from 'react-bootstrap'

import { CardComp } from './CardComp'
import JumperCharacter from './JumperCharacter'

const Work = () => {
    const text = ['Proyectos']
    return (
        <div className='work-page container-fluid'>
            <h1>{
            text.map((t,id)=>(
                <div key={id}>
                    {t.split('').map((char,p)=>(
                        <JumperCharacter
                        key={p}
                        character={char}
                        className='titleSkills'
                        />
                    ))}
                </div>
            ))
            }</h1>
            <CardGroup className='cardsContainer'>
                <CardComp
                    image='https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
                    urlProject='https://pokeapicattho.netlify.app'
                    urlGitHub='https://github.com/cattho/pokeApi'
                    text='Aplicación creada con ReactJS consumiendo la API de Pokemon, dando la posibilidad al usuario de buscar cualquier pokemon que quiera.'
                    projectName='Pokedex'
                />

                <CardComp
                    image='https://res.cloudinary.com/dfp8qduho/image/upload/v1645226601/imagen_2022-02-18_182319_nggyga.png'
                    urlProject='https://block-master-sebas.netlify.app'
                    urlGitHub='https://github.com/cattho/BlockMaster-react'
                    text='Aplicación creada consumiendo la API de TheMovieDB, implementacion de Redux con sistema de proteccion de rutas, implementacion de CRUD, inicio de sesion con firebase, sistema de protección de rutas, buscador de peliculas.'
                    projectName='Block Master- Aplicación de peliculas'
                />

                <CardComp
                    image='https://res.cloudinary.com/dfp8qduho/image/upload/v1659993048/wry8lzauqsfzezzrmj4k.png'
                    urlProject='https://peaceful-phoenix-089929.netlify.app'
                    urlGitHub='https://github.com/cattho/encriptador'
                    text='Encriptador de palabras realizado con HTML, CSS y Javascript.'
                    projectName='Encriptador'
                />

                <CardComp
                    image='https://res.cloudinary.com/dfp8qduho/image/upload/v1650552603/gokbrjsywkg0lzjpqj1c.png'
                    urlProject='https://dev-rock.vercel.app'
                    urlGitHub='https://github.com/cattho/Dev-rock'
                    text='Pequeño E-commerce mobile creado con React, usando useContext para el manejo global de estado.'
                    projectName='Dev-Rock Store'
                />

                <CardComp 
                    image='https://images.pexels.com/photos/2793466/pexels-photo-2793466.jpeg?auto=compress&cs=tinysrgb&w=640&h=800&dpr=1'
                    urlProject='https://relaxed-puffpuff-cedfca.netlify.app'
                    urlGitHub='https://github.com/cattho/webReader'
                    text='Lector de texto Web creado con Js Vanilla'
                    projectName='Lector web'
                />
            </CardGroup>
            {/* <p className='textSkills'>Puedes ver mas de mi trabajo en mi <a href='https://github.com/cattho' target='_blank' className='linkText' rel="noopener noreferrer">GitHub</a></p> */}
        </div>
    )
}

export default Work
