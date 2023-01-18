import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function OptionBtn({ title, url, link, li, desc, name, links }) {
  return (
    <>
      {title && (
        <div className="mb-6 space_sty">
          <h1 className="db_header text-2xl md:text-2xl">{title}</h1>
          {link && (
            <Link className="click_btn px-6 py-2 rounded md:py-4" to={url}>
              {link}
            </Link>
          )}
        </div>
      )}

      {li && (
        <div className="flex flex-col mb-3">
          <h1 className="db_header text-xl">{li} </h1>
          <ul className="mb-4 mt-2 flex_sty">
            <Link to={links}>
              <li className="text-xs">{name}</li>
            </Link>
            <MdOutlineArrowForwardIos className="text-sm" />
            <li className="font-bold text-xs">{desc}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default OptionBtn;
