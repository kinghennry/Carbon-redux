import React from "react";
import Carousel from "react-multi-carousel";
import { Ronald, Savannah, Floyd } from "../../../Assets/Team";
import ButtonGroup from "./ButtonGroup";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
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
  customButtonGroup: <ButtonGroup />,
  dotListClass: "green-dots",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: true,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
function Customer() {
  const items = [
    {
      avatar: Floyd,
      name: "Floyd Miles",
      view: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt.”",
    },
    {
      avatar: Ronald,
      name: "Ronald Richards",
      view: "“ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”",
    },
    {
      avatar: Savannah,
      name: "Savannah Nguyen",
      view: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt.”",
    },
  ];

  return (
    <section className="customer py-[30px] mb-[50px]">
      {/* p-[40px] */}
      <div className="container relative">
        <div className="flex flex-col gap-[7px]">
          <h1 className="text-black font-semibold text-2xl">
            Why&nbsp;
            <span className="text-green">Customers</span>&nbsp; Say ?
          </h1>
          <p className="font-normal text-black">
            Don’t take our word for it. Trust our customers
          </p>
        </div>
        <div className="my-[40px]">
          <Carousel {...carouselParams}>
            {items.map((item, index) => {
              return (
                <article
                  key={index}
                  className="bg-white h-[240px] border-solid border border-[#E7EAEC] flex_Dir gap-[10px] rounded mr-2 px-4 py-[30px] md:h-[250px]"
                >
                  <div className="flex gap-[10px]">
                    <div>
                      <img src={item.avatar} alt="aavat" />
                    </div>
                    <div className="flex_Dir">
                      <span className="font-semibold text-black font-3xl">
                        {item.name}
                      </span>
                      <span className="font-light">UI/UX Designer</span>
                    </div>
                  </div>
                  <div className="font-medium text-black text-sm">
                    {item.view}
                  </div>
                </article>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Customer;
