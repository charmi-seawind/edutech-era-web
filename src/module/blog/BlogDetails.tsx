import * as React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import blogImage from "../../assets/blog/blog-1.jpeg";
import Container from "../../components/Container"
import banner from "../../assets/blog/back.avif";
import fame from "../../assets/about/fame.png";
import shape2 from "../../assets/about/shape-2.png";

import bg from "../../assets/image-bg.webp";

export default function BlogDetail() {
  return (
    <div>
      <div
        className="hero-section text-white text-center py-24 px-4"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-3xl font-bold">
          How to Choose the Best Education Tablet for Your Child Without Relying
          on Online Classes
        </h1>
      </div>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
      

        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <img
              src={blogImage}
              alt="Blog Cover"
              className="w-full h-auto rounded-xl shadow-md mb-8"
            />

            <div className="shadow-sm p-5 sm:p-8 bg-white rounded-xl">
              <h1 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 leading-snug mb-4">
                How to Choose the Best Education Tablet for Your Child Without
                Relying on Online Classes
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Discover how to choose the best AI-based education tablet for
                your child (JR KG to 10th) — no online classes, no monthly fees,
                just smart, structured learning.
              </p>

              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-5 gap-4">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>18/06/2025</span>
                </div>
                <span className="text-[#21bcfe] font-semibold">
                  Edutech Era
                </span>
              </div>

              <div className="text-base leading-relaxed text-gray-700 space-y-5">
                <p>
                  As parents, we all want the best for our children especially
                  when it comes to their education...
                </p>

                <h2 className="text-xl font-bold text-gray-800 mt-6">
                  The answer is yes.
                </h2>

                <p>
                  Today’s AI-powered educational tablets are designed
                  specifically for school-going children...
                </p>

                <div>
                  <h2 className="text-2xl font-semibold text-[#21bcfe] mt-8 mb-2">
                    1. Choose Curriculum-Aligned Content
                  </h2>
                  <p>
                    When selecting an educational tablet, content is
                    everything...
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>
                      Subject-wise learning modules that break down core topics
                      clearly
                    </li>
                    <li>Grade-wise content from Nursery to 10th standard</li>
                    <li>Crystal-clear explanations in core subjects</li>
                    <li>Chapter-based videos, quizzes, and exercises</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#21bcfe] mt-8 mb-2">
                    2. AI-Driven Learning Personalization
                  </h2>
                  <p>
                    Every child learns differently - and traditional teaching
                    often fails...
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>
                      Subject-wise learning modules that break down core topics
                      clearly
                    </li>
                    <li>Grade-wise content from Nursery to 10th standard</li>
                    <li>Crystal-clear explanations in core subjects</li>
                    <li>Chapter-based videos, quizzes, and exercises</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#21bcfe] mt-8 mb-2">
                    3. Interactive and Engaging Study Format
                  </h2>
                  <p>
                    We all know it - children learn better when they’re
                    engaged...
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>
                      Subject-wise learning modules that break down core topics
                      clearly
                    </li>
                    <li>Grade-wise content from Nursery to 10th standard</li>
                    <li>Crystal-clear explanations in core subjects</li>
                    <li>Chapter-based videos, quizzes, and exercises.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
