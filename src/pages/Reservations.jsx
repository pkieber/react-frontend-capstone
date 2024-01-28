import React, { useState } from "react";
import Restaurant from "../assets/img/restaurant.jpg";
import './style.css';
import ConfirmedBooking from "../components/confirmation/ConfirmedBooking";
import ReservationForm from "./ReservationForm";


const Reservations = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = (details) => {
    setBookingDetails(details);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className='container-height'>
        <article>
          <h1>Reservations</h1>
          <div className="row">
            <div className="column">
              <figure className="figure">
                <img className="owner-pic" src={Restaurant} alt="Little Lemon restaurant"/>
                <span className="figure-caption">
                  Little Lemon restaurant.
                </span>
              </figure>
            </div>
            <div className="column">
              {/* Reservation form */}
              <ReservationForm onSubmit={handleSubmit} />
            </div>
          </div>
        </article>
      </section>
      {/* Modal for confirmation */}
      {showModal && (
        <ConfirmedBooking details={bookingDetails} onClose={closeModal} />
      )}
    </>
  );
};

export default Reservations;
