import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../componentsStyle/nav.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav-box">
          <div className="logo">
            <img
              src="https://www.exploro.club/images/exploro_icon.png"
              alt="Logo"
            />
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/trips">Trips</Link>
            <Link to="/club">Club</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
          <div className="menu-icon" onClick={toggleSidebar}>
            &#9776;
          </div>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          &times;
        </div>

        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/club">Club</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
