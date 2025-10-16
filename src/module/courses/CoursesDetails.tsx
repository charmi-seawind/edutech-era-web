import * as React from "react";

import Container from "../../components/Container";
import evs from "../../assets/EVS.png";
import book from "../../assets/book.png";
import match from "../../assets/match.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import bg from "../../assets/affilate/bg-1.jpg";

export default function CourseDetails() {
  const features = [
    {
      iconColor: "bg-pink-100 text-pink-600",
      title: "Preloaded Tablet",
      description: "With ready-to-use educational content.",
    },
    {
      iconColor: "bg-red-100 text-red-600",
      title: "Accessories",
      description: "Charger and tablet stand included.",
    },
    {
      iconColor: "bg-orange-100 text-orange-600",
      title: "Offline Access",
      description: "No internet required to use content.",
    },
  ];
  return (
    <Container>
      <div
        className="relative max-w-6xl mx-auto px-4 py-10 text-gray-800 font-sans bg-gray-50 shadow-lg rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="relative z-10 space-y-12">
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Welcome to <span className="text-[#21bcfe]">Junior K.G</span>{" "}
              Interactive Learning with{" "}
              <span className="text-[#21bcfe]">EDUTECH ERA</span>
            </h1>
          </div>

          <div className="text-start mx-auto text-gray-700 text-lg leading-relaxed">
            <p>
              <strong className="text-black">Description:</strong> <br />
              Ignite curiosity and enhance learning with our interactive{" "}
              <strong>Junior K.G</strong> curriculum. Our interactive content
              integrates <strong>English</strong>, <strong>EVS</strong>, and{" "}
              <strong>Mathematics</strong> to foster cognitive and creative
              development.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-start mb-6">
              Subjects Included:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                {
                  img: book,
                  label: "English",
                  color: "text-purple-600",
                  border: " border border-purple-600",
                },
                {
                  img: evs,
                  label: "Environmental Studies (EVS)",
                  color: "text-green-600",
                  border: " border border-green-600",
                },
                {
                  img: match,
                  label: "Mathematics",
                  color: "text-teal-600",
                  border: " border border-teal-600",
                },
              ].map((subject, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition duration-300 hover:shadow-2xl  ${subject.border}`}
                >
                  <img src={subject.img} alt="" className="w-30 h-30" />
                  <p className="font-semibold text-lg">{subject.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 className="text-lg font-bold mb-2">
              Key Features of the Junior K.G Grade Program:
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm leading-relaxed">
              <li className="flex items-center gap-2">
                <FaArrowAltCircleRight className="text-pink-500 mt-1 text-2xl" />
                <span className="text-lg">
                  <strong className="text-pink-500">
                    Interactive Content:
                  </strong>{" "}
                  Animations and activities to make learning engaging.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowAltCircleRight className="text-yellow-500 mt-1 text-2xl" />
                <span className="text-lg">
                  <strong className="text-yellow-500">
                    AI-Powered Instant Query Solution:
                  </strong>{" "}
                  Personalized answers to queries.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowAltCircleRight className="text-purple-500 mt-1 text-2xl" />
                <span className="text-lg">
                  <strong className="text-purple-500">
                    Doubt Solving Support:
                  </strong>{" "}
                  Address every question to strengthen understanding.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowAltCircleRight className="text-green-500 mt-1 text-2xl" />
                <span className="text-lg">
                  <strong className="text-green-500">
                    Progress Analytics:
                  </strong>{" "}
                  Easily monitor your child's growth.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowAltCircleRight className="text-[#21bcfe] mt-1 text-2xl" />
                <span className="text-lg">
                  <strong className="text-[#21bcfe]">Parental Controls:</strong>{" "}
                  Ensure a focused and safe learning environment.
                </span>
              </li>
            </ul>
          </div>

          <div className="px-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              What You’ll Get:
            </h2>

            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <FaArrowAltCircleRight className="text-indigo-500 mt-1 text-lg" />
                <span>
                  <span className="font-bold text-indigo-700">
                    Preloaded Tablet
                  </span>{" "}
                  with ready-to-use educational content.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowAltCircleRight className="text-red-500 mt-1 text-lg" />
                <span>
                  Accessories{" "}
                  <span className="font-bold text-red-600">
                    Charger and tablet stand
                  </span>{" "}
                  for ease of use.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowAltCircleRight className="text-orange-500 mt-1 text-lg" />
                <span>
                  <span className="font-bold text-orange-600">
                    Offline Access:
                  </span>{" "}
                  Seamless learning without the need for internet.
                </span>
              </li>
            </ul>

            <p className="text-sm sm:text-base text-gray-700 pt-4">
              Transform Junior K.G. learning into an exciting and enriching
              experience with{" "}
              <a href="#" className="text-sky-500 font-medium hover:underline">
                EDUTECH ERA’s Junior K.G. Program
              </a>
              !
            </p>
          </div>

       
        </div>
      </div>
    </Container>
  );
}
