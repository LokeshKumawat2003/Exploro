import React from "react";
import "../componentsStyle/hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-box">
        <div className="text-hero">
          <h1>
            Travel <span>Influencer</span> Designed <span>Itineraries</span>
          </h1>
          <p>
            Discover places with influencer led tours, offering curated travel
            experiences in India and abroad
          </p>
        </div>
        <div className="month-select">
          <select name="travel-month" id="travel-month">
            <option value="">When are you free?</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Hero;
