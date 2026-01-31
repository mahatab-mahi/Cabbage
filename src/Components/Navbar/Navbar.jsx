import React, { useState } from "react";
import { FaHeart, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About", "Shop", "Pages", "Blog", "Contact"];
  const icons = [<FaHeart />, <FaUser />, <FaShoppingCart />];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <img src={Logo} alt="Logo" className="h-10" />

        <ul className="hidden md:flex gap-6 font-bold text-[17px] cursor-pointer">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={active === index ? "text-[#80B500]" : "text-[#0A2C3D]"}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-3">
            {icons.map((Icon, i) => (
              <div key={i} className="w-9 h-9 bg-[#80B500] rounded-full flex items-center justify-center text-white cursor-pointer">
                {Icon}
              </div>
            ))}
          </div>
          <button className="bg-[#80B500] text-white text-[14px] font-bold px-6 py-2">GET A QUOTE</button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 font-bold text-[17px] cursor-pointer">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(index);
                  setOpen(false);
                }}
                className={active === index ? "text-[#80B500]" : "text-[#0A2C3D]"}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="md:flex flex-col my-4 gap-y-3 md:gap-y-0 md:my-0 md:items-center gap-3 mt-4">
            {icons.map((Icon, i) => (
              <div key={i} className="w-9 h-9 bg-[#80B500] rounded-full flex items-center justify-center text-white">
                {Icon}
              </div>
            ))}
            <button className="bg-[#80B500] mt-3 md:mt-0 text-white text-[14px] font-bold px-4 py-2 ml-2">GET A QUOTE</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
