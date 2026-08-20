import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ClassSchedule({ onOpenFreePass }) {
  const [activeDay, setActiveDay] = useState('lunes');
  const gridRef = useRef(null);

  const scheduleData = {
    lunes: [
      { time: '08:00 hs', class: 'Spinning', trainer: 'Profe Matias', room: 'Sala 1' },
      { time: '09:30 hs', class: 'Body Pump', trainer: 'Profe Sofia', room: 'Sala Principal' },
      { time: '17:00 hs', class: 'GAP & Core', trainer: 'Profe Lucía', room: 'Sala 2' },
      { time: '18:30 hs', class: 'CrossFit WOD', trainer: 'Profe Ramiro', room: 'Box Funcional' },
      { time: '19:30 hs', class: 'Spinning', trainer: 'Profe Matias', room: 'Sala 1' },
      { time: '20:30 hs', class: 'Entrenamiento Funcional', trainer: 'Profe Diego', room: 'Box Funcional' },
    ],
    martes: [
      { time: '08:30 hs', class: 'Entrenamiento Funcional', trainer: 'Profe Diego', room: 'Box Funcional' },
      { time: '10:00 hs', class: 'Step Localizado', trainer: 'Profe Lucía', room: 'Sala 2' },
      { time: '17:30 hs', class: 'TRX Suspensión', trainer: 'Profe Ramiro', room: 'Box Funcional' },
      { time: '19:00 hs', class: 'Body Combat', trainer: 'Profe Sofia', room: 'Sala Principal' },
      { time: '20:00 hs', class: 'Core - HIIT', trainer: 'Profe Matias', room: 'Box Funcional' },
    ],
    miercoles: [
      { time: '08:00 hs', class: 'Spinning', trainer: 'Profe Matias', room: 'Sala 1' },
      { time: '09:30 hs', class: 'Body Pump', trainer: 'Profe Sofia', room: 'Sala Principal' },
      { time: '17:00 hs', class: 'GAP & Core', trainer: 'Profe Lucía', room: 'Sala 2' },
      { time: '18:30 hs', class: 'CrossFit WOD', trainer: 'Profe Ramiro', room: 'Box Funcional' },
      { time: '19:30 hs', class: 'Spinning', trainer: 'Profe Matias', room: 'Sala 1' },
      { time: '20:30 hs', class: 'Entrenamiento Funcional', trainer: 'Profe Diego', room: 'Box Funcional' },
    ],
    jueves: [
      { time: '08:30 hs', class: 'Entrenamiento Funcional', trainer: 'Profe Diego', room: 'Box Funcional' },
      { time: '10:00 hs', class: 'Step Localizado', trainer: 'Profe Lucía', room: 'Sala 2' },
      { time: '17:30 hs', class: 'TRX Suspensión', trainer: 'Profe Ramiro', room: 'Box Funcional' },
      { time: '19:00 hs', class: 'Body Combat', trainer: 'Profe Sofia', room: 'Sala Principal' },
      { time: '20:00 hs', class: 'Core - HIIT', trainer: 'Profe Matias', room: 'Box Funcional' },
    ],
    viernes: [
      { time: '08:00 hs', class: 'Spinning', trainer: 'Profe Matias', room: 'Sala 1' },
      { time: '09:30 hs', class: 'Body Pump', trainer: 'Profe Sofia', room: 'Sala Principal' },
      { time: '17:30 hs', class: 'CrossFit WOD', trainer: 'Profe Ramiro', room: 'Box Funcional' },
      { time: '19:00 hs', class: 'Spinning Especial', trainer: 'Profe Matias', room: 'Sala 1' },
      { time: '20:00 hs', class: 'Funcional / Core', trainer: 'Profe Diego', room: 'Box Funcional' },
    ],
    sabado: [
      { time: '10:30 hs', class: 'Super Funcional Sábado', trainer: 'Staff BEXC', room: 'Box Funcional' },
      { time: '11:30 hs', class: 'Spinning Sábado', trainer: 'Profe Matias', room: 'Sala 1' },
      { time: '15:00 hs', class: 'CrossFit & WOD Abierto', trainer: 'Staff BEXC', room: 'Box Funcional' },
    ],
  };

  const days = [
    { id: 'lunes', label: 'Lunes' },
    { id: 'martes', label: 'Martes' },
    { id: 'miercoles', label: 'Miércoles' },
    { id: 'jueves', label: 'Jueves' },
    { id: 'viernes', label: 'Viernes' },
    { id: 'sabado', label: 'Sábado' },
  ];

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeDay]);

  return (
    <section className="schedule section" id="schedule">
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">Planificá tu semana</h2>
          <div className="section__titles">
            <h1 className="section__title-border">HORARIOS DE</h1>
            <h1 className="section__title">CLASES GRUPALES</h1>
          </div>
          <p className="section__description">
            Abierto Lunes a Viernes de 07:00 a 22:00 hs | Sábados de 10:00 a 18:00 hs.
          </p>
        </div>

        <div className="schedule__tabs">
          {days.map((day) => (
            <button
              key={day.id}
              className={`schedule__tab ${activeDay === day.id ? 'active-tab' : ''}`}
              onClick={() => setActiveDay(day.id)}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="schedule__grid" ref={gridRef}>
          {scheduleData[activeDay].map((item, index) => (
            <div key={index} className="schedule__card">
              <div className="schedule__card-header">
                <div className="schedule__time">
                  <i className="ri-time-line"></i> {item.time}
                </div>
              </div>
              <div className="schedule__info">
                <h4 className="schedule__class-name">{item.class}</h4>
                <div className="schedule__meta">
                  <span className="schedule__meta-item">
                    <i className="ri-user-star-line"></i> {item.trainer}
                  </span>
                  <span className="schedule__meta-item">
                    <i className="ri-map-pin-2-line"></i> {item.room}
                  </span>
                </div>
              </div>
              <button className="schedule__book-btn button" onClick={onOpenFreePass}>
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
