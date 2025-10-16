import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

import banner from "../../assets/home/banner1.jpg"
const HomeBanner = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[900px] overflow-hidden">
      <img
        src={banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <Container>
        <div className="relative z-10 flex items-center justify-start h-full py-10 sm:py-20 md:py-30 lg:py-40 2xl:py-60 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-left max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] xl:max-w-[900px]"
          >
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight mb-2 sm:mb-4">
              New Era,

 <br className="hidden sm:block" />New Learning
            </h1>
            <p className="text-white text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl  mb-3 sm:mb-5">
             Experience the future of education with our AI-powered interactive learning platform. Personalized, adaptive, and designed for success.
            </p>
            <Link to="/products">
              <button className=" sm:mt-1 px-6 py-2 text-black bg-[#f2c761] border-2 border-[#004aad] transition-all rounded-full text-sm md:text-base">
                Book Your Tablet
              </button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
