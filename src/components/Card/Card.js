import React from "react";
import background from "../../assets/card-background.png";
import "./Card.css";
function Card() {
  return (
    <div>
      <img src={background} alt="" />
      <p className="card-title">UI/UX Designing Course</p>
      <p className="card-val">Rs.699</p>
    </div>
  );
}

export default Card;
