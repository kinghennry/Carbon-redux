import React from "react";
import { Logo } from "../../../Assets/Images";
import { Link } from "react-router-dom";

function Header({ url, span, text }) {
  return (
    <>
      <div className="login space_sty py-4 px-4 border-solid border-b border-[#e8e8e8]  lg:border-none">
        <div className="login_logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <Link to={url} className="text-black font-normal hidden lg:block">
          {text} &nbsp;
          <span className="text-green">{span}</span>
        </Link>
        <Link to={url} className="text_sty font-normal mobile_link lg:hidden">
          <span className="text-green">{span}</span>
        </Link>
      </div>
    </>
  );
}

export default Header;
