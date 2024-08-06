import React, { useEffect, useState } from "react";
import { submitAPI } from "../api/api";
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

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    numberPersons: "",
    name: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.numberPersons || formData.numberPersons < 1) newErrors.numberPersons = "Number of persons must be at least 1";
    if (!formData.name) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const success = submitAPI(formData);
      if (success) {
        alert("Reservation submitted successfully!");
      } else {
        alert("Failed to submit reservation.");
      }
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
      <header className="header-form">
        <h1 className="karla">Make a Reservation</h1>
      </header>
      <form
        className="booking-form highlight-background-color"
        onSubmit={handleSubmit}
      >
        <fieldset className="fieldset-form">

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
                onDateChange(e);
              }}
              required
              aria-label="Choose reservation date"
            />
            {errors.date && <p className="error" aria-live="assertive">{errors.date}</p>}
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
              aria-label="Choose reservation time"
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} className="karla" value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && <p className="error" aria-live="assertive">{errors.time}</p>}
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
              aria-label="Select occasion"
            >
              <option value=""></option>
              <option value="Romantic dinner">Romantic dinner</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div className="number-persons-container">
            <label htmlFor="number-persons" className="karla">
              Number of persons
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
              aria-label="Enter number of persons"
            />
            {errors.numberPersons && <p className="error" aria-live="assertive">{errors.numberPersons}</p>}
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
              aria-label="Enter your name"
            />
            {errors.name && <p className="error" aria-live="assertive">{errors.name}</p>}
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
              aria-label="Enter your phone number"
            />
            {errors.phone && <p style={{color:"red", margin: 0, fontSize:"0.8rem"}} className="error karla" aria-live="assertive">{errors.phone}</p>}
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
              aria-label="Enter any special instructions"
            />
          </div>

          <input
            type="submit"
            className="form-btn karla"
            value="Make Your reservation"
            aria-label="Submit your reservation"
          />
        </fieldset>
      </form>
    </section>
  );
}

export default BookingForm;
