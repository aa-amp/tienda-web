import React from "react";
import "../styles/nosotros.css";

export default function Nosotros() {
  return (
    <main className="nosotros">
      <div className="nosotros-card">
        <div className="nosotros-text">
          <h2>Nosotros</h2>
          <p>
            Somos negocio X, nos dedicamos a ofrecer productos de calidad y un servicio cercano.
          </p>
          <p>
            Estamos ubicados en San Pablo 1145, Santiago, Región Metropolitana.
          </p>
        </div>

        <div className="nosotros-fotos">
          <div className="foto-item">
            <img src="/images/calle1.jpg" alt="calle1" />
            <p>Calle 1</p>
          </div>
          <div className="foto-item">
            <img src="/images/local.jpg" alt="local" />
            <p>Local</p>
          </div>
          <div className="foto-item">
            <img src="/images/galeria.jpg" alt="galería" />
            <p>Galería</p>
          </div>
        </div>
      </div>
    </main>
  );
}