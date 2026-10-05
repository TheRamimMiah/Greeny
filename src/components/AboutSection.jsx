import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const stats = [
  {
    number: "01.",
    text: (
      <>
        <em>
          Millions of trees planted
          <br />
          and tracked
        </em>
      </>
    ),
  },
  {
    number: "02.",
    text: (
      <>
        <em>
          Transparent, map-based
          <br />
          project monitoring
        </em>
      </>
    ),
  },
  {
    number: "03.",
    text: (
      <>
        <em>
          Partnerships with local
          <br />
          communities
        </em>
      </>
    ),
  },
];

export default function AboutSection() {
  return (
    <Reveal>
      <section
        id="about"
        className="mx-auto mt-5 w-full max-w-330 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <SectionLabel>About Us</SectionLabel>

          {stats.map((stat) => (
            <div key={stat.number}>
              <span className="text-3xl font-light italic tracking-[-0.06em] text-black/25">
                {stat.number}
              </span>

              <p className="mt-3 text-sm leading-5 tracking-[-0.03em] sm:text-[15px]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-8 md:mt-20 md:grid-cols-[170px_minmax(0,1fr)_170px] lg:grid-cols-[210px_minmax(0,650px)_180px] lg:gap-14">
          <img
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=90"
            alt="Nature"
            className="hidden aspect-square w-full rounded-2xl object-cover md:block"
          />

          <div>
            <p className="text-[31px] leading-[1.01] tracking-[-0.055em] sm:text-[40px] md:text-[46px] lg:text-[53px]">
              By combining environmental science with digital tools our platform
              makes it easy to <em>join</em> greening initiatives,{" "}
              <em>track</em> impact in real-time, and <em>contribute</em> to a
              sustainable future.
            </p>

            <a
              href="#footer"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-black/15 px-4 py-2.5 text-xs transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Join Us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={12} />
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <p className="mb-3 text-[11px] leading-4 text-black/45">
              Technology Meets <em className="text-black">Nature</em>
              <br />
              Restoration
            </p>

            <img
              src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=90"
              alt="Leaves"
              className="aspect-[1.25] w-full rounded-xl object-cover"
            />
          </div>

          <img
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=90"
            alt="Nature"
            className="h-56 w-full rounded-2xl object-cover md:hidden"
          />
        </div>
      </section>
    </Reveal>
  );
}
