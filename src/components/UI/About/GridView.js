import React, { useState } from "react";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import GridImg from "./GridView.jpg";

function GridView() {
  const [certs, setCerts] = useState(
    Array.from({ length: 8 }, (v, i) => false)
  );
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("Filter and Sort");
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <section className="slide-in">
      <div className="bg-white rounded-md p-5 bold_sty border-[#eceef7] my-10 mx-10">
        <div className="space_sty">
          <div className="user_search flex_sty" style={{ width: "40%" }}>
            <FiSearch className="search_icon mr-2" />
            <input
              placeholder="Search by location..."
              className="w-11/12 text-[#898a8d]"
            />
          </div>
          {/* dropdown */}
          <div className="dropdown">
            <div className="dropdown_btn" onClick={(e) => setActive(!active)}>
              <span className="select_text">{selected}</span>
              <span>
                <AiOutlineBars className="select-icon" />
              </span>
            </div>
            {active && (
              <div className="dropdown_content">
                {options.map((option) => (
                  <div
                    className="dropdown_item"
                    onClick={(e) => {
                      setSelected(option);
                      setActive(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="tables mt-5 rounded">
          <table>
            <thead>
              <tr>
                <th className="text-xs">Certificate </th>
                <th className="text-xs">Project Name </th>
                <th className="text-xs">Cost per ton </th>
                <th className="text-xs">Metric tons held</th>
                <th className="text-xs">Percentage of portfolio </th>
                <th className="text-xs">Active</th>
                <th className="text-xs">Registry </th>
              </tr>
            </thead>
            <tbody>
              {certs.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <div className="w-[60px] mx-auto text-center flexBox_sty">
                        <img src={GridImg} alt="Gridview" />
                      </div>
                    </td>
                    <td>2464 Royal Ln. Mesa, New Jersey 45463</td>
                    <td>$7</td>
                    <td>5208 mts</td>
                    <td>84%</td>
                    <td>
                      <button className="text-green bg-lightGreen rounded px-4">
                        Active
                      </button>
                    </td>
                    <td>25 Aug, 2022 8:18 AM</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex_Box mt-[0px] mb-[80px]">
        <button className="border-solid border text-green rounded px-[30px] py-[10px] border-green">
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default GridView;
