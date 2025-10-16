import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import image from "../../assets/affilate/kids-with-screen-1.png.webp";
import image1 from "../../assets/affilate/vide0.avif";
import image2 from "../../assets/affilate/Earning.jpg";
import image3 from "../../assets/affilate/payment.jpg";

const features = [
  {
    title: "Interactive Tablets",
    description:
      "2D/3D content, book PDFs, quizzes, MCQs, and AI learning assistant.",
    image: image,
    border: "border-blue-300 border-dashed",
    shape: "square",
  },
  {
    title: "Custom Branding",
    description:
      "Option to co-brand tablets for schools and Influencers/B2B Partner.",
    image: image1,
    border: "border-orange-300 border-dashed",
    shape: "round",
  },
  {
    title: "Earning Opportunities",
    description:
      "Revenue-sharing based on sales volume and referral incentives.",
    image: image2,
    border: "border-green-300 border-dashed",
    shape: "square",
  },
  {
    title: "Flexible Payment Model",
    description: "Instant payments post-TDS deductions.",
    image: image3,
    border: "border-pink-300 border-dashed",
    shape: "round",
  },
];

const Feature = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <Container>
        <div className="text-center mb-10 sm:mb-12 px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600">
            Key Features Of{" "}
            <span className="text-[#2ea4ce]">EDUTECH ERA</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 px-4 sm:px-0">
          {features.map((feature, index) => {
            const isRound = feature.shape === "round";
            const wrapperClass = isRound
              ? "rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
              : "rounded-2xl w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60";

            const imageClass = isRound
              ? "rounded-full w-full h-full object-cover"
              : "w-full h-full object-cover";

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className={`${wrapperClass} ${feature.border} border-2 p-2 sm:p-4 flex items-center justify-center mb-4 overflow-hidden shadow-md`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={imageClass}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2ea4ce] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 max-w-[240px] sm:max-w-[300px] mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Feature;
