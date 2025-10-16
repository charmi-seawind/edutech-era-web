import * as React from "react";
import img1 from "../../assets/home/temp-2.webp";
import img2 from "../../assets/home/temp-1.webp";
import Participation from "../../assets/home/Participation.jpg"
import Personalization from "../../assets/home/personalization.webp"
import feedback from "../../assets/home/feedback.jpg"
import Immersive from "../../assets/home/Immersive.jpg"
import img3 from "../../assets/home/temp-3.webp";

import Container from "../../components/Container";

const events = [
  {
    title: "User Participation",
    des: "Involves actions like clicking, swiping, typing, or decision-making to drive the content forward.",
    bg: "bg-white",
    image: Participation,
  },
  {
    title: "Personalization",
    des: "Adapts the content based on user preferences, inputs, or behaviors.",
    bg: "bg-white",
    image: Personalization,
  },
  {
    title: " Real-time Feedback",
    des: "Provides instant results, explanations, or outcomes based on user interaction.",
    bg: "bg-white",
    image: feedback,
  },
  {
    title: "  Immersive Experience",
    des: "Engages multiple senses, often using technologies like 2D/3D simulations, animations, or AI-powered features.",
    bg: "bg-white",
    image: Immersive,
  },
];

const TabSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <Container>
        <div className="max-w-full px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-center leading-12 lg:text-left mb-8">
              <span className="text-[#004aad]">EDUTECH ERA </span>
              <span className="text-black">
                offers High-Performance Tablets Designed for Modern Learning
              </span>
            </h2>

            <div className="max-h-[350px] overflow-y-auto pr-2 space-y-6 w-full hide-scrollbar">
              {events.map((event, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-300 flex justify-between items-center border-l-4 border-[#004aad] p-6 rounded-xl ${
                    event.bg
                  } ${activeIndex === index ? "ring-1 ring-[#004aad]" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600">{event.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={events[activeIndex].image}
              alt={events[activeIndex].title}
              className="w-full h-auto max-h-[400px] object-cover transition-all  rounded-2xl duration-500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TabSection;
