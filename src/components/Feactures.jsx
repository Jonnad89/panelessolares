import React from 'react';
import '../styles/Feactures.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Beneficios de la energía solar</h2>
        <div className="features-list">
          <div className="feature">
            <i className="fas fa-money-bill-alt"></i>
            <h3>Reduce tus facturas de electricidad</h3>
            <p>Los paneles solares pueden reducir significativamente tus facturas de electricidad a largo plazo.</p>
          </div>
          <div className="feature">
            <i className="fas fa-leaf"></i>
            <h3>Ayuda al medio ambiente</h3>
            <p>La energía solar es una fuente de energía renovable y limpia que no produce emisiones contaminantes.</p>
          </div>
          <div className="feature">
            <i className="fas fa-home"></i>
            <h3>Aumenta el valor de tu vivienda</h3>
            <p>Las viviendas con paneles solares suelen tener un mayor valor de mercado.</p>
          </div>
          <div className="feature">
            <i className="fas fa-sun"></i>
            <h3>Bajo mantenimiento</h3>
            <p>Los paneles solares son duraderos y requieren poco mantenimiento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
