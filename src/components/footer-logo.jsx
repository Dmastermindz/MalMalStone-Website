import React from "react";

//Import Images
import Logo from "../assets/img/malmalstone.png";

const logo = () => {
  return (
    <div className="flex flex-row cursor-pointer">
      <img className="h-16 py-2 px-6 pl-[90px]" src={Logo} />
      <h1 className="text-white text-4xl py-2 px-0 mx-[-15px] my-[4px] font-light tracking-wide w-[300px] hidden sm:flex">
        MalMal Stone
      </h1>
    </div>
  );
};

export default logo;
