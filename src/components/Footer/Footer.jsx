import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div class="logo">
          <img src="" alt="" />
        </div>
        <nav class="footer-nav">
          <h2>Doormat Navigation</h2>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
        <div class="footer-contact">
          <h2>Contact</h2>
          <address>
            <p>Address: 1234 Street Name, City, State, ZIP</p>
            <p>Phone Number: (123) 456-7890</p>
            <p>
              Email: <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </address>
        </div>
        <div class="footer-social">
          <h2>Social Media Links</h2>
          <address>
            <p>Address: 1234 Street Name, City, State, ZIP</p>
            <p>Phone Number: (123) 456-7890</p>
            <p>
              Email: <a href="mailto:social@example.com">social@example.com</a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
