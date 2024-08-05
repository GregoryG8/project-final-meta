// BookingForm.js

import React from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, selectedDate, onDateChange }) {
  const [formData, setFormData] = React.useState({
    date: selectedDate,
    time: "",
    occasion: "",
    numberPersons: "",
    name: "",
    phone: "",
    Instructions: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <section className="booking-container">
      <form
        className="booking-form highlight-background-color"
        onSubmit={handleSubmit}
      >
        <div className="input-container">
          <label htmlFor="res-date" className="karla">
            Choose date
          </label>
          <input
            className="occasion-input karla"
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={(e) => {
              handleInputChange(e);
              onDateChange(e); // Notify the parent component of the date change
            }}
          />
        </div>

        <div className="input-container">
          <label htmlFor="res-time" className="karla">
            Choose time
          </label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="karla"
          >
            {availableTimes.map((time) => (
              <option key={time} className="karla" value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="occasion" className="karla">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            className="ocassion-select karla"
          >
            <option value=""></option>
            <option value="Romantic dinner">Romantic dinner</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div className="number-persons-container">
            <label htmlFor="name" className="karla">Number of persons: </label>
            <input className="number-persons karla" type="number" min={1} max={10}/>
        </div>
        <div className="input-container">
            <label htmlFor="name" className="karla">Name</label>
            <input className="karla" type="text"/>
        </div>
        <div className="input-container">
            <label htmlFor="phone" className="karla">Phone</label>
            <input type="tel" className="karla"/>
        </div>
        <div className="input-container">
            <label htmlFor="instructions" className="karla">Instructions</label>
            <input className="karla" type="text"/>
        </div>
        <input
          type="submit"
          className="form-btn karla"
          value="Make Your reservation"
        />
      </form>
    </section>
  );
}

export default BookingForm;
