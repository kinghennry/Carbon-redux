import React from "react";
import { Sidebar, MobileScreen } from "../../../components";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDashboard, MdOutlineScience } from "react-icons/md";
import { TbBuildingBank } from "react-icons/tb";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import AdminNavbar from "../components/AdminNavbar";

function Layouts(props) {
  const links = [
    {
      icon: <MdOutlineDashboard />,
      link: "Dashboard",
      url: "/admin-dashboard",
    },
    {
      icon: <BiBarChartSquare />,
      link: "Land Listings",
      subLinks: [
        {
          link: "New Listings",
          path: "/new-listings",
        },
        {
          link: "Audited Listings",
          path: "/audited-listings",
        },
      ],
    },

    {
      icon: <MdOutlineScience />,
      link: "Carbon List Listings",
      url: "/carbon-listings",
    },
    {
      icon: <AiOutlineUser />,
      link: "Land Owners",
      url: "/land-owners",
    },
    {
      icon: <IoBriefcaseOutline />,
      link: "Carbon Credit Buyers",
      url: "/credit-buyers",
    },
    {
      icon: <TbBuildingBank />,
      link: "Wire Transfer",
      url: "/wire-transfers",
    },
    {
      icon: <FiUsers />,
      link: "Brokers",
      url: "/brokers",
    },
  ];
  return (
    <section className="h-screen bg-[#f9f9f9] flex items-center justify-center max-w-screen-2xl my-o mx-auto">
      <div className="w-full h-full overflow-y-scroll">
        <AdminNavbar />
        <MobileScreen url="/admin/dashboard" links={links} />
        <div className="flex flex-col lg:flex-row lg:w-full lg:h-full lg:overflow-y-scroll ">
          <Sidebar links={links} />
          <main className="p-5 pb-16 lg:w-[80%] md:p-7">{props.children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layouts;
