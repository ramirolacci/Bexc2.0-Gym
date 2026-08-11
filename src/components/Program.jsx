import React from 'react';

export default function Program({ onOpenFreePass }) {
  const programs = [
    {
      id: 'funcional',
      img: '/img/program1.png',
      badge: 'POPULAR',
      title: 'Entrenamiento Funcional',
      description: 'Movimientos integrales para quemar grasa, ganar potencia y mejorar la movilidad diaria.',
    },
    {
      id: 'spinning',
      img: '/img/program2.png',
      badge: 'CARDIO HIGH',
      title: 'Spinning / Ciclismo',
      description: 'Clases intensivas sobre bici fija al ritmo de la música para maximizar resistencia y gasto calórico.',
    },
    {
      id: 'crossfit',
      img: '/img/program4.png',
      badge: 'FUERZA',
      title: 'CrossFit & WOD',
      description: 'Desafíos diarios de alta intensidad combinando levantamiento, gimnásticos y cardio.',
    },
    {
      id: 'bodypump',
      img: '/img/program3.png',
      badge: 'TONIFICACIÓN',
      title: 'Body Pump',
      description: 'Entrenamiento con barras y discos ajustables para esculpir todos los grupos musculares.',
    },
    {
      id: 'combat',
      img: '/img/program2.png',
      badge: 'ENERGÍA',
      title: 'Body Combat',
      description: 'Rutina inspirada en artes marciales para liberar estrés y quemar calorías intensamente.',
    },
    {
      id: 'gap',
      img: '/img/program1.png',
      badge: 'ESPECÍFICO',
      title: 'GAP (Glúteos, Abdomen, Piernas)',
      description: 'Foco directo en la firmeza y fortalecimiento del tren inferior y la zona media.',
    },
    {
      id: 'hiit',
      img: '/img/program4.png',
      badge: 'FAT BURN',
      title: 'Core - HIIT',
      description: 'Intervalos de alta intensidad combinados con trabajo estabilizador del núcleo.',
    },
    {
      id: 'step',
      img: '/img/program3.png',
      badge: 'RITMO',
      title: 'Step Localizado',
      description: 'Coreografías ágiles con escalón combinadas con ejercicios de tonificación localizada.',
    },
    {
      id: 'trx',
      img: '/img/program1.png',
      badge: 'AUTOCARGAS',
      title: 'TRX Suspensión',
      description: 'Trabajo contra la gravedad usando cintas en suspensión para máxima estabilidad y equilibrio.',
    },
  ];

  return (
    <section className="program section" id="program">
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">Entrená a tu ritmo</h2>
          <div className="section__titles">
            <h1 className="section__title-border">NUESTRAS</h1>
            <h1 className="section__title">DISCIPLINAS</h1>
          </div>
          <p className="section__description">
            Todas las clases grupales están incluidas con tu suscripción pase libre.
          </p>
        </div>

        <div className="program__container grid">
          {programs.map((prog) => (
            <article key={prog.id} className="program__card">
              <div className="program__header-box">
                <div className="program__shape">
                  <img src={prog.img} alt={prog.title} className="program__img" />
                </div>
                <span className="program__badge">{prog.badge}</span>
              </div>

              <h3 className="program__title">{prog.title}</h3>
              <p className="program__description">{prog.description}</p>

              <button
                className="program__button-cta button button__flex"
                onClick={onOpenFreePass}
              >
                Probar Clase Gratis <i className="ri-arrow-right-line"></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
