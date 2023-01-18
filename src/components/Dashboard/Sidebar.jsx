import MediaQuery from "react-responsive";
import Links from "./Links";
import { Avatar } from "@mui/material";
import { avatar } from "../../Assets/Images";
import { FiMoreHorizontal } from "react-icons/fi";
import { Popover } from "@headlessui/react";

function Sidebar() {
  return (
    <MediaQuery minWidth={1025}>
      <aside className="sidebar pl-[2px] border-solid border-r border-[#e8e8e8] h-screen sticky top-0 left-0  bg-white lg:w-[20%]">
        <h1>sidebar</h1>
      </aside>
    </MediaQuery>
  );
}

export default Sidebar;
