import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

import shape2 from "../../assets/about/shape-2.png";
import fame from "../../assets/about/fame.png";
import whyjoin from "../../assets/affilate/WHYJOIN.webp";

const whyPoints = [
  { text: "🚀 Join the AI-Powered Education Revolution" },
  { text: "💰 Earn High Referral Commissions" },
  { text: "⚡ Instant Payouts for Every Conversion" },
  { text: "📝 Free & Hassle-Free Registration" },
  { text: "⏳ Flexible Work with No Time Limits" },
  { text: "🏆 Exclusive Bonuses for Top Performers" },
  { text: "📢 Smart Marketing Support & Resources" },
  { text: "✅ Be Part of a Trusted EdTech Brand" },
];

const WhyJoin = () => {
  return (
    <div className="relative bg-[#F5F5FF] py-8 md:py-12 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full  lg:w-1/2">
            <img
              src={whyjoin}
              alt="Why Join"
              className="w-full h-auto rounded object-cover max-w-full"
            />
          </div>

          <div className="w-full lg:w-1/2 px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black mb-4 capitalize">
              💎 Why Join?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-700">
              Revolutionize the learning landscape and empower every individual
              to reach their full potential through technology-driven education.
            </p>

            <div>
              {whyPoints.map((point, index) => (
                <motion.div
                  key={`vision-${index}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center gap-2 my-2"
                >
                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#374151]">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <img
          src={shape2}
          alt="Star"
          className="absolute bottom-10 left-4 sm:left-10 w-[30px] sm:w-[80px]"
        />
        <img
          src={fame}
          alt="Decorative shape 2"
          className="absolute bottom-0 right-0 w-[60px] sm:w-[100px]"
        />
      </Container>
    </div>
  );
};

export default WhyJoin;
