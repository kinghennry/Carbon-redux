import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Footer_Logo from "./Footer_logo.svg";

function Footer() {
  return (
    <footer className="bg-green pt-[50px] px-[15px] pb-[30px] lg:px-[30px] lg:pb-[30px]">
      <div className="container">
        <div className="footer_box gap-[40px] mb-[40px] flex flex-col md:justify-between md:flex-row">
          <div className="footer_credits gap-[30px] flex_Dir">
            <Link to="/" className="footer_logo">
              <div className="w-[200px]">
                <img src={Footer_Logo} alt="logo" />
              </div>
            </Link>

            <div className="footer_links flex gap-[16px]">
              <Link to="about" className="font-roboto text-sm text-white">
                About Us
              </Link>
              <Link
                to="/carbon-credit"
                className="font-roboto text-sm text-white"
              >
                Carbon Credits
              </Link>
              <Link to="/contact" className="font-roboto text-sm text-white">
                Contact Us
              </Link>
            </div>
            <div className="footer_icons flex gap-[14px] text-white text-1xl">
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsLinkedin />
            </div>
          </div>
          <form className="footer_inputs flex_Dir gap-[16px]">
            <h2 className="wht_sty">Subscribe</h2>
            <div className="footer_inputItem flex flex-col gap-[16px] md:flex-row">
              <div className="footer_input py-2.5 px-5 rounded-md border-solid  border border-[#ffffff] md:w-[70%] ">
                <input
                  placeholder="Enter your email"
                  className="text-white w-full text-sm"
                />
              </div>
              <button className=" w-[40%] rounded-md border-solid  border border-[#ffffff] outline-0 py-2.5 px-7 font-light text-white">
                Subscribe
              </button>
            </div>
            <p className="text_sty text-xs md:text-sm">
              By subscribing you agree to with our Privacy Policy
            </p>
          </form>
        </div>

        <hr className="border-solid border border-[#bbbbbb]" />

        <div className="flex flex-col mt-[50px] gap-[20px] md:justify-between md:flex-row">
          <div className="footer_terms flex flex-col gap-[20px] md:flex-row">
            <p className="text_sty">Privacy Policy</p>
            <p className="text_sty">Terms of Service</p>
            <p className="text_sty">Cookies Settings</p>
          </div>
          <div className="copyright">
            <p className="text_sty">
              ©&nbsp;{new Date().getFullYear()} Carbon Credits, All right
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
