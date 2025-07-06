import React from 'react';
import hoodie1 from '../assets/hoodie1.png';
import hoodie2 from '../assets/hoodie2.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={hoodie1} alt="Pink Hoodie 1" className="hoodie-img" />
        <img src={hoodie2} alt="Pink Hoodie 2" className="hoodie-img" />
      </div>
      <div className="hero-right">
        <h1>Welcome to Skyne</h1>
        <p>
          Discover the perfect fusion of streetwear and minimalism. Our hoodies are designed for comfort, style, and expression.
        </p>
        <button className="cta-button">Pre-Order Now</button>
      </div>
    </section>
  );
}

export default Hero;
