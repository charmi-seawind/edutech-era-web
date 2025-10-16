
import * as React from "react";
import Container from "../../components/Container";
import { motion } from "framer-motion";

import about from "../../assets/about/about-2.webp";

import { GiProgression } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";
import { TbWorldShare } from "react-icons/tb";

import vission from "../../assets/about/vision.jpg"
import fame from "../../assets/about/fame.png";
import shape2 from "../../assets/about/shape-2.png";

const VisionSection = () => {
 const visionPoints = [
   {
     icon: <GiProgression className="text-green-600" />,
     text: "Make education interactive, engaging, and personalized",
   },
   {
     icon: <PiCertificateBold className="text-green-600" />,
     text: "Equip educators and students with tools for success.",
   },
   {
     icon: <TbWorldShare className="text-green-600" />,
     text: "Promote critical thinking and problem-solving skills",
   },
   {
     icon: <TbWorldShare className="text-green-600" />,
     text: "Expand access to quality education globally, ensuring every student can thrive.",
   },
 ];
 

  return (
    <div className="bg-[#F5F5FF] relative">
      <Container>
       <div className="flex flex-col md:flex-row-reverse justify-between py-6 lg:py-0 items-center gap-8 mb-10 mt-10">
          <div className="w-full md:w-1/2">
            <img
              src={vission}
              alt="Our Vision"
              className="w-full max-w-full h-auto rounded object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 capitalize">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base">
              To revolutionize the learning landscape and empower every individual to reach their full potential through technology-driven education.
            </p>

            <div className="my-5">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={`vision-${index}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex my-3 sm:my-4 gap-3 items-center"
                >
                  <div className="bg-green-200 p-2 rounded-full">{point.icon}</div>
                  <p className="text-sm sm:text-base">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        
      </Container>
        <div className="absolute bottom-10 left-5 top-3 lg:left-10">
          <img src={fame} alt="" className="w-[50px] sm:w-[60px] md:w-[40px] lg:w-[80px] xl:w-[50px]" />
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={shape2} alt="" className="w-[50px] sm:w-[60px] md:w-[40px] lg:w-[150px]" />
        </div>
    </div>
  );
};

export default VisionSection;
