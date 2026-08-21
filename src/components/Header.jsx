import React, { useState, useEffect } from 'react';
import Dumbbell3DIcon from './Dumbbell3DIcon';

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
            <img src="/img/logo-nav.png" alt="BEXC 2.0 logo" className="nav__logo-img" />
          </a>

          {/* Overlay backdrop for mobile drawer */}
          <div 
            className={`nav__overlay ${isMenuOpen ? 'show-overlay' : ''}`}
            onClick={closeMenu}
          ></div>

          <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <div className="nav__menu-header">
              <div className="nav__logo">
                <Dumbbell3DIcon />
                <img src="/img/logo-nav.png" alt="BEXC 2.0 logo" className="nav__menu-logo" />
              </div>
              <div className="nav__close" id="nav-close" onClick={closeMenu}>
                <i className="ri-close-line"></i>
              </div>
            </div>

            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="ri-home-4-line nav__link-icon"></i>
                  <span>Inicio</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#gallery"
                  className={`nav__link ${activeSection === 'gallery' ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="ri-image-line nav__link-icon"></i>
                  <span>Galería</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#schedule"
                  className={`nav__link ${activeSection === 'schedule' ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="ri-calendar-event-line nav__link-icon"></i>
                  <span>Horarios</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#choose"
                  className={`nav__link ${activeSection === 'choose' ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="ri-sparkles-line nav__link-icon"></i>
                  <span>Amenities</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#pricing"
                  className={`nav__link ${activeSection === 'pricing' ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="ri-vip-crown-line nav__link-icon"></i>
                  <span>Planes</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#faq"
                  className={`nav__link ${activeSection === 'faq' ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="ri-questionnaire-line nav__link-icon"></i>
                  <span>Preguntas</span>
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

              <div className="nav__menu-footer">
                <span>Desarrollado por{' '}
                  <a
                    href="https://waveframe.com.ar/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav__menu-developer"
                  >
                    WaveFrame Studio
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="ri-menu-3-line"></i>
          </div>
        </nav>
      </header>
  );
}
