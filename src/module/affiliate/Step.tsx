import * as React from "react";
import Container from "../../components/Container";

const ProcessFlow = () => {
  const steps = [
    {
      title: "Visit the become a Changemaker section on the",
      highlight: "EDUTECH ERA website.",
      borderColor: "border-red-200",
      bgcolor: "bg-red-50",
    },
    {
      title: "Complete an application form with details",
      borderColor: "border-yellow-200",
      bgcolor: "bg-yellow-50",
    },
    {
      title:
        "Upload necessary documents like ID proof and PAN for TDS compliance",
      borderColor: "border-green-200",
      bgcolor: "bg-green-50",
    },
    {
      title: "Review and accept the terms and conditions",
      borderColor: "border-teal-200",
      bgcolor: "bg-teal-50",
    },
    {
      title: "Submit the form for approval within 7 working days",
      borderColor: "border-purple-200",
      bgcolor: "bg-purple-50",
    },
  ];

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-7 text-black">
          Free Registration Process
        </h1>

        {/* Make the whole process scrollable on small screens */}
        <div className="w-full scrollbar-hide  overflow-x-auto">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-center min-w-max gap-6 px-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center animate-fade-in-up duration-500 transition-all"
              >
                {/* Step Circle */}
                <div
                  className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full ${step.bgcolor} border-4 ${step.borderColor} flex items-center justify-center p-4 text-center shadow-lg transform ease-in-out`}
                >
                  <p className="text-sm md:text-base font-medium text-gray-800">
                    {step.title}
                    {step.highlight && (
                      <span className="font-bold"> {step.highlight}</span>
                    )}
                  </p>
                </div>

                {/* Arrows Between Steps */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop Horizontal Arrow */}
                    <div className="hidden md:block w-10 h-10 mx-3 animate-pulse">
                      <svg
                        className="w-full h-full text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 26 26"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    {/* Mobile Vertical Arrow */}
                    <div className="block md:hidden my-3 animate-bounce">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 9l7 7 7-7"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProcessFlow;
