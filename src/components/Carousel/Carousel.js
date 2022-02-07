import React from "react";
import background from "../../assets/card-background.png";
import arrow from "../../assets/arrow.png";
import "./Carousel.css";
function Carousel() {
  return (
    <div className="carousel-container">
      <div className="arrow-container">
        <img src={arrow} alt=" " className="carousel-arrow right" />
      </div>
      <div className="arrow-container">
        <img src={arrow} alt=" " className="carousel-arrow left" />
      </div>
      <img className="carousel-img" src={background} alt="" />
      <div className="carousel-details">
        <p>UI/UX Designing Course</p>
        <p className="carousel-text">
          Lorem ipsum is the dummy text used tokdkdi kdolll kolk yundjkdi
          idkdldie dkdldiek idiekm in the nrooot .
        </p>
        <p className="carousel-val">Rs.699</p>
      </div>
    </div>
  );
}

export default Carousel;
