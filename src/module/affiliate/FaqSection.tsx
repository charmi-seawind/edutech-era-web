import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../../components/Container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who can join the EDUTECH ERA B2B Partner Program?",
    answer:
      "Anyone with a passion for education and networking—such as educators, entrepreneurs, freelancers, and business professionals—can join our B2B Partner Program.",
  },
  {
    question: "Is there any registration fee to become a B2B Partner?",
    answer:
      "No, registration is completely free. You can become a partner without paying any upfront fees.",
  },
  {
    question: "What is the EDUTECH ERA tablet, and what makes it unique?",
    answer:
      "The EDUTECH ERA tablet is a smart learning device preloaded with top educational content, live classes, progress tracking, and offline support, tailored for students of all levels.",
  },
  {
    question: "How do I earn as a B2B Partner?",
    answer:
      "You earn commissions for every successful sale or referral made through your unique partner ID or referral link. The more you sell, the more you earn.",
  },
  {
    question: "How are payouts handled?",
    answer:
      "Payouts are processed monthly via direct bank transfer. You can track your earnings and payout status through your partner dashboard.",
  },
  {
    question: "Is there a limit to how much I can earn?",
    answer:
      "No, there is no earning limit. The more referrals you bring, the more you earn.",
  },
  {
    question: "Do I need technical knowledge to promote the tablet?",
    answer:
      "Not at all! We provide you with all the necessary marketing materials, support, and training to help you succeed—no technical background required.",
  },
  {
    question: "Can I track my performance and earnings?",
    answer:
      "Yes, you’ll have access to a dedicated dashboard where you can view your sales, leads, commissions, and payouts in real time.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FaqSection = () => {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <Container>
      <section className="py-12 bg-white">
        <motion.div
          className="max-w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl text-[#4a5565] sm:text-3xl font-bold text-center mb-10">
            Important FAQs for{" "}
            <span className="text-[#3bbcfc]">EDUTECH ERA</span>{" "}
            <span className="text-[#4a5565]">B2B Partner</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              onValueChange={handleToggle}
            >
              {faqs.map((faq, index) => {
                const value = `item-${index}`;
                const isActive = openItem === value;

                return (
                  <motion.div key={value} variants={itemVariants}>
                    <AccordionItem
                      value={value}
                      className="rounded-sm border border-gray-300 shadow-lg overflow-hidden"
                    >
                      <AccordionTrigger
                        className={cn(
                          "px-4 py-3 text-[16px] font-semibold rounded-sm flex justify-between items-center w-full transition-colors hover:no-underline",
                          isActive
                            ? "bg-[#1b2b4c] text-white"
                            : "bg-white text-gray-900 "
                        )}
                      >
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent className="bg-white px-4 py-3 text-gray-800 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </motion.div>
        </motion.div>
      </section>
    </Container>
  );
};

export default FaqSection;
