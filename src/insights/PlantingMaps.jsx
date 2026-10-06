import {
  ArrowLeft,
  ArrowUpRight,
  LocateFixed,
  MapPin,
  Plus,
  Minus,
  Trees,
  Globe2,
  Activity,
  Leaf,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const locations = [
  {
    id: 1,
    name: "Green Valley",
    country: "Costa Rica",
    trees: "18,420",
    progress: 86,
    x: "24%",
    y: "57%",
  },
  {
    id: 2,
    name: "River Forest",
    country: "Brazil",
    trees: "32,680",
    progress: 72,
    x: "39%",
    y: "63%",
  },
  {
    id: 3,
    name: "Urban Roots",
    country: "Singapore",
    trees: "9,240",
    progress: 94,
    x: "73%",
    y: "51%",
  },
  {
    id: 4,
    name: "Mountain Restore",
    country: "Nepal",
    trees: "14,860",
    progress: 61,
    x: "69%",
    y: "30%",
  },
  {
    id: 5,
    name: "Coastal Forest",
    country: "Portugal",
    trees: "11,540",
    progress: 78,
    x: "48%",
    y: "26%",
  },
];

const stats = [
  {
    value: "86",
    suffix: "K+",
    label: "Trees on the map",
  },
  {
    value: "42",
    suffix: "",
    label: "Active projects",
  },
  {
    value: "18",
    suffix: "",
    label: "Countries",
  },
  {
    value: "24/7",
    suffix: "",
    label: "Project visibility",
  },
];

export default function PlantingMaps() {
  const [selectedId, setSelectedId] = useState(1);
  const [zoom, setZoom] = useState(1);

  const selectedLocation = locations.find(
    (location) => location.id === selectedId,
  );

  const zoomIn = () => {
    setZoom((value) => Math.min(value + 0.15, 1.6));
  };

  const zoomOut = () => {
    setZoom((value) => Math.max(value - 0.15, 0.8));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eef0ed] text-black">
      <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-[#d8e8dc] blur-3xl" />
      <div className="pointer-events-none fixed -right-40 bottom-10 h-96 w-96 rounded-full bg-[#dce8df] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-360 px-3 py-4 sm:px-5 sm:py-6 lg:px-8">
        {/* TOP NAV */}
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

          <div className="text-xs text-black/35">Planting Maps</div>
        </header>

        {/* HERO */}
        <section className="mx-auto mt-3 max-w-330 overflow-hidden rounded-3xl bg-white p-3 sm:mt-5 sm:p-4">
          <div className="relative min-h-150 overflow-hidden rounded-[20px] bg-[#102117] p-6 text-white sm:p-10 md:min-h-170 lg:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(105,164,120,.25),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(64,112,78,.18),transparent_30%)]" />

            <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-8 top-32 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative z-10 max-w-220">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-md">
                <Globe2 size={13} />
                Interactive planting map
              </div>

              <h1 className="mt-7 max-w-225 text-[46px] leading-[0.93] tracking-[-0.07em] sm:text-[64px] md:text-[78px] lg:text-[92px]">
                See where your
                <br />
                impact is growing.
              </h1>

              <p className="mt-6 max-w-155 text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                Explore planting projects across the world and follow their
                progress through a clear, visual map built around transparency.
              </p>
            </div>

            {/* FLOATING MINI STATS */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 sm:bottom-10 sm:left-10 sm:right-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5"
                >
                  <div className="text-[28px] tracking-tighter sm:text-[35px]">
                    {stat.value}
                    <span className="text-white/35">{stat.suffix}</span>
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/35">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="mx-auto mt-5 max-w-330 rounded-3xl bg-white p-5 sm:mt-7 sm:p-7 md:p-10 lg:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider">
                <span className="h-2 w-2 rounded-xs bg-black" />
                Explore projects
              </div>

              <h2 className="mt-5 text-[38px] leading-[0.95] tracking-[-0.06em] sm:text-[50px] md:text-[62px]">
                One map.
                <br />
                Every project.
              </h2>
            </div>

            <p className="max-w-85 text-xs leading-5 text-black/40 sm:text-sm sm:leading-6">
              Select any location to preview project details, planting progress,
              and the number of trees connected to the initiative.
            </p>
          </div>

          {/* MAP + SIDEBAR */}
          <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_330px]">
            {/* MAP */}
            <div className="relative min-h-140 overflow-hidden rounded-[26px] border border-black/10 bg-[#dfe7df]">
              {/* Map background */}
              <div
                className="absolute inset-0 transition-transform duration-700"
                style={{ transform: `scale(${zoom})` }}
              >
                {/* Grid */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.05)_1px,transparent_1px)] bg-size-[42px_42px]" />

                {/* Land shapes */}
                <div className="absolute left-[8%] top-[14%] h-[25%] w-[26%] rotate-14 rounded-[48%_52%_58%_42%/44%_45%_55%_56%] bg-[#c7d6c7]" />
                <div className="absolute left-[28%] top-[40%] h-[34%] w-[18%] rotate-22 rounded-[50%_50%_42%_58%/45%_60%_40%_55%] bg-[#c3d2c3]" />
                <div className="absolute left-[44%] top-[8%] h-[27%] w-[30%] rotate-[-8deg] rounded-[60%_40%_52%_48%/48%_56%_44%_52%] bg-[#cbd9cb]" />
                <div className="absolute right-[5%] top-[28%] h-[33%] w-[23%] rotate-18 rounded-[46%_54%_48%_52%/55%_45%_55%_45%] bg-[#c5d4c5]" />
                <div className="absolute right-[12%] bottom-[8%] h-[25%] w-[31%] -rotate-12 rounded-[58%_42%_46%_54%/44%_56%_44%_56%] bg-[#cbd9cb]" />

                {/* Water */}
                <div className="absolute left-[-8%] top-[34%] h-[17%] w-[118%] -rotate-6 rounded-[50%] bg-[#b8d3d1]/70" />
                <div className="absolute left-[-10%] top-[70%] h-[11%] w-[120%] rotate-[8deg] rounded-[50%] bg-[#b8d3d1]/50" />

                {/* Location markers */}
                {locations.map((location) => {
                  const active = selectedId === location.id;

                  return (
                    <button
                      key={location.id}
                      type="button"
                      onClick={() => setSelectedId(location.id)}
                      className="absolute transition-all duration-300"
                      style={{
                        left: location.x,
                        top: location.y,
                      }}
                      aria-label={location.name}
                    >
                      <span
                        className={`relative block ${active ? "scale-125" : "scale-100"}`}
                      >
                        {active && (
                          <span className="absolute -inset-2 animate-ping rounded-full bg-[#153b22]/20" />
                        )}

                        <span
                          className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white shadow-lg ${active ? "bg-[#163d25] text-white" : "bg-white text-black"}`}
                        >
                          <Leaf size={14} />
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Map controls */}
              <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white/80 shadow-lg backdrop-blur-xl">
                <button
                  type="button"
                  onClick={zoomIn}
                  className="flex h-10 w-10 items-center justify-center border-b border-black/10 transition-colors hover:bg-black hover:text-white"
                >
                  <Plus size={15} />
                </button>

                <button
                  type="button"
                  onClick={zoomOut}
                  className="flex h-10 w-10 items-center justify-center border-b border-black/10 transition-colors hover:bg-black hover:text-white"
                >
                  <Minus size={15} />
                </button>

                <button
                  type="button"
                  onClick={resetZoom}
                  className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-black hover:text-white"
                >
                  <LocateFixed size={14} />
                </button>
              </div>

              {/* Map label */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-[10px] text-black/50 shadow-sm backdrop-blur-xl">
                Live project view
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="rounded-[26px] bg-[#f5f6f3] p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-black/35">
                    Selected project
                  </p>

                  <h3 className="mt-2 text-[25px] tracking-[-0.045em]">
                    {selectedLocation.name}
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                  <MapPin size={16} />
                </div>
              </div>

              <p className="mt-2 text-xs text-black/40">
                {selectedLocation.country}
              </p>

              <div className="mt-7 rounded-2xl bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black/40">
                    Planting progress
                  </span>
                  <span className="text-sm font-medium">
                    {selectedLocation.progress}%
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                  <div
                    className="h-full rounded-full bg-black transition-all duration-700"
                    style={{
                      width: `${selectedLocation.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4">
                  <Trees size={16} className="text-black/40" />
                  <p className="mt-4 text-2xl tracking-tighter">
                    {selectedLocation.trees}
                  </p>
                  <p className="mt-1 text-[10px] text-black/35">
                    Trees planted
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <Activity size={16} className="text-black/40" />
                  <p className="mt-4 text-2xl tracking-tighter">Active</p>
                  <p className="mt-1 text-[10px] text-black/35">
                    Project status
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setSelectedId(location.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-all duration-300 ${selectedId === location.id ? "bg-black text-white" : "bg-white hover:bg-black/4"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${selectedId === location.id ? "bg-white/10" : "bg-[#eef0ed]"}`}
                      >
                        <Leaf size={12} />
                      </span>

                      <div>
                        <p className="text-xs font-medium">{location.name}</p>
                        <p
                          className={
                            selectedId === location.id
                              ? "text-[9px] text-white/40"
                              : "text-[9px] text-black/35"
                          }
                        >
                          {location.country}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight size={13} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="mx-auto mt-5 grid max-w-330 grid-cols-1 gap-5 sm:mt-7 md:grid-cols-3">
          <article className="rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
              <MapPin size={18} />
            </div>

            <h3 className="mt-7 text-[28px] leading-none tracking-tighter">
              Precise project locations
            </h3>

            <p className="mt-4 text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
              Quickly understand where environmental projects are located and
              how they connect to local communities.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
              <Trees size={18} />
            </div>

            <h3 className="mt-7 text-[28px] leading-none tracking-tighter">
              Track planting progress
            </h3>

            <p className="mt-4 text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
              Follow project milestones and get a clearer picture of how
              planting efforts are progressing over time.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
              <Leaf size={18} />
            </div>

            <h3 className="mt-7 text-[28px] leading-none tracking-tighter">
              Make your impact visible
            </h3>

            <p className="mt-4 text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
              Turn an abstract contribution into something tangible by
              connecting it to projects, places, and progress.
            </p>
          </article>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-5 max-w-330 overflow-hidden rounded-3xl bg-[#151615] p-7 text-white sm:mt-7 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-200">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/35">
              <Leaf size={13} />
              Explore Greeny
            </div>

            <h2 className="mt-6 text-[40px] leading-[0.94] tracking-[-0.06em] sm:text-[55px] md:text-[70px]">
              Every contribution
              <br />
              has a place.
            </h2>

            <p className="mt-6 max-w-140 text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
              Explore projects, discover new planting locations, and keep
              following the progress of greener communities.
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
            <p className="select-none text-[100px] font-medium leading-none tracking-[-0.09em] text-white/[0.07] sm:text-[170px] md:text-[230px] lg:text-[300px]">
              Greeny
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
