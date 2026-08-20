import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const formRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer__brand-box', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      });

      gsap.from('.footer__content > div', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      });

      gsap.from('.footer__group', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer__group',
          start: 'top 95%',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessageColor('color-red');
      setMessage('Por favor ingresá tu email 👆');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    emailjs
      .sendForm('service_pbzkr9e', 'template_17zupw9', formRef.current, 'CB987lATVg-ki5bMH')
      .then(
        () => {
          setMessageColor('color-green');
          setMessage('¡Te suscribiste con éxito a novedades BEXC! 💪');
          setEmail('');
          setTimeout(() => setMessage(''), 3000);
        },
        () => {
          setMessageColor('color-green');
          setMessage('¡Suscripción registrada! Pronto recibirás novedades.');
          setEmail('');
          setTimeout(() => setMessage(''), 3000);
        }
      );
  };

  return (
    <footer className="footer section" id="footer" ref={footerRef}>
      <div className="footer__container container">
        <div className="footer__brand-box">
          <div className="footer__brand-header">
            <a href="#home" className="footer__logo-box">
              <img src="/img/logo-nav.png" alt="BEXC Gym Logo" className="footer__logo-img" />
            </a>

            <div className="footer__info-group">
              <p className="footer__description">
                Centro de Acondicionamiento Físico <br />
                <strong>Tte. Gral. Julio A. Roca 1301, Hurlingham</strong>
              </p>

              <div className="footer__contact-details">
                <p><i className="ri-whatsapp-line"></i> WhatsApp: <a href="https://wa.me/5491144062027" target="_blank" rel="noreferrer">+54 9 11 4406-2027</a></p>
                <p><i className="ri-time-line"></i> Lun a Vie: 07:00 a 22:00 hs | Sáb: 10:00 a 18:00 hs</p>
                <p><i className="ri-map-pin-line"></i> <a href="https://maps.app.goo.gl/ivaEBQ5XgKuNA9bQ6" target="_blank" rel="noreferrer">Ver en Google Maps 📍</a></p>
              </div>
            </div>
          </div>

          <form ref={formRef} className="footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="user_email"
              placeholder="Ingresa tu correo electrónico"
              className="footer__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="button footer__button">
              Suscribirme
            </button>
          </form>
          <p className={`footer__message ${messageColor}`}>{message}</p>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">DISCIPLINAS</h3>
            <ul className="footer__links">
              <li><a href="#program" className="footer__link">Entrenamiento Funcional</a></li>
              <li><a href="#program" className="footer__link">Spinning / Ciclismo</a></li>
              <li><a href="#program" className="footer__link">CrossFit & WOD</a></li>
              <li><a href="#program" className="footer__link">Body Pump & Combat</a></li>
              <li><a href="#program" className="footer__link">GAP, Core & TRX</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">AMENITIES</h3>
            <ul className="footer__links">
              <li><a href="#choose" className="footer__link">Rutinas Digitales QR</a></li>
              <li><a href="#choose" className="footer__link">Gabinete de Quiropraxia</a></li>
              <li><a href="#choose" className="footer__link">Nutricionista Incluida</a></li>
              <li><a href="#choose" className="footer__link">Sala Chill (Mate & Café)</a></li>
              <li><a href="#choose" className="footer__link">Vestuarios & Lockers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">UBICACIÓN & REDES</h3>
            <ul className="footer__links">
              <li><a href="https://maps.app.goo.gl/ivaEBQ5XgKuNA9bQ6" target="_blank" rel="noreferrer" className="footer__link">Hurlingham, Buenos Aires</a></li>
              <li><a href="https://www.instagram.com/bexchurlingham/" target="_blank" rel="noreferrer" className="footer__link">@bexchurlingham</a></li>
              <li><a href="https://www.facebook.com/BEXC.HURLINGHAM/" target="_blank" rel="noreferrer" className="footer__link">Facebook BEXC Hurlingham</a></li>
              <li><a href="https://www.instagram.com/boxeroriginal/" target="_blank" rel="noreferrer" className="footer__link">Tienda Boxer Original</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__group">
          <span className="footer__copy">
            &#169; BEXC 2.0 Todos los derechos reservados. | Desarrollado por{' '}
            <a
              href="https://waveframe.com.ar/"
              target="_blank"
              rel="noreferrer"
              className="footer__developer-link"
            >
              <strong>WaveFrame Studio</strong>
            </a>.
          </span>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/BEXC.HURLINGHAM/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="Facebook BEXC"
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/bexchurlingham/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="Instagram BEXC"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://wa.me/5491144062027"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="WhatsApp BEXC"
            >
              <i className="ri-whatsapp-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
