import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./pages/Order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing components here for better code organization and maintainability

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
