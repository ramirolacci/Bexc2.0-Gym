import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing({ onOpenFreePass }) {
  const sectionRef = useRef(null);

  const plans = [
    {
      id: 'efectivo',
      img: '/img/pricing1.png',
      title: 'ABONO EFECTIVO',
      price: '$46.000',
      period: '/ mes',
      active: false,
      badge: 'MEJOR PRECIO',
      features: [
        { text: 'Acceso Pase Libre Ilimitado', included: true },
        { text: 'Musculación + Clases Grupales', included: true },
        { text: 'Rutinas Digitales con QR', included: true },
        { text: 'Asesoramiento de Profesores en Sala', included: true },
        { text: 'Evaluación Nutricional Incluida', included: true },
        { text: 'Vestuarios con Duchas & Lockers', included: true },
      ],
    },
    {
      id: 'digital',
      img: '/img/pricing2.png',
      title: 'ABONO DIGITAL',
      price: '$50.000',
      period: '/ mes',
      active: true,
      badge: 'MÁS POPULAR',
      features: [
        { text: 'Pago con Transferencia / MercadoPago', included: true },
        { text: 'Acceso Pase Libre Ilimitado', included: true },
        { text: 'Musculación + Clases Grupales', included: true },
        { text: 'Rutinas Digitales con QR', included: true },
        { text: 'Asesoramiento de Profesores en Sala', included: true },
        { text: 'Evaluación Nutricional Incluida', included: true },
        { text: 'Vestuarios con Duchas & Lockers', included: true },
      ],
    },
    {
      id: 'familiar',
      img: '/img/pricing3.png',
      title: 'PACK FAMILIAR',
      price: 'CONSULTAR',
      period: 'Hasta 3 integrantes',
      active: false,
      badge: 'PROMO GRUPAL',
      features: [
        { text: 'Descuento especial por grupo familiar', included: true },
        { text: 'Pase Libre Ilimitado para todos', included: true },
        { text: 'Acceso a todas las clases grupales', included: true },
        { text: 'Rutinas Digitales QR individuales', included: true },
        { text: 'Asesoramiento permanente en sala', included: true },
        { text: 'Beneficios acumulables', included: true },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing__card', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pricing section" id="pricing" ref={sectionRef}>
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">Invertí en tu salud</h2>
          <div className="section__titles">
            <h1 className="section__title-border">NUESTROS</h1>
            <h1 className="section__title">PLANES Y PRECIOS</h1>
          </div>
          <p className="section__description">
            Sin contratos de permanencia ni cobros ocultos. Llavero de acceso único: $1.000.
          </p>
        </div>

        <div className="pricing__container grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`pricing__card ${plan.active ? 'pricing__card-active' : ''}`}
            >
              <div className="pricing__badge">{plan.badge}</div>

              <header className="pricing__header">
                <div className="pricing__shape">
                  <img src={plan.img} alt={plan.title} className="pricing__img" />
                </div>
                <h1 className="pricing__title">{plan.title}</h1>
                <div className="pricing__price-box">
                  <h2 className="pricing__number">{plan.price}</h2>
                  <span className="pricing__period">{plan.period}</span>
                </div>
              </header>

              <ul className="pricing__list">
                {plan.features.map((feat, index) => (
                  <li
                    key={index}
                    className={`pricing__item ${!feat.included ? 'pricing__item-opacity' : ''}`}
                  >
                    <i className="ri-checkbox-circle-fill"></i> {feat.text}
                  </li>
                ))}
              </ul>

              <button
                className="button button__flex pricing__button"
                onClick={onOpenFreePass}
              >
                Inscribirme Ahora <i className="ri-arrow-right-line"></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
