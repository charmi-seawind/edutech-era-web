import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../components/Container";

import student1 from "../../assets/product/student-1.png";
import student2 from "../../assets/product/student-2.jpg";
import student3 from "../../assets/product/student-3.avif";
import student4 from "../../assets/product/student-4.avif";

import shape from "../../assets/about/shape-2.png";

const events = [
  {
    title: "AI-Personalized Learning",
    des: "Adaptive content tailored to your pace, helping you learn better and faster.",
    bg: "bg-white",
    image: student1,
  },
  {
    title: "Engaging 2D/3D Visuals",
    des: "Complex concepts made easy with interactive animations and simulations.",
    bg: "bg-white",
    image: student2,
  },
  {
    title: "Instant Feedback & Quizzes",
    des: "Stay motivated with real-time assessments and track your progress.",
    bg: "bg-white",
    image: student3,
  },
  {
    title: "24/7 Access",
    des: "Learn anytime, anywhere on tablet without internet.",
    bg: "bg-white",
    image: student4,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Student = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#f6fbfd] relative overflow-hidden">
      <div className="absolute top-4 left-4 sm:top-10 sm:left-10 z-0">
        <img src={shape} alt="" className="w-[30px] sm:w-[60px] md:w-[100px]" />
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <img
          src={shape}
          alt=""
          className="w-[120px] sm:w-[150px] lg:w-[90px] xl:w-[150px] 2xl:w-[200px]"
        />
      </div>

      <Container>
        <div className="max-w-full px-4 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.img
                key={events[activeIndex].image}
                src={events[activeIndex].image}
                alt={events[activeIndex].title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto max-h-[280px] sm:max-h-[340px] md:max-h-[420px] lg:max-h-[500px] object-cover rounded-2xl"
              />
            </AnimatePresence>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#21bcfe] mb-6 sm:mb-8 text-center lg:text-left"
            >
              For Students
            </motion.h2>

            <div className="space-y-4 sm:space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-300 flex justify-between items-center border-l-4 border-[#21bcfe] p-4 sm:p-5 rounded-xl ${
                    event.bg
                  } ${activeIndex === index ? "ring-1 ring-[#21bcfe]" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {event.des}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Student;
