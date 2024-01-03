import React from 'react';
import './about.css';
import Mario from '../../assets/img/Mario_Adrian_a.jpg';
import Adrian from '../../assets/img/Mario_Adrian_b.jpg';

const About = () => {
  return (
    <section id="about">

    <div className="container about-container">

      <div className="about-content">
          <h2 className='section-title'>Little Lemon</h2>
          <h3 className='section-subtitle'>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur quaerat sit, 
            asperiores nobis earum dolorem molestias soluta veniam repudiandae sed? 
            Aliquid, illo. Perferendis provident perspiciatis eos vel incidunt natus!
          </p>
      </div>

      <div className="about-content">
        <div className='img-container'>
          <img src={Mario} alt='About Image' />
          <img src={Adrian} alt='About Image' />
        </div>
      </div>

    </div>

  </section>
  )
}

export default About