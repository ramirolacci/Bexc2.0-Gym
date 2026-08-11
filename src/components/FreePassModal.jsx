import React, { useState } from 'react';

export default function FreePassModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = encodeURIComponent(
      `¡Hola BEXC Gym! Soy ${name}${phone ? ` (${phone})` : ''}, quiero reclamar mi PASE LIBRE de 1 Día gratis en la sede de Hurlingham 🚀`
    );
    const whatsappUrl = `https://wa.me/5491144062027?text=${message}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content grid" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>

        <div className="modal-header">
          <span className="modal-badge">🔥 OFERTA EXCLUSIVA DE BIENVENIDA</span>
          <h2 className="modal-title">¡Reclamá tu Pase Libre de 1 Día Gratis!</h2>
          <p className="modal-description">
            Vení a entrenar a BEXC 2.0 Hurlingham sin costo. Probá las máquinas, las clases grupales y conocé las instalaciones.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-input-box">
            <i className="ri-user-3-line modal-icon"></i>
            <input
              type="text"
              placeholder="Tu Nombre completo"
              className="modal-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="modal-input-box">
            <i className="ri-whatsapp-line modal-icon"></i>
            <input
              type="tel"
              placeholder="Tu WhatsApp (ej: 11 4406-2027)"
              className="modal-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="button button__flex modal-btn">
            Reclamar Pase Gratis <i className="ri-whatsapp-fill"></i>
          </button>
        </form>

        <p className="modal-footer-note">
          <i className="ri-shield-check-line"></i> Sin compromisos ni tarjeta de crédito. ¡Acceso inmediato!
        </p>
      </div>
    </div>
  );
}
