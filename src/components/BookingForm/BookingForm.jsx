import React, { useEffect, useState } from "react";
import { submitAPI } from "../api/api"; // Ajusta la ruta según la ubicación de tu archivo api.js
import "./BookingForm.css";

function BookingForm({ availableTimes, selectedDate, onDateChange }) {
  const [formData, setFormData] = useState({
    date: selectedDate,
    time: "",
    occasion: "",
    numberPersons: "",
    name: "",
    phone: "",
    instructions: "",
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
    const success = submitAPI(formData); // Usa submitAPI importada
    if (success) {
      alert("Reservation submitted successfully!");
    } else {
      alert("Failed to submit reservation.");
    }
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      date: selectedDate,
    }));
  }, [selectedDate]);

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
              onDateChange(e); // Notifica al componente padre del cambio de fecha
            }}
            required
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
            required
          >
            <option value="">Select a time</option>
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
          <label htmlFor="number-persons" className="karla">
            Number of persons:
          </label>
          <input
            id="number-persons"
            name="numberPersons"
            className="number-persons karla"
            type="number"
            min={1}
            max={10}
            value={formData.numberPersons}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="name" className="karla">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="karla"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone" className="karla">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="karla"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="instructions" className="karla">
            Instructions
          </label>
          <input
            id="instructions"
            name="instructions"
            className="karla"
            type="text"
            value={formData.instructions}
            onChange={handleInputChange}
          />
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
