import * as React from "react";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import card1 from "../../assets/blog/blog-1.jpeg";
import card2 from "../../assets/blog/blog-2.jpeg";
import card3 from "../../assets/blog/blog-3.jpeg";
import card4 from "../../assets/blog/blog-4.jpeg";
import card5 from "../../assets/blog/blog-5.jpeg";
import card6 from "../../assets/blog/blog-6.jpeg";
import card7 from "../../assets/blog/blog-7.jpeg";
import card8 from "../../assets/blog/blog-8.png";
import card9 from "../../assets/blog/blog-9.png";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const blogData = [
  {
    image: card1,
    title: "How to Choose the Best Education",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card2,
    title: "Top 10 Smartest Innovations in",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card3,
    title: "Top 10 Innovative Things in",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card4,
    title: "Benefits of Digital Classrooms",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card5,
    title: "Revolutionizing Learning with AR",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card6,
    title: "How Parents Can Support e-Learning",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card7,
    title: "How Parents Can Support e-Learning",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card8,
    title: "How Parents Can Support e-Learning",
    date: "18/06/2025",
    author: "Edutech Era",
  },
  {
    image: card9,
    title: "How Parents Can Support e-Learning",
    date: "18/06/2025",
    author: "Edutech Era",
  },
];

export default function BlogCard() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {blogData.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md w-full transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-t-xl w-full h-56 object-cover"
            />
            <div className="p-4 relative">
              <h3 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{item.date}</p>
              <a href="#" className="text-sm text-sky-500 hover:underline">
                - {item.author}
              </a>
              <div className="absolute bottom-4 right-4">
                <Link to="/blog/blog-details">

                <div className="bg-sky-100 text-sky-700 p-4 rounded-lg">
                  <FaLocationArrow className="text-2xl" />
                </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < blogData.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center pb-10"
        >
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-sky-600 text-white text-sm font-medium rounded-md shadow hover:bg-sky-700 transition-all duration-300"
          >
            Load More
          </button>
        </motion.div>
      )}
    </Container>
  );
}
