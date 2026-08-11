import React from 'react';

export default function Logos() {
  const highlights = [
    { icon: 'ri-qr-code-line', title: 'Rutinas por QR', subtitle: 'Escaneo en sala' },
    { icon: 'ri-restaurant-line', title: 'Nutrición Gratis', subtitle: 'Evaluación inicial' },
    { icon: 'ri-health-book-line', title: 'Quiropraxia', subtitle: 'Gabinete propio' },
    { icon: 'ri-t-shirt-line', title: 'Boxer Original', subtitle: 'Tienda de ropa' },
  ];

  return (
    <section className="logos section">
      <div className="logos__container container grid">
        {highlights.map((item, index) => (
          <div key={index} className="logos__card">
            <i className={`${item.icon} logos__card-icon`}></i>
            <div className="logos__card-info">
              <h4 className="logos__card-title">{item.title}</h4>
              <span className="logos__card-subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
