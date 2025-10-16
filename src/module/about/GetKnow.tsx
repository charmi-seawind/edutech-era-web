import * as React from 'react';
import Container from "../../components/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import phone from "../../assets/about/phone.png";
import guru from "../../assets/about/guruji.png";
import support from "../../assets/about/support.png";
import { motion } from "framer-motion"; 

const GetKnow = () => {
  const features = [
    {
      img: phone,
      title: "Interactive Learning",
      description: "Engaging content that keeps students interested and motivated.",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
      textColor: "text-pink-500",
    },
    {
      img: guru,
      title: "Automated Video Lessons",
      description: "Learn anytime, anywhere with our preloaded video lessons, crafted by experts to explain topics in a simple and engaging manner.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-500",
    },
    {
      img: support,
      title: "Book PDFs",
      description: "We provide digitized textbooks to ensure students can easily access their curriculum materials without the hassle of carrying heavy books.",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-500",
    },
    {
      img: support,
      title: "Book PDFs",
      description: "We provide digitized textbooks to ensure students can easily access their curriculum materials without the hassle of carrying heavy books.",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-500",
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Get to Know Us
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col sm:flex-row items-center sm:items-stretch rounded-xl shadow-md border-2 ${feature.borderColor} bg-white transition-all duration-300`}
            >
              <div className={`w-full sm:w-24 h-24 sm:h-auto flex items-center justify-center rounded-t-xl sm:rounded-t-none sm:rounded-l-xl ${feature.bgColor}`}>
                <img src={feature.img} alt={feature.title} className="w-14 h-14 object-contain" />
              </div>
              <div className="flex-1 p-4 text-center sm:text-left">
                <h3 className={`text-xl font-semibold mb-2 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base font-medium">{feature.description}</p>
              </div>
              <div className={`text-2xl p-2 sm:p-4 ${feature.textColor}`}>
                <MdKeyboardArrowRight />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GetKnow;
