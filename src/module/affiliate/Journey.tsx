import * as React from "react";
import shape from "../../assets/about/shape-1.png";
import shape2 from "../../assets/about/shape-2.png";

const Journey = () => {
  return (
    <div className="relative bg-cover bg-center h-[240px] sm:h-[300px] md:h-[200px] lg:h-[200px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="absolute bottom-0 left-4 sm:left-10">
        <img src={shape2} alt="Shape Left" className="w-[40px] sm:w-[100px]" />
      </div>

      <div className="absolute right-0 bottom-0">
        <img src={shape} alt="Shape Right" className="w-[160px] sm:w-[200px]" />
      </div>

      <div className="relative z-10 text-center text-white px-4 w-full max-w-[90%] sm:max-w-[600px] md:max-w-[720px]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Why wait start your journey today !
        </h1>

        <button className="mt-4 sm:mt-6 bg-[#00AEEF] hover:bg-[#0090c7] text-white font-medium py-2 px-6 rounded-full border-2 border-yellow-400 transition-all duration-300 text-sm sm:text-base">
          Start Journey
        </button>
      </div>
    </div>
  );
};

export default Journey;
