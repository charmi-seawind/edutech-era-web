import * as React from "react";
import { motion } from "framer-motion";
import { FaBook, FaImage, FaVideo, FaPuzzlePiece } from "react-icons/fa";
import FounderImage from "../../assets/home/girls-img.webp";
import Container from "../../components/Container";

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const learningMethods = [
  {
    icon: <FaBook className="text-[#21bcfe] w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Reading (Text-based)",
    impact: "50% impact, 35% engagement, 55% retention",
    description: "Great for foundational learning.",
    color: "bg-blue-50",
  },
  {
    icon: <FaImage className="text-[#ff9f43] w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Visuals (Images/Infographics)",
    impact: "25% impact, 50% engagement, 60% retention",
    description: "Ideal for quick concept clarity.",
    color: "bg-orange-50",
  },
  {
    icon: <FaVideo className="text-[#6f42c1] w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Video (Audio-Visual)",
    impact: "40% impact, 60% engagement, 50% retention",
    description: "Makes complex ideas easier.",
    color: "bg-purple-50",
  },
  {
    icon: <FaPuzzlePiece className="text-[#20c997] w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Interactive (Quizzes/Simulations)",
    impact: "55% impact, 80% engagement, 75% retention",
    description: "Best for hands-on learning.",
    color: "bg-green-50",
  },
];

const HomeAbout = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row pt-16 items-center justify-between gap-16">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8 px-4 sm:px-6 lg:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
            How Learners Retain Best
          </h2>

          <p className="text-base sm:text-lg text-gray-700">
            We focus on four key learning methods to enhance student engagement and retention:
          </p>

          {/* Cards for Learning Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {learningMethods.map((method, idx) => (
              <motion.div
                key={idx}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${method.color} cursor-pointer`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  {method.icon}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{method.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-1">{method.impact}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>

        
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
        >
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-10">
            <img
              src={FounderImage}
              alt="Founder illustration"
              className="rounded-3xl w-full object-cover"
            />
            <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-20 sm:h-20 bg-yellow-200 rounded-full blur-3xl opacity-70" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-pink-300 rounded-full blur-3xl opacity-60" />
          </div>
        </motion.div>
      </section>
    </Container>
  );
};

export default HomeAbout;
