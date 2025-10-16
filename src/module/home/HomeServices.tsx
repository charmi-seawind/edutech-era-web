import * as React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import icon1 from "../../assets/home/why-1.jpg";
import icon2 from "../../assets/home/why-2.png";
import icon3 from "../../assets/home/why-3.jpg";
import icon4 from "../../assets/home/why-4.png";
import icon5 from "../../assets/home/why-5.png";
import icon6 from "../../assets/home/why-6.png";

const features = [
  {
    icon: icon1,
    title: "Interactive 2D/3D Content",
    desc: "Experience education like never before with stunning 3D visuals and simulations. Simplify complex concepts and boost understanding.",
  },
  {
    icon: icon2,
    title: "AI-Powered Ask Guruji",
    desc: "Instant answers to every education-related question at your fingertips.",
  },
  {
    icon: icon3,
    title: "Offline Accessibility",
    desc: "No internet? No problem! Preloaded content ensures uninterrupted learning.",
  },
  {
    icon: icon4,
    title: "Multilingual Support",
    desc: "Break barriers with content available in multiple languages for wider reach and understanding.",
  },
  {
    icon: icon5,
    title: "Instant Feedback & Quizzes",
    desc: "Stay motivated with real-time assessments and track your progress.",
  },
  {
    icon: icon6,
    title: "Engaging Automated Video Lessons",
    desc: "Every topic comes alive with high-quality, automated interactive video lessons",
  },
];

export default function Service() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">

       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug text-center">
          Why Choose<span className="text-[#004aad]"> EDUTECH ERA</span>
          
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-center">
            At Toddle, AI isn't just a feature, it's a core of our technology,
            built on four foundational pillars.
          </p>

      <Carousel>
        <CarouselContent className="flex items-stretch gap-6">
          {features.map((item, i) => (
            <CarouselItem
              key={i}
              className="
                flex-[0_0_100%] 
                sm:flex-[0_0_50%] 
                md:flex-[0_0_33.3333%] 
                lg:flex-[0_0_25%] 
                xl:flex-[0_0_16.6667%]
                px-2
              "
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl w-full p-6 shadow-sm h-full flex flex-col justify-start items-start gap-4 text-left hover:border-1 hover:border-[#004aad]"
              >
                <div className="rounded-xl w-20 h-20 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <div className="font-semibold text-gray-900 text-base">
                  {item.title}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
