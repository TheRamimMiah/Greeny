import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Leaf,
  MapPin,
  ShieldCheck,
  TreePine,
  BarChart3,
  CircleCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import greenCities from "../assets/green-cities.png";
import empoweringLocalComminuties from "../assets/empowering-local-communities.png";

const metrics = [
  {
    number: "01",
    value: "1.2M+",
    label: "Trees planted",
  },
  {
    number: "02",
    value: "98%",
    label: "Projects verified",
  },
  {
    number: "03",
    value: "42",
    label: "Active locations",
  },
  {
    number: "04",
    value: "24/7",
    label: "Impact tracking",
  },
];

const verificationSteps = [
  {
    icon: MapPin,
    title: "Project Location",
    text: "Every project is linked to a real planting location so contributors can understand where their impact happens.",
  },
  {
    icon: TreePine,
    title: "Planting Verification",
    text: "Project activity is documented through planting records, progress updates, and supporting evidence.",
  },
  {
    icon: BarChart3,
    title: "Impact Measurement",
    text: "Environmental progress is organized into clear impact information that is easier to understand and follow.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reports",
    text: "Verified project updates are presented through detailed reports designed for individuals and organizations.",
  },
];

export default function VerifiedProjects() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#eef0ed] text-black">
      {/* Ambient background */}
      <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-[#dce9df] blur-3xl" />
      <div className="pointer-events-none fixed -right-40 bottom-20 h-96 w-96 rounded-full bg-[#dce9df] blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-360 px-3 py-4 sm:px-5 sm:py-6 lg:px-8">
        {/* NAVBAR */}
        <header className="mx-auto flex h-14 max-w-330 items-center justify-between rounded-[20px] bg-white px-4 shadow-sm sm:h-16 sm:px-6">
          <Link
            to="/"
            className="group flex items-center gap-2 text-xs font-medium"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:-translate-x-1 group-hover:bg-black group-hover:text-white">
              <ArrowLeft size={14} />
            </span>

            <span className="hidden sm:block">Back to Greeny</span>
          </Link>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 text-lg font-medium tracking-tighter"
          >
            Greeny
          </Link>

          <Link
            to="/"
            className="text-xs text-black/45 transition-colors hover:text-black"
          >
            Home
          </Link>
        </header>

        {/* Hero */}
        <section className="mx-auto mt-3 max-w-330 overflow-hidden rounded-3xl bg-white p-3 sm:mt-5 sm:p-4">
          <div
            className="relative flex min-h-140 items-end overflow-hidden rounded-[20px] bg-cover bg-center px-6 py-8 sm:min-h-162.5 sm:px-10 sm:py-10 md:min-h-180 lg:min-h-190"
            style={{
              backgroundImage: `url("${greenCities}")`,
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

            <div className="relative z-10 max-w-225 text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] uppercase tracking-wider backdrop-blur-md">
                <CircleCheck size={13} />
                Verified Environmental Projects
              </div>

              <h1 className="max-w-225 text-[46px] leading-[0.92] tracking-[-0.065em] sm:text-[64px] md:text-[78px] lg:text-[96px]">
                Verified projects.
                <br />
                Real-world impact.
              </h1>

              <p className="mt-6 max-w-162.5 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Discover how Greeny helps people and organizations understand
                where their contributions go and how environmental projects are
                progressing.
              </p>

              <a
                href="#verification"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1"
              >
                Explore Verification
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto mt-5 grid max-w-330 grid-cols-1 gap-8 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16 lg:p-12">
          <div className="flex items-start">
            <div className="flex items-center gap-2 text-[10px] font-medium uppercase">
              <span className="h-2 w-2 rounded-xs bg-black" />
              Why verification matters
            </div>
          </div>

          <div>
            <h2 className="max-w-237.5 text-[35px] leading-none tracking-[-0.06em] sm:text-[46px] md:text-[58px] lg:text-[68px]">
              Better information creates
              <br className="hidden sm:block" />
              stronger environmental action.
            </h2>

            <p className="mt-7 max-w-200 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
              Greeny is designed to make environmental projects easier to
              understand. Instead of simply contributing and moving on, people
              can follow project information, locations, progress, and reported
              impact in one place.
            </p>
          </div>
        </section>

        {/* METRICS */}
        <section className="mx-auto mt-5 max-w-330 rounded-3xl bg-[#151615] p-6 text-white sm:mt-7 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.number} className="bg-[#151615] p-6 sm:p-8">
                <span className="text-[10px] text-white/30">
                  {metric.number}
                </span>

                <p className="mt-8 text-[36px] tracking-[-0.06em] sm:text-[48px]">
                  {metric.value}
                </p>

                <p className="mt-2 text-xs text-white/40 sm:text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/*  VERIFICATION PROCESS */}
        <section
          id="verification"
          className="mx-auto mt-5 max-w-330 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase">
                <span className="h-2 w-2 rounded-xs bg-black" />
                Our approach
              </div>

              <h2 className="mt-5 max-w-187.5 text-[38px] leading-[0.95] tracking-[-0.06em] sm:text-[52px] md:text-[64px]">
                How project
                <br />
                verification works.
              </h2>
            </div>

            <p className="max-w-87.5 text-sm leading-6 text-black/45">
              We organize important project details into a simple system so
              contributors can follow progress with greater confidence.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {verificationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group rounded-[22px] border border-black/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-[#f5f6f3] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                      <Icon size={18} />
                    </div>

                    <span className="text-[10px] text-black/25">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-[24px] leading-none tracking-[-0.045em]">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-xs leading-5 text-black/45">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* FEATURE IMAGE + CONTENT */}
        <section className="mx-auto mt-5 grid max-w-330 grid-cols-1 overflow-hidden rounded-3xl bg-white sm:mt-7 lg:grid-cols-2">
          <div className="min-h-100 bg-[#eef0ec] sm:min-h-130 lg:min-h-170">
            <img
              src={empoweringLocalComminuties}
              alt="Community planting project"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-10 md:p-12 lg:p-14">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase">
                <span className="h-2 w-2 rounded-xs bg-black" />
                Inside the report
              </div>

              <h2 className="mt-6 text-[36px] leading-[0.96] tracking-[-0.06em] sm:text-[48px] md:text-[58px]">
                See the details
                <br />
                behind every project.
              </h2>

              <p className="mt-7 max-w-137.5 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
                Project reporting can include planting information, location
                details, progress updates, environmental measurements, and
                supporting project documentation.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Project location",
                  "Planting progress",
                  "Environmental impact",
                  "Project updates",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <Check size={13} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/"
              className="group mt-10 inline-flex w-fit items-center gap-2 rounded-xl border border-black/15 px-4 py-3 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Explore More Projects
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>

        {/*   BENEFITS */}
        <section className="mx-auto mt-5 max-w-330 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase">
                <span className="h-2 w-2 rounded-xs bg-black" />
                Built for trust
              </div>

              <h2 className="mt-6 text-[38px] leading-[0.95] tracking-[-0.06em] sm:text-[50px] md:text-[60px]">
                Information you
                <br />
                can actually follow.
              </h2>
            </div>

            <div className="divide-y divide-black/10">
              {[
                [
                  "Clear project information",
                  "Important details are organized so contributors can quickly understand the project.",
                ],
                [
                  "Progress visibility",
                  "Project updates help users stay informed about how initiatives are developing.",
                ],
                [
                  "Impact reporting",
                  "Environmental results can be communicated in a more accessible and understandable format.",
                ],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="flex gap-6 py-7 first:pt-0 last:pb-0"
                >
                  <span className="text-xs text-black/25">0{index + 1}</span>

                  <div>
                    <h3 className="text-[22px] tracking-[-0.04em] sm:text-[26px]">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-137.5 text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-5 max-w-330 overflow-hidden rounded-3xl bg-[#151615] p-7 text-white sm:mt-7 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-212.5">
            <div className="flex items-center gap-2 text-[10px] uppercase text-white/40">
              <Leaf size={13} />
              Start making an impact
            </div>

            <h2 className="mt-6 text-[40px] leading-[0.94] tracking-[-0.06em] sm:text-[55px] md:text-[70px]">
              Choose a project.
              <br />
              Start something greener.
            </h2>

            <p className="mt-6 max-w-150 text-sm leading-6 text-white/45 sm:text-base">
              Explore verified environmental initiatives and discover projects
              where your contribution can help create meaningful change.
            </p>

            <Link
              to="/"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1"
            >
              Explore Projects
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-16 overflow-hidden">
            <p className="select-none text-[100px] font-medium leading-none tracking-[-0.09em] text-white/[0.07] sm:text-[170px] md:text-[230px] lg:text-[300px]">
              Greeny
            </p>
          </div>
        </section>

        {/* Bottom */}
        <div className="mx-auto flex max-w-330 items-center justify-between px-2 py-6 text-[10px] text-black/35">
          <span>© 2026 Greeny</span>

          <Link to="/" className="transition-colors hover:text-black">
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
