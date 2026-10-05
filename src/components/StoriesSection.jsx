import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import greenCities from "../assets/green-cities.png";
import smallContribution from "../assets/small-contribution.jpg";
import empoweringLocalComminuties from "../assets/empowering-local-communities.png";

const stories = [
  {
    name: "Raj Patel",
    role: "Community Leader · Local Initiative",
    title: "Empowering local communities to take action.",
    text: "Our village has been able to implement a reforestation program thanks to the support and resources provided by this platform. I've seen an incredible improvement in the local environment, and it's inspired others in the community to get involved.",
    image: empoweringLocalComminuties,
  },
  {
    name: "Maya Green",
    role: "Project Coordinator · Forest Initiative",
    title: "Turning small contributions into real change.",
    text: "Our volunteers can now see exactly where their work is making an impact. The transparency helps us bring more people into the project and keep our community engaged.",
    image: smallContribution,
  },
  {
    name: "Daniel Kim",
    role: "Operations Lead · Urban Project",
    title: "Making cities greener together.",
    text: "The collaboration tools gave our organization a simple way to coordinate teams, monitor progress, and communicate the results of our planting initiatives.",
    image: greenCities,
  },
];

export default function StoriesSection() {
  const [index, setIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const story = stories[index];

  const changeStory = (newIndex) => {
    if (isChanging) return;

    setIsChanging(true);

    setTimeout(() => {
      setIndex(newIndex);
      setIsChanging(false);
    }, 250);
  };

  const previous = () => {
    const newIndex = index === 0 ? stories.length - 1 : index - 1;
    changeStory(newIndex);
  };

  const next = () => {
    const newIndex = index === stories.length - 1 ? 0 : index + 1;
    changeStory(newIndex);
  };

  return (
    <Reveal>
      <section
        id="stories"
        className="mx-auto mt-5 w-full max-w-330 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12"
      >
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>From Our Community</SectionLabel>

            <h2 className="mt-5 text-[38px] leading-[0.95] tracking-[-0.06em] sm:text-[49px] md:text-[61px] lg:text-[68px] xl:text-[74px]">
              Real Stories from Our
              <br />
              Green{" "}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white align-middle sm:h-12 sm:w-12">
                ◐
              </span>{" "}
              Community
            </h2>
          </div>

          <div className="text-xs text-black/30">
            0{index + 1} / 0{stories.length}
          </div>
        </div>

        {/* Story Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white sm:mt-10">
          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]">
            {/* IMAGE */}
            <div className="relative min-h-85 w-full overflow-hidden bg-[#eef0ec] sm:min-h-100 md:min-h-125 lg:min-h-150 xl:min-h-162.5">
              <img
                src={story.image}
                alt={story.title}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isChanging ? "scale-[1.02] opacity-0" : "scale-100 opacity-100"}`}
              />
            </div>

            {/* CONTENT */}
            <div
              className={`flex min-h-85 flex-col justify-between bg-white p-7 sm:min-h-100 sm:p-9 md:min-h-125 md:p-10 lg:min-h-150 lg:p-12 xl:min-h-162.5 xl:p-14 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isChanging ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}
            >
              {/* Text */}
              <div>
                <h3 className="max-w-155 text-[32px] leading-[0.98] tracking-tighter sm:text-[43px] md:text-[48px] lg:text-[52px] xl:text-[58px]">
                  {story.title}
                </h3>

                <p className="mt-7 max-w-155 text-sm leading-6 text-black/55 sm:text-base sm:leading-7 md:text-base lg:mt-8 lg:text-[17px] lg:leading-8">
                  “{story.text}”
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-[10px] text-white sm:h-11 sm:w-11">
                    {story.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div className="text-xs leading-4 sm:text-sm">
                    <strong>{story.name}</strong>

                    <br />

                    <span className="text-black/40">{story.role}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    disabled={isChanging}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/15 transition-all duration-300 hover:-translate-x-1 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ArrowLeft size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    disabled={isChanging}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition-all duration-300 hover:translate-x-1 hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-2">
          {stories.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => changeStory(i)}
              disabled={isChanging}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-black" : "w-1.5 bg-black/20 hover:bg-black/40"}`}
            />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
