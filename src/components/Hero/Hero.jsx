import React from "react";
import "./Hero.css";
import imagenBanner from "../../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="banner-container">
      <div className="banner">
        <div className="information">
          <h1 className="title primary-alternate-color markazi">
            Little Lemon
          </h1>
          <p className="subtitle markazi">Chicago</p>
          <p className="description karla">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking"><button className="banner-btn karla">Reserve a Table</button></Link>
        </div>
      </div>
      <img className="banner-img" src={imagenBanner} alt="Banner" />
    </section>
  );
}

export default Hero;
