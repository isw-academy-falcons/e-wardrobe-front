import React from "react";
import laundry from "./laundry.svg";
import "./Mart.css";

const Mart = ({ name, address, rating, open, martImage }) => {
  return (
    <div className="laundro-mart">
      <div className="laundro-mart-details-container">
        <div className="laundro-mart-details">
          <p className="laundro-mart-name" id="laundro-text">{name}</p>
          <div className="laundro-mart-address" id="laundro-text">{address}</div>
          <div className="laundro-mart-rating"id="laundro-text">Rating: {rating}</div>
          <div className="laundro-mart-open "id="laundro-text">
            Open: <span id="opening-time">{open}</span>
          </div>
        </div>
        <div className="laundry-image-container">
          <img src={martImage} alt="dry cleaners" className="laundry-image"  />
        </div>
      </div>
      <div className="br-line"></div>
    </div>
  );
};

export default Mart;
