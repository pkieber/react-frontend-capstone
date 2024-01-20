import React from 'react';
import './specials.css';
import { Link } from 'react-router-dom';
import GreekSaladImage from '../../assets/img/greek_salad.jpg';
import BruschettaImage from '../../assets/img/bruschetta.jpg';
import LemonDessertImage from '../../assets/img/lemon_dessert.jpg';

const specialsData = [
    {
      image: GreekSaladImage,
      title: 'Greek Salad',
      price: '$ 12.99',
      description: 'The famous Greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      image: BruschettaImage,
      title: 'Bruschetta',
      price: '$ 5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      image: LemonDessertImage,
      title: 'Lemon Dessert',
      price: '$ 5.00',
      description: 'This comes straight from grandma\'s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];


const Specials = () => {
  return (
    <>
      <div className='section-title'>
        <h2>This week specials</h2>
        <button className='cta'>Online Menu</button>
      </div>

      <section id="specials">
        <div className="container specials-container">
          {specialsData.map((special, index) => (
            <div key={index} className="specials-content">
              <article className="b-top">
                <img className="b-top" src={special.image} alt={`Special: ${special.title}`} />
                <div className='specials-text'>
                  <div className='title'>
                    <h3>{special.title}</h3>
                    <div>{special.price}</div>
                  </div>
                  <div>
                    <p>{special.description}</p>
                  </div>
                  <Link to="/order">Order a delivery</Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Specials;
