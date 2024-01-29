import React, { useState, useEffect } from "react";

const ReservationForm = ({ onSubmit }) => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [touchedFields, setTouchedFields] = useState({});

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
      formValues.name &&
      formValues.email &&
      formValues.date &&
      formValues.time &&
      formValues.guests >= 1 &&
      formValues.occasion
    );
  }, [formValues, availableTimes, currentDate]);

  const clearForm = () => {
    setFormValues({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    });
    setTouchedFields({});
  };

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleFieldBlur = (fieldName) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [fieldName]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { ...formValues };
    onSubmit(details);
    clearForm();
  };


  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="name" className="input-label mt-0">Your Name</label>
      <input 
        type="text" 
        id="name" 
        value={formValues.name}
        onChange={(e) => handleFieldChange("name", e.target.value)}
        onBlur={() => handleFieldBlur("name")}
        placeholder="Booking name" 
        required minLength="2" 
      />
      {touchedFields.name && !formValues.name && (
        <div className="error-message">
          Please enter your name.
        </div>
      )}

      <label htmlFor="email" className="input-label">Your Email</label>
      <input 
        type="email" 
        value={formValues.email}
        onChange={(e) => handleFieldChange("email", e.target.value)}
        onBlur={() => handleFieldBlur("email")}
        id="email" 
        placeholder="Email address" 
        required 
      />
      {touchedFields.email && !formValues.email && (
        <div className="error-message">
          Please enter your email address.
        </div>
      )}

      <label htmlFor="date" className="input-label">Choose date</label>
      <input
        type="date"
        id="date"
        value={formValues.date}
        onChange={(e) => handleFieldChange("date", e.target.value)}
        onBlur={() => handleFieldBlur("date")}
        min={currentDate}
        required
      />
      {touchedFields.date && !formValues.date && (
        <div className="error-message">
          Please choose a date.
        </div>
      )}

      <label htmlFor="time" className="input-label">Choose time</label>
      <select
        id="time"
        value={formValues.time}
        onChange={(e) => handleFieldChange("time", e.target.value)}
        onBlur={() => handleFieldBlur("time")}
      >
        <option value="">Choose available time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      {touchedFields.time && !formValues.time && (
        <div className="error-message">
          Please choose a time.
        </div>
      )}

      <label htmlFor="guests" className="input-label">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formValues.guests}
        onChange={(e) => handleFieldChange("guests", Number(e.target.value))}
        onBlur={() => handleFieldBlur("guests")}
      />
      {touchedFields.guests && formValues.guests < 1 && (
        <div className="error-message">
          Please enter a valid number of guests (at least 1).
        </div>
      )}

      <label htmlFor="occasion" className="input-label">Occasion</label>
      <select
        id="occasion"
        value={formValues.occasion}
        onChange={(e) => handleFieldChange("occasion", e.target.value)}
        onBlur={() => handleFieldBlur("occasion")}
      >
        <option value="">Select an Option</option>
        <option value="Normal">No special occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {touchedFields.occasion && !formValues.occasion && (
        <div className="error-message">
          Please select an occasion.
        </div>
      )}

      <button className="cta m-top" type="submit" value="Make Your reservation" disabled={!isFormValid}>
        Make your reservation
      </button>
    </form>
  );
};

export default ReservationForm;
