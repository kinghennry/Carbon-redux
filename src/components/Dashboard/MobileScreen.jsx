import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Logo } from "../../Assets/Images";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import LoggedIn from "./LoggedIn";
import Links from "./Links";

function MobileScreen({ url, links }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <MediaQuery maxWidth={1024}>
      <div className="relative bg-white">
        <nav className="space_sty p-6 sticky top-0 left-0 bg-white z-50 border-solid border-b border-[#e8e8e8]">
          <figure className="flex_Box">
            <Link to={url}>
              <img src={Logo} alt="logo" className="w-36" />
            </Link>
          </figure>
          <button>
            {open ? (
              <IoCloseSharp className="fade-in db_icon" onClick={toggle} />
            ) : (
              <BiMenu className="fade-in db_icon" onClick={toggle} />
            )}
          </button>
        </nav>
        {open && (
          <div
            className="bg-trans w-full  h-[1000px]  abs fade-in"
            onClick={toggle}
            style={{ zIndex: "2000" }}
          />
        )}
        {open && (
          <div
            className="slide-in abs left-0  w-80 h-[1000px] bg-[#f7f8fd] "
            style={{ zIndex: "5000" }}
          >
            <LoggedIn url={url} />
            <Links links={links} />
          </div>
        )}
      </div>
    </MediaQuery>
  );
}

export default MobileScreen;
