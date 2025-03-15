import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import AcademicRecord from './components/AcademicRecord';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import './styles/app.css';


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <Router style={{ padding: '0.2rem'  }}>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutMe />
                <Projects />
                <AcademicRecord />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;