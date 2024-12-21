import React from "react";
import "../componentsStyle/card.css";
import { CiWallet } from "react-icons/ci";
const Card = () => {
  return (
    <div>
      <div className="cart-container">
        <div className="card-box">
          <CiWallet />
          <p className="home-heard">Select Your Exploration</p>
          <p className="query">
            Choose your adventure from our curated selection, fill out the
            simple booking form, and let our team guide you through the rest
          </p>
        </div>
        <div className="card-box">
          <CiWallet />
          <p className="home-heard">Select Your Exploration</p>
          <p className="query">
            Choose your adventure from our curated selection, fill out the
            simple booking form, and let our team guide you through the rest
          </p>
        </div>
        <div className="card-box">
          <CiWallet />
          <p className="home-heard">Select Your Exploration</p>
          <p className="query">
            Choose your adventure from our curated selection, fill out the
            simple booking form, and let our team guide you through the rest
          </p>
        </div>
      </div>
      <div className="down-leand-image">
        <div className="img-box">
          <img
            src="https://static.wixstatic.com/media/da937f_dff43efc1f5649bab5d5db5c19106ed9~mv2.jpg/v1/fill/w_1032,h_301,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(13).jpg"
            alt=""
          />
          <div className="text-down">
            <h1>Join as a Travel Influencer</h1>
            <p>Collaborate, Inspire and Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
