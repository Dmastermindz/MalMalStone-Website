import React from "react";

//Import Images
import Logo from "../assets/img/malmalstone.png";

const logo = () => {
  return (
    <div className="flex flex-row cursor-pointer">
      <img
        className="h-8 mx-5 mt-1 sm:h-16 sm:py-2 sm:px-6 sm:pl-[90px]"
        src={Logo}
      />
      <h1 className="text-white text-2xl mx-[-14px] my-[5px] sm:text-4xl sm:py-2 sm:px-0 sm:mx-[-15px] sm:my-[4px] font-light tracking-wide w-[300px]">
        MalMal Stone
      </h1>
    </div>
  );
};

export default logo;
