import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

};

export default Header;