import React from "react";
import "./About.css";
import aboutImage1 from "../../assets/Mario and Adrian A.jpg"
import aboutImage2 from "../../assets/Mario and Adrian b.jpg"

function About() {
  return (
    <section className="about">
      <div className="restaurant-info">
        <h1 className="title-about markazi">Little Lemon</h1>
        <p className="subtitle-about markazi">Chicago</p>
        <p className="description-about karla">
          Welcome to our family-owned Mediterranean restaurant. We blend
          traditional recipes with a modern twist, offering a unique dining
          experience that celebrates both heritage and innovation. Join us and
          savor the rich flavors of our Mediterranean cuisine, crafted with love
          and a contemporary flair.
        </p>
      </div>
      <div className="images-about">
        <img src={aboutImage1} alt="" />
        <img src={aboutImage2} alt="" />
      </div>
    </section>
  );
}

export default About;
