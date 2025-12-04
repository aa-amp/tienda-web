import React from "react";
import { productos } from "../data/Productos";
import ProductCardHome from "../components/ProductCardHome"; // nuevo componente
import "../styles/Styles.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>Todos los productos</h1>
        <div className="products-grid">
          {productos.map((p) => (
            <ProductCardHome key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}