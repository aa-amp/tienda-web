import React from "react";
import { Link } from "react-router-dom";
import "../styles/Styles.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <Link to="/" className="logo-link">
          <img src="/images/cafe.png" alt="Cafe del barrio" className="logo" />
        </Link>
        <h1 className="site-title">
          <Link to="/" className="site-title-link">Bazar del barrio</Link>
        </h1>
      </header>
      <Navbar />
    </>
  );
}