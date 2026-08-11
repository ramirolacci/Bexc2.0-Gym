import React from 'react';

export default function ChooseUs({ onOpenFreePass }) {
  const stats = [
    { id: 1, number: '+500', subtitle: 'Socios Activos' },
    { id: 2, number: '+9', subtitle: 'Disciplinas' },
    { id: 3, number: '100%', subtitle: 'Asesoramiento en Sala' },
    { id: 4, number: 'QR', subtitle: 'Rutinas Digitales' },
  ];

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

  return (
    <section className="choose section" id="choose">
      <div className="choose__overflow">
        <div className="choose__container container grid">
          <div className="choose__content">
            <div className="section__data">
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

            <div className="choose__data">
              {stats.map((stat) => (
                <div key={stat.id} className="choose__group">
                  <h3 className="choose__number">{stat.number}</h3>
                  <p className="choose__subtitle">{stat.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="choose__images">
            <img src="/img/choose-img.png" alt="Instalaciones BEXC Gym" className="choose__img" />
            <div className="choose__triangle choose__triangle-1"></div>
            <div className="choose__triangle choose__triangle-2"></div>
            <div className="choose__triangle choose__triangle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
