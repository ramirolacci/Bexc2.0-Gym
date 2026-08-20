import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { id: 1,  src: '/img/gallery/gym1.png',  label: 'Instalaciones BEXC' },
  { id: 2,  src: '/img/gallery/gym2.png',  label: 'Sala de Pesas' },
  { id: 3,  src: '/img/gallery/gym3.png',  label: 'Área Cardio' },
  { id: 4,  src: '/img/gallery/gym4.png',  label: 'Zona CrossFit' },
  { id: 5,  src: '/img/gallery/gym5.png',  label: 'Musculación' },
  { id: 6,  src: '/img/gallery/gym6.png',  label: 'Box Funcional' },
  { id: 7,  src: '/img/gallery/gym7.png',  label: 'Clases Grupales' },
  { id: 8,  src: '/img/gallery/gym8.png',  label: 'Entrenamiento' },
  { id: 9,  src: '/img/gallery/gym9.png',  label: 'Equipamiento' },
  { id: 10, src: '/img/gallery/gym10.png', label: 'Comunidad BEXC' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [shouldRenderLb, setShouldRenderLb] = useState(false);
  const [isLbClosing, setIsLbClosing] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery__item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      setActivePhotoIndex(lightbox);
      setShouldRenderLb(true);
      setIsLbClosing(false);
    } else if (shouldRenderLb) {
      setIsLbClosing(true);
      const timer = setTimeout(() => {
        setShouldRenderLb(false);
        setIsLbClosing(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [lightbox]);

  const closeLightbox = () => {
    setIsLbClosing(true);
    setTimeout(() => {
      setLightbox(null);
    }, 250);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!shouldRenderLb) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightbox((p) => (p === null ? 0 : (p + 1) % photos.length));
      if (e.key === 'ArrowLeft') setLightbox((p) => (p === null ? 0 : (p - 1 + photos.length) % photos.length));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [shouldRenderLb]);

  const renderPhotoCard = (photo, index, itemClass) => (
    <div
      key={photo.id}
      className={`gallery__item ${itemClass}`}
      onClick={() => setLightbox(index)}
      role="button"
      tabIndex={0}
      aria-label={`Ver foto: ${photo.label}`}
    >
      <img src={photo.src} alt={photo.label} className="gallery__img" loading="lazy" />
      <div className="gallery__overlay">
        <div className="gallery__overlay-content">
          <i className="ri-zoom-in-line gallery__zoom-icon"></i>
          <span className="gallery__label">{photo.label}</span>
        </div>
      </div>
    </div>
  );

  const currentPhoto = photos[activePhotoIndex] || photos[0];

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container gallery__container">
        <div className="section__data">
          <h2 className="section__subtitle">Conocé nuestras instalaciones</h2>
          <div className="section__titles">
            <h1 className="section__title-border">NUESTRO</h1>
            <h1 className="section__title">GIMNASIO</h1>
          </div>
          <p className="section__description">
            Instalaciones de primer nivel en Hurlingham. Equipamiento de última generación,
            salas amplias y el mejor ambiente para entrenar.
          </p>
        </div>

        <div className="gallery__grid">
          <div className="gallery__block gallery__block--1">
            {renderPhotoCard(photos[0], 0, 'gallery__item--tall')}
            {renderPhotoCard(photos[1], 1, 'gallery__item--stacked-1')}
            {renderPhotoCard(photos[2], 2, 'gallery__item--stacked-2')}
          </div>

          <div className="gallery__block gallery__block--2">
            {renderPhotoCard(photos[3], 3, 'gallery__item--stacked-1')}
            {renderPhotoCard(photos[4], 4, 'gallery__item--stacked-2')}
            {renderPhotoCard(photos[5], 5, 'gallery__item--tall')}
          </div>
        </div>

        <div className="gallery__actions">
          <button className="button hero__cta-secondary gallery__more-btn" onClick={() => setLightbox(0)}>
            <i className="ri-gallery-line"></i> Ver Galería Completa ({photos.length} Fotos)
          </button>
        </div>
      </div>

      {/* Lightbox with smooth Fade-In / Fade-Out & Image Swap Transition */}
      {shouldRenderLb && (
        <div
          className={`gallery__lightbox ${isLbClosing ? 'lb-closing' : 'lb-opening'}`}
          onClick={closeLightbox}
        >
          <button className="gallery__lb-close" onClick={closeLightbox} aria-label="Cerrar">
            <i className="ri-close-line"></i>
          </button>

          <button
            className="gallery__lb-nav gallery__lb-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p === null ? 0 : (p - 1 + photos.length) % photos.length)); }}
            aria-label="Foto anterior"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          <div
            key={currentPhoto.id}
            className="gallery__lb-img-wrap gallery__lb-img-swap"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.label}
              className="gallery__lb-img"
            />
            <p className="gallery__lb-label">
              {currentPhoto.label} ({activePhotoIndex + 1} / {photos.length})
            </p>
          </div>

          <button
            className="gallery__lb-nav gallery__lb-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p === null ? 0 : (p + 1) % photos.length)); }}
            aria-label="Foto siguiente"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <div className="gallery__lb-dots">
            {photos.map((_, i) => (
              <span
                key={i}
                className={`gallery__lb-dot ${i === activePhotoIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
