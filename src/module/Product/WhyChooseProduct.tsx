import * as React from "react";
import { motion } from "framer-motion";
import image from "../../assets/about/aboutimg.webp";
import Container from "../../components/Container";
import {
  MdContentPasteGo,
  MdOutlineSignalWifiConnectedNoInternet4,
  MdSupportAgent,
} from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { FaVideo, FaChalkboardTeacher } from "react-icons/fa";
import shape from "../../assets/about/shape-5.png";
import shape2 from "../../assets/about/shape-2.png";

import why from "../../assets/product/why.jpg"

const features = [
  {
    icon: MdContentPasteGo,
    title: "Interactive 2D/3D Content",
    description:
      "Experience education like never before with stunning 3D visuals and simulations. Simplify complex concepts and boost understanding.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: FaChalkboardTeacher,
    title: "AI-Powered Ask Guruji",
    description:
      "Instant answers to every education-related question at your fingertips.",
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    icon: MdOutlineSignalWifiConnectedNoInternet4,
    title: "Offline Accessibility",
    description:
      "No internet? No problem! Preloaded content ensures uninterrupted learning.",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: MdSupportAgent,
    title: "Multilingual Support",
    description:
      "Break barriers with content available in multiple languages for wider reach and understanding.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: VscFeedback,
    title: "Instant Feedback & Quizzes",
    description:
      "Stay motivated with real-time assessments and track your progress.",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: FaVideo,
    title: "Engaging Automated Video Lessons",
    description:
      "Every topic comes alive with high-quality, automated interactive video lessons.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseProduct = () => {
  return (
    <div className="bg-[#ebfbff] relative py-12 overflow-hidden">
      <div className="absolute top-6 left-4 sm:left-10 z-0">
        <img src={shape} alt="" className="w-[40px] md:w-[80px] xl:w-[100px]" />
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <img src={shape2} alt="" className="w-[40px] md:w-[90px] xl:w-[200px]" />
      </div>

      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center relative z-10"
        >
          Why Choose <span className="text-[#21bcfe]">EDUTECH ERA</span> ?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
          {/* Feature List */}
          <div className="max-h-[500px] overflow-y-auto pr-2 space-y-6 w-full hide-scrollbar">
            {features.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 shadow-md flex gap-4 items-start"
              >
                <div
                  className={`text-3xl p-3 rounded-xl ${item.bg} ${item.color}`}
                >
                  <item.icon />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-xl border-[6px] border-white">
              <img
                src={why}
                alt="EDUTECH Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseProduct;
