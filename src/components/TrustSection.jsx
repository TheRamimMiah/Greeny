import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const cards = [
  {
    title: "Verified Projects & Impact Reports",
    description:
      "You'll receive detailed, verified impact reports showcasing the number of trees planted, CO₂ offset, and the health of each project.",
  },
  {
    title: "Interactive Planting Maps",
    description:
      "Our dynamic, easy-to-use maps allow you to see the location and progress of every project, giving you full visibility into where your contributions are making a difference.",
  },
  {
    title: "Collaboration Tools for Organizations",
    description:
      "Designed for businesses, our platform provides collaboration tools to manage large-scale greening programs, including team management, project coordination, and real-time reporting.",
  },
];

export default function TrustSection() {
  return (
    <Reveal>
      <section
        id="why-us"
        className="mx-auto mt-7 w-full max-w-330 rounded-3xl bg-white px-5 py-14 sm:px-8 md:px-10 lg:px-12 lg:py-20"
      >
        {/* Heading */}
        <div className="text-center">
          <SectionLabel center>Why Choose Us</SectionLabel>

          <h2 className="mx-auto mt-6 max-w-200 text-[40px] leading-[0.95] tracking-[-0.06em] sm:text-[52px] md:text-[64px] lg:text-[72px]">
            A Greening Platform You
            <br />
            Can{" "}
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black align-middle text-white sm:h-12 sm:w-12">
              <ShieldCheck size={20} />
            </span>{" "}
            Trust
          </h2>
        </div>

        {/* Background */}
        <div
          className="relative mt-14 overflow-hidden rounded-[28px] bg-cover bg-center p-5 sm:p-8 lg:p-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=90')",
          }}
        >
          <div className="absolute inset-0 bg-black/3" />

          {/* CARDS IN ONE ROW */}
          <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group flex min-h-97.5 flex-col rounded-3xl border border-white/60 bg-white/65 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 sm:p-7"
              >
                <h3 className="text-[26px] leading-[0.98] tracking-[-0.055em] sm:text-[30px]">
                  {card.title}
                </h3>

                <div className="my-6 h-px w-full bg-black/10" />

                <p className="text-xs leading-6 text-black/55 sm:text-sm">
                  {card.description}
                </p>

                <div className="mt-auto pt-8">
                  <a
                    href="#faq"
                    className="group/link inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white/80 px-4 py-2.5 text-xs font-medium transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Read More
                    <ArrowUpRight
                      size={12}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
