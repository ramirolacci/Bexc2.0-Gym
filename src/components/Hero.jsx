import React from 'react';

export default function Hero({ onOpenFreePass }) {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <div className="home__welcome-badge">
            <i className="ri-fire-fill"></i>
            <span>💪 BIENVENIDOS A BEXC 2.0 HURLINGHAM</span>
          </div>

          <h2 className="home__subtitle">TU CAMBIO</h2>
          <h1 className="home__title">EMPIEZA HOY</h1>

          <p className="home__description">
            Entrená, conectá y superate en el centro de acondicionamiento físico más completo de Hurlingham.
            Rutinas digitales QR, musculación, clases grupales y nutrición en un solo lugar.
          </p>

          <div className="home__buttons">
            <button className="button button__flex hero__cta-main" onClick={onOpenFreePass}>
              Pase Libre 1 Día Gratis <i className="ri-arrow-right-line"></i>
            </button>

            <a href="#pricing" className="button button__flex hero__cta-secondary">
              Ver Planes <i className="ri-price-tag-3-line"></i>
            </a>
          </div>

          <div className="hero__features-pills">
            <span><i className="ri-checkbox-circle-fill"></i> Sin contrato de permanencia</span>
            <span><i className="ri-checkbox-circle-fill"></i> Nutricionista Incluida</span>
            <span><i className="ri-checkbox-circle-fill"></i> Rutinas por QR</span>
          </div>
        </div>

        <div className="home__images">
          <div className="home__img-wrapper">
            <img src="/img/home-img.png" alt="Atleta BEXC Gym" className="home__img" />
          </div>
          <div className="home__triangle home__triangle-3"></div>
          <div className="home__triangle home__triangle-2"></div>
          <div className="home__triangle home__triangle-1"></div>
        </div>
      </div>
    </section>
  );
}
