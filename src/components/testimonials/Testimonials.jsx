import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  return (
    <>
      <h2>Testimonials</h2>
      <section className='grid-container'>
        <div className="testimonials-container">
          <article className="testimonial">
            <h4>Rating</h4>
            <div>Name</div>
            <div>Review Text</div>
          </article>
          <article className="testimonial">
            <h4>Rating</h4>
            <div>Name</div>
            <div>Review Text</div>
          </article>
          <article className="testimonial">
            <h4>Rating</h4>
            <div>Name</div>
            <div>Review Text</div>
          </article>
          <article className="testimonial">
            <h4>Rating</h4>
            <div>Name</div>
            <div>Review Text</div>
          </article>

        </div>
      </section>
    </>
  )
}

export default Testimonials