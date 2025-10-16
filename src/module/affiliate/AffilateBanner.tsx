import * as React from "react";
import bg from "../../assets/image-bg.webp";

const AffilateBanner = () => {
  return (
    <div
      className="hero-section text-white text-center py-24 px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">B2B Partner Program </h1>
    </div>
  );
};

export default AffilateBanner;
