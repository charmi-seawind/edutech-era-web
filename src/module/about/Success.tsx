import * as React from "react";
import Container from "../../components/Container";
import shape from "../../assets/about/shape-1.png";
import about from "../../assets/about/about-2.webp";
import fame from "../../assets/about/fame.png";
import shape2 from "../../assets/about/shape-2.png";
import success from "../../assets/about/success.jpg"
import { motion } from "framer-motion";

const Success = () => {
  return (
    <div className="bg-[#f0f8fa] p-4 sm:p-6 md:p-7 relative">
      <Container>
        <div className="absolute -top-10 left-4 sm:-top-20 sm:left-10 md:-top-10 lg:-top-30 md:left-20 xl:-top-10 z-0">
          <img
            src={shape}
            alt="Decorative shape"
            className="w-[100px] sm:w-[220px] md:w-[100px] lg:w-[263px] xl:w-[150px]"
          />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row py-6 sm:py-10 justify-between items-center gap-6 sm:gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-full lg:w-1/2 px-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3 capitalize">
              Our Commitment to Children's Success
            </h2>
            <p className="mb-3 text-[#818182] text-sm sm:text-base">
              At EDUTECH ERA, we are passionate about unlocking every child's
              true potential. We believe that every student is unique, with
              individual strengths, interests, and learning styles. Their
              educational journey should be thoughtfully tailored to nurture
              curiosity, creativity, and confidence at every step.
            </p>
            <p className="mb-3 text-[#818182] text-sm sm:text-base">
              To achieve this, we are dedicated to developing and providing
              innovative educational tools that transform learning into an
              exciting and enriching experience. Our mission is to create
              engaging solutions that empower students, inspire educators, and
              foster a lifelong love for learning.
            </p>
            <p className="text-[#818182] text-sm sm:text-base">
              Our goal is to empower students with resources that help them
              understand, explore, and succeed in their academic journey.
              Whether it’s simplifying complex concepts, answering doubts, or
              making learning more engaging, EDUTECH ERA is here every step of
              the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-full lg:w-1/2 px-2"
          >
            <img
              src={success}
              alt="About EDUTECH ERA"
              className="w-full h-auto rounded"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-5 sm:bottom-16 xl:bottom-6 sm:left-10 z-0">
          <img
            src={fame}
            alt="Fame Icon"
            className="w-[180px] sm:w-[50px] md:w-[100px] xl:w-[70px]"
          />
        </div>

        <div className="absolute right-0 bottom-0 z-0">
          <img
            src={shape2}
            alt="Shape 2"
            className="w-[180px] sm:w-[50px] md:w-[100px] xl:w-[100px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Success;
