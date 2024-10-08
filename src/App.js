import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/style.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects data-testid="projects-component"/>} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
