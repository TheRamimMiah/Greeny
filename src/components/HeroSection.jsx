import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto mt-2 w-full max-w-330 rounded-3xl bg-white p-2 sm:p-3"
    >
      <div
        className="group relative flex min-h-130 items-center justify-center overflow-hidden rounded-[19px] bg-cover bg-center px-5 py-20 sm:min-h-150 sm:px-10 md:min-h-170 lg:min-h-180"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2200&q=90')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/25 to-black/15" />

        <div className="absolute inset-0 bg-white/5 transition-transform duration-2500 ease-out group-hover:scale-[1.03]" />

        <Reveal className="relative z-10 w-full">
          <div className="mx-auto flex max-w-250 flex-col items-center text-center">
            <h1 className="text-[44px] font-normal leading-[0.96] tracking-[-0.065em] sm:text-[62px] md:text-[76px] lg:text-[90px]">
              Empowering{" "}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-black text-lg text-white sm:h-12 sm:w-12 sm:text-2xl md:h-14 md:w-14 md:text-3xl">
                ◐
              </span>{" "}
              <em>Communities</em>
              <br />
              To Restore Nature
            </h1>

            <p className="mt-7 max-w-162.5 text-[12px] leading-5 text-black/60 sm:text-sm sm:leading-6">
              Our platform connects people, businesses, and governments to
              greening programs that reduce carbon footprints, restore
              biodiversity, and create healthier cities.
            </p>

            <a
              href="#programs"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white/80 px-5 py-3 text-xs font-medium backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Start Planting
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={11} />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
