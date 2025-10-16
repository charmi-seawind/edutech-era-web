import * as React from "react";
import { FaShoppingCart } from "react-icons/fa";
import pre2 from "../../assets/home/kg.avif";
import { MdOutlineWatchLater } from "react-icons/md";
import bg from "../../assets/affilate/bg-1.jpg"

export default function CourseCard() {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto space-y-6 font-sans" >

      <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="text-white space-y-3 w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            Welcome to Edutech ERA – Junior K.G. Grade Interactive Learning!
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-wide uppercase">
            Junior K.G.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
            <MdOutlineWatchLater />
            <span>
              Duration: <span className="font-semibold">1 Year</span>
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full sm:w-auto flex justify-center">
          <img
            src={pre2}
            alt="Interactive Learning"
            className="w-48 sm:w-56 md:w-64 h-auto rounded-2xl shadow-md object-cover"
          />
          <div className="absolute top-2 right-2 bg-white text-[#21bcfe] rounded-full p-2 shadow-md hover:scale-110 transition-transform">
            <FaShoppingCart className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Price + Button */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center sm:text-left">
          <p className="text-gray-600 text-base sm:text-lg font-medium">Price</p>
          <p className="text-[#21bcfe] text-2xl sm:text-3xl font-extrabold mt-1">
            ₹ 64,990
          </p>
        </div>

        <button className="bg-[#21bcfe] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-400 transition shadow-md">
          <FaShoppingCart className="w-4 h-4" />
          Buy Now
        </button>
      </div>
    </div>
  );
}
