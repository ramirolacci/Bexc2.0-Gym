import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Mariana G.',
      location: 'Hurlingham',
      stars: 5,
      comment: '¡Las clases de Spinning y Body Pump son increíbles! El ambiente del gimnasio es re familiar y los profes siempre te corrigen la técnica en la sala.',
      role: 'Socia desde hace 2 años',
    },
    {
      id: 2,
      name: 'Lucas R.',
      location: 'Hurlingham',
      stars: 5,
      comment: 'El sistema de Rutinas QR me salvó. Escaneo el código en la maquina y veo exactamente el video de cómo hacer el ejercicio. Muy moderno y cómodo.',
      role: 'Socio de Musculación',
    },
    {
      id: 3,
      name: 'Camila P.',
      location: 'Villa Tesei',
      stars: 5,
      comment: 'Aproveché la evaluación nutricional gratuita y el gabinete de quiropraxia. Me cambió la postura y no volví a tener molestias entrenando.',
      role: 'Socia de Pase Libre',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial__card', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">Comunidad BEXC</h2>
          <div className="section__titles">
            <h1 className="section__title-border">LO QUE DICEN</h1>
            <h1 className="section__title">NUESTROS SOCIOS</h1>
          </div>
        </div>

        <div className="testimonials__container grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="testimonial__card">
              <div className="testimonial__stars">
                {[...Array(rev.stars)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <p className="testimonial__comment">"{rev.comment}"</p>
              <div className="testimonial__author">
                <h4 className="testimonial__name">{rev.name}</h4>
                <span className="testimonial__meta">{rev.role} • {rev.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
