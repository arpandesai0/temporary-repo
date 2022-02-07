import React from "react";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar-container">
      <div />
      <div className="navbar-input">
        <img src={search} alt="" />
        <input placeholder="Search" />
      </div>
      <div className="navbar-list">
        <p>Home</p>
        <p>Courses</p>
        <img src={cart} alt="" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
