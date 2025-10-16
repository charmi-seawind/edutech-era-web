
import * as React from "react";
import Container from "../../components/Container";
import { motion } from "framer-motion";

import about from "../../assets/about/about-2.webp";
import { MdOutlineContentPaste, MdCastForEducation } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";

import fame from "../../assets/about/fame.png";
import mission from "../../assets/about/mission.jpg"
import shape2 from "../../assets/about/shape-2.png";

const MissionSection = () => {
  const missionPoints = [
    {
      icon: <MdOutlineContentPaste className="text-blue-600" />,
      text: "Simplify concepts with interactive content",
    },
    {
      icon: <FaLanguage className="text-blue-600" />,
      text: "Offer multilingual support to break language barriers",
    },
    {
      icon: <FaLightbulb className="text-blue-600" />,
      text: "Empower teachers with tools for better learning outcomes",
    },
    {
      icon: <MdCastForEducation className="text-blue-600" />,
      text: "Foster lifelong learning with flexible and relevant educational content.",
    },
  ];

  return (
    <div className="bg-[#f0f8fa] relative">
      <div className="absolute bottom-10 right-0 top-3 sm:right-10">
         <img src={fame} alt="" className="w-[50px] sm:w-[60px] md:w-[40px] lg:w-[80px] xl:w-[50px]" />
        </div>
        <div className="absolute left-0 bottom-0">
          <img src={shape2} alt="" className="w-[50px] sm:w-[60px] md:w-[40px] lg:w-[200px] xl:w-[50px]"  />
        </div>
      <Container>
        <div className="flex flex-col md:flex-row justify-between py-6 lg:py-0 items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={mission}
              alt="About EDUTECH ERA"
              className="w-full max-w-full h-auto rounded object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 capitalize">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base">
              We aim to redefine education by leveraging technology to make
              learning easier, more engaging, and inclusive. Our mission is to:
            </p>

            <div className="my-5">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={`mission-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex my-3 sm:my-4 gap-3 items-center"
                >
                  <div className="bg-blue-200 p-2 rounded-full">
                    {point.icon}
                  </div>
                  <p className="text-sm sm:text-base">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissionSection;
