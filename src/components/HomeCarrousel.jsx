import React, { useState } from "react";
import "../styles/Carrousel.css"; // usa tu css específico

export default function HomeCarousel() {
  const fotos = [
    { src: "/images/calle1.jpg", titulo: "Bienvenido" },
    { src: "/images/home1.jpg", titulo: "Nuestros Productos" },
    { src: "/images/home3.jpg", titulo: "Calidad Garantizada" },
  ];

  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((index + 1) % fotos.length);
  const anterior = () => setIndex((index - 1 + fotos.length) % fotos.length);

  return (
    <div className="carrusel">
      <button className="carrusel-btn" onClick={anterior}>‹</button>
      <div className="carrusel-img">
        <img src={fotos[index].src} alt={fotos[index].titulo} />
        <div className="carrusel-overlay">{fotos[index].titulo}</div>
      </div>
      <button className="carrusel-btn" onClick={siguiente}>›</button>
    </div>
  );
}