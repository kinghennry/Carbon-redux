import { FiSearch } from "react-icons/fi";
import Cert from "../../../Assets/Carbon/Cert.svg";
import { Trees, CO2, Acres } from "../../../Assets/Images";

function CarbonLists({ credits }) {
  return (
    <div className="slide-in p-5 my-2 mx-10">
      <div className="flex_sty bg-white pl-[40px] mt-[0px] mb-[30px] border-solid border border-[#d3d3d3] rounded md:w-1/2 ">
        <input placeholder="Search by location.." className="text-sm w-full" />
        <button className="flex_Box bg-green rounded p-2">
          <FiSearch className="text-white text-3xl" />
        </button>
      </div>

      <div className="grid_sty credits_grid g-16">
        {credits &&
          credits.map((item, index) => {
            return (
              <div key={index} className="credit_item">
                <div className="credit_img">
                  <img src={item.avatar} alt="avatar" />
                </div>
                <div className="credits_views flex_Dir">
                  <h2>4140 Parker Rd. Allentown, New Mexico, 31134</h2>
                  <div className="grid_sty credit_view">
                    <div className="credits_listDetail">
                      <div>
                        <img src={Acres} alt="Trees" />
                      </div>
                      <h2>24 ACRES</h2>
                    </div>
                    <div className="credits_listDetail flex_sty">
                      <div>
                        <img src={Trees} alt="Trees" />
                      </div>
                      <h2>120K TREES</h2>
                    </div>
                    <div className="credits_listDetail flex_sty">
                      <div>
                        <img src={CO2} alt="CO2" />
                      </div>
                      <h2>5802 mts</h2>
                    </div>
                  </div>
                  <div className="space_sty">
                    <div className="cert flex_sty">
                      <div className="cert_img">
                        <img src={Cert} alt="cert" />
                      </div>
                      <p className="subText_sty">View Cerificate</p>
                    </div>
                    <div className="cert flex_sty">
                      <p className="subText_sty">$6/per mt</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex_Box mt-[50px] mb-[100px]">
        <button className="border-solid border text-green rounded px-[40px] py-[10px] border-green">
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default CarbonLists;
