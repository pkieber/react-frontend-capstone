import React from 'react';
import './confirmed-booking.css';

const ConfirmedBooking = (props) => {
  const { details, onClose } = props;

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Booking Confirmed!</h2>
          <h3>Thank you for choosing Little Lemon restaurant.</h3>
          <div className='booking-details'>
            <p className='booking-details-title'>Here are your booking details:</p>
            <p><b>Booking Name: </b> {details.name}</p>
            <p><b>Email: </b> {details.email}</p>
            <p><b>Date: </b> {details.date}</p>
            <p><b>Time: </b> {details.time}</p>
            <p><b>Number of Guests: </b> {details.guests}</p>
            <p><b>Occasion: </b> {details.occasion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
