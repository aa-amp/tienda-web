import React from "react";
import { productos } from "../data/Productos";
import ProductCardHome from "../components/ProductCardHome"; // reutilizamos el mismo card
import "../styles/Styles.css";

export default function Products() {
  return (
    <div className="products">
      <div className="products-container">
        <h1>Productos</h1>
        <div className="products-grid">
          {productos.map((p) => (
            <ProductCardHome key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}