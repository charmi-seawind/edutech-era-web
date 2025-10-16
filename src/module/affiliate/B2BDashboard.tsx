import * as React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import shape from "../../assets/about/shape-5.png";
import shape2 from "../../assets/about/shape-2.png";
import manager from "../../assets/affilate/manager.png";
import manegment from "../../assets/affilate/management.png";
import material from "../../assets/affilate/meterial.png";
import payement from "../../assets/affilate/payment.png";
import b2b from "../../assets/affilate/b2b.jpg";

const features = [
  {
    icon: manager,
    title: "Sales Tracking",
    description: "Real-time tracking of tablet sales and revenue earned.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: manegment,
    title: "Referral Management",
    description: "Monitor referred B2B Partner and their sales contributions.",
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    icon: material,
    title: "Marketing Materials",
    description:
      "Access promotional assets like banners, videos, and brochures.",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: payement,
    title: "Payment Details",
    description: "View payment history and track pending payouts.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

const B2BDashboard = () => {
  return (
    <div className="relative py-10 sm:py-12">
      <div className="absolute top-4 left-2 sm:left-10 z-0">
        <img src={shape} alt="" className="w-10 sm:w-24" />
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <img src={shape2} alt="" className="w-40 sm:w-52" />
      </div>

      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-10 text-center z-10 relative">
          B2B Partner <span className="text-[#21bcfe]">Dashboard</span>
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 items-center z-10 relative">
          <div className="max-h-[500px] pr-1 sm:pr-2 space-y-5 w-full">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-md flex gap-3 sm:gap-4 items-start"
              >
                <div className="w-12 sm:w-14">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative mt-6 xl:mt-0"
          >
            <img
              src={b2b}
              alt="EDUTECH Illustration"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default B2BDashboard;
