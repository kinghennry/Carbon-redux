import React, { useState } from "react";
import { Logo } from "../../Assets/Images";
import { NavLink, Link, useLocation } from "react-router-dom";

function MobileNav({ url }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="space_sty p-5  border-solid border-b border-[#e8e8e8]">
      <div className="nav_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <button className="nav_toggle" onClick={() => setOpen(!open)}>
        <span
          className="h-0.5 bg-black w-8 origin-[5.7px_3px] mb-1 block animate"
          style={{ transform: open ? "rotate(45deg)" : "" }}
        ></span>
        <span
          className="h-0.5 bg-black w-8  mb-1 block origin-[5.7px_3px] animate"
          style={{ opacity: open ? "0" : "" }}
        ></span>
        <span
          className="h-0.5 bg-black w-8  block origin-[5.7px_3px] animate"
          style={{ transform: open ? "rotate(-45deg)" : "" }}
        ></span>
      </button>
      <ul
        className={` flex flex-col animate bg-green fixed h-full text-white w-full left-0 top-[20%]  z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="p-5 border-solid border-b border-[#f9f9f9]">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-5 border-solid border-b border-[#f9f9f9]">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="p-5 border-solid border-b border-[#f9f9f9]">
          <NavLink to="/carbon">Carbon Credits</NavLink>
        </li>
        <li className="p-5 border-solid border-b border-[#f9f9f9]">
          <NavLink to="/contact">Contact Us</NavLink>
        </li>

        {location.pathname === "/carbon-credit" ? (
          <li className="mt-10 mr-0 mb-0 ml-5 w-full">
            <NavLink
              to="/purchase-carbonCredits"
              className="rounded border-solid border border-[#f9f9f9] px-12 py-2"
            >
              Purchase Carbon Credits
            </NavLink>
          </li>
        ) : (
          <li className="mt-10 mr-0 mb-0 ml-5 w-1/2">
            <NavLink
              to="/login"
              className="rounded border-solid border border-[#f9f9f9] px-12 py-2"
            >
              SIGN IN
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MobileNav;
