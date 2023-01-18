/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from "react";
import MediaQuery from "react-responsive";
import { Logo } from "../../Assets/Images";
import { NavLink, Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Nav({ bg, text }) {
  return (
    <header className={`${bg ? "bg-white" : "bg-[#f9f9f9]"}`}>
      <div className="container">
        <MediaQuery minWidth={964}>
          <nav className="space_sty p-5">
            <div className="nav_logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <ul className="flex_sty gap-10">
              <li className="nav_item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav_item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-green font-semibold" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav_item">
                <NavLink
                  to="/carbon"
                  className={({ isActive }) =>
                    isActive ? "text-green font-semibold" : ""
                  }
                >
                  Carbon Credits
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-green font-semibold" : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav_btn">
              <Link
                to={!text ? "/login" : "/purchase-carbonCredits"}
                className=" py-2.5 px-5 rounded-lg click_btn"
              >
                {!text ? "Sign in" : "Purchase Carbon Credits"}
              </Link>
            </div>
          </nav>
        </MediaQuery>

        {/* mobile nav */}
        <MediaQuery maxWidth={963}>
          <MobileNav />
        </MediaQuery>
      </div>
    </header>
  );
}

export default Nav;
