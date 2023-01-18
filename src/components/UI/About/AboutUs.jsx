import React from "react";
import "./About.css";

function AboutUs({ title, name, desc, infos, item }) {
  return (
    <>
      <div className="container py-6">
        <section className="flex flex-col gap-4 py-[40px] md:flex-row">
          <div className="flex flex-col gap-2 md:w-[40%]">
            <h1 className="text-green text-2xl font-semibold md:text-3xl lg:text-5xl">
              {title}
            </h1>
            <h1 className="text-green text-2xl font-semibold md:text-3xl">
              {name}
            </h1>
            <h3 className="text-black font-medium text-xl md:text-2xl lg:text-3xl">
              {desc}
            </h3>
          </div>
          <div className="flex flex-col gap-4 md:w-[60%]">
            {item && (
              <p className="font-normal text-[#3c3c3b] leading-6 text-sm">
                {item}
              </p>
            )}
            {infos &&
              infos.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="font-normal leading-6 text-[#3c3c3b] text-sm"
                  >
                    {item.title}
                  </p>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
