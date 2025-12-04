import React from "react";
import { productos } from "../data/Productos";
import ProductCardHome from "../components/ProductCardHome";
import HomeCarousel from "../components/HomeCarrousel"; 
import "../styles/Styles.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        
        {/* Texto introductorio sobre el carrusel */}
        <div className="home-intro">
          <h1>Bienvenido a nuestra tienda</h1>
          <p>Explora nuestros productos destacados y conoce más sobre lo que ofrecemos.</p>
        </div>

        {/* Carrusel */}
        <HomeCarousel />

        {/* Productos */}
        <h2>Todos los productos</h2>
        <div className="products-grid">
          {productos.map((p) => (
            <ProductCardHome key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}