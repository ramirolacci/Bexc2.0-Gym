import React from 'react';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    '¡Hola BEXC Gym! Quiero pedir información sobre los planes y solicitar mi pase de prueba gratis en Hurlingham 💪'
  );

  return (
    <a
      href={`https://wa.me/5491144062027?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <i className="ri-whatsapp-line"></i>
      <span className="whatsapp-tooltip">¡Hablá con un entrenador! 💬</span>
    </a>
  );
}
