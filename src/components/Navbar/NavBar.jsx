import React from 'react'
import "./NavBar.css"
import logo from "../../assets/Logo.svg"

function NavBar() {
  return (
    <header>
        <nav>
            <img className='logo' src={logo} alt="Logo" />
            <ul className='page-links-container karla'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar