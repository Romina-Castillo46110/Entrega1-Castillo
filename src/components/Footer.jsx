import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">MendoTecno</h3>
        <ul className="footer-links">
          <li><Link to="/category/electronics">Electrónica</Link></li>
          <li><Link to="/category/jewelery">Joyería</Link></li>
          <li><Link to="/category/men's clothing">Ropa Hombre</Link></li>
          <li><Link to="/category/women's clothing">Ropa Mujer</Link></li>
        </ul>
        <p className="footer-copy">&copy; {new Date().getFullYear()} MendoTecno. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};