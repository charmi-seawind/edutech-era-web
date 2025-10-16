import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

// Images
import shape from "../../assets/about/shape-5.png";
import shape2 from "../../assets/about/shape-2.png";
import about from "../../assets/about/about-2.webp";
import fame from "../../assets/about/fame.png";

// Data for mission and vision
const missionPoints = [
  { text: "🏫 Schools" },
  { text: "📚 Tuition Classes" },
  { text: "👨‍🏫 Teachers" },
  { text: "🌟 Influencers" },
  { text: "💡 Education Enthusiasts" },
  { text: "📈 Education Entrepreneurs" },
  { text: "🤝 NGOs and Community Leaders" },
  { text: "🔗 Other Visionaries" },
];

const visionPoints = [
  { text: "🚀 Join the AI-Powered Education Revolution" },
  { text: "💰 Earn High Referral Commissions" },
  { text: "⚡ Instant Payouts for Every Conversion" },
  { text: "📝 Free & Hassle-Free Registration" },
  { text: "⏳ Flexible Work with No Time Limits" },
  { text: "🏆 Exclusive Bonuses for Top Performers" },
  { text: "📢 Smart Marketing Support & Resources" },
  { text: "✅ Be Part of a Trusted EdTech Brand" },
];

const WhyChooseUs = () => {
  return (
    <div className="relative bg-[#f0f8fa] px-4 py-8 md:px-8 md:py-12 ">
      <Container>
        <img
          src={shape}
          alt="Decorative shape"
          className="absolute -top-10 sm:-top-20 left-4 sm:left-20 w-[80px] sm:w-[150px]"
        />

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://www.k12.com/wp-content/uploads/2024/09/StatePage-Pennsylvania.png"
              alt="Who Can Join"
              className="max-w-[600px] w-full h-auto rounded object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 capitalize">
              🎯 Who Can Join?
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Partner with us to modernize education through digital tools,
              smart resources, and interactive content. Together, we can create
              scalable, engaging, and impactful learning experiences.
            </p>

            <div>
              {missionPoints.map((point, index) => (
                <motion.div
                  key={`mission-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center gap-3 my-2"
                >
                  <p className="text-sm sm:text-base">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>




        <div className="flex flex-col md:flex-row-reverse   items-center gap-8 mt-12">
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i0.wp.com/rockbyrock.com/wp-content/uploads/2025/01/Microschool-Cohort-Jan-25-Heroshot-3.png?fit=600%2C400&ssl=1"
              alt="Why Join"
              className="max-w-[600px] w-full h-auto rounded object-cover"
            />
          </div>

          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 capitalize">
              💎 Why Join?
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Revolutionize the learning landscape and empower every individual
              to reach their full potential through technology-driven education.
            </p>

            <div>
              {visionPoints.map((point, index) => (
                <motion.div
                  key={`vision-${index}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center gap-3 my-2"
                >
                  <p className="text-sm sm:text-base">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <img
          src={fame}
          alt="Star"
          className="absolute bottom-10 left-5 sm:left-10 w-[40px] sm:w-[60px]"
        />
        <img
          src={shape2}
          alt="Decorative shape 2"
          className="absolute bottom-0 right-0 w-[200px] sm:w-[300px]"
        />
      </Container>
    </div>
  );
};

export default WhyChooseUs;
