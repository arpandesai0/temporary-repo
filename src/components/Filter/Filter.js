import React from "react";
import "./Filter.css";
import deleteIcon from "../../assets/delete.png";
function Filter() {
  return (
    <div className="filter-container">
      <p className="filter-title">Filter</p>
      <div className="filter-sort-head-container">
        <p className="filter-topic">Topic</p>
        <div className="filter-sort-container">
          <div className="filter-sort">
            <p>Design</p>
            <img src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="filter-list-sorted">
        <p className="filter-topic">Level</p>
        <div>
          <p className="filter-item">Begineer</p>
          <p className="filter-item">Intermediate</p>
          <p className="filter-item">Advanced</p>
          <p className="filter-item">All of the above</p>
        </div>
      </div>
      <div className="filter-list-sorted">
        <p className="filter-topic">Price</p>
        <div>
          <p className="filter-item">499-1000</p>
          <p className="filter-item">1000-1500</p>
          <p className="filter-item">499-10000</p>
          <p className="filter-item">1000-1500</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
