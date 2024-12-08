import React from "react";
import AboutCard1 from "./aboutCard1";
import AboutCard2 from "./aboutCard2";
import AboutCard3 from "./aboutCard3";
import AboutCard4 from "./aboutCard4";
import AboutCard5 from "./aboutCard5";
import AboutCard6 from "./aboutCard6";

const about = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#e2f5fb" }} className="flex flex-col justify-center sm:mx-6 mx-0 items-center">
        <div style={{backgroundColor: "#17414f",borderTopLeftRadius: "70px",borderTopRightRadius: "70px"}}
          className="w-3/4 xl:h-52 lg:h-44 sm:h-auto h-auto flex flex-wrap relative justify-center xl:gap-32 lg:gap-12 sm:gap-12 gap-4">
          <AboutCard1 />
          <AboutCard2 />
          <div className="md:w-full lg:w-auto">
            <AboutCard3 />
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:mx-6 mx-0">
        <div style={{backgroundColor: "#17414f",borderBottomLeftRadius: "70px",borderBottomRightRadius: "70px"}}
          className="w-3/4 xl:h-72 lg:h-64 sm:h-auto h-auto flex flex-wrap relative justify-center xl:gap-32 lg:gap-12 sm:gap-12 gap-4">
            <AboutCard4/>
            <AboutCard5/>
            <div className="md:w-full lg:w-auto">
            <AboutCard6 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
