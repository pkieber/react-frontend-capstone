import React from 'react';
import './specials.css';
import GreekSalad from '../../assets/img/greek_salad.jpg';
import Bruschetta from '../../assets/img/bruschetta.jpg';
import LemonDessert from '../../assets/img/lemon_dessert.jpg';
import { Link } from 'react-router-dom';

const Specials = () => {
  return (
    <>
       <div className='section-title'>
            <h2>This week specials</h2>
            <button className='cta'>Online Menu</button>
        </div>
   
    <section id="specials">
    <div className="container specials-container">

      <div className="specials-content">
        <article className="b-top">
                <img className="b-top" src={GreekSalad} alt="dish"/>
                <div className='specials-text'>
                    <div className='title'>
                        <h3>Greek salad</h3>
                        <div>$ 12.99</div>
                    </div>
                    <div>
                        <p>
                            The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta chees, garnished with crunchy garlic and resemary croutons.
                        </p>
                    </div>
                    <Link to="/order">Order a delivery</Link>
                </div>
            </article>
      </div>

      <div className="specials-content">
            <article className="b-top">
                <img className="b-top" src={Bruschetta} alt="dish"/>
                <div className='specials-text'>
                    <div className='title'>
                        <h3>Bruschetta</h3>
                        <div>$ 5.99</div>
                    </div>
                    <div>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                    </div>
                    <Link to="/order">Order a delivery</Link>
                </div>
            </article>
      </div>

      <div className="specials-content img-container">
            <article className="b-top">
                <img className="b-top" src={LemonDessert} alt="dish"/>
                <div className='specials-text'>
                    <div className='title'>
                        <h3>Lemon Dessert</h3>
                        <div>$ 5.00</div>
                    </div>
                    <div>
                        <p>
                            This comes straight from grandma0s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                    </div>
                    <Link to="/order">Order a delivery</Link>
                </div>
            </article>
      </div>

    </div>

  </section>
  </>
  )
}

export default Specials
