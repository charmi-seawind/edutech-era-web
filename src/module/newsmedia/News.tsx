import Container from "../../components/Container";
import * as React from "react";
import news1 from "../../assets/media/news.jpg";
import { useState } from "react";

const allItems = [
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
  { img: news1 },
];

export default function News() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 1000);
  };

  const visibleItems = allItems.slice(0, visibleCount);
  const hasMore = visibleCount < allItems.length;

  return (
    <Container>
      <section className="min-h-screen px-4 py-16  to-white">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Our News & Media
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.03] transition-all duration-300 bg-white"
            >
              <div className="relative h-auto overflow-hidden">
                <img
                  src={item.img}
                  alt="img"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="px-6 py-3 text-white bg-[#21bcfe] hover:bg-blue-500 rounded-full text-sm transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </section>
    </Container>
  );
}
