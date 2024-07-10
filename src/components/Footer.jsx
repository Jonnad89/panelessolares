import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Paneles Solares</p>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Beneficios</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Cotización</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div className="social-media">
          <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
