import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'
import Work from '../components/Work'


const lightTheme = {
    background: '#F0FFFF',
    color: '#1d1d1d',
};

const darkTheme = {
    color: '#fff',
};

const GlobalStyle = createGlobalStyle`
    body {
      background: ${props => props.theme.background};
      color: ${props => props.theme.color};
    }
  `;

const AppRoutes = () => {
    const [theme, setTheme] = useState('dark');
    const [valueBtn, setValueBtn] = useState('🌚');

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') || setValueBtn('🌚') : setTheme('dark') || setValueBtn('🌞');
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <NavBar />
                {/* <input type='button' onClick={toggleTheme} value={valueBtn} className='btn-theme' /> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/work' element={<Work />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AppRoutes