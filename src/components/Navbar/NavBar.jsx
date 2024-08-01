import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/Logo.svg";
import hamburger from "../../assets/hamburger.svg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado a su opuesto
  };
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="Logo" />
        <ul
          className={`page-links-container karla ${
            isMenuOpen ? "show" : "hidden"
          }`}
        >
          <li className="links">
            <a href="#home">Home</a> <span></span>
          </li>
          <li className="links">
            <a href="#about">About</a> <span></span>
          </li>
          <li className="links">
            <a href="#menu">Menu</a> <span></span>
          </li>
          <li className="links">
            <a href="#reservations">Reservations</a> <span></span>
          </li>
          <li className="links">
            <a href="#order">Order Online</a> <span></span>
          </li>
          <li className="links">
            <a href="#login">Login</a> <span></span>
          </li>
        </ul>
          <img className="hamburger" src={hamburger} alt="" onClick={toggleMenu}/>

      </nav>
    </header>
  );
}

export default NavBar;
