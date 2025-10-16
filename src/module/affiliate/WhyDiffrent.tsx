import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import whyimg from "../../assets/affilate/why.jpg";
import {
  FaVideo,
  FaHandsHelping,
  FaFilePdf,
  FaQuestionCircle,
  FaCube,
  FaRobot,
  FaBookOpen,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    title: "Static video lessons.",
    icon: <FaVideo />,
    gradient: "from-pink-200 to-pink-400",
  },
  {
    title: "Limited interactivity.",
    icon: <FaHandsHelping />,
    gradient: "from-yellow-200 to-yellow-400",
  },
  {
    title: "Generic PDFs.",
    icon: <FaFilePdf />,
    gradient: "from-purple-200 to-purple-400",
  },
  {
    title: "No doubt-solving mechanism.",
    icon: <FaQuestionCircle />,
    gradient: "from-red-200 to-red-400",
  },
  {
    title: "Engaging 2D/3D simulations and live quizzes.",
    icon: <FaCube />,
    gradient: "from-blue-200 to-blue-400",
  },
  {
    title: "AI-driven personalized learning support",
    icon: <FaRobot />,
    gradient: "from-green-200 to-green-400",
  },
  {
    title: "Contextual, interactive book materials.",
    icon: <FaBookOpen />,
    gradient: "from-indigo-200 to-indigo-400",
  },
  {
    title: "AI-powered instant query resolution.",
    icon: <FaBolt />,
    gradient: "from-teal-200 to-teal-400",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const WhyDifferent = () => {
  return (
    <div className="bg-white py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why is <span className="text-[#21bcfe]">EDUTECH ERA</span>{" "}
              Different?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-8">
              Here’s what you can expect from traditional learning methods.
              Download the app and explore a smarter way to learn!
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-14 h-14 min-w-[56px] min-h-[56px] flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} text-white text-xl sm:text-2xl`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-base font-medium text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <div className="w-10 h-1 bg-[#21bcfe] rounded"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={whyimg}
              className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-xl shadow-lg"
              alt="Why Different"
            />
            <div className="absolute bottom-4 right-4">
              <button className="bg-gradient-to-r from-green-400 to-teal-400 p-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WhyDifferent;
