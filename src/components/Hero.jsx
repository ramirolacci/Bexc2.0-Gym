import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenFreePass }) {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const pillsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 })
        .fromTo(subtitleRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4')
        .fromTo(titleRef.current, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.4')
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(pillsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo(imageRef.current, { opacity: 0, scale: 0.85, rotate: 2 }, { opacity: 1, scale: 1, rotate: 0, duration: 1 }, '-=0.8');

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: 60,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home section" id="home" ref={heroRef}>
      <div className="home__container container grid">
        <div className="home__data">
          <div className="home__welcome-badge" ref={badgeRef}>
            <i className="ri-fire-fill"></i>
            <span>💪 BIENVENIDOS A BEXC 2.0 HURLINGHAM</span>
          </div>

          <h2 className="home__subtitle" ref={subtitleRef}>TU CAMBIO</h2>
          <h1 className="home__title" ref={titleRef}>EMPIEZA HOY</h1>

          <p className="home__description" ref={descRef}>
            Entrená, conectá y superate en el centro de acondicionamiento físico más completo de Hurlingham.
            Rutinas digitales QR, musculación, clases grupales y nutrición en un solo lugar.
          </p>

          <div className="home__buttons" ref={buttonsRef}>
            <button className="button button__flex hero__cta-main pulse-glow" onClick={onOpenFreePass}>
              Pase Libre 1 Día Gratis <i className="ri-arrow-right-line"></i>
            </button>

            <a href="#pricing" className="button button__flex hero__cta-secondary">
              Ver Planes <i className="ri-price-tag-3-line"></i>
            </a>
          </div>

          <div className="hero__features-pills" ref={pillsRef}>
            <span><i className="ri-checkbox-circle-fill"></i> Sin contrato de permanencia</span>
            <span><i className="ri-checkbox-circle-fill"></i> Nutricionista Incluida</span>
            <span><i className="ri-checkbox-circle-fill"></i> Rutinas por QR</span>
          </div>
        </div>

        <div className="home__images" ref={imageRef}>
          <div className="home__img-wrapper">
            <img src="/img/home-img.png" alt="Atleta BEXC Gym" className="home__img" />
          </div>
          <div className="home__triangle home__triangle-3"></div>
          <div className="home__triangle home__triangle-2"></div>
          <div className="home__triangle home__triangle-1"></div>
        </div>
      </div>
    </section>
  );
}
