import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const originalReviews = [
    {
      id: 1,
      name: 'Mariana G.',
      location: 'Hurlingham',
      stars: 5,
      tag: 'Spinning & Pump',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      comment: '¡Las clases de Spinning y Body Pump son increíbles! El ambiente del gimnasio es re familiar y los profes siempre te corrigen la técnica en la sala.',
      role: 'Socia hace 2 años',
    },
    {
      id: 2,
      name: 'Lucas R.',
      location: 'Hurlingham',
      stars: 5,
      tag: 'Musculación',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      comment: 'El sistema de Rutinas QR me salvó. Escaneo el código en la máquina y veo exactamente el video de cómo hacer el ejercicio. Muy moderno y cómodo.',
      role: 'Socio de Musculación',
    },
    {
      id: 3,
      name: 'Camila P.',
      location: 'Villa Tesei',
      stars: 5,
      tag: 'Quiropraxia & Nutrición',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      comment: 'Aproveché la nutricionista incluida y el gabinete de quiropraxia. Me cambió la postura y no volví a tener molestias entrenando.',
      role: 'Socia Pase Libre',
    },
    {
      id: 4,
      name: 'Gonzalo M.',
      location: 'Hurlingham',
      stars: 5,
      tag: 'CrossFit WOD',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      comment: 'Excelente nivel de equipamiento y mancuernas. El área de CrossFit WOD tiene todo lo necesario para entrenar fuerte todos los días sin esperar turno.',
      role: 'Socio de CrossFit',
    },
    {
      id: 5,
      name: 'Sofía L.',
      location: 'William Morris',
      stars: 5,
      tag: 'Amenities & Chill',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      comment: 'Me encanta la Sala Chill y los vestuarios con lockers individuales. Termino de entrenar, me baño tranquila y puedo seguir con mi día súper relajada.',
      role: 'Socia VIP',
    },
    {
      id: 6,
      name: 'Facundo T.',
      location: 'Hurlingham',
      stars: 5,
      tag: 'Entrenamiento Funcional',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
      comment: 'Los profesores de la mañana son unos genios. Te arman la rutina digital a medida en la app y te van haciendo el seguimiento semana a semana.',
      role: 'Socio Funcional',
    },
    {
      id: 7,
      name: 'Valentina K.',
      location: 'El Palomar',
      stars: 5,
      tag: 'GAP & Spinning',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
      comment: 'Superó mis expectativas. Vengo a clases de GAP y Spinning después del trabajo y la energía del grupo y la música es espectacular. ¡Recomiendo 100%!',
      role: 'Socia Grupal',
    },
    {
      id: 8,
      name: 'Ignacio B.',
      location: 'Hurlingham',
      stars: 5,
      tag: 'Tienda Boxer',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
      comment: 'Compré accesorios y suplementación deportiva en la tienda Boxer del gym a súper buen precio. Tienen excelente atención y asesoramiento constante.',
      role: 'Socio Musculación',
    },
  ];

  // Triplicate the array for seamless infinite looping in both directions
  const reviews = [...originalReviews, ...originalReviews, ...originalReviews];

  useEffect(() => {
    if (sliderRef.current) {
      const setWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = setWidth;
    }
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth } = sliderRef.current;
    const setWidth = scrollWidth / 3;

    if (scrollLeft >= setWidth * 2) {
      sliderRef.current.scrollLeft -= setWidth;
    } else if (scrollLeft <= 10) {
      sliderRef.current.scrollLeft += setWidth;
    }
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section__data--center', {
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section__data section__data--center">
          <h2 className="section__subtitle">Comunidad BEXC</h2>
          <div className="section__titles">
            <h1 className="section__title-border">LO QUE DICEN</h1>
            <h1 className="section__title">NUESTROS SOCIOS</h1>
          </div>
        </div>

        <div
          ref={sliderRef}
          className={`testimonials__slider ${isMouseDown ? 'is-dragging' : ''}`}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {reviews.map((rev, index) => (
            <div key={`${rev.id}-${index}`} className="testimonial__card">
              <div className="testimonial__card-top">
                <div className="testimonial__stars">
                  {[...Array(rev.stars)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <span className="testimonial__tag">{rev.tag}</span>
              </div>
              <p className="testimonial__comment">"{rev.comment}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">
                  <img src={rev.avatar} alt={rev.name} className="testimonial__avatar-img" />
                </div>
                <div>
                  <h4 className="testimonial__name">{rev.name}</h4>
                  <span className="testimonial__meta">{rev.role} • {rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
