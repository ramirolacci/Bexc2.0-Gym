import React, { useState } from 'react';

export default function CalculateBmi({ onOpenFreePass }) {
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');
  const [result, setResult] = useState(null);

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
        recommendation: 'Te recomendamos nuestras disciplinas de Body Pump y Musculación para hipertrofia y desarrollo muscular sólido.',
      });
    } else if (bmi < 25) {
      setResult({
        type: 'success',
        bmi,
        status: 'IMC Saludable 🥳',
        recommendation: '¡Excelente estado! Mantenete en forma combinando CrossFit, Spinning y Funcional.',
      });
    } else if (bmi < 30) {
      setResult({
        type: 'warning',
        bmi,
        status: 'Sobrepeso Leve',
        recommendation: 'Ideal para iniciar con Spinning, Core-HIIT y GAP para acelerar el metabolismo y quemar grasa eficientemente.',
      });
    } else {
      setResult({
        type: 'alert',
        bmi,
        status: 'Sobrepeso / Obesidad',
        recommendation: 'Te sugerimos iniciar con Entrenamiento Funcional graduado y caminatas asistidas en sala con nuestros profesores.',
      });
    }
  };

  return (
    <section className="calculate section">
      <div className="calculate__container container grid">
        <div className="calculate__content">
          <div className="section__titles">
            <h1 className="section__title-border">CALCULÁ TU</h1>
            <h1 className="section__title">IMC Y METAS</h1>
          </div>

          <p className="calculate__description">
            El Índice de Masa Corporal (IMC) evalúa tu rango de peso óptimo y te sugiere las mejores clases en BEXC 2.0.
          </p>

          <form className="calculate__form" onSubmit={handleCalculate}>
            <div className="calculate__box">
              <input
                type="number"
                placeholder="Altura en cm (ej: 175)"
                className="calculate__input"
                value={cm}
                onChange={(e) => setCm(e.target.value)}
              />
              <label className="calculate__label">cm</label>
            </div>

            <div className="calculate__box">
              <input
                type="number"
                placeholder="Peso en kg (ej: 70)"
                className="calculate__input"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
              />
              <label className="calculate__label">kg</label>
            </div>

            <button type="submit" className="button button__flex">
              Calcular Mi Recomendación <i className="ri-arrow-right-line"></i>
            </button>
          </form>

          {result && (
            <div className={`calculate__result-card ${result.type}`}>
              {result.bmi ? (
                <>
                  <div className="result__header">
                    <span className="result__bmi-val">Tu IMC: <strong>{result.bmi}</strong></span>
                    <span className="result__status">{result.status}</span>
                  </div>
                  <p className="result__recommendation">
                    <i className="ri-lightbulb-line"></i> {result.recommendation}
                  </p>
                  <button
                    className="button button__flex result__cta-btn"
                    onClick={onOpenFreePass}
                  >
                    Probar esta clase gratis <i className="ri-whatsapp-line"></i>
                  </button>
                </>
              ) : (
                <p className="result__error-text">{result.text}</p>
              )}
            </div>
          )}
        </div>

        <img src="/img/calculate-img.png" alt="Calculadora IMC BEXC" className="calculate__img" />
      </div>
    </section>
  );
}
