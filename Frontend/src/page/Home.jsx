import React from "react";
import "../pageStyle/home.css";
import Hero from "../components/Hero";
import Upcoming from "../components/UpcomingTrip";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="upcoming-trip">
        <h1>Our upcoming popular explorations</h1>
        <p>
          Enabling travellers to discover and experience new forms of travelling
        </p>
      </div>
      <Upcoming />
      <div className="upcoming-trip">
        <h1>Book your next Exploration in 3 steps</h1>
        <p>Begin your journey with us today</p>
      </div>
      <Card/>
    </div>
  );
};

export default Home;
