import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

import shape from "../../assets/about/shape-5.png";
import shape2 from "../../assets/about/shape-2.png";
import fame from "../../assets/about/fame.png";
import image from "../../assets/affilate/whojoin.png";

const WhoPoints = [
  { text: "🏫 Schools" },
  { text: "📚 Tuition Classes" },
  { text: "👨‍🏫 Teachers" },
  { text: "🌟 Influencers" },
  { text: "💡 Education Enthusiasts" },
  { text: "📈 Education Entrepreneurs" },
  { text: "🤝 NGOs and Community Leaders" },
  { text: "🔗 Other Visionaries" },
];

const WhoJoin = () => {
  return (
    <div className="relative bg-[#f0f8fa] ">
      <Container>
        <img
          src={shape}
          alt="Decorative shape"
          className="absolute -top-6 sm:-top-10 left-2 sm:left-10 w-[60px] sm:w-[100px] z-0"
        />

        <div className="relative z-10 flex flex-col md:flex-col lg:flex-row items-center gap-8 py-10">
          <div className="w-full md:w-full lg:w-1/2">
            <img
              src={image}
              alt="Who Can Join"
              className="w-full max-w-full h-auto rounded object-cover"
            />
          </div>

          <div className="w-full md:w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black mb-4 capitalize">
              🎯 Who Can Join?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-700">
              Partner with us to modernize education through digital tools,
              smart resources, and interactive content. Together, we can create
              scalable, engaging, and impactful learning experiences.
            </p>

            <div>
              {WhoPoints.map((point, index) => (
                <motion.div
                  key={`mission-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center gap-2 my-2"
                >
                  <p className="text-sm sm:text-base font-medium text-[#374151]">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <img
          src={fame}
          alt="Star"
          className="absolute bottom-8 left-4 sm:left-10 w-[30px] sm:w-[60px]"
        />
        <img
          src={shape2}
          alt="Decorative shape 2"
          className="absolute bottom-0 right-0 w-[120px] sm:w-[200px]"
        />
      </Container>
    </div>
  );
};

export default WhoJoin;
