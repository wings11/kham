import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const projectRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      projectRef.current.querySelectorAll('.project-card'),
      { opacity: 0, rotationY: 90 },
      {
        opacity: 1,
        rotationY: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: projectRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, []);

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="projects">
      <div ref={projectRef} style={{ width: '100%', maxWidth: '1000px', padding: '0 1rem' }}>
        <h2 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '2rem' }}>
          Projects
        </h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr' }}>
          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('1')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Main Lead Actress</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Rangsit University Campus Tour Short Film
            </p>
          </div>
          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('2')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Creative Content Video For Dior</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            A Commercial Video For Dior J'adore
            </p>
          </div>
          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('3')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Aesop Advertising Campaign</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            A one-month advertising campaign in Bangkok to promote Aesop
            </p>
          </div>

          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('4')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Together We ReLeaf</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Plant The Globe
            </p>
          </div>

          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('5')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Amazon</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Creative Marketing Content for Amazon Cafe
            </p>
          </div>

          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('6')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Seminar</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Presentation About The Power and Influence about Advertising
            </p>
          </div>

          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('7')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Talent Show</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Great Gatsby Night Event at Rangsit University
            </p>
          </div>


          <div
            className="project-card neon-border-0097b2"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              border: '2px solid #0097b2',
              background: 'rgba(0, 151, 178, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleProjectClick('8')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: '0 0 20px #0097b2, 0 0 40px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: '0 0 10px #0097b2, 0 0 20px #0097b2, inset 0 0 10px #0097b2',
                duration: 0.3,
                ease: 'power2.out',
              });
            }}
          >
            <h3 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Sook Siam</h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Promotion Video for Sook Siam
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;