import React from "react";
import logo1 from '../assets/logo1.png'
import { assets } from "../assets/assets";

const Footer = () => {

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          {/* LEFT SECTION */}
          <img className="mb-5 w-40 leading-6 md:w-2/3" src={logo1} alt="" />
          <p className="w-full text-gray-600">
          Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently.
          </p>
        </div>

        <div>
          {/* CENTER SECTION */}
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          {/* RIGHT SECTION */}
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-9372189473</li>
            <li>mayankbhadra0408@gmail.com</li>
          </ul>
        </div>
      </div>
        {/* COPYRIGHT TEXT */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">CopyRight 2025@MediConnect All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
