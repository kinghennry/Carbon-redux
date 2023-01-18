import React from "react";
import {
  Small_right,
  Big_right,
  carbonright,
  faint_carbon,
  light_carbon,
} from "../../Assets/Carbon";

function BreadCrumb({ title, desc, tab_sty }) {
  return (
    <section className={`bg-[#f9f9f9]  ${tab_sty ? "hidden md:flex " : ""}`}>
      <div className="container">
        <div className="relative mx-auto my-0 max-w-[1200px] ">
          <div className="absolute hidden md:w-[70px] md:right-[14%]  md:bottom-[10%]">
            <img src={Big_right} alt="carbonright" />
          </div>
          <div className="absolute w-[50px] bottom-[0%] left-[2%] md:left-[17%] ">
            <img src={Big_right} alt="carbonright" />
          </div>
          <div className=" hidden absolute w-[40px] right-[0%] bottom-[0%]  md:flex">
            <img src={carbonright} alt="carbonright" />
          </div>
          <div className="w-[40px] absolute top-[5%] right-[0%] md:top-[20%] ">
            <img src={Small_right} alt="smallright" />
          </div>
          <div className="absolute w-[40px] bottom-[0%] ml-[230px] right:[0%] md:top-[20%] md:left-[14%] md:ml-[0px]">
            <img src={light_carbon} alt="smallright" />
          </div>
          <section className="pt-[30px] flex_Dir text-left gap-[10px] pb-[50px] h-[48vh] mx-auto my-0 max-w-[680px] md:text-center md:flex_Box md:h-[35vh]">
            {title && (
              <h1 className="text-black font-semibold text-4xl">{title}</h1>
            )}
            {desc && (
              <h3 className="font-normal pb-[20px] text-1xl text-[#3c3c3b] md:pb-[0px]">
                {desc}
              </h3>
            )}
          </section>

          <div className="absolute w-[30px] right-[0%] bottom-[5%] md:w-[70px] md:bottom-[-3%] md:left-[0%] ">
            <img src={faint_carbon} alt="smallright" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumb;
