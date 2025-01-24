import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="flex ">
          <img src={assets.logo} className="mb-5 w-45 h-40" />
          <p className="w-full md:w-2/3 text-gray-600 text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered
            the undoubtable source.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-1">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-1">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+84 0783309719</li>
            <li>ThienVy@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ThienVY.com - All rights reserved. Designed by Vũ Thiên
        </p>
      </div>
    </div>
  );
};

export default Footer;
