import React from 'react';
import './cta.css';
import Food from '../../assets/img/restauranfood.jpg';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <main id="cta" className='hero full-bleed'>

      <div className="hero-container">

        <div className="hero-content">
            <h1 className='section-title'>Little Lemon</h1>
            <h3 className='section-subtitle'>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur quaerat sit, 
              asperiores nobis earum dolorem molestias soluta veniam repudiandae sed? 
              Aliquid, illo. Perferendis provident perspiciatis eos vel incidunt natus!
            </p>
            <button className='cta'>
              <Link to='/reservations' aria-label='On Click'>Reserve a Table</Link>
            </button>
        </div>

        <div className="hero-content">
          <div className="img-container">
            <img src={Food} alt='Hero' />
          </div>
        </div>

      </div>

  </main>
  )
}

export default CTA