import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.svg"

function Footer() {
  return (
    <footer className="footer">
        <div className="logo-footer">
          <img src={logo} alt="" />
        </div>
        <nav className="footer-nav">
          <h2 className="title-footer primary-alternate-color markazi">Doormat Navigation</h2>
          <ul className="footer-links markazi">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
        <div className="footer-contact">
          <h2 className="title-footer primary-alternate-color markazi">Contact</h2>
          <address className="markazi">
            <p>Address: 1234 Street Name, City, State, ZIP</p>
            <p>Phone Number: (123) 456-7890</p>
            <p>
              Email: <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </address>
        </div>
        <div className="footer-social">
          <h2 className="title-footer primary-alternate-color markazi">Social Media Links</h2>
          <address className="markazi">
            <p>Address: 1234 Street Name, City, State, ZIP</p>
            <p>Phone Number: (123) 456-7890</p>
            <p>
              Email: <a href="mailto:social@example.com">social@example.com</a>
            </p>
          </address>
        </div>
    </footer>
  );
}

export default Footer;
