import React from "react";
import "./Hero.css";
import { Hero_img } from "../../Assets/Images";
import {
  Small_right,
  Big_right,
  carbonright,
  faint_carbon,
  light_carbon,
} from "../../Assets/Carbon";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="container">
        <div className="relative hero_box lg:max-w-[980px] lg:mx-auto lg:my-0">
          <div className="right-[10px] top-[0]  absolute w-10 md:right-[0] md:top-[0.51%] lg:bottom-[30%] lg:w-20 lg:top-[60%]">
            <img src={Big_right} alt="carbonright" />
          </div>
          <div className="absolute w-7 top-[55%] md:w-[70px] lg:top-[30%] lg:left-[1.5%]">
            <img src={Big_right} alt="carbonright" />
          </div>
          <div className="hidden md:block md:right-[3%] md:top-[25%] md:absolute md:w-10   lg:top-[40%]">
            <img src={carbonright} alt="carbonright" />
          </div>
          <div className="hidden md:block md:absolute md:w-10 md:right-[0]  md:bottom-[10%]">
            <img src={Small_right} alt="smallright" />
          </div>
          <div className="carbonright_two right-[0] absolute top-[72%] w-[50px] md:hidden">
            <img src={light_carbon} alt="smallright" />
          </div>
          <div className="top-[65%] absolute right-[20%]  w-6  md:w-10 md:top-[59%]">
            <img src={light_carbon} alt="smallright" />
          </div>
          <div className="hero_details flex_Box flex_Dir gap-[16px] px-5 mx-5  md:text-center md:max-w-[700px] md:mx-auto md:my-0 md:px-0">
            <h1 className="text-black pt-[40px]">
              Live&nbsp;
              <span className="font-medium md:font-extrabold text-green">
                Carbon
              </span>
              &nbsp;Neutral and&nbsp;
              <span className="font-medium  md:font-extrabold text-green">
                Credit Yourself with
              </span>
              &nbsp;a Better Future.
            </h1>
            <p>
              We are proud to introduce the Worlds first platform that provide
              land owners with a quick, safe and easy way to register, certify
              and offer Carbon Credits derived from trees on ther property.
              Corporations are easily able to purchase Carbon Credits to offset
              emissions.
            </p>
            <div
              className="hero_btn mt-[20px] md:mt-0"
              onClick={() => navigate("/carbon-credit")}
            >
              <button className="click_btn uppercase py-2.5 px-7 rounded md:py-5 md:px-10">
                View Carbon Credit
              </button>
            </div>
            <div className="hero_img">
              <img src={Hero_img} alt="hero" />
            </div>
          </div>
          <div className="faint_carbon absolute top-[78%] left-[2%] w-8 md:top-[50%] left-[0] md:top-[50%] md:left-[0]">
            <img src={faint_carbon} alt="smallright" />
          </div>
          <div className="hidden faint_Carbon md:block md:absolute md:top-[70%]  md:w-20 lg:left-[4%]">
            <img src={light_carbon} alt="smallright" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
