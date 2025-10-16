import * as React from "react";
import bg from "../assets/image-bg.webp";

const FaqBanner = () => {
  return (
    <div
      className="hero-section text-white text-center py-24 px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">Faq's </h1>
    </div>
  );
};

export default FaqBanner;
