import * as React from "react";
import Container from "../../components/Container";
import image1 from "../../assets/home/image-1.jpg";
import image2 from "../../assets/home/image-2.jpg";
import image3 from "../../assets/home/image-3.jpg";
import image4 from "../../assets/home/image-4.jpg";
import image5 from "../../assets/home/image-5.jpg";
import image6 from "../../assets/home/image-6.jpg";
import image7 from "../../assets/home/image-7.jpg";
import image8 from "../../assets/home/image-8.jpg";

interface ImageCardProps {
  src: string;
  title: string;
  description: string;
  className?: string;
}

function ImageCard({
  src,
  title,
  description,
  className = "",
}: ImageCardProps) {
  return (
    <div
      className={`relative overflow-hidden text-white group rounded-2xl ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${src}")` }}
      ></div>

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/100 to-transparent">
        <h1 className="text-[20px] sm:text-[18px] md:text-[20px] font-bold leading-[25px]">
          {title}
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-base font-normal max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-24 group-hover:translate-y-0 transform translate-y-4">
          {description}
        </p>
      </div>

      <img src={src} alt={title} className="w-full h-full opacity-0" />
    </div>
  );
}

export function VisionCard() {
  return (
    <div className="bg-gradient-to-b from-white to-[#E6F0FA] py-10 sm:py-16 lg:py-20 flex items-center justify-center">
      <Container>
        <div className="max-w-full w-full text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Get the <span className="text-[#004aad]">EDUTECH ERA</span>{" "}
            Advantage: Transforming Learning with Interactive Content!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            At Toddle, AI isn't just a feature, it's a core of our technology,
            built on four foundational pillars.
          </p>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-5 w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row gap-5">
                <ImageCard
                  src={image1}
                  title="Pre-loaded Interactive Content"
                  description="Engage with interactive lessons and activities that are ready to use, helping students grasp concepts faster and more effectively."
                  className="w-full sm:w-[18.5rem] h-64 sm:h-[18rem] rounded-xl"
                />
                <ImageCard
                  src={image2}
                  title="Automated Video Lessons"
                  description="Access AI-driven video lessons that adjust to your learning pace, providing a personalized education experience anytime, anywhere."
                  className="w-full sm:w-80 h-60 sm:h-72"
                />
              </div>

              <ImageCard
                src={image3}
                title="Book PDFs"
                description="Download textbooks and study materials in PDF format to study offline, revise efficiently, and keep all resources in one place."
                className="w-full h-60 sm:h-[27rem]"
              />
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-5">
              <ImageCard
                src={image4}
                title="Comprehensive MCQs"
                description="Practice a wide range of multiple-choice questions covering all topics to strengthen knowledge and boost exam readiness."
                className="w-full h-60 sm:h-80"
              />

              <div className="flex flex-col sm:flex-row gap-5">
                <ImageCard
                  src={image5}
                  title="AI-Powered Interactive Learning"
                  description="Experience personalized learning with AI tools that adapt lessons to each student's pace and understanding."
                  className="w-full sm:w-1/2 h-40"
                />
                <ImageCard
                  src={image6}
                  title="Parental Control Features"
                  description="Keep track of your child's progress and set learning limits to ensure a safe and productive study environment."
                  className="w-full sm:w-1/2 h-40"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <ImageCard
                  src={image7}
                  title="Instant Progress Reports"
                  description="Get real-time insights into performance with automatic progress reports to identify strengths and areas for improvement."
                  className="w-full sm:w-1/2 h-56"
                />
                <ImageCard
                  src={image8}
                  title="Social-Media-Free Learning Zone"
                  description="Focus on learning without distractions in a dedicated environment free from social media interruptions."
                  className="w-full sm:w-72 h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
