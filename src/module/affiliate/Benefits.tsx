import * as React from "react";
import { motion } from "framer-motion";
import b2bIcon from "../../assets/affilate/b-1.png";
import schoolIcon from "../../assets/affilate/b-2.png";
import govtIcon from "../../assets/affilate/b-3.png";
import img1 from "../../assets/affilate/b-1.png";
import img2 from "../../assets/affilate/b-2.png";
import img3 from "../../assets/affilate/b-3.png";
import Container from "../../components/Container";

const benefitItems = [
  {
    icon: b2bIcon,
    title: "For B2B Partners",
    color: "green",
    textColor: "text-green-600",
    barColor: "bg-green-500",
    points: [
      "High revenue potential with attractive slabs.",
      "Flexible and scalable earning opportunities.",
    ],
    img: img1,
  },
  {
    icon: schoolIcon,
    title: "For Schools & Institutions",
    color: "blue",
    textColor: "text-blue-600",
    barColor: "bg-blue-500",
    points: [
      "Affordable pricing for state-of-the-art learning solutions.",
      "Enhanced student engagement and teacher effectiveness.",
    ],
    img: img2,
  },
  {
    icon: govtIcon,
    title: "For Governments",
    color: "yellow",
    textColor: "text-yellow-600",
    barColor: "bg-yellow-500",
    points: [
      "Bridging the digital divide with inclusive educational tools.",
      "Scalable solutions for nationwide deployment.",
    ],
    img: img3,
  },
];

const Benefits = () => {
  return (
    <div className="py-10 sm:py-14 bg-gradient-to-b from-[#eef7ff] to-white">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 px-4">
          Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          {benefitItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              
              <div className="absolute inset-0 bg-[#f9f9fa] opacity-15 z-0 rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className={`text-lg sm:text-xl font-bold text-center mb-4 ${item.textColor}`}>
                  {item.title}
                </h3>

                <div className={`w-20 sm:w-24 h-1 mb-5 rounded-full mx-auto transition-all duration-300 group-hover:w-1/2 ${item.barColor}`}></div>

                <ul className="text-gray-700 font-medium text-sm sm:text-base space-y-2 list-disc list-inside">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
