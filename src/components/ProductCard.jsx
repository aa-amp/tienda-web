import React from "react";
import { Link } from "react-router-dom";
import "../styles/Styles.css";

export default function ProductCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`} className="card-link">
      <div className="card">
        <img
          className="card-image"
          src={product.images?.[0] || product.image || "/images/placeholder.jpg"}
          alt={product.name}
        />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-desc">{product.description}</p>
        </div>
        <div className="card-actions">
          <span className="card-button">Ver más</span>
        </div>
      </div>
    </Link>
  );
}