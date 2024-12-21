import React, { useState } from 'react';
import '../pageStyle/cart.css';

const Cart = () => {
  const [trips, setTrips] = useState([
    { id: 1, destination: 'Paris', price: 1200, month: 'January', seats: 2, seatType: 'VIP' },
    { id: 2, destination: 'New York', price: 1500, month: 'March', seats: 1, seatType: 'Regular' },
    { id: 3, destination: 'Tokyo', price: 1800, month: 'July', seats: 3, seatType: 'Economy' },
  ]);

  const cancelTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <div className="cart-box">
      <h2>Your Booked Trips</h2>
      {trips.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <div className="cart-list">
          {trips.map((trip) => (
            <div key={trip.id} className="cart-item">
              <div className="cart-item-details">
                <h3>{trip.destination}</h3>
                <p className="price">${trip.price}</p>
                <p className="month">Month: {trip.month}</p>

                {/* Seat Details Section */}
                <div className="seat-details">
                  <span className="seat-type">Seat Type: {trip.seatType}</span>
                  <span className="seat-count">Seats: {trip.seats}</span>
                </div>
              </div>
              <button className="cancel-btn" onClick={() => cancelTrip(trip.id)}>
                Cancel Trip
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
