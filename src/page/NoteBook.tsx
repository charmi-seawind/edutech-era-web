import * as React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import book from "../assets/book.jpg";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [{ icon: book }, { icon: book }];

const NoteBook = () => {
  return (
    <div
      className="relative flex justify-center items-center py-10 px-4"
      style={{
        backgroundImage:
          `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden bg-white z-10">
        {/* Header + Carousel */}
        <div className="bg-[linear-gradient(90deg,_rgb(236,172,26)_25%,_rgb(231,186,30)_50%,_rgb(255,232,100)_75%,_rgb(245,198,53)_100%)] p-6 text-center">
          <h1 className="text-2xl font-semibold text-white drop-shadow-md">
            Distribution of relief at the doorstep.
          </h1>
          <p className="text-white/90 mt-2 text-base leading-relaxed">
            Get Your Exclusive EdutechEra Notebook Now!
          </p>

          {/* Carousel */}
          <section className="my-4">
            <Carousel>
              <CarouselContent className="flex items-stretch gap-6">
                {features.map((item, i) => (
                  <CarouselItem
                    key={i}
                    className="
                      flex-[0_0_100%] 
                      sm:flex-[0_0_50%] 
                      md:flex-[0_0_33.3333%] 
                      lg:flex-[0_0_25%] 
                      xl:flex-[0_0_100%]
                      px-2
                    "
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl w-full h-full overflow-hidden shadow-sm flex flex-col justify-start items-start text-left hover:shadow-blue-500"
                    >
                      <div className="w-full h-full">
                        <img
                          src={item.icon}
                          alt="img"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
        </div>

        {/* Phone Verification */}
        <div className="bg-gradient-to-b from-[#fdfdf3] to-[#edf6ff] p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Verify Your Phone
          </h2>
          <div className="flex items-center border border-blue-300 rounded-full px-4 py-2 bg-white shadow-sm">
            <FaPhoneAlt className="text-blue-400 mr-2" />
            <input
              type="text"
              placeholder="Enter 10-digit Phone Number"
              className="outline-none flex-1 text-gray-600 placeholder-gray-400 bg-transparent"
              maxLength={10}
            />
          </div>
          <div className="mt-6 text-center">
            <button className="px-6 py-2 rounded-full font-medium text-white bg-[#21bcfe] shadow-md hover:scale-105 transition transform duration-200">
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteBook;
