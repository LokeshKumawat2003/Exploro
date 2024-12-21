import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../page/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../page/Cart";
import Login from "../page/Login";
import Signup from "../page/Signup";

const AllRoute = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AllRoute;
