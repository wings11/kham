import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/app.css';

const Hero=React.lazy(() => import('./components/Hero'));
const AboutMe=React.lazy(() => import('./components/AboutMe'));
const Projects=React.lazy(() => import('./components/Projects'));
const AcademicRecord=React.lazy(() => import('./components/AcademicRecord'));
const Contact=React.lazy(() => import('./components/Contact'));
const ProjectDetail=React.lazy(() => import('./components/ProjectDetail'));


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
      <React.Suspense fallback={<div>Loading...</div>}>
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
    </React.Suspense>
  );
};

export default App;