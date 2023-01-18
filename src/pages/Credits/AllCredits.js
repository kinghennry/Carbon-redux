import { useState } from "react";
import {
  SEO,
  Nav,
  CarbonLists,
  GridView,
  Footer,
  BreadCrumb,
} from "../../components";
import {
  Image_four,
  Image_six,
  Image_five,
  Image_three,
  Image_one,
  Image_two,
} from "../../Assets/Carbon";
import { RiAppsFill } from "react-icons/ri";
import { VscListUnordered } from "react-icons/vsc";
// import { Outlet, Routes, Route } from "react-router-dom";
// import CarbonDetail from "./CarbonDetail";
// import AllCredits from "./AllCredits";

function AllCredits() {
  const [open, setOpen] = useState(false);
  const credits = [
    {
      avatar: Image_one,
    },
    { avatar: Image_two },
    { avatar: Image_three },
    { avatar: Image_four },
    { avatar: Image_five },
    { avatar: Image_six },
  ];
  return (
    <>
      <SEO title="Carbon Credits" />
      <Nav bkg text="Purchase Carbon Credits" url="/purchase-carbonCredits" />
      <BreadCrumb
        title="Carbon Credits"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea consequat, venenatis, etiam feugiat. Maecenas id orci eros vitae pellentesque."
      />
      <div className="flex items-center gap-[8px] my-0 mx-10 p-5">
        <button
          onClick={() => setOpen(!open)}
          className={` cursor-pointer bold_sty p-2 rounded ${
            open ? "border-[#008c36]" : "border-transparent"
          }`}
        >
          <RiAppsFill className="text-2xl text-green" />
        </button>
        <button
          className={`cursor-pointer bold_sty p-2 rounded ${
            !open ? "border-[#008c36]" : "border-transparent"
          }`}
          onClick={() => setOpen(!open)}
        >
          <VscListUnordered className="text-2xl text-green" />
        </button>
      </div>

      {open ? <GridView /> : <CarbonLists credits={credits} />}
      <Footer />
    </>
  );
}

export default AllCredits;
