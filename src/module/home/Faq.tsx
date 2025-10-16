import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../../components/Container";

import fame from "../../assets/about/fame.png";
import shape2 from "../../assets/about/shape-2.png";

const faqData = [
  {
    value: "tech",
    title: "Technical Queries FAQs",
    questions: [
      {
        q: "Is the tablet preloaded with content, or do I need an internet connection to access it?",
        a: "Yes, the tablet comes preloaded with interactive content for your selected grades. Most features work offline, but an internet connection is required for updates or additional downloads.",
      },
      {
        q: "Can the tablet support additional apps?",
        a: "No, the tablet is optimized for educational purposes and comes with preloaded, secured content. External apps cannot be installed to ensure a focused learning environment.",
      },
      {
        q: "Is there a warranty on the tablet?",
        a: "Yes, we provide a 1-year warranty covering manufacturing defects. Extended warranties are available as an add-on.",
      },
      {
        q: "What should I do if I forget my password or face login issues?",
        a: "You can reset your password through the 'Forgot Password' option or contact our support team for assistance.",
      },
      {
        q: "Does the tablet support multiple users?",
        a: "Yes, the tablet supports multiple profiles for students, parents, or teachers. Each profile can access customized content and track individual progress.",
      },
      {
        q: "How does the interactive content work?",
        a: "The content is powered by AI and includes 2D/3D animations, quizzes, simulations, and real-time feedback to enhance learning and engagement.",
      },
    ],
  },
  {
    value: "backend",
    title: "Backend Support FAQs",
    questions: [
      {
        q: "What backend support do you offer for preloaded interactive content?",
        a: "We provide assistance with system setup, regular content updates, troubleshooting, and performance monitoring.",
      },
      {
        q: "How can I reach your support team for backend-related issues?",
        a: "You can contact our backend support team via email at support@edutechera.com or call our helpline at +91 98797 91288.",
      },
      {
        q: "Are updates for preloaded content free?",
        a: "Yes, all updates during the agreed support period are free of charge.",
      },
      {
        q: "Will the preloaded content work without an internet connection?",
        a: "Yes, the content is preloaded and functions offline. However, occasional internet access may be needed for updates.",
      },
      {
        q: "Do you provide training on managing the preloaded content system?",
        a: "Yes, comprehensive training sessions and user manuals are provided to ensure seamless usage.",
      },
    ],
  },
  {
    value: "payment",
    title: "Payment FAQs",
    questions: [
      {
        q: "What are the accepted payment methods?",
        a: "We accept payments through credit/debit cards, UPI, net banking, NEFT/RTGS transfers, and digital wallets.",
      },
      {
        q: "Is EMI available for purchasing preloaded interactive content?",
        a: "Yes, we provide EMI options through partnered financial institutions.",
      },
      {
        q: "Can I get a GST invoice for my purchase?",
        a: "Yes, a GST-compliant invoice will be shared via email upon successful payment.",
      },
      {
        q: "Are there any additional charges for updates or upgrades?",
        a: "No, updates and upgrades within the subscription period are included in the initial payment.",
      },
      {
        q: "What is your refund policy?",
        a: "Refunds are subject to our terms and conditions. Please contact us for specific scenarios.",
      },
    ],
  },
];

export function Faq() {
  const [selectedTab, setSelectedTab] = React.useState("tech");

  const handleTabClick = (value: string) => {
    setSelectedTab(value);
  };

  const filteredFaq = faqData.find((faq: any) => faq.value === selectedTab);

  return (
    <div className="py-12 sm:py-16 xl:py-10 relative px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="absolute bottom-10 left-5 top-3 sm:left-10">
          <img src={fame} alt="" className="w-[20px] sm:w-[40px]" />
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={shape2} alt="" className="w-[70px]  sm:w-[80px] xl:w-[200px]" />
        </div>

      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#004aad]">Have inquiries?</span> Find all
              the solutions in our FAQ.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Here are the most commonly asked questions.
            </p>

            
            <div className="flex flex-wrap gap-3 my-8 justify-center sm:justify-start">
              {faqData.map((faq) => (
                <button
                  key={faq.value}
                  onClick={() => handleTabClick(faq.value)}
                  className={`w-full sm:w-40 md:w-56 lg:w-60 text-center p-3 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-300 ${
                    selectedTab === faq.value
                      ? "text-white bg-gradient-to-r from-[#004aad] to-[#2f57ef]"
                      : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {faq.title}
                </button>
              ))}
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFaq?.questions.map((item: any, index: any) => (
                <AccordionItem
                  key={index}
                  value={`${filteredFaq.value}-${index}`}
                  className="border rounded-lg px-4 sm:px-6 shadow-sm bg-white border-gray-200"
                >
                  <AccordionTrigger className="text-sm sm:text-[16px] font-semibold text-left text-gray-800 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm sm:text-base text-left text-gray-600">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}
