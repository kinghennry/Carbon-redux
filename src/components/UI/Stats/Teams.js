import React from "react";
import {
  Team_five,
  Team_four,
  Team_three,
  Team_two,
  Team_one,
} from "../../../Assets/Team";
import Carousel from "react-multi-carousel";
import { BsLinkedin } from "react-icons/bs";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 980 },
    items: 4,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 979, min: 840 },
    items: 3,
    draggable: true,
  },
  smaller: {
    breakpoint: { max: 839, min: 501 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    draggable: true,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  dotListClass: "green-dots",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: false,
  renderDotsOutside: true,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};

function Teams() {
  const items = [
    {
      avatar: Team_two,
      name: "Cade Burk",
    },
    {
      avatar: Team_three,
      name: "Dan Scott",
    },
    {
      avatar: Team_four,
      name: "Phil McClaren",
    },
    {
      avatar: Team_five,
      name: "Dan Garrry",
    },
  ];
  return (
    <section className="bg-white pb-[50px]">
      <div className="flex_Dir gap-[10px]">
        <div className="flex flex-col gap-[10px] md:flex-row">
          <div className="flex_Dir gap-[10px] lg:w-[40%] ">
            <h1 className="text-3xl text-black font-semibold md:text-4xl">
              Our Team member is ready to help our clients!{" "}
            </h1>
            <p className="text-black text-base font-normal leading-7 my-2 md:my-6">
              We love what we do and we do it with passion. We value the
              experimentation of the message and smart incentives.
            </p>
          </div>
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-[128px] lg:w-[60%]">
            <div></div>
            <div className="relative carouse_imgs cursor-pointer">
              <div className="relative carouse_imgs">
                <img src={Team_one} alt="Team_one" />
                <div className="overlay  flex_Box flex_Dir">
                  <h1 className="text-2xl font-medium">Tim Harry</h1>
                  <div className="flex_sty gap-[4px]">
                    <BsLinkedin className="text-1xl text-[#0A66C2]" />
                    <h3 className="text-[#0A66C2]">View Profile</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel {...carouselParams}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="mr-3 relative carouse_imgs cursor-pointer"
              >
                <img src={item.avatar} alt="teams" className="h-auto" />
                <div className="overlay bg-white flex_Box flex-col">
                  <h1 className="text-2xl font-medium">{item.name}</h1>
                  <div className="flex_sty gap-[4px]">
                    <BsLinkedin
                      style={{ color: "blue" }}
                      className="text-1xl"
                    />
                    <h3 style={{ color: "blue" }}>View Profile</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Teams;
