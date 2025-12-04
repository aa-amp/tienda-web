import React from "react";
import "../styles/Styles.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-about">
        <h2>Nosotros</h2>
        <p>Fundado en 2025. Esperamos estar acompañándolos  muchos años .</p>
        <p>
          <a href="https://maps.app.goo.gl/SF1CNZEnx7btug3R9" target="_blank" rel="noreferrer">
            Encuéntranos: San Pablo 1145, Santiago, Región Metropolitana
          </a>
        </p>
        <p>Contáctanos mediante nuestras redes sociales</p>
      </div>

      <div className="footer-logos">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="/images/instagramlogo.png" alt="instagramlogo" className="footer-logo" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/images/facebooklogo.png" alt="facebooklogo" className="footer-logo" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noreferrer">
          <img src="/images/xlogo.png" alt="xlogo" className="footer-logo" />
        </a>
      </div>

      <div className="footer-copy">
        <p>© 2025 Cafe luly</p>
      </div>
    </footer>
  );
}