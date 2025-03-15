import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const AcademicRecord = () => {
  const academicRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      academicRef.current.children,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: academicRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="academic">
      <div ref={academicRef} style={{ width: '100%', maxWidth: '800px', textAlign: 'center', padding: '0 1rem' }}>
        <h2 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem' }}>
          Academic Record
        </h2>
        <p className="neon-glow-0097b2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          Bachelor of Communication Arts<br />Rangsit University, 202X - Present
        </p>
        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>GPA: X.XX</p>
      </div>
    </section>
  );
};

export default AcademicRecord;