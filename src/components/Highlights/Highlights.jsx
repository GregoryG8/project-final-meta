import React from "react";
import "./Highlights.css";
import greekSalad from "../../assets/greek salad.jpg";
import bruschettta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

function Highlights() {
  return (
    <section>
      <div className="title-highlight-btn">
        <h1 className="title-highlight markazi">This weeks specials</h1>
        <button className="highlight-btn karla">Online Menu</button>
      </div>
      <div className="specials">
        <article className="special">
          <img className="special-img" src={greekSalad} alt="" />
          <div className="title-price-special">
            <h3 className="title-special karla">Greek salad</h3>
            <p class="price karla">$12.99</p>
          </div>
          <p class="description-special karla">
            The famous Greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <p class="order karla">Order a delivery</p>
        </article>
        <article className="special">
          <img className="special-img" src={bruschettta} alt="" />
          <div className="title-price-special">
            <h3 className="title-special karla">Bruschetta</h3>
            <p class="price karla">$5.99</p>
          </div>
          <p class="description-special karla">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <p class="order karla">Order a delivery</p>
        </article>
        <article className="special">
          <img className="special-img" src={lemonDessert} alt="" />
          <div className="title-price-special">
            <h3 className="title-special karla">Lemon Dessert</h3>
            <p class="price karla">$5.00</p>
          </div>
          <p class="description-special karla">
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <p class="order karla">Order a delivery</p>
        </article>
      </div>
    </section>
  );
}

export default Highlights;
