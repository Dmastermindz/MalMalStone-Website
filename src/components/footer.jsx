import React from "react";

//Import Icons
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

//Import Components
import Logo from "./footer-logo.jsx";

const footer = () => {
  const MenuList = [
    "Home",
    "Who We Are",
    "Contact Us",
    "Careers",
    "Stonemiles",
    "Privacy",
  ];

  return (
    <div className="grid grid-cols-2 bg-black md:h-64 h-128 py-14">
      <div>
        <Logo />
        <div className="hidden lg:flex flex- gap-8 py-[20px] mx-[142px] items-center">
          <BsInstagram className="cursor-pointer" size="32" color="white" />
          <BsFacebook className="cursor-pointer" size="32" color="white" />
          <BsLinkedin className="cursor-pointer" size="32" color="white" />
          <BsYoutube className="cursor-pointer" size="46" color="white" />
        </div>
      </div>

      <div>
        <div className="">
          <p className=" text-[#d4ac6f] text-2xl">MENU</p>
          <div className="grid md:grid-cols-2 text-white text-lg tracking-wider font-thin gap-4 py-5">
            {MenuList.map((item) => {
              return <p className="cursor-pointer">{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
