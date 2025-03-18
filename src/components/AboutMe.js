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
        <p style={{  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', lineHeight: '1.6', textAlign: 'justify' }}>
        My name is Nang Hlaing Kham Oo. Most people call me my nickname "Kham". I am currently pursuing a degree in Communication Arts at Rangsit University in Thailand. Previously, I studied Business Management for two years at the National Management Degree College in Myanmar. However, due to the COVID-19 pandemic and the political situation in my home country, I had to pause my studies and later decided to continue my education in Thailand.
<br></br><br></br>
        I am passionate about connecting with people from diverse backgrounds, which has driven my interest in communication and language learning. I speak six languages fluently: Tai (my mother tongue), Burmese (my national language), Lahu (an ethnic language of Myanmar), Thai (Advanced), English (Advanced), and Chinese (Basic). My ability to adapt to different cultures and communicate effectively allows me to thrive in diverse environments.
        <br></br><br></br>
        
        Beyond academics, I enjoy traveling, meeting new people, and exploring different perspectives. I am a dog person and enjoy cooking in my free time. I like listening to music. I am willing to learn from anybody and I am a cooperative.
        <br></br><br></br>
        I am also the owner of <a href='https://web.facebook.com/profile.php?id=100064159624165' target="_blank"  rel="noopener noreferrer" style={{color: 'red', textDecoration: 'none'}}>Pony</a> facebook page where I sell cosmetics and clothes. <a href='https://www.tiktok.com/@ponys.fashion.war6?_t=ZS-8umMCZsILoo&_r=1'target="_blank"  rel="noopener noreferrer" style={{color: 'red', textDecoration: 'none'}}>Here</a> is the Tik Tok link for Pony's Wardrobe.
        I am open to every opportunities and eager to contribute my all at work. I believe my skills can contribute strongly in this Digital Marketing, PR and Media field.
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