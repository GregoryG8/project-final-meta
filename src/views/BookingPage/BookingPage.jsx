// BookingPage.js

import React, { useReducer, useState, useEffect } from "react";
import NavBar from "../../components/Navbar/NavBar";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./BookingPage.css";

// Reducer function to manage availableTimes
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    // Initialize available times
    const initializeTimes = () => {
      return [
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
        "06:00 PM",
        "07:00 PM",
        "08:00 PM",
      ];
    };

    dispatch({ type: "UPDATE_TIMES", payload: initializeTimes() });
  }, []);

  const updateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    updateTimes(newDate);
  };

  return (
    <div className="booking-page">
      <NavBar />
      <BookingForm
        availableTimes={availableTimes}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
    </div>
  );
}

export default BookingPage;
