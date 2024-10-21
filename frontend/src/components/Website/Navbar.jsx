import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black h-24 z-10 flex justify-between items-center px-4 text-white">
      <img height={200} width={200} src="/logo.jpeg" alt="Logo" />

      <ul className="hidden md:flex">
        <li className="p-4 text-green-700 font-bold text-xl">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-4 text-green-700 font-bold text-xl">
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li className="p-4 text-green-700 font-bold text-xl">
          <NavLink to="/library">Library</NavLink>
        </li>
        <li className="p-4 text-green-700 font-bold text-xl">
          <NavLink to="/programs-events">Programmes and Events</NavLink>
        </li>
        <li className="p-4 text-green-700 font-bold text-xl">
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li className="p-4 text-green-700 font-bold text-xl">
          <NavLink to="/forum">Forum</NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/library">Library</NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/programs-events">Programmes and Events</NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li className="p-4 text-green-700 font-bold text-xl">
          <NavLink to="/forum">Forum</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
