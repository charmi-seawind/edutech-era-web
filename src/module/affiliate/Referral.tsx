import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import benefitIcon from "../../assets/affilate/benefit.png";
import b2b from "../../assets/affilate/b2b.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import bg from "../../assets/affilate/bg.avif";

const Referral = () => {
  return (
    <div
      className="relative py-10 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-[#e9f5ff]"
        style={{ opacity: 0.85, zIndex: 0 }}
      ></div>

      <div className="relative z-10">
        <Container>
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a5565] mb-3">
              Referral Program
            </h1>
            <p className="text-base sm:text-lg text-[#4a5565] max-w-2xl mx-auto">
              Unlock additional income by referring users and earning rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#cdf8fe] rounded-xl p-5 sm:p-6 shadow-md"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow">
                  <img
                    src={benefitIcon}
                    alt="How it works icon"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  How It Works
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <FaArrowAltCircleRight className="text-[#dab038] mt-1" />
                  <p className="text-gray-700">
                    B2B Partners earn income by referring new B2B Partners
                    through unique referral codes or links.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaArrowAltCircleRight className="text-[#dab038] mt-1" />
                  <p className="text-gray-700">
                    Every referred B2B Partner is accurately tracked to ensure
                    timely and fair incentives.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#EEEEFF] rounded-xl p-5 sm:p-6 shadow-md"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow">
                  <img
                    src={b2b}
                    alt="Referral incentive icon"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Referral Incentive
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <FaArrowAltCircleRight className="text-[#dab038] mt-1" />
                  <p className="text-gray-700">
                    Referrers earn a percentage of the sales revenue generated
                    by their referred B2B Partners.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaArrowAltCircleRight className="text-[#dab038] mt-1" />
                  <p className="text-gray-700">
                    Payments are disbursed instantly after applicable TDS
                    deductions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Referral;
