import * as React from "react";
import { FaRegClone } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      percent: "85%",
      text: "schools replace 3 or more technology platforms when they bring in Toddle.",
      icon: <FaRegClone className="text-purple-500 text-2xl" />,
    },
    {
      percent: "95%",
      text: "teachers say they save 2 to 5 hours every week with Toddle AI.",
      icon: <LuSparkles className="text-sky-500 text-2xl" />,
    },
    {
      percent: "97%",
      text: "teachers say Toddle is 10x better than any other teaching & learning platform.",
      icon: <FiZap className="text-yellow-400 text-2xl" />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6 py-12 bg-gradient-to-br from-white via-indigo-50 to-white">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-sm p-6 w-full md:w-80 text-center space-y-4 hover:shadow-md transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900">{item.percent}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
          <div className="flex justify-center">{item.icon}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;
