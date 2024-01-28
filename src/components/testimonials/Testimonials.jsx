import React, { useState, useEffect } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch('/data/testimonialsData.json')
      .then((response) => response.json())
      .then((data) => setTestimonialData(data))
      .catch((error) => console.error('Error fetching testimonials data:', error));
  }, []);


  const renderStarRating = (rating) => {
    return '★'.repeat(rating.length);
  };


  return (
    <div className='container'>
      <h2>Testimonials</h2>
      <section className='grid-container'>
        <div className="testimonials-container">
          {testimonialData.map((testimonial, index) => (
            <article key={index} className="testimonial">
              <img className='avatar' src={testimonial.image} alt={`Testimonial: ${testimonial.name}`} />
              <div>
                <div>{testimonial.name}</div>
                <div>{renderStarRating(testimonial.rating)}</div>
                <div>{testimonial.review}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
