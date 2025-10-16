import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Container from "../../components/Container";

import icon1 from "../../assets/home/temp-1.webp";
import icon2 from "../../assets/home/temp-2.webp";
import icon3 from "../../assets/home/temp-3.webp";
import icon4 from "../../assets/home/temp-4.jpg";

const features = [
  {
    icon: icon1,
    title: "Revenue Sharing",
    desc: "Earn a share of revenue for every learner referred or onboarded through your network.",
  },
  {
    icon: icon2,
    title: "Access to Premium Tools",
    desc: "Get exclusive access to our AI-driven tools and analytics to enhance your services.",
  },
  {
    icon: icon3,
    title: "Co-Branding Opportunities",
    desc: "Collaborate with us for joint marketing campaigns, webinars, and events to expand your reach.",
  },
  {
    icon: icon4,
    title: "Training & Support",
    desc: "Receive dedicated training and 24/7 support to maximize your success as a B2B Partner.",
  },
];

export default function Work() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <Container>
        

           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug text-center pt-10">
             B2B Partner with <span className="text-[#004aad]">Edutech Era</span>
          </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto text-sm sm:text-base px-4 mb-10">
          Join Edutech Era as a B2B Partner and revolutionize education with AI.
          Whether you're an institution, content creator, or tech enthusiast,
          unlock growth and global impact with us.
        </p>

        <div className="relative">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselPrevious className="absolute left-1 md:-left-12 top-1/2 -translate-y-1/2 bg-black text-white w-8 h-8 md:w-10 md:h-10 rounded-full z-10 shadow-lg hover:bg-gray-800" />
            <CarouselNext className="absolute right-1 md:-right-12 top-1/2 -translate-y-1/2 bg-black text-white w-8 h-8 md:w-10 md:h-10 rounded-full z-10 shadow-lg hover:bg-gray-800" />

            <CarouselContent className="px-1 sm:px-2 md:px-4 -ml-2">
              {features.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[85%] xs:basis-[70%] sm:basis-1/2 md:basis-1/2 lg:basis-1/4 px-2 sm:px-3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white h-full flex flex-col justify-between border border-gray-200 rounded-2xl shadow-lg overflow-hidden p-4 sm:p-5 md:p-6"
                  >
                    <div className="flex flex-col gap-3 mb-4">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                        {item.desc}
                      </p>
                      <button className="mt-2 text-sm bg-[#004aad] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition w-max">
                        Learn More
                      </button>
                    </div>
                    <div className="aspect-video w-full overflow-hidden rounded-xl ">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
