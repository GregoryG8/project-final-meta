import React from "react";
import "./Testimonials.css";
import Rating from "@mui/material/Rating";
import malePerfil from "../../assets/man-user-circle-icon.png";
import femalePerfil from "../../assets/woman-user-circle-icon.png"

function Testimonials() {
  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title markazi">Testimonials</h2>
      <div className="testimonials">
        <article className="testimonial">
          <div className="rating-testimonials">
            <p className="markazi">Rating</p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <div className="testimonial-img">
            <img src={femalePerfil} alt="" />
          </div>
          <p className="testimonial-name markazi">Emily Johnson</p>
          <div className="testimonial-review">
          <p className="markazi">Affordable prices and great selection. I found exactly...</p>
          </div>
        </article>
        <article className="testimonial">
          <div className="rating-testimonials">
            <p className="markazi">Rating</p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <div className="testimonial-img">
            <img src={malePerfil} alt="" />
          </div>
          <p className="testimonial-name markazi">Michael Smith</p>
          <div className="testimonial-review">
          <p className="markazi">A truly remarkable experience. The attention to detail...</p>
          </div>
        </article>
        <article className="testimonial">
          <div className="rating-testimonials">
            <p className="markazi">Rating</p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <div className="testimonial-img">
            <img src={femalePerfil} alt="" />
          </div>
          <p className="testimonial-name markazi">Sophie Brown</p>
          <div className="testimonial-review">
          <p className="markazi">The product quality is outstanding and the delivery...</p>
          </div>
        </article>
        <article className="testimonial">
          <div className="rating-testimonials">
            <p className="markazi">Rating</p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <div className="testimonial-img">
            <img src={malePerfil} alt="" />
          </div>
          <p className="testimonial-name markazi">Daniel Miller</p>
          <div className="testimonial-review">
            <p className="markazi">Excellent service and friendly staff. Highly recommend...</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
