import React from 'react';
import './main.css';
import Dish from '../../assets/dish.jpg';
import Table from '../../assets/table.jpg';
import Cook from '../../assets/cook.jpg';

const Main = () => {
  return (
    <main>
      <section>
        <article className='hero'>
        <h1 className="title">SPECIAL OFFER</h1>
            <p className="subtitle">
                20% Off this Weekend
            </p>
          <button className="cta">Book now</button>
        </article>
      </section>

      <section>
            <article>
                <h2>Our New Menu</h2>
                <img src={Dish} alt="dish"/>
                <p>
                    Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.
                </p>
                <a href="#">See our new menu</a>
            </article>
            <article>
                <h2>Book a Table</h2>
                <img src={Table} alt="table"/>
                <p>
                    Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.
                </p>
                <a href="#">Book your table now</a>
            </article>
            <article>
                <h2>Opening Hours</h2>
                <img src={Cook} alt="cook"/>
                <p>
                    The Little Lemon Restaurant is open 7 days a week, except for public holidays.
                </p>
                <ul>
                    <li>Mon - Fri: 2pm - 10pm</li>
                    <li>Sat: 2pm - 11pm</li>
                    <li>Sun: 2pm - 9pm</li>
                </ul>
            </article>
        </section>
    </main>
  )
}

export default Main