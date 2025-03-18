import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaLine, FaTiktok } from 'react-icons/fa';
import '../styles/app.css';

const Contact = () => {
  const contactRef = useRef();

  // Replace these with your friend's actual details
  const contactInfo = {
    phone: '+66 806616373',
    email: 'khamoo59@gmail.com',
    address: '52/291 หมู่บ้านเมืองเอก หมู่ที่ 7, ต.หลักหก, อ.เมือง, Pathum Thani 12000, Thailand',
    instagram: 'https://www.instagram.com/k.kham_oo?igsh=ZWEydzB0M3pvcW5w&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@kham.oo12?_t=ZS-8umLdVnyazX&_r=1',
    linkedin: 'https://www.linkedin.com/in/kham-oo-6b1362342/',
    line: 'https://line.me/ti/p/DOSIm-Jpmy',
  };

  // GSAP animation with ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = contactRef.current.children;
    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%', // Start when top of section is 80% from top of viewport
          end: 'bottom 20%', // End when bottom of section is 20% from top
          toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        },
      }
    );
  }, []);

  // Function to handle link navigation
  const linkTo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section style={{ padding: '1rem', background: '#1a1a1a', color: '#fff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem' }}>
          Contact Me
        </h2>
        <div ref={contactRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          {/* Phone - Icon + Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaPhone
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo(`tel:${contactInfo.phone}`)}
            />
            <span>{contactInfo.phone}</span>
          </div>

          {/* Email - Icon + Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaEnvelope
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo(`mailto:${contactInfo.email}`)}
            />
            <span>{contactInfo.email}</span>
          </div>

          {/* Address - Icon + Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaMapMarkerAlt
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo('https://maps.google.com/?q=' + encodeURIComponent(contactInfo.address))}
            />
            <span>{contactInfo.address}</span>
          </div>

          {/* Social Media - Icons Only */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem' }}>
            <FaInstagram
              style={{ fontSize: '2rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo(contactInfo.instagram)}
            />
            <FaTiktok
              style={{ fontSize: '2rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo(contactInfo.tiktok)}
            />
            <FaLinkedin
              style={{ fontSize: '2rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo(contactInfo.linkedin)}
            />
            <FaLine
              style={{ fontSize: '2rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo(contactInfo.line)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;