import * as React from "react";
import Container from "../../components/Container";
import bannerImage from "../../assets/home/image.png"; 

export default function NewsBaneer() {
  return (
    <section className="bg-[#262627] relative py-16">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        
          <div className="text-white lg:w-1/2 w-full text-center lg:text-left mt-10 lg:mt-24">
            <h1 className="text-4xl font-bold mb-4">News Media</h1>
            <p className="text-white text-sm sm:text-base mb-2">
              <span className="opacity-80">Home</span> &gt; <span>About Us</span>
            </p>
          </div>

       
        <div className="lg:w-1/2 w-full flex mt-14 justify-center">
            <img
              src={bannerImage}
              alt="About Us Illustration"
              className="max-w-[300px] w-full"
            />
          </div>
        </div>

   
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <svg
            className="absolute left-0 top-10 opacity-10"
            width="100%"
            height="100%"
            viewBox="0 0 600 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" />
            <circle cx="100" cy="100" r="120" stroke="white" strokeWidth="2" />
            <circle cx="100" cy="100" r="160" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </Container>
    </section>
  );
}
