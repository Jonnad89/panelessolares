import React from 'react';
import '../styles/Products.css';
import mono from'../assets/monocristalino.jpg'
import poli from'../assets/policristalino.png'
import inver from'../assets/inversor-solar.png'
import bate from'../assets/bate.jpg'


const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2>Nuestros productos</h2>
        <div className="products-list">
          <div className="product product1">
            <img src={mono} alt="Panel solar" />
            <h3>Panel solar monocristalino</h3>
            <p>Eficiencia alta y mayor potencia por unidad.</p>
          </div>
          <div className="product product2">
            <img src={poli} alt="Panel solar" />
            <h3>Panel solar policristalino</h3>
            <p>Más económico que el monocristalino, ideal para grandes instalaciones.</p>
          </div>
          <div className="product product3">
            <img src={inver} alt="Panel solar" />
            <h3>Inversor solar</h3>
            <p>Convierte la energía solar en corriente alterna para su uso en el hogar.</p>
          </div>
          <div className="product product4">
            <img src={bate} alt="Panel solar" />
            <h3>Batería solar</h3>
            <p>Almacena energía solar para usarla durante la noche o en caso de cortes de energía.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
