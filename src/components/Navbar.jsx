import React from "react";
import { Link } from "react-router-dom";
import "../styles/Styles.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <ul className="nav-links">
          <li><Link className="nav-link" to="/">Inicio</Link></li>
          <li><Link className="nav-link" to="/productos">Productos</Link></li>
          <li><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
        </ul>
        <div className="nav-actions">
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </div>
      </div>
    </div>
  );
}