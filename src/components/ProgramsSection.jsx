import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const programs = [
  {
    id: "PROGRAM 01",
    title: "Carbon Offsetting",
    text: "Neutralize emissions through verified greening projects.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: "PROGRAM 02",
    title: "Urban Greening",
    text: "Create healthier cities with community parks.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: "PROGRAM 03",
    title: "Forest Restoration",
    text: "Restore damaged ecosystems with verified projects.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: "PROGRAM 04",
    title: "Community Gardens",
    text: "Help neighborhoods build healthier green spaces.",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=90",
  },
];

export default function ProgramsSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((current) => (current === programs.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setIndex((current) => (current === 0 ? programs.length - 1 : current - 1));
  };

  return (
    <Reveal>
      <section
        id="programs"
        className="mx-auto mt-5 w-full max-w-330 overflow-hidden rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
          <div className="flex flex-col justify-between">
            <div>
              <SectionLabel>Programs</SectionLabel>

              <h2 className="mt-5 text-[38px] leading-[0.95] tracking-[-0.06em] sm:text-[48px] md:text-[56px]">
                Initiatives That
                <br />
                Drive{" "}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white align-middle sm:h-11 sm:w-11">
                  ◐
                </span>{" "}
                Change
              </h2>
            </div>

            <div className="mt-10 lg:mt-24">
              <div className="flex gap-3 text-[10px] text-black/30">
                {programs.map((_, i) => (
                  <span
                    key={i}
                    className={i === index ? "font-medium text-black" : ""}
                  >
                    0{i + 1}
                  </span>
                ))}
              </div>

              <p className="mt-8 max-w-65 text-xs leading-5 text-black/40">
                From forests to cities, we make greening accessible everywhere.
                Explore our key programs designed to restore balance to
                ecosystems and urban environments.
              </p>
            </div>
          </div>

          <div>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {programs.map((program) => (
                  <article key={program.id} className="min-w-full">
                    <div
                      className="group relative min-h-117.5 overflow-hidden rounded-3xl bg-cover bg-center p-5 sm:min-h-140 sm:p-7"
                      style={{
                        backgroundImage: `url("${program.image}")`,
                      }}
                    >
                      <div className="absolute inset-0 bg-linear-to-b from-white/55 via-transparent to-black/35" />

                      <div className="relative z-10 flex h-full flex-col">
                        <span className="w-fit rounded-md bg-white/70 px-2 py-1 text-[8px] font-medium backdrop-blur-md">
                          {program.id}
                        </span>

                        <div className="mt-auto">
                          <h3 className="text-[36px] leading-none tracking-[-0.055em] sm:text-[48px]">
                            {program.title}
                          </h3>

                          <p className="mt-4 max-w-75 text-sm leading-5 text-black/65">
                            {program.text}
                          </p>

                          <a
                            href="#footer"
                            className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white/75 px-4 py-2.5 text-xs backdrop-blur-md transition-all hover:bg-black hover:text-white"
                          >
                            Explore
                            <ArrowUpRight
                              size={12}
                              className="transition-transform"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/15 transition-all duration-300 hover:-translate-x-1 hover:bg-black hover:text-white"
              >
                <ArrowLeft size={15} />
              </button>

              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition-all duration-300 hover:translate-x-1"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
