import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import khamPhoto from '../assets/images/kham-photo.jpg';

const Hero = () => {
  const textRef = useRef();
  const photoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      photoRef.current,
      { opacity: 0, scale: 0.9, rotationX: 10, rotationY: 10 },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: photoRef.current,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <div ref={textRef} style={{ textAlign: 'center', padding: '1rem 0' }}>
        <h1 className="neon-glow-bf806b" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Kham</h1>
        <p className="neon-glow-0097b2" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
          Communication Arts Student | Rangsit University
        </p>
      </div>
      <div
        style={{
          perspective: '1000px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <img
          ref={photoRef}
          src={khamPhoto}
          alt="Kham"
          className="neon-border-0097b2"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '10px',
            transformStyle: 'preserve-3d',
            border: '2px solid #0097b2',
          }}
          onMouseMove={(e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateY = (x - rect.width / 2) / 20;
            const rotateX = -(y - rect.height / 2) / 20;
            gsap.to(e.target, {
              rotationY: rotateY,
              rotationX: rotateX,
              duration: 0.3,
              ease: 'power2.out',
            });
          }}
          onMouseLeave={() => {
            gsap.to(photoRef.current, {
              rotationY: 0,
              rotationX: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          }}
        />
      </div>
    </section>
  );
};

export default Hero;