import React, { useState, useEffect } from 'react';

export default function Header({ onOpenFreePass }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderBg, setIsHeaderBg] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsHeaderBg(true);
      } else {
        setIsHeaderBg(false);
      }

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isHeaderBg ? 'bg-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img src="/img/logo-nav.png" alt="BEXC 2.0 logo" />
        </a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Inicio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#program"
                className={`nav__link ${activeSection === 'program' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Disciplinas
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#schedule"
                className={`nav__link ${activeSection === 'schedule' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Horarios
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#choose"
                className={`nav__link ${activeSection === 'choose' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Amenities
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#pricing"
                className={`nav__link ${activeSection === 'pricing' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Planes
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#faq"
                className={`nav__link ${activeSection === 'faq' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Preguntas
              </a>
            </li>
          </ul>

          <div className="nav__actions">
            <button
              className="button nav__button pulse-glow"
              onClick={() => {
                closeMenu();
                onOpenFreePass();
              }}
            >
              🎁 Pase Gratis 1 Día
            </button>
          </div>

          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}
