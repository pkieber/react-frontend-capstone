import React, { useState, useEffect } from "react";

const ReservationForm = ({ onSubmit }) => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Fetch available times from JSON file
    const fetchAvailableTimes = async () => {
      try {
        const response = await fetch("/data/availableTimes.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAvailableTimes(data.availableTimes);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };
    
    

    fetchAvailableTimes();
  }, []);

  useEffect(() => {
    setIsFormValid(
      name &&
      email &&
      date &&
      time &&
      guests >= 1 &&
      occasion
    );
  }, [name, email, date, time, guests, occasion, availableTimes, currentDate]);

  const clearForm = () => {
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { name, email, date, time, guests, occasion };
    onSubmit(details);
    clearForm();
  };

  return (
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
        <option value="">Choose available time</option>
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
  );
};

export default ReservationForm;
