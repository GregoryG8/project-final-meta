import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./BookingPage.css";

function BookingPage() {
  return (
    <div className="booking-page">
      <NavBar />
      <BookingForm/>
    </div>
  );
}

export default BookingPage;
