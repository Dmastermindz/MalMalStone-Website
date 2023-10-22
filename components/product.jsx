import React from "react";

//Import Images
import Product1 from "../assets/img/25.jpg";
import Product2 from "../assets/img/26.jpg";
import Product3 from "../assets/img/27.jpg";
import Product4 from "../assets/img/40.jpg";
import Product5 from "../assets/img/29.jpg";
import Product6 from "../assets/img/01.jpg";
import Product7 from "../assets/img/32.jpg";
import Product8 from "../assets/img/10.jpg";

const product = () => {
  const products = [
    {
      name: "Michaelangeo",
      image: Product1,
    },
    {
      name: "Caesar",
      image: Product2,
    },
    {
      name: "Invictus",
      image: Product3,
    },
    {
      name: "Tuscany Terracotta",
      image: Product4,
    },
    {
      name: "Rosso Ardente",
      image: Product5,
    },
    {
      name: "Vivaldi Grandeur",
      image: Product6,
    },
    {
      name: "Cashmere Cascade",
      image: Product7,
    },
    {
      name: "Tuxedo",
      image: Product8,
    },
  ];
  return (
    <div className="grid grid-rows-2 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8 mx-14 mb-10">
      {products.map((product, index) => {
        return (
          <>
            <div className="group cursor-poitner px-3 pt-4 border border-black border-opacity-10 shadow-2xl bg-white active:scale-[95%] hover:scale-[102%] transiton transition-transform duration-300 sm:justify-self-center">
              <img
                className="object-cover h-64 rounded-sm hover:cursor-pointer"
                src={product.image}
              />

              <h1 className=" group-hover:opacity-100 transition duration-200 cursor-pointer select-none text-3xl shadow-md m-auto relative bg-black p-2 2xl:w-[303px] xl:w-[303px] opacity-60 text-center rounded-sm top-[-148px] text-gray-100 font-thin tracking-wider capitalize">
                {product.name}
              </h1>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default product;
