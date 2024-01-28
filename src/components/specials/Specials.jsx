import React, { useState, useEffect } from 'react';
import './specials.css';
import { Link } from 'react-router-dom';

const Specials = () => {
  const [specialsData, setSpecialsData] = useState([]);

  useEffect(() => {
    // Fetch the specials-data from JSON file
    fetch('/data/specialsData.json')
      .then((response) => response.json())
      .then((data) => setSpecialsData(data))
      .catch((error) => console.error('Error fetching specials data:', error));
  }, []);

  return (
    <>
      <div className='section-title'>
        <h2>This week specials</h2>
        <button className='cta'>
            <Link to='/menu'>Online Menu</Link>
        </button>
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
  );
}

export default Specials;
