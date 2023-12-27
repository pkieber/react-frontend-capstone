import React from 'react';
import './main.css';
import GreekSalad from '../../assets/img/greek_salad.jpg'
import Bruschetta from '../../assets/img/bruschetta.jpg'
import LemonDessert from '../../assets/img/lemon_dessert.jpg'
import Food from '../../assets/img/restauranfood.jpg';


const Main = () => {
  return (
    <main>
      <section className='full-bleed'>
        <article className='hero'>
            <div>
                <h1 className="title">Little Lemon</h1>
                <p className="subtitle">
                    Chicago
                </p>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
                </p>
                <button className="cta">Reserve a Table</button>
            </div>
            <img className="b-top" src={Food} alt="food"/>
        </article>
      </section>
        <div className='section-title'>
            <h2>This week specials</h2>
            <button className='cta'>Online Menu</button>
        </div>
      <section>
            <article className="b-top">
                <img className="b-top" src={GreekSalad} alt="dish"/>
                <div className='title'>
                    <h3>Greek salad</h3>
                    <div>$ 12.99</div>
                </div>
                <div>
                    <p>
                        The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta chees, garnished with crunchy garlic and resemary croutons.
                    </p>
                    <a href="#">Order a delivery</a>
                </div>
            </article>
            <article className="b-top">
                <img className="b-top" src={Bruschetta} alt="dish"/>
                <div className='title'>
                    <h3>Bruschetta</h3>
                    <div>$ 5.99</div>
                </div>
                <div>
                    <p>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </p>
                    <a href="#">Order a delivery</a>
                </div>
            </article>
            <article className="b-top">
                <img className="b-top" src={LemonDessert} alt="dish"/>
                <div className='title'>
                    <h3>Lemon Dessert</h3>
                    <div>$ 5.00</div>
                </div>
                <div>
                    <p>
                        This comes straight from grandma0s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.
                    </p>
                    <a href="#">Order a delivery</a>
                </div>
            </article>
        </section>
    </main>
  )
}

export default Main