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
      // Counter 1: 0 to 500
      const obj1 = { val: 0 };
      gsap.to(obj1, {
        val: 500,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        onUpdate: () => {
          if (count1Ref.current) {
            count1Ref.current.innerText = `+${Math.floor(obj1.val)}`;
          }
        },
      });

      // Counter 2: 0 to 9
      const obj2 = { val: 0 };
      gsap.to(obj2, {
        val: 9,
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        onUpdate: () => {
          if (count2Ref.current) {
            count2Ref.current.innerText = `+${Math.floor(obj2.val)}`;
          }
        },
      });

      // Amenities stagger
      gsap.from('.choose__amenity-card', {
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Image animation
      gsap.from('.choose__img', {
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
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
