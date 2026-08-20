import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CalculateBmi({ onOpenFreePass }) {
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');
  const [result, setResult] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.calculate__content', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.calculate__img-container', {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!cm || !kg) {
      setResult({
        type: 'error',
        text: 'Por favor completá tu altura y peso para calcular 👨‍💻',
      });
      return;
    }

    const heightM = Number(cm) / 100;
    const weightKg = Number(kg);
    const bmi = Math.round(weightKg / (heightM * heightM));

    if (bmi < 18.5) {
      setResult({
        type: 'warning',
        bmi,
        status: 'Bajo Peso / Delgado',
        recommendation: (
          <>
            Te recomendamos nuestras disciplinas de <strong>Body Pump</strong> y <strong>Musculación</strong> para ganar masa muscular de forma sólida y progresiva.
          </>
        ),
      });
    } else if (bmi < 25) {
      setResult({
        type: 'success',
        bmi,
        status: 'IMC Saludable 🥳',
        recommendation: (
          <>
            ¡Excelente estado físico! Te sugerimos mantener tu vitalidad combinando <strong>CrossFit WOD</strong>, <strong>Spinning</strong> y <strong>Funcional</strong>.
          </>
        ),
      });
    } else if (bmi < 30) {
      setResult({
        type: 'warning',
        bmi,
        status: 'Sobrepeso Leve',
        recommendation: (
          <>
            Ideal para comenzar clases de <strong>Spinning</strong>, <strong>Core-HIIT</strong> y <strong>GAP</strong> para acelerar el metabolismo y quemar grasa eficientemente.
          </>
        ),
      });
    } else {
      setResult({
        type: 'alert',
        bmi,
        status: 'Sobrepeso / Obesidad',
        recommendation: (
          <>
            Te sugerimos iniciar con <strong>Entrenamiento Funcional</strong> adaptado y rutinas de caminata guiadas por nuestros profesores en sala.
          </>
        ),
      });
    }
  };

  return (
    <section className="calculate section" id="bmi" ref={sectionRef}>
      <div className="calculate__container container">
        <div className="calculate__content">
          <div className="calculate__header">
            <h2 className="section__subtitle">Evaluación de salud</h2>
            <h1 className="calculate__main-title">
              <span className="calculate__title-border">CALCULÁ TU</span> IMC Y METAS
            </h1>
            <p className="calculate__description">
              El Índice de Masa Corporal (IMC) evalúa tu rango de peso óptimo y te sugiere las mejores clases en BEXC 2.0.
            </p>
          </div>

          <form className="calculate__form" onSubmit={handleCalculate}>
            <div className="calculate__field">
              <label className="calculate__field-title">Altura</label>
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Ingresa tu altura en cm"
                  className="calculate__input"
                  value={cm}
                  onChange={(e) => setCm(e.target.value)}
                />
                <span className="calculate__unit">cm</span>
              </div>
            </div>

            <div className="calculate__field">
              <label className="calculate__field-title">Peso</label>
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Ingresa tu peso en kg"
                  className="calculate__input"
                  value={kg}
                  onChange={(e) => setKg(e.target.value)}
                />
                <span className="calculate__unit">kg</span>
              </div>
            </div>

            <button type="submit" className="button calculate__submit-btn">
              Calcular mi IMC <i className="ri-calculator-line"></i>
            </button>
          </form>

          {result && (
            <div className={`calculate__result-card ${result.type}`}>
              {result.bmi ? (
                <>
                  <div className="result__header">
                    <span className="result__bmi-val">
                      Tu IMC: <strong>{result.bmi}</strong>
                    </span>
                    <span className="result__status-badge">
                      {result.status}
                    </span>
                  </div>
                  <p className="result__recommendation">
                    <i className="ri-lightbulb-line"></i> {result.recommendation}
                  </p>
                </>
              ) : (
                <p className="result__error-text">{result.text}</p>
              )}
            </div>
          )}
        </div>

        <div className="calculate__img-container">
          <img src="/img/calculate-img.png" alt="Calculadora IMC BEXC" className="calculate__img" />
        </div>
      </div>
    </section>
  );
}
