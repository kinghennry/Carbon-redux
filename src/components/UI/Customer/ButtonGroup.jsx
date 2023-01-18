import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function ButtonGroup({ next, previous }) {
  return (
    <div className="flex absolute gap-[4px] right-0 top-0">
      <button
        aria-label="previous"
        onClick={previous}
        className="border-solid border border-green "
      >
        <FiChevronLeft className="text-2xl text-green" />
      </button>
      <button aria-label="next" className="bg-green" onClick={next}>
        <FiChevronRight className="text-white text-2xl" />
      </button>
    </div>
  );
}

export default ButtonGroup;
