import React, { useState } from "react";
import "../styles/nosotros.css";

export default function Nosotros() {
  const fotos = [
    { src: "/images/calle1.jpg", titulo: "Calle 1" },
    { src: "/images/local.jpg", titulo: "Local" },
    { src: "/images/galeria.jpg", titulo: "Galería" },
  ];

  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((index + 1) % fotos.length);
  const anterior = () => setIndex((index - 1 + fotos.length) % fotos.length);

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

        {/* Carrusel */}
        <div className="carrusel">
          <button className="carrusel-btn" onClick={anterior}>‹</button>
          <div className="carrusel-img">
            <img src={fotos[index].src} alt={fotos[index].titulo} />
            <div className="carrusel-overlay">{fotos[index].titulo}</div>
          </div>
          <button className="carrusel-btn" onClick={siguiente}>›</button>
        </div>
      </div>
    </main>
  );
}