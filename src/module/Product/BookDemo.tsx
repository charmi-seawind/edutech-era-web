import * as React from "react";
import shape from "../../assets/about/shape-1.png";
import shape2 from "../../assets/about/shape-2.png";

const BookDemo = () => {
  return (
    <div className="relative bg-cover bg-center h-[240px] sm:h-[300px] md:h-[200px] lg:h-[220px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute bottom-0 left-4 sm:left-10">
        <img src={shape2} alt="" className="w-[100px] md:w-[70px] xl:w-[100px]" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={shape} alt="" className="w-[100px] md:w-[70px] xl:w-[100px]" />
      </div>
      <div className="relative z-10 text-center text-white px-4 w-full max-w-[90%] md:max-w-[720px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Revolutionize Your Learning
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg">
          Discover the future of education with interactive AI-powered content.
        </p>
        <button className="mt-6 bg-[#00AEEF] hover:bg-[#0090c7] text-white font-medium py-2 px-6 rounded-full border-2 border-[#749fb1] transition-all duration-300 text-sm sm:text-base">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookDemo;
