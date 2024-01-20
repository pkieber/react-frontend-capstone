import React, { useState } from "react";
import Restaurant from "../assets/img/restaurant.jpg";
import './style.css';

const Reservations = () => {
  // Get the current date in the "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().split('T')[0];

  // State variables for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // State variable for available booking times
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Continue with the form submission
    console.log("Form submitted:", { date, time, guests, occasion });
  };

  return (
    <>
      <section className='container-height'>
        <article>
          <h1>Reservations</h1>
          <div className="row">
            <div className="column">
              <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                  type="date"
                  id="res-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={currentDate} // Set the minimum date
                  required
                />

                <label htmlFor="res-time">Choose time</label>
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

                <label htmlFor="guests">Number of guests</label>
                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option value="">Select an Option</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
                <button className="cta" type="submit" value="Make Your reservation">
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
    </>
  );
};

export default Reservations;
