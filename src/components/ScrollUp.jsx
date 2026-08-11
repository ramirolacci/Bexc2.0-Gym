import React, { useState, useEffect } from 'react';

export default function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#home"
      className={`scrollup ${showScroll ? 'show-scroll' : ''}`}
      id="scroll-up"
      onClick={scrollToTop}
    >
      <i className="ri-arrow-up-line"></i>
    </a>
  );
}
