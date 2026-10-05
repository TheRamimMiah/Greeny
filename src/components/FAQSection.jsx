import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    question: "How do I start planting trees?",
    answer:
      "Choose a verified planting program, select the amount you'd like to contribute, and follow your project's progress through your dashboard.",
  },
  {
    question: "Where are the trees being planted?",
    answer:
      "Our projects are located across forests, communities, farms, and urban areas. Every verified project includes location and impact information.",
  },
  {
    question: "How do I track my contributions?",
    answer:
      "Your dashboard shows planting progress, project information, environmental impact, and updates related to your contributions.",
  },
  {
    question: "Can I plant trees on behalf of my company?",
    answer:
      "Yes. Organizations can create team projects, support larger planting programs, and track collective environmental impact.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <Reveal>
      <section
        id="faq"
        className="mx-auto mt-5 w-full max-w-225 rounded-3xl bg-white px-6 py-14 sm:mt-7 sm:px-10 sm:py-16 md:px-14"
      >
        <div className="mx-auto max-w-180">
          <SectionLabel center>FAQ</SectionLabel>

          <h2 className="mt-5 text-center text-[38px] leading-[0.95] tracking-[-0.06em] sm:text-[50px] md:text-[57px]">
            Your{" "}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white align-middle sm:h-11 sm:w-11">
              <MessageCircleQuestion size={18} />
            </span>{" "}
            Questions, Answered
          </h2>

          <div className="mt-10">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div key={faq.question} className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-medium sm:text-base"
                  >
                    <span>{faq.question}</span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-black text-white" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 pr-10 text-xs leading-5 text-black/50 sm:text-sm sm:leading-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
