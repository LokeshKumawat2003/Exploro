import React from "react";
import "../componentsStyle/upcomint.css";

const Upcoming = () => {
  const arr = [
    {
      image:
        "https://static.wixstatic.com/media/da937f_1fe9f6c62ef74f008ffb7cea35d7e4b2~mv2.jpg",
      title: "Winter Spiti | Dec | 8 Days",
      category: "Influencer Curated",
      spotsLeft: "15",
      price: "900",
      curator: "Anu Sharma",
      detailsImage:
        "https://static.wixstatic.com/media/da937f_3b8057c6d74046f08a6d7b90072eb777~mv2.jpg",
    },
    {
      image:
        "https://static.wixstatic.com/media/da937f_1fe9f6c62ef74f008ffb7cea35d7e4b2~mv2.jpg",
      title: "Winter Spiti | Dec | 8 Days",
      category: "Influencer Curated",
      spotsLeft: "15",
      price: "900",
      curator: "Anu Sharma",
      detailsImage:
        "https://static.wixstatic.com/media/da937f_3b8057c6d74046f08a6d7b90072eb777~mv2.jpg",
    },
    {
      image:
        "https://static.wixstatic.com/media/da937f_1fe9f6c62ef74f008ffb7cea35d7e4b2~mv2.jpg",
      title: "Winter Spiti | Dec | 8 Days",
      category: "Influencer Curated",
      spotsLeft: "15",
      price: "900",
      curator: "Anu Sharma",
      detailsImage:
        "https://static.wixstatic.com/media/da937f_3b8057c6d74046f08a6d7b90072eb777~mv2.jpg",
    },
    {
      image:
        "https://static.wixstatic.com/media/da937f_1fe9f6c62ef74f008ffb7cea35d7e4b2~mv2.jpg",
      title: "Winter Spiti | Dec | 8 Days",
      category: "Influencer Curated",
      spotsLeft: "15",
      price: "900",
      curator: "Anu Sharma",
      detailsImage:
        "https://static.wixstatic.com/media/da937f_3b8057c6d74046f08a6d7b90072eb777~mv2.jpg",
    },
  ];

  return (
    <div className="trip-box">
      {arr.map((trip, index) => (
        <div key={index} className="trip-card">
          <div className="upper-card">
            <div className="upper-card-img-container">
              <img
                className="upper-card-img"
                src={trip.image}
                alt={trip.title}
              />
            </div>

            <div className="trip-category-container">
              <p className="trip-category-text">{trip.category}</p>
            </div>

            <div className="vacancy-container">
              <p className="vacancy-text">{trip.spotsLeft} Spots Left</p>
            </div>
          </div>

          <div className="lower-card">
            <p className="lower-card-text">{trip.title}</p>
            <p className="lower-card-text price-text">{`Starts @₹${trip.price} Per Person`}</p>
            <p className="lower-card-text">Curated by {trip.curator}</p>
            <button className="lower-card-button">More Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
