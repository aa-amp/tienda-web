import React from "react";
import "../styles/Styles.css";

export default function Contact() {
  return (
    <div className="contact-card">
      <h1>Contacto</h1>
      <p className="contact-text">
        Contáctanos por nuestras redes sociales.
      </p>

      <div className="contact-links">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src="images/instagramlogo.png" alt="Instagram" className="contact-logo" /> Instagram
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src="images/xlogo.png" alt="X" className="contact-logo" /> X
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src="images/facebooklogo.png" alt="Facebook" className="contact-logo" /> Facebook
        </a>
      </div>

      <div className="contact-location">
        <p>
          <a
            href="https://maps.app.goo.gl/PikLruNGfE7usU4q9"
            target="_blank"
            rel="noreferrer"
          >
            Visítanos en la galeria del panky, Cafe Luly, San Pablo 1145 Santiago, Región Metropolitana
          </a>
        </p>
        <p>Revisa nuestra ubicación en el mapa!</p>

        {/* Botón de mapa */}
        <a
            href="https://maps.app.goo.gl/PikLruNGfE7usU4q9"
            target="_blank"
            rel="noreferrer"
            className="map-button"
            >
            <span className="map-link">Mapa</span>
            </a>
      </div>
    </div>
  );
}