import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '¿Cuáles son los horarios de atención de BEXC 2.0?',
      a: 'Abrimos de Lunes a Viernes de 07:00 a 22:00 hs continuado y los Sábados de 10:00 a 18:00 hs. ¡Próximamente también abriremos los domingos!',
    },
    {
      q: '¿Cómo funciona la primera clase de prueba gratis?',
      a: 'Podés solicitar tu Pase Libre de 1 Día sin costo por WhatsApp o haciendo clic en el botón "Pase Gratis 1 Día". Venís con ropa deportiva, tu botella de agua y probás todas las instalaciones.',
    },
    {
      q: '¿Las clases grupales están incluidas en el pase libre?',
      a: '¡Sí! Tu suscripción mensual (Efectivo o Digital) incluye acceso ilimitado a la sala de musculación y a todas las clases grupales (Spinning, CrossFit, Body Pump, GAP, Combat, TRX, HIIT).',
    },
    {
      q: '¿Qué es el costo del llavero de acceso?',
      a: 'Es un pago único de $1.000 para la entrega de tu llavero inteligente de ingreso automatizado al gimnasio.',
    },
    {
      q: '¿Cómo funciona el beneficio de la Nutricionista?',
      a: 'Con tu pase mensual tenés incluida una evaluación nutricional inicial para armar un plan de alimentación alineado a tu objetivo físico.',
    },
    {
      q: '¿Dónde está ubicado el gimnasio en Hurlingham?',
      a: 'Estamos ubicados en Av. Tte. Gral. Julio Argentino Roca 1301, Hurlingham, Provincia de Buenos Aires.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="faq__container container">
        <div className="faq__content">
          <div className="section__data faq__header-data">
            <h2 className="section__subtitle">Resolvemos tus dudas</h2>
            <div className="section__titles">
              <h1 className="section__title-border">PREGUNTAS</h1>
              <h1 className="section__title">FRECUENTES</h1>
            </div>
          </div>

          <div className="faq__list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq__item ${isOpen ? 'faq__item-open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq__item-header">
                    <h4 className="faq__question">{faq.q}</h4>
                    <i className={`ri-arrow-down-s-line faq__icon ${isOpen ? 'rotate-icon' : ''}`}></i>
                  </div>
                  {isOpen && (
                    <div className="faq__answer-box">
                      <p className="faq__answer">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="faq__map-wrapper">
          <div className="faq__map-card">
            <div className="faq__map-header">
              <i className="ri-map-pin-2-fill faq__map-pin"></i>
              <div>
                <h4 className="faq__map-title">Ubicación del Gimnasio</h4>
                <p className="faq__map-address">Tte. Gral. Julio A. Roca 1301, Hurlingham</p>
              </div>
            </div>

            <div className="faq__map-iframe-box">
              <iframe
                title="Ubicación BEXC 2.0 Gym Hurlingham"
                src="https://maps.google.com/maps?q=Av.+Tte.+Gral.+Julio+Argentino+Roca+1301,+Hurlingham,+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="faq__map-footer">
              <a
                href="https://maps.google.com/?q=Av.+Tte.+Gral.+Julio+Argentino+Roca+1301,+Hurlingham"
                target="_blank"
                rel="noopener noreferrer"
                className="button faq__map-btn"
              >
                Abrir en Google Maps <i className="ri-external-link-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
