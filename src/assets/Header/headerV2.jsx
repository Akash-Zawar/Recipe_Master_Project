import React from "react";
import { Link } from "react-router-dom";

const HeaderV2 = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-brown-coffee text-white h-20">
      <div className="flex flex-row items-center gap-8 px-4">
        <img
          src="src\assets\Header\images\recipeMasterLogo.jpg"
          alt=""
          className=" w-24 h-20 backdrop-contrast-50 rounded-full"
        />
        <Link to="/admin-dashboard">
          <h1 className="text-2xl text-white font-bold">Recipe Master</h1>
        </Link>
      </div>
      <div>
        <div className="flex flex-row gap-10 text-l px-10">
          <Link to="/">
            <p className="transition ease-in-out b hover:-translate-y-1 hover:scale-110 duration-100">
              Home
            </p>
          </Link>
          <Link to="/about-us">
            <p className="transition ease-in-out b hover:-translate-y-1 hover:scale-110 duration-100">
              About Us
            </p>
          </Link>
          <Link to="/contact-us">
            <p className="transition ease-in-out b hover:-translate-y-1 hover:scale-110 duration-100">
              Contact Us
            </p>
          </Link>
          <Link to="/admin-dashboard">
            <p className="transition ease-in-out b hover:-translate-y-1 hover:scale-110 duration-100">
              Admin Dashboard
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderV2;
