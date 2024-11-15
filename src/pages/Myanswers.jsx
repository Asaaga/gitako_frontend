import React from "react";
import Forum from "./Forum";

const Myanswers = () => {
  return (
    <div className="flex mt-11">
      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-[250px] transition-all duration-300 ease-in-out">
        {/* Toggle Button for Small Screens */}

        <div className="p-4">
          <Forum />
        </div>
      </div>
    </div>
  );
};

export default Myanswers;
