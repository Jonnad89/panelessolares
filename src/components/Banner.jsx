import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <h1>Energía <span className='highlight'>solar</span> para tu hogar</h1>
      <p>Reduce tus facturas de electricidad y ayuda al medio ambiente con nuestros <span className='highlight'><strong>paneles solares.</strong></span></p>
      <button onClick={()=>{alert("Estás proximo a solicitar una cotización")}}>Solicita una cotización gratuita</button>
    </section>
  );
};

export default Banner;
