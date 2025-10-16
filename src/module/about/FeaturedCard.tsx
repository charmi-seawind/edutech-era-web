import * as React from "react";
import Container from "../../components/Container";
import { MdOutlineBook } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { motion } from "framer-motion";

const FeaturedCard = () => {
  const features = [
    {
      icon: MdOutlineBook,
      title: "Interactive Content",
      description:
        "Our learning material is designed to keep students engaged through dynamic visuals, animations, and simulations, making complex concepts easy to understand.",
      bgColor: "bg-pink-100",
      textColor: "text-pink-500",
      ariaLabel: "Book icon",
    },
    {
      icon: FaVideo,
      title: "Automated Video Lessons",
      description:
        "Learn anytime, anywhere with our preloaded video lessons, crafted by experts to explain topics in a simple and engaging manner.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
      ariaLabel: "Video icon",
    },
    {
      icon: GiSpellBook,
      title: "Book PDFs",
      description:
        "We provide digitized textbooks to ensure students can easily access their curriculum materials without the hassle of carrying heavy books.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",
      ariaLabel: "Spell book icon",
    },
    {
      icon: GiSpellBook,
      title: "AI-Based GURU JI Chatbot",
      description:
        "Our AI-powered GURU JI chatbot is like a personal tutor for every student! It resolves educational queries instantly, simplifies doubt-solving, and provides guidance tailored to individual needs.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-500",
      ariaLabel: "Chatbot icon",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <Container>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-[#21BCFE] uppercase tracking-wide">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            What Makes <span className="text-[#21BCFE]">EDUTECH ERA</span>{" "}
            Unique?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col p-6 bg-white rounded-2xl shadow hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`${item.bgColor} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto`}
              >
                <div
                  className={`text-3xl ${item.textColor}`}
                  aria-label={item.ariaLabel}
                  role="img"
                >
                  <item.icon />
                </div>
              </div>
              <h3 className="mt-4 text-center text-lg font-semibold uppercase text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-center text-sm font-medium leading-5 text-[#818182]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCard;
