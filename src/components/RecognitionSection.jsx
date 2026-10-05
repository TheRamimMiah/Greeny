import { ArrowRight, Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const awards = [
  {
    year: "2024",
    title: "Global Green Award",
    description: "Recognized for innovation in urban greening initiatives.",
  },
  {
    year: "2023",
    title: "Sustainability Leadership Prize",
    description:
      "Honoring our corporate partners driving large-scale reforestation.",
  },
  {
    year: "2022",
    title: "Community Impact Award",
    description:
      "Awarded to local groups creating long-term environmental change.",
  },
  {
    year: "2021",
    title: "Climate Standards Certification",
    description:
      "Verified for transparency and measurable environmental impact.",
  },
];

export default function RecognitionSection() {
  return (
    <Reveal>
      <section
        id="recognition"
        className="mx-auto mt-5 w-full max-w-330 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Recognition</SectionLabel>

            <h2 className="mt-5 text-[39px] leading-[0.94] tracking-[-0.06em] sm:text-[50px] md:text-[62px]">
              Celebrating{" "}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white align-middle sm:h-12 sm:w-12">
                <Award size={21} />
              </span>{" "}
              Our
              <br />
              Collective Achievements
            </h2>
          </div>

          <a
            href="#footer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-black/15 px-4 py-2.5 text-xs transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            <Award size={14} />
            See All Awards
          </a>
        </div>

        <div className="mt-12 border-t border-black/10">
          {awards.map((award) => (
            <div
              key={award.year}
              className="group grid grid-cols-1 gap-4 border-b border-black/10 py-6 transition-colors duration-300 hover:bg-black/2 sm:grid-cols-[70px_minmax(0,1fr)_1fr_44px] sm:items-center sm:gap-5"
            >
              <span className="w-fit rounded-md border border-black/10 px-2 py-1 text-[10px]">
                {award.year}
              </span>

              <h3 className="text-[23px] tracking-[-0.045em] sm:text-[26px] md:text-[30px]">
                {award.title}
              </h3>

              <p className="text-xs leading-5 text-black/40">
                {award.description}
              </p>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/15 transition-all duration-300 group-hover:bg-black group-hover:text-white"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
