import React, { useState, useEffect } from "react";
import Restaurant from "../assets/img/restaurant.jpg";
import './style.css';
import ConfirmedBooking from "../components/confirmation/ConfirmedBooking";

const Reservations = () => {
  // Get the current date in the "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().split('T')[0];

  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // State variable for available booking times
  const [availableTimes] = useState([
    "Choose available time",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // State variable for form validation
  const [isFormValid, setIsFormValid] = useState(false);

  // State variable to track modal visibility
  const [showModal, setShowModal] = useState(false);

  // State variable for storing booking details
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // console.log("Checking form validity...");
    setIsFormValid(
      name &&
      email &&
      phone &&
      date &&
      time &&
      guests >= 1 &&
      occasion
    );
  }, [name, email, phone, date, time, guests, occasion, availableTimes, currentDate]);


  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Form submitted successfully!");
    // console.log("Form submitted:", { name, date, time, guests, occasion });
    const details = { name, email, phone, date, time, guests, occasion };
    setBookingDetails(details);
    clearForm();

    // Show the modal
    setShowModal(true);
  };

    // Function to close the modal
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
              <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
                <label htmlFor="res-name" className="input-label mt-0">Name</label>
                <input 
                  type="text" 
                  id="res-name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Booking name" 
                  required 
                />
                <label htmlFor="res-email" className="input-label">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="res-email" 
                  placeholder="Email address" 
                  required 
                />
                <label htmlFor="res-phone" className="input-label">Phone</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="res-phone" 
                  placeholder="Telephone number" 
                  required 
                />
                <label htmlFor="res-date" className="input-label">Choose date</label>
                <input
                  type="date"
                  id="res-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={currentDate}
                  required
                />
                <label htmlFor="res-time" className="input-label">Choose time</label>
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                      {availableTime}
                    </option>
                  ))}
                </select>
                <label htmlFor="guests" className="input-label">Number of guests</label>
                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                />

                <label htmlFor="occasion" className="input-label">Occasion</label>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option value="">Select an Option</option>
                  <option value="Normal">No special occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
                <button className="cta" type="submit" value="Make Your reservation" disabled={!isFormValid}>
                  Make your reservation
                </button>
              </form>
            </div>
            <div className="column">
              <figure className="figure">
                <img className="owner-pic" src={Restaurant} alt="Little Lemon restaurant"/>
                <span className="figure-caption">
                  Little Lemon restaurant.
                </span>
              </figure>
            </div>
          </div>
        </article>
      </section>

      {/* Modal for confirmation */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
          <ConfirmedBooking details={bookingDetails} onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Reservations;
