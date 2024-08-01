import React from "react";
import './Highlights.css';
import greekSalad from "../../assets/greek salad.jpg";
import bruschettta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

function Highlights() {
  return (
    <section>
      <div className="title-highlight-btn">
        <h1>This weeks specials</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials">
        <article className="special">
          <img src={greekSalad} alt="" />
          <h3>Greek salad</h3>
          <p class="price">$12.99</p>
          <p class="description">
            The famous Greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <p class="order">Order a delivery</p>
        </article>
        <article className="special">
          <img src={bruschettta} alt="" />
          <h3>Bruschetta</h3>
          <p class="price">$5.99</p>
          <p class="description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <p class="order">Order a delivery</p>
        </article>
        <article className="special">
          <img src={lemonDessert} alt="" />
          <h3>Lemon Dessert</h3>
          <p class="price">$5.00</p>
          <p class="description">
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <p class="order">Order a delivery</p>
        </article>
      </div>
    </section>
  );
}

export default Highlights;
