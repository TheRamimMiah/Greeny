import { Menu, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Recognition", "#recognition"],
  ["Why Us", "#why-us"],
  ["Stories", "#stories"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const total = document.documentElement.scrollHeight - window.innerHeight;

      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-100 h-0.5 bg-black transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`sticky top-3 z-50 mx-auto flex h-14 w-full max-w-330 items-center justify-between rounded-[20px] px-4 transition-all duration-500 sm:h-16 sm:px-6 lg:px-8 ${
          scrolled
            ? "bg-white/85 shadow-[0_10px_35px_rgba(0,0,0,.06)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 text-[11px] sm:text-xs"
        >
          <Menu
            size={17}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="hidden sm:block">Menu</span>
        </button>

        <a href="#home" className="absolute left-1/2 -translate-x-1/2">
          <div className="flex h-8 w-8 items-center justify-center text-[25px]">
            ◒
          </div>
        </a>

        <a
          href="#footer"
          className="flex items-center gap-2 text-[11px] sm:text-xs"
        >
          <UserRound size={15} strokeWidth={1.7} />
          Login
        </a>
      </header>

      <div
        className={`fixed inset-0 z-90 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-95 h-full w-[86%] max-w-107.5 bg-white p-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:p-8 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="text-lg font-semibold"
          >
            Greeny
          </a>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-14 flex flex-col">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-black/10 py-5 text-[26px] tracking-tighter transition-opacity hover:opacity-50"
            >
              <span>{label}</span>
              <span className="text-xs text-black/30">0{index + 1}</span>
            </a>
          ))}
        </nav>

        <a
          href="#footer"
          onClick={() => setOpen(false)}
          className="mt-10 flex w-fit items-center gap-2 rounded-xl bg-black px-4 py-3 text-xs text-white"
        >
          <UserRound size={14} />
          Login
        </a>
      </aside>
    </>
  );
}
