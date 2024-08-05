import React, { useReducer, useState, useEffect } from "react";
import NavBar from "../../components/Navbar/NavBar";
import BookingForm from "../../components/BookingForm/BookingForm";
import { fetchAPI } from "../../components/api/api"; // Asegúrate de ajustar la ruta según la ubicación de tu archivo api.js
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
    const initializeTimes = () => {
      const today = new Date();
      const times = fetchAPI(today); // Usa fetchAPI directamente
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    initializeTimes();
  }, []);

  const updateTimes = (date) => {
    const times = fetchAPI(new Date(date)); // Usa fetchAPI directamente
    console.log('Fetched times for date', date, times); // Agrega esta línea para depuración
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    console.log('New selected date:', newDate); // Agrega esta línea para depuración
    updateTimes(newDate);
  };
  console.log(availableTimes);

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