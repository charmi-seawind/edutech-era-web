import * as React from "react";
import { useState } from "react";
import Container from "../../components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

import pre1 from "../../assets/home/n1.jpg";
import pre2 from "../../assets/home/kg.avif";
import pre3 from "../../assets/home/skg.avif";
import grade1 from "../../assets/home/g1.webp";
import grade2 from "../../assets/home/g2.avif";
import grade3 from "../../assets/home/g3.avif";
import grade4 from "../../assets/home/g-4.jpg";
import grade5 from "../../assets/home/g5.jpg";
import grade6 from "../../assets/home/g6.jpg";
import grade7 from "../../assets/home/g7.jpg";
import grade8 from "../../assets/home/g8.webp";
import grade9 from "../../assets/home/g9.png";
import grade10 from "../../assets/home/g10.jpg";

const tabs = [
  "Pre School",
  "Primary School",
  "Middle School",
  "Secondary School",
];

const events = [
  { title: "Nursery", image: pre1, tab: "Pre School" },
  { title: "Junior K.G.", image: pre2, tab: "Pre School" },
  { title: "Senior K.G.", image: pre3, tab: "Pre School" },
  { title: "Grade 1", image: grade1, tab: "Primary School" },
  { title: "Grade 2", image: grade2, tab: "Primary School" },
  { title: "Grade 3", image: grade3, tab: "Primary School" },
  { title: "Grade 4", image: grade4, tab: "Primary School" },
  { title: "Grade 5", image: grade5, tab: "Primary School" },
  { title: "Grade 6", image: grade6, tab: "Middle School" },
  { title: "Grade 7", image: grade7, tab: "Middle School" },
  { title: "Grade 8", image: grade8, tab: "Middle School" },
  { title: "Grade 9", image: grade9, tab: "Secondary School" },
  { title: "Grade 10", image: grade10, tab: "Secondary School" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const filteredEvents = events.filter(
    (event) => event.tab === tabs[activeTab]
  );

  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-100  py-16">
      <Container>
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Explore <span className="text-[#004aad]">Study Materials</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 
              ${
                activeTab === idx
                  ? "bg-gradient-to-r from-[#7d9bff] to-[#004aad] text-white  scale-105"
                  : "bg-[#e2eaee] text-gray-600 hover:text-[#004aad]  hover:scale-105"
              }`}
            >
              {tab}
              {activeTab === idx && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#004aad]"></span>
              )}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="px-2">
              {filteredEvents.map((event, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 px-3"
                >
                  <div className="group relative rounded-3xl  shadow-lg transition-transform duration-300 transform hover:-translate-y-2">
                    {/* Glassmorphism Card */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-md z-0 rounded-3xl"></div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover rounded-3xl relative z-10"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent rounded-b-3xl z-20 flex flex-col gap-2">
                      <h3 className="text-white font-bold text-xl sm:text-lg md:text-xl lg:text-2xl">
                        {event.title}
                      </h3>
                      <Link to="/courses">
                        <button className="bg-[#004aad] hover:bg-[#5790a8] text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto transition">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No events available for this tab.
          </p>
        )}
      </Container>
    </div>
  );
}
