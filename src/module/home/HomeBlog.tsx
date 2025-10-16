import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import image1 from "../../assets/product/why1.jpg";
import image2 from "../../assets/product/why3.jpg";
import image3 from "../../assets/home/blog-3.jpg";
import image4 from "../../assets/home/image-boy.jpg";
import image5 from "../../assets/home/blog-1.jpg";
import image6 from "../../assets/home/blog-2.jpg";
import { FaUser, FaComments } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardData = [
  {
    image: image1,
    date: "24",
    monthYear: "Nov, 2018",
    title: "Objection Happiness Something",
    description:
      "Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected",
    linkText: "READ MORE",
  },
  {
    image: image2,
    date: "12",
    monthYear: "Sep, 2018",
    title: "Meant To Learn Of Vexed",
    description:
      "Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected",
    linkText: "READ MORE",
  },
  {
    image: image3,
    date: "29",
    monthYear: "Dec, 2018",
    title: "Delightful Up Dissimilar",
    description:
      "Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected",
    linkText: "READ MORE",
  },
  {
    image: image4,
    date: "29",
    monthYear: "Dec, 2018",
    title: "Delightful Up Dissimilar",
    description:
      "Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected",
    linkText: "READ MORE",
  },
  {
    image: image5,
    date: "29",
    monthYear: "Dec, 2018",
    title: "Delightful Up Dissimilar",
    description:
      "Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected",
    linkText: "READ MORE",
  },
  {
    image: image6,
    date: "29",
    monthYear: "Dec, 2018",
    title: "Delightful Up Dissimilar",
    description:
      "Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected",
    linkText: "READ MORE",
  },
];

const HomeBlog = () => {
  return (
    <section className="py-10 bg-white">
      <Container>
      <div className="text-center max-w-4xl mx-auto mb-14 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Latest News
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Stay informed with the latest updates, trends, and insights in the world of education and technology through our featured articles.
          </p>
        </div>

        <Carousel className="relative">
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white hover:bg-gray-700" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white hover:bg-gray-700" />
          <CarouselContent className="px-1">
            {cardData.map((card, index) => (
              <CarouselItem
                key={index}
                className="basis-[90%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4  px-3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="rounded-2xl overflow-hidden bg-gray-100 h-full shadow-xl p-6 flex flex-col justify-between"
                >
                  <div className="relative overflow-hidden">
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 sm:h-52 md:h-44 lg:h-50 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white px-2 py-2 text-center rounded">
                      <div className="text-lg leading-tight">
                        {card.date}
                        {card.monthYear}
                      </div>
                    </div>
                  </div>

                  <div className="py-6">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {card.description}
                    </p>
                    <a
                      href="#"
                      className="text-[#21BCFE] text-sm font-semibold hover:underline flex items-center gap-1"
                    >
                      {card.linkText} &rsaquo;
                    </a>
                  </div>

                  <div className="text-sm text-gray-500 flex items-center gap-6">
                    <span className="flex items-center gap-1">
                      <FaUser size={14} /> AUTHOR
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComments size={14} /> 23 COMMENTS
                    </span>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomeBlog;
