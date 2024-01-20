import React from 'react';
import './testimonials.css';
import Avatar from '../../assets/img/avatar.png';


const testimonialData = [
  {
    image: Avatar,
    rating: 'Rating1', 
    name: 'Name1', 
    review: 'Review Text1' 
  },
  {
    image: Avatar,
    rating: 'Rating2', 
    name: 'Name2', 
    review: 'Review Text2' 
  },
  {
    image: Avatar,
    rating: 'Rating3', 
    name: 'Name3', 
    review: 'Review Text3' 
  },
  {
    image: Avatar,
    rating: 'Rating4', 
    name: 'Name4', 
    review: 'Review Text4' 
  },
];


const Testimonials = () => {
  return (
    <div className='container'>
      <h2>Testimonials</h2>
      <section className='grid-container'>
        <div className="testimonials-container">
          {testimonialData.map((testimonial, index) => (
            <article key={index} className="testimonial">
              <img className='avatar' src={testimonial.image} alt={`Testimonial: ${testimonial.name}`} />
              <div>
                <h4>{testimonial.rating}</h4>
                <div>{testimonial.name}</div>
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
