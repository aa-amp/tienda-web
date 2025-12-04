import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Styles.css";
import { productos } from "../data/Productos";

export default function ProductoDetail() {
  const { id } = useParams();
  const product = useMemo(
    () => productos.find((p) => String(p.id) === String(id)) || productos[0],
    [id]
  );

  const [index, setIndex] = useState(0);
  const images = product.images?.length ? product.images : ["/images/placeholder.jpg"];

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="product-detail">
      <div className="product-detail-layout">
        <div>
          <div className="carousel">
            <div className="carousel-frame">
              <div className="carousel-track">
                <img
                  className="carousel-image"
                  src={images[index]}
                  alt={`${product.name} ${index + 1}`}
                />
                <div className="carousel-controls">
                  <button className="carousel-button" onClick={prev}>‹</button>
                  <button className="carousel-button" onClick={next}>›</button>
                </div>
                <div className="carousel-indicators">
                  {images.map((_, i) => (
                    <span key={i} className={`carousel-dot ${i === index ? "active" : ""}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-desc">{product.description}</p>
          <p><strong>SKU:</strong> {product.id}</p>
        </div>
      </div>

      <div className="map-section">
        <h2>Encuéntranos en el mapa</h2>
        <div className="map-container">
          <iframe
            src={product.placeEmbed}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Ubicación de ${product.name}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}