import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ChooseUs({ onOpenFreePass }) {
  const sectionRef = useRef(null);
  const count1Ref = useRef(null);
  const count2Ref = useRef(null);

  const amenities = [
    {
      icon: 'ri-qr-scan-2-line',
      title: 'Rutinas Digitales QR',
      description: 'Escaneá los códigos en la sala para ver tus ejercicios y videos guiados al instante.',
    },
    {
      icon: 'ri-health-book-line',
      title: 'Gabinete de Quiropraxia',
      description: 'Ajustes vertebrales y cuidado articular dentro del gimnasio para entrenar sin dolores.',
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Nutricionista Incluida',
      description: 'Evaluación inicial y plan alimentario adaptado a tu meta personal.',
    },
    {
      icon: 'ri-cup-line',
      title: 'Sala Chill & Comunidad',
      description: 'Espacio relajado para tomar mate, café, descansar y conectar con la familia BEXC.',
    },
    {
      icon: 'ri-user-shared-line',
      title: 'Vestuarios & Lockers',
      description: 'Duchas individuales con agua caliente y lockers de máxima seguridad.',
    },
    {
      icon: 'ri-t-shirt-air-line',
      title: 'Tienda Boxer Original',
      description: 'Indumentaria deportiva exclusiva de la marca oficial @boxeroriginal.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Left side Image & Triangles Reveal
      gsap.fromTo(
        '.choose__images',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // 2. Right side Header Reveal
      gsap.fromTo(
        '.choose__content .section__data',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // 3. Description paragraph
      gsap.fromTo(
        '.choose__description',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );

      // 4. Amenities Grid Stagger Reveal
      gsap.fromTo(
        '.choose__amenity-card',
        { opacity: 0, y: 25, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.choose__amenities-grid',
            start: 'top 82%',
          },
        }
      );

      // 5. Stat Counter 1: 0 to 500
      const obj1 = { val: 0 };
      gsap.to(obj1, {
        val: 500,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.choose__data',
          start: 'top 88%',
        },
        onUpdate: () => {
          if (count1Ref.current) {
            count1Ref.current.innerText = `+${Math.floor(obj1.val)}`;
          }
        },
      });

      // 6. Stat Counter 2: 0 to 9
      const obj2 = { val: 0 };
      gsap.to(obj2, {
        val: 9,
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.choose__data',
          start: 'top 88%',
        },
        onUpdate: () => {
          if (count2Ref.current) {
            count2Ref.current.innerText = `+${Math.floor(obj2.val)}`;
          }
        },
      });

      // 7. Stat Cards Stagger Reveal
      gsap.fromTo(
        '.choose__group',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.choose__data',
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="choose section" id="choose" ref={sectionRef}>
      <div className="choose__overflow">
        <div className="container">
          {/* TOP GRID: Image on Left, Content (Title & 6 Feature Cards) on Right */}
          <div className="choose__top-grid">
            <div className="choose__images">
              <div className="choose__triangles">
                <div className="choose__triangle choose__triangle-1"></div>
                <div className="choose__triangle choose__triangle-2"></div>
                <div className="choose__triangle choose__triangle-3"></div>
              </div>
              <div className="choose__img-wrapper">
                <img src="/img/choose-img.png" alt="Instalaciones BEXC Gym" className="choose__img" />
              </div>
            </div>

            <div className="choose__content">
              <div className="section__data section__data--left">
                <h2 className="section__subtitle">Viví la experiencia BEXC</h2>
                <div className="section__titles">
                  <h1 className="section__title-border">¿POR QUÉ</h1>
                  <h1 className="section__title">ELEGIRNOS?</h1>
                </div>
              </div>

              <p className="choose__description">
                Espacio renovado con excelente ambiente, profesores permanentes en sala y todas las comodidades que necesitás para superarte en Hurlingham.
              </p>

              <div className="choose__amenities-grid grid">
                {amenities.map((item, index) => (
                  <div key={index} className="choose__amenity-card">
                    <div className="choose__amenity-icon-box">
                      <i className={`${item.icon} choose__amenity-icon`}></i>
                    </div>
                    <div className="choose__amenity-info">
                      <h4 className="choose__amenity-title">{item.title}</h4>
                      <p className="choose__amenity-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: 4 Stat Cards in 1 Single Line */}
          <div className="choose__data">
            <div className="choose__group">
              <h3 className="choose__number" ref={count1Ref}>+0</h3>
              <p className="choose__subtitle">Socios Activos</p>
            </div>
            <div className="choose__group">
              <h3 className="choose__number" ref={count2Ref}>+0</h3>
              <p className="choose__subtitle">Disciplinas</p>
            </div>
            <div className="choose__group">
              <h3 className="choose__number">100%</h3>
              <p className="choose__subtitle">Asesoramiento en Sala</p>
            </div>
            <div className="choose__group">
              <h3 className="choose__number">QR</h3>
              <p className="choose__subtitle">Rutinas Digitales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
