import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

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
      a: 'Estamos ubicados en Tte. Gral. Julio Argentino Roca 1301, Hurlingham, Provincia de Buenos Aires.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">Resolvemos tus dudas</h2>
          <div className="section__titles">
            <h1 className="section__title-border">PREGUNTAS</h1>
            <h1 className="section__title">FRECUENTES</h1>
          </div>
        </div>

        <div className="faq__container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item-open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq__header">
                <h4 className="faq__question">{faq.q}</h4>
                <i className={`ri-chevron-down-line faq__icon ${openIndex === index ? 'rotate-icon' : ''}`}></i>
              </div>
              {openIndex === index && (
                <div className="faq__content">
                  <p className="faq__answer">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
