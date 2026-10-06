import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  FileText,
  Leaf,
  MessagesSquare,
  TreePine,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import empoweringLocalComminuties from "../assets/empowering-local-communities.png";

const features = [
  {
    icon: Users,
    number: "01",
    title: "Team Management",
    description:
      "Bring everyone into one workspace. Create teams, assign responsibilities, and keep environmental projects organized from a single place.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Project Coordination",
    description:
      "Coordinate planting activities, milestones, tasks, and project updates without relying on disconnected tools or spreadsheets.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Impact Tracking",
    description:
      "Monitor project progress and environmental outcomes with clear metrics that make your team's contribution easier to understand.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Real-Time Reporting",
    description:
      "Turn project activity into clear reports that can be shared with teams, partners, leadership, and other stakeholders.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Create your organization",
    text: "Set up a shared workspace for your team and define the projects you want to manage.",
  },
  {
    number: "02",
    title: "Invite your team",
    text: "Bring project managers, contributors, and partners into the same collaborative environment.",
  },
  {
    number: "03",
    title: "Coordinate projects",
    text: "Keep tasks, updates, milestones, and responsibilities organized as work progresses.",
  },
  {
    number: "04",
    title: "Measure & report",
    text: "Review project performance and turn progress into useful environmental reports.",
  },
];

export default function CollaborationTools() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eef0ed] text-black">
      {/* Background glow */}
      <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-[#d9e7dc] blur-3xl" />
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

          <Link to="/" className="text-lg font-medium tracking-tighter">
            Greeny
          </Link>

          <span className="text-xs text-black/35">Collaboration</span>
        </header>

        {/* HERO */}
        <section className="mx-auto mt-3 max-w-330 overflow-hidden rounded-3xl bg-white p-3 sm:mt-5 sm:p-4">
          <div
            className="group relative min-h-140 overflow-hidden rounded-[20px] bg-cover bg-center px-6 py-8 sm:min-h-155 sm:px-10 sm:py-10 md:min-h-170 lg:min-h-180 lg:px-14"
            style={{
              backgroundImage: `url("${empoweringLocalComminuties}")`,
            }}
          >
            {/* Image overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/5" />

            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-emerald-300/15 blur-3xl" />

            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-green-900/20 blur-3xl" />

            {/* =================================================
                TREE ANIMATION
            ================================================== */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] overflow-hidden">
              {/* Far trees */}
              <div className="absolute -bottom-3.75 left-[2%] text-white/15 animate-[treeFloat_6s_ease-in-out_infinite]">
                <TreePine size={105} strokeWidth={1.1} />
              </div>

              <div className="absolute -bottom-4.5 left-[14%] text-white/20 animate-[treeFloat_5s_ease-in-out_infinite_500ms]">
                <TreePine size={80} strokeWidth={1.1} />
              </div>

              <div className="absolute -bottom-4.5 left-[24%] text-white/10 animate-[treeFloat_6.5s_ease-in-out_infinite_200ms]">
                <TreePine size={95} strokeWidth={1.1} />
              </div>

              <div className="absolute -bottom-4.5 right-[23%] text-white/10 animate-[treeFloat_5.5s_ease-in-out_infinite_300ms]">
                <TreePine size={90} strokeWidth={1.1} />
              </div>

              <div className="absolute -bottom-4.5 right-[12%] text-white/20 animate-[treeFloat_6s_ease-in-out_infinite_700ms]">
                <TreePine size={110} strokeWidth={1.1} />
              </div>

              <div className="absolute -bottom-5 right-[2%] text-white/15 animate-[treeFloat_5.5s_ease-in-out_infinite_400ms]">
                <TreePine size={125} strokeWidth={1.1} />
              </div>

              {/* Main foreground trees */}
              <div className="absolute -bottom-5 left-[5%] text-white/25 animate-[treeSway_4.5s_ease-in-out_infinite]">
                <TreePine size={145} strokeWidth={1} />
              </div>

              <div className="absolute -bottom-6.25 left-[32%] text-white/20 animate-[treeSway_5s_ease-in-out_infinite_300ms]">
                <TreePine size={125} strokeWidth={1} />
              </div>

              <div className="absolute -bottom-5.5 right-[31%] text-white/20 animate-[treeSway_4.7s_ease-in-out_infinite_600ms]">
                <TreePine size={135} strokeWidth={1} />
              </div>

              <div className="absolute -bottom-7.5 right-[6%] text-white/25 animate-[treeSway_4.2s_ease-in-out_infinite_200ms]">
                <TreePine size={160} strokeWidth={1} />
              </div>
            </div>

            {/* =================================================
                HERO CONTENT
            ================================================== */}

            <div className="relative z-20 flex min-h-125 items-end sm:min-h-140">
              <div className="max-w-175 text-white">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-xl sm:text-[10px]">
                  <Users size={13} />
                  For Organizations
                </div>

                {/* Heading */}
                <h1 className="mt-6 max-w-190 text-[42px] leading-[0.94] tracking-[-0.07em] sm:text-[55px] md:text-[68px] lg:text-[78px]">
                  Bring your team
                  <br />
                  together for nature.
                </h1>

                {/* Short text */}
                <p className="mt-5 max-w-125 text-[12px] leading-5 text-white/65 sm:text-sm sm:leading-6">
                  Plan projects, connect your team, and track your environmental
                  impact in one shared workspace.
                </p>

                {/* Buttons */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#features"
                    className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore Tools
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-xs text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Back to Greeny
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute right-5 top-5 z-20 hidden rounded-2xl border border-white/15 bg-black/15 p-4 text-white backdrop-blur-xl sm:block">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/40">
                <Leaf size={12} />
                Greener together
              </div>

              <p className="mt-2 text-lg tracking-[-0.04em]">
                One connected team.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto mt-7 w-full max-w-330 overflow-hidden rounded-3xl bg-[#dce8dd] px-6 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-12 lg:py-20">
          {/* Animation styles */}
          <style>{`
    @keyframes treeFloat {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-8px) rotate(1deg);
      }
    }

    @keyframes treeSway {
      0%, 100% {
        transform: translateX(0) rotate(0deg);
      }
      50% {
        transform: translateX(5px) rotate(1deg);
      }
    }
  `}</style>

          {/* Animated trees */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 overflow-hidden">
            <div
              className="absolute -bottom-2.5 left-[3%] text-black/10"
              style={{
                animation: "treeFloat 6s ease-in-out infinite",
              }}
            >
              <TreePine size={110} strokeWidth={1} />
            </div>

            <div
              className="absolute -bottom-1.25 left-[18%] text-black/10"
              style={{
                animation: "treeSway 5s ease-in-out infinite",
              }}
            >
              <TreePine size={80} strokeWidth={1} />
            </div>

            <div
              className="absolute -bottom-3.75 left-[34%] text-black/10"
              style={{
                animation: "treeFloat 5.5s ease-in-out infinite 0.4s",
              }}
            >
              <TreePine size={125} strokeWidth={1} />
            </div>

            <div
              className="absolute -bottom-2 right-[30%] text-black/10"
              style={{
                animation: "treeSway 6s ease-in-out infinite 0.3s",
              }}
            >
              <TreePine size={95} strokeWidth={1} />
            </div>

            <div
              className="absolute -bottom-3 right-[15%] text-black/10"
              style={{
                animation: "treeFloat 5s ease-in-out infinite 0.6s",
              }}
            >
              <TreePine size={115} strokeWidth={1} />
            </div>

            <div
              className="absolute -bottom-4.5 right-[2%] text-black/10"
              style={{
                animation: "treeSway 5.5s ease-in-out infinite",
              }}
            >
              <TreePine size={140} strokeWidth={1} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-162.5">
            <p className="text-[10px] font-medium uppercase tracking-wider text-black/50">
              Tree Plantation
            </p>

            <h2 className="mt-5 text-[42px] leading-[0.95] tracking-[-0.06em] sm:text-[55px] md:text-[68px]">
              Give nature
              <br />
              room to grow.
            </h2>

            <p className="mt-6 max-w-130 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
              Every tree starts with a simple action. Support verified planting
              projects, restore natural ecosystems, and help communities create
              a healthier future.
            </p>

            <button className="mt-7 rounded-xl bg-black px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1">
              Start Planting →
            </button>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto mt-5 grid max-w-330 grid-cols-1 gap-8 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16 lg:p-12">
          <div className="flex items-start">
            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide">
              <span className="h-2 w-2 rounded-xs bg-black" />
              Built for teams
            </div>
          </div>

          <div>
            <h2 className="max-w-237.5 text-[35px] leading-[0.98] tracking-[-0.06em] sm:text-[48px] md:text-[60px] lg:text-[70px]">
              One workspace for
              <br className="hidden sm:block" />
              greener collaboration.
            </h2>

            <p className="mt-7 max-w-205 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
              Environmental work often involves many people, moving parts, and
              deadlines. Collaboration Tools gives organizations a clearer way
              to bring those pieces together and keep everyone moving toward the
              same environmental goals.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="mx-auto mt-5 max-w-330 rounded-3xl bg-[#151615] p-6 text-white sm:mt-7 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
            <div className="bg-[#151615] p-6 sm:p-8">
              <span className="text-[10px] text-white/25">01</span>

              <p className="mt-7 text-[34px] tracking-[-0.06em] sm:text-[46px]">
                Teams
              </p>

              <p className="mt-2 text-xs text-white/35">In one workspace</p>
            </div>

            <div className="bg-[#151615] p-6 sm:p-8">
              <span className="text-[10px] text-white/25">02</span>

              <p className="mt-7 text-[34px] tracking-[-0.06em] sm:text-[46px]">
                Live
              </p>

              <p className="mt-2 text-xs text-white/35">Project updates</p>
            </div>

            <div className="bg-[#151615] p-6 sm:p-8">
              <span className="text-[10px] text-white/25">03</span>

              <p className="mt-7 text-[34px] tracking-[-0.06em] sm:text-[46px]">
                Clear
              </p>

              <p className="mt-2 text-xs text-white/35">Impact reporting</p>
            </div>

            <div className="bg-[#151615] p-6 sm:p-8">
              <span className="text-[10px] text-white/25">04</span>

              <p className="mt-7 text-[34px] tracking-[-0.06em] sm:text-[46px]">
                One
              </p>

              <p className="mt-2 text-xs text-white/35">Connected workflow</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="mx-auto mt-5 max-w-330 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide">
                <span className="h-2 w-2 rounded-xs bg-black" />
                Everything connected
              </div>

              <h2 className="mt-5 max-w-187.5 text-[39px] leading-[0.95] tracking-[-0.06em] sm:text-[52px] md:text-[65px]">
                Tools designed
                <br />
                for action.
              </h2>
            </div>

            <p className="max-w-95 text-sm leading-6 text-black/40">
              Everything your organization needs to manage environmental
              initiatives without adding unnecessary complexity.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group rounded-3xl border border-black/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-[#f5f6f3] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                      <Icon size={19} />
                    </div>

                    <span className="text-[10px] text-black/25">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-[28px] leading-none tracking-tighter sm:text-[34px]">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-140 text-sm leading-6 text-black/45">
                    {feature.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-medium">
                    Learn more
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/*  FEATURE IMAGE */}
        <section className="mx-auto mt-5 grid max-w-330 grid-cols-1 overflow-hidden rounded-3xl bg-white sm:mt-7 lg:grid-cols-2">
          <div className="min-h-105 overflow-hidden bg-[#e8eee9] sm:min-h-140 lg:min-h-175">
            <img
              src={empoweringLocalComminuties}
              alt="Environmental collaboration project"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-10 md:p-12 lg:p-14">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide">
                <span className="h-2 w-2 rounded-xs bg-black" />
                Collaboration in practice
              </div>

              <h2 className="mt-6 text-[36px] leading-[0.96] tracking-[-0.06em] sm:text-[48px] md:text-[58px]">
                From planning
                <br />
                to measurable impact.
              </h2>

              <p className="mt-7 max-w-140 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
                Create a project, bring your team together, coordinate the work,
                and keep progress visible. Collaboration becomes part of the
                environmental workflow instead of an extra layer on top of it.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Shared project workspace",
                  "Clear team responsibilities",
                  "Progress and impact visibility",
                  "Simple environmental reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Check size={13} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#workflow"
              className="group mt-10 inline-flex w-fit items-center gap-2 rounded-xl border border-black/15 px-4 py-3 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              See the workflow
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </section>

        {/* WORKFLOW */}
        <section
          id="workflow"
          className="mx-auto mt-5 max-w-330 rounded-3xl bg-white p-6 sm:mt-7 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide">
                <span className="h-2 w-2 rounded-xs bg-black" />
                Simple workflow
              </div>

              <h2 className="mt-6 text-[39px] leading-[0.95] tracking-[-0.06em] sm:text-[51px] md:text-[63px]">
                Collaboration
                <br />
                without friction.
              </h2>

              <p className="mt-6 max-w-112.5 text-sm leading-6 text-black/45 sm:text-base sm:leading-7">
                Keep your team's environmental work moving through a simple
                four-step process.
              </p>
            </div>

            <div className="divide-y divide-black/10">
              {workflow.map((item) => (
                <div
                  key={item.number}
                  className="group grid grid-cols-[50px_1fr] gap-5 py-7 first:pt-0 last:pb-0 sm:grid-cols-[60px_1fr] sm:gap-6"
                >
                  <span className="text-xs text-black/25">{item.number}</span>

                  <div>
                    <h3 className="text-[24px] tracking-[-0.04em] sm:text-[29px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-140 text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  COMMUNICATION */}
        <section className="mx-auto mt-5 grid max-w-330 gap-5 sm:mt-7 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 sm:p-8 md:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
              <MessagesSquare size={18} />
            </div>

            <h3 className="mt-7 text-[29px] leading-none tracking-tighter sm:text-[36px]">
              Keep conversations
              <br />
              close to the work.
            </h3>

            <p className="mt-5 max-w-125 text-sm leading-6 text-black/45">
              Give teams a shared place to communicate around projects, updates,
              decisions, and environmental milestones.
            </p>
          </article>

          <article className="rounded-3xl bg-[#dce8dd] p-6 sm:p-8 md:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
              <CheckCircle2 size={18} />
            </div>

            <h3 className="mt-7 text-[29px] leading-none tracking-tighter sm:text-[36px]">
              Make progress
              <br />
              easier to see.
            </h3>

            <p className="mt-5 max-w-125 text-sm leading-6 text-black/50">
              A shared view of project activity helps everyone understand what
              has been completed, what's next, and where attention is needed.
            </p>
          </article>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-5 max-w-330 overflow-hidden rounded-3xl bg-[#151615] p-7 text-white sm:mt-7 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-212.5">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wide text-white/35">
              <Leaf size={13} />
              Build together
            </div>

            <h2 className="mt-6 text-[42px] leading-[0.93] tracking-[-0.065em] sm:text-[57px] md:text-[72px]">
              Give your team
              <br />a greener workflow.
            </h2>

            <p className="mt-6 max-w-155 text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
              Bring your organization's people, projects, communication, and
              environmental impact into one connected experience.
            </p>

            <Link
              to="/"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1"
            >
              Back to Greeny
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-16 overflow-hidden">
            <p className="select-none text-[105px] font-medium leading-none tracking-[-0.09em] text-white/[0.07] sm:text-[170px] md:text-[230px] lg:text-[300px]">
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
