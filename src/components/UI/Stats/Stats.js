import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Stats.css";

function Stats() {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
    <section className="bg-green">
      <div className="container">
        <div className="grid_sty stats">
          <div className="stat_item flex_Box flex_Dir">
            <div className="stat_number flex_sty">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={didViewCountUp ? 35 : 0} />
              </VisibilitySensor>
              &nbsp;
              <h1 className="sub_Header">Billion</h1>
            </div>
            <h3>Pounds of CO2 Offset</h3>
          </div>

          <div className="stat_item flex_Box flex_Dir">
            <div className="stat_number flex_sty">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={didViewCountUp ? 1 : 0} />
              </VisibilitySensor>
              <h1 className="sub_Header">M+</h1>
            </div>
            <h3>Customers </h3>
          </div>

          <div className="stat_item text_ct flex_Box flex_Dir">
            <div className="stat_number flex_sty">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={didViewCountUp ? 960 : 0} />
              </VisibilitySensor>
              <h1 className="sub_Header">K&nbsp;+</h1>
            </div>
            <h3>Companies</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
