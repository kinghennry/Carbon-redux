import React from "react";
import { Logo } from "../../../Assets/Images";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import MediaQuery from "react-responsive";

function AdminNavbar() {
  return (
    <MediaQuery minWidth={1025}>
      <nav className="dashboard_nav bg-white p-6 space_sty border-solid border-b border-[#e8e8e8]">
        <figure className="flex_Box lg:w-[20%]">
          <Link to="/admin/dashboard">
            <img src={Logo} alt="logo" className="w-36" />
          </Link>
        </figure>
        <div className="dashboard_icons py-0 px-12 space_sty lg:w-[80%]">
          <div className="dashboard_search flex_sty g-16">
            <FiSearch className="search_icon text-gray" />
            <input placeholder="Search..." />
          </div>

          <div className="bg-lightGrey relative h-7 w-7 flex_Box rounded-full">
            <BsBell className="bell_icon text-gray" />
            <div className="absolute bg-red-500 h-1.5 w-1.5 ml-2.5 rounded-full -mt-3.5" />
          </div>
        </div>
      </nav>
    </MediaQuery>
  );
}

export default AdminNavbar;
