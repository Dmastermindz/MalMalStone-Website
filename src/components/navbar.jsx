import React from "react";

//Import Icons
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

//Import Components
import Logo from "./logo.jsx";

const navbar = () => {
  return (
    <div className="flex flex-row fixed z-40 w-full bg-black h-20 py-1.5 items-center gap-1.5">
      <Logo />
      <div className="md:flex flex-row items-center 3xl:ml-[1380px] 2xl:ml-[925px] xl:ml-[650px] lg:ml-[410px] md:ml-[100px] sm:ml-[10px] hidden md:visible pt-2 gap-4">
        <BsInstagram className="cursor-pointer" size="24" color="white" />
        <BsFacebook className="cursor-pointer" size="24" color="white" />
        <BsLinkedin className="cursor-pointer" size="24" color="white" />
        <BsYoutube className="cursor-pointer" size="30" color="white" />
      </div>
      <HiMenu
        className="ml-[15px] mr-2 sm:ml-[115px] md:ml-[15px] mt-[7.5px] cursor-pointer justify-self-right"
        size="35"
        color="white"
      />
    </div>
  );
};

export default navbar;
