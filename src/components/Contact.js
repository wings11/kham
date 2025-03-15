import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaLine } from 'react-icons/fa';
import '../styles/app.css'; // Ensure this is imported if styles are in app.css

const Contact = () => {
  // Replace these with your friend's actual details
  const contactInfo = {
    phone: '+66 123 456 7890',
    email: 'friend@example.com',
    address: '123 Bangkok, Thailand',
    instagram: 'https://instagram.com/friendusername',
    facebook: 'https://facebook.com/friendusername',
    linkedin: 'https://linkedin.com/in/friendusername',
    line: 'https://line.me/ti/p/friendlineid',
  };

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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
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
            <FaFacebook
              style={{ fontSize: '2rem', cursor: 'pointer' }}
              className="neon-glow-0097b2"
              onClick={() => linkTo(contactInfo.facebook)}
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