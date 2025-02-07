import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setToken(""); // Clear the token from state
  };

  return (
    <div className="flex items-center py-2 px-[4%] justify-between ">
      <img src={assets.logo} alt="Logo" className="w-[max(10%,80px)]" />
      <button
        onClick={handleLogout}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
