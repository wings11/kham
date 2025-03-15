import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Contact = () => {
  const contactRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      contactRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="contact">
      <div ref={contactRef} style={{ width: '100%', textAlign: 'center', padding: '0 1rem' }}>
        <h2 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem' }}>
          Contact Me
        </h2>
        <p className="neon-glow-0097b2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          Email: kham@example.com
        </p>
        <p className="neon-glow-0097b2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          Phone: +66 XXX-XXX-XXXX
        </p>
        <p className="neon-glow-0097b2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          LinkedIn: linkedin.com/in/kham
        </p>
      </div>
    </section>
  );
};

export default Contact;