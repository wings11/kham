import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import cvFile from '../assets/cv.pdf';

const AboutMe = () => {
  const aboutRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="about">
      <div ref={aboutRef} style={{ width: '100%', maxWidth: '800px', textAlign: 'center', padding: '0 1rem' }}>
        <h2 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem' }}>
          About Me
        </h2>
        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', lineHeight: '1.6' }}>
          Hi, I’m Kham, a passionate Communication Arts student at Rangsit University. Here will be added "About Me".
        </p>
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="neon-border-0097b2"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '5px',
            border: '2px solid #0097b2',
            color: '#fff',
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          }}
        >
          View My CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;