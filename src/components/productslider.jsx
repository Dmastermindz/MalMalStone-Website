import React from "react";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Navigation, Pagination } from "swiper";

const productslider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      className="productSlider min-h-[1300px]"
    >
      {products.map((page) => {
        return (
          <SwiperSlide>
            <div className="cursor-poitner hover:scale-[102%] transiton transition-transform duration-300">
              <img
                className="object-cover h-64 rounded-sm shadow-lg  hover:cursor-pointer "
                src={product.image}
              />

              <h1 className="text-3xl shadow-md m-auto relative bg-black p-2 w-[370px] opacity-60 text-center rounded-sm top-[-148px] text-gray-100 font-thin tracking-wider capitalize">
                {product.name}
              </h1>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default productslider;
