import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



//pdf files
import AesopPDF from '../assets/Aesop.pdf';
import AmazonPDF from '../assets/Amazon.pdf';


//images
import Aesop1 from '../assets/images/Aesop1.jpg';
import Amazon from '../assets/images/amazon.png';
import Megoody from '../assets/images/megoody.png';
import Amazon1 from '../assets/images/Amazon1.jpg';
import Amazon2 from '../assets/images/Amazon2.png';
import Aesop2 from '../assets/images/Aesop2.jpg';


const projectsData = [
  {
    id: '1',
    title: 'Aesop Advertising Campaign',
    description: 'A one-month advertising campaign in Bangkok to promote Aesop’s Sage & Zinc Facial Hydrating Lotion with SPF15',
    images: [Aesop1, Aesop2], // Multiple images
    link: [
      { label: 'View Canva', url: 'https://www.canva.com/design/DAFoa-DmsDc/6GuVwUt4_yEpTMe8UGcthA/edit?utm_content=DAFoa-DmsDc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
      { label: 'View Report', url: AesopPDF },
    ],
  },
  {
    id: '2',
    title: 'Amazon',
    description: 'A vibrant marketing push for Cafe Amazon’s "Butterfly Sunrise," fusing innovative flavors with a nature-inspired aesthetic to captivate a global audience.',
    images: [Amazon, Amazon1, Amazon2], // Single image
    link: AmazonPDF,
  },
  {
    id: '3',
    title: 'Megoody Thailand',
    description: 'Seek-/+Found Project',
    images: [Megoody], // Two images
    link: [
      { label: 'View Canva', url: 'https://www.canva.com/design/DAFoa-DmsDc/6GuVwUt4_yEpTMe8UGcthA/edit?utm_content=DAFoa-DmsDc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
      { label: 'View Report', url: 'https://www.example.com/project3-script.pdf' },
    ],
  },
  {
    id: '4',
    title: 'Sook Siam',
    description: 'Short film showcasing storytelling skills.',
    images: [], // No images yet, add as needed
    link: 'https://www.example.com/project4',
  },
  {
    id: '5',
    title: 'Seminar',
    description: 'Short film showcasing storytelling skills.',
    images: [], // No images yet, add as needed
    link: 'https://www.example.com/project5',
  },
  {
    id: '6',
    title: 'Project 6',
    description: 'Short film showcasing storytelling skills.',
    images: [], // No images yet, add as needed
    link: 'https://www.example.com/project6',
  },
];

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const detailRef = useRef();
    const project = projectsData.find((p) => p.id === id) || {};
    const [showPopup, setShowPopup] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchMove, setTouchMove] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.fromTo(
        detailRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: detailRef.current,
            start: 'top 80%',
            end: 'bottom 100%',
            scrub: 1,
          },
        }
      );
    }, []);
  
    const handleViewClick = () => {
      if (Array.isArray(project.link)) {
        setShowPopup(true);
      }
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
  
    const handleTouchStart = (e) => {
      setTouchStart(e.touches[0].clientX);
      setTouchMove(null);
    };
  
    const handleTouchMove = (e) => {
      setTouchMove(e.touches[0].clientX);
    };
  
    const handleTouchEnd = () => {
      if (!touchStart || !touchMove || !project.images || project.images.length <= 1) return;
  
      const deltaX = touchMove - touchStart;
      const swipeThreshold = 50;
  
      if (deltaX > swipeThreshold) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
          );
          setIsTransitioning(false);
        }, 300);
      } else if (deltaX < -swipeThreshold) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
          );
          setIsTransitioning(false);
        }, 300);
      }
  
      setTouchStart(null);
      setTouchMove(null);
    };
  
    const handleMouseDown = (e) => {
      e.preventDefault();
      setTouchStart(e.clientX);
      setTouchMove(null);
    };
  
    const handleMouseMove = (e) => {
      if (touchStart !== null) {
        setTouchMove(e.clientX);
      }
    };
  
    const handleMouseUp = () => {
      if (!touchStart || !touchMove || !project.images || project.images.length <= 1) return;
  
      const deltaX = touchMove - touchStart;
      const swipeThreshold = 50;
  
      if (deltaX > swipeThreshold) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
          );
          setIsTransitioning(false);
        }, 300);
      } else if (deltaX < -swipeThreshold) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
          );
          setIsTransitioning(false);
        }, 300);
      }
  
      setTouchStart(null);
      setTouchMove(null);
    };
  
    const nextImage = () => {
      if (project.images && project.images.length > 1) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
          );
          setIsTransitioning(false);
        }, 300);
      }
    };
  
    const prevImage = () => {
      if (project.images && project.images.length > 1) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
          );
          setIsTransitioning(false);
        }, 300);
      }
    };
  
    const handleDotClick = (index) => {
      if (index !== currentImageIndex) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex(index);
          setIsTransitioning(false);
        }, 300);
      }
    };
  
    return (
      <section style={{ minHeight: '100vh', padding: '2rem 1rem', background: '#1a1a1a', color: '#fff' }}>
        <div ref={detailRef} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
            {project.title || 'Project Not Found'}
          </h1>
          <p className="neon-glow-0097b2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', marginBottom: '1rem' }}>
            {project.description}
          </p>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              overflow: 'hidden',
            }}
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove} // Fixed reference
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {project.images && project.images.length > 0 ? (
              <>
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} Image ${currentImageIndex + 1}`}
                  className="neon-border-0097b2"
                  onDragStart={(e) => e.preventDefault()}
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                    borderRadius: '10px',
                    border: '2px solid #0097b2',
                    objectFit: 'cover',
                    cursor: project.images.length > 1 ? 'grab' : 'default',
                    userSelect: 'none',
                    opacity: isTransitioning ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                  }}
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="carousel-arrow carousel-arrow-left"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(26, 26, 26, 0.7)',
                        border: '2px solid #0097b2',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        zIndex: 10,
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="carousel-arrow carousel-arrow-right"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(26, 26, 26, 0.7)',
                        border: '2px solid #0097b2',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        zIndex: 10,
                      }}
                    >
                      ›
                    </button>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginTop: '1rem',
                      }}
                      className="carousel-dots"
                    >
                      {project.images.map((_, index) => (
                        <span
                          key={index}
                          onClick={() => handleDotClick(index)}
                          style={{
                            width: '10px',
                            height: '10px',
                            background: index === currentImageIndex ? '#0097b2' : '#666',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: 'background 0.3s',
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <img
                src="https://via.placeholder.com/600x400"
                alt="Placeholder"
                className="neon-border-0097b2"
                onDragStart={(e) => e.preventDefault()}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  borderRadius: '10px',
                  border: '2px solid #0097b2',
                  opacity: isTransitioning ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}
              />
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {project.link && !Array.isArray(project.link) ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border-0097b2"
                style={{
                  padding: '0.5rem 1.5rem',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  border: '2px solid #0097b2',
                  color: '#fff',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}
              >
                View
              </a>
            ) : (
              <button
                onClick={handleViewClick}
                className="neon-border-0097b2"
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: '5px',
                  border: '2px solid #0097b2',
                  background: 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}
              >
                View
              </button>
            )}
            <button
              onClick={() => navigate('/')}
              className="neon-border-0097b2"
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '5px',
                border: '2px solid #0097b2',
                background: 'transparent',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              }}
            >
              Back to Home
            </button>
          </div>
  
          {showPopup && Array.isArray(project.link) && (
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(26, 26, 26, 0.95)',
                padding: '2rem',
                borderRadius: '10px',
                border: '2px solid #0097b2',
                boxShadow: '0 0 20px #0097b2',
                zIndex: 1000,
                textAlign: 'center',
              }}
            >
              <h3 className="neon-glow-bf806b" style={{ marginBottom: '1rem' }}>
                Please Choose
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.link.map((option, index) => (
                  <a
                    key={index}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-border-0097b2"
                    style={{
                      padding: '0.5rem 1.5rem',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      border: '2px solid #0097b2',
                      color: '#fff',
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    }}
                  >
                    {option.label}
                  </a>
                ))}
              </div>
              <button
                onClick={closePopup}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '5px',
                  border: '2px solid #bf806b',
                  background: 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default ProjectDetail;



// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import AesopPDF from '../assets/Aesop.pdf'; // Renamed for clarity

// const projectsData = [
//   {
//     id: '1',
//     title: 'Aesop Advertising Campaign',
//     description: 'A one-month advertising campaign in Bangkok to promote Aesop’s Sage & Zinc Facial Hydrating Lotion with SPF15',
//     details: 'This campaign promotes Aesop’s Sage & Zinc Facial Hydrating Lotion with SPF15 in Bangkok to boost brand and product awareness. It targets adults aged 25-44 with higher disposable income who value quality and minimalism. Running for one month during Bangkok’s hottest season, it uses a mix of digital and non-digital channels. The budget is capped at 800,000 THB, focusing on word-of-mouth and sun protection messaging. Aesop’s luxury appeal and unique botanical formulations differentiate it from competitors like Cetaphil and Clinique.',
//     link: AesopPDF, // PDF file for Project 1
//   },
//   {
//     id: '2',
//     title: 'Project 2',
//     description: 'Short film showcasing storytelling skills.',
//     details: 'A 10-minute short film written, directed, and edited by me. The film explores themes of identity and was screened at a local film festival, receiving positive feedback.',
//     link: 'https://www.example.com/project2', // Example external link
//   },
//   {
//     id: '3',
//     title: 'Project 3',
//     description: 'Short film showcasing storytelling skills.',
//     details: 'A 10-minute short film written, directed, and edited by me. The film explores themes of identity and was screened at a local film festival, receiving positive feedback.',
//     link: 'https://www.example.com/project3', // Example external link
//   },
//   {
//     id: '4',
//     title: 'Project 4',
//     description: 'Short film showcasing storytelling skills.',
//     details: 'A 10-minute short film written, directed, and edited by me. The film explores themes of identity and was screened at a local film festival, receiving positive feedback.',
//     link: 'https://www.example.com/project4', // Example external link
//   },
//   {
//     id: '5',
//     title: 'Project 5',
//     description: 'Short film showcasing storytelling skills.',
//     details: 'A 10-minute short film written, directed, and edited by me. The film explores themes of identity and was screened at a local film festival, receiving positive feedback.',
//     link: 'https://www.example.com/project5', // Example external link
//   },
//   {
//     id: '6',
//     title: 'Project 6',
//     description: 'Short film showcasing storytelling skills.',
//     details: 'A 10-minute short film written, directed, and edited by me. The film explores themes of identity and was screened at a local film festival, receiving positive feedback.',
//     link: 'https://www.example.com/project6', // Example external link
//   },
// ];

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const detailRef = React.useRef();
//   const project = projectsData.find((p) => p.id === id) || {};

//   React.useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.fromTo(
//       detailRef.current.children,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         duration: 1,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: detailRef.current,
//           start: 'top 80%',
//           end: 'bottom 100%',
//           scrub: 1,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section style={{ minHeight: '100vh', padding: '2rem 1rem', background: '#1a1a1a', color: '#fff' }}>
//       <div ref={detailRef} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
//         <h1 className="neon-glow-bf806b" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
//           {project.title || 'Project Not Found'}
//         </h1>
//         <p className="neon-glow-0097b2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', marginBottom: '1rem' }}>
//           {project.description}
//         </p>
//         <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', lineHeight: '1.6', marginBottom: '1rem' }}>
//           {project.details}
//         </p>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: '1rem',
//             marginTop: '1rem',
//             flexWrap: 'wrap',
//           }}
//         >
//          {project.link && (
//   <a
//     href={project.link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="neon-border-0097b2"
//     style={{padding: '0.5rem 1.5rem',
//         textDecoration: 'none',
//         borderRadius: '5px',
//         border: '2px solid #0097b2',
//         color: '#fff',
//         fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',}}
//   >
//     View
//   </a>
// )}
//           <button
//             onClick={() => navigate('/')}
//             className="neon-border-0097b2"
//             style={{
//               padding: '0.5rem 1.5rem',
//               borderRadius: '5px',
//               border: '2px solid #0097b2',
//               background: 'transparent',
//               color: '#fff',
//               cursor: 'pointer',
//               fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
//             }}
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetail;
