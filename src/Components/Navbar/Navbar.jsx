import React, { useState } from "react";
import { FaHeart, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <img src={Logo} alt="Logo" className="h-10" />

        <ul className="hidden md:flex gap-6 font-semibold text-[#0A2C3D]">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <FaHeart />
          <FaUser />
          <FaShoppingCart />
          <button className="bg-[#80B500] text-white px-5 py-2 text-sm font-bold">
            GET A QUOTE
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 font-semibold text-[#0A2C3D]">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <FaHeart />
            <FaUser />
            <FaShoppingCart />
          </div>

          <button className="mt-4 bg-[#80B500] text-white px-5 py-2 text-sm font-bold">
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
