import { ArrowUp, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 2500);
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
      <footer
        id="footer"
        className="relative mx-auto mt-5 w-full max-w-330 overflow-hidden rounded-3xl bg-[#151615] px-6 py-12 text-white sm:mt-7 sm:px-10 sm:py-16 md:px-14 lg:px-16 lg:py-20"
      >
        <div className="relative z-10">
          <p className="text-center text-xs text-white/40">
            {submitted ? "You're subscribed!" : "Get notification for updates"}
          </p>

          <form
            onSubmit={submit}
            className="mx-auto mt-4 flex max-w-115 items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs outline-none placeholder:text-white/30"
            />

            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-4 py-3 text-[10px] font-medium text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Subscribe
              <Send size={11} />
            </button>
          </form>

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <a
              href="mailto:support@greeny.com"
              className="group flex items-center gap-2 text-[28px] tracking-tighter text-white/90 transition-colors hover:text-white sm:text-[42px] md:text-[52px]"
            >
              support@greeny.com
              <Mail
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+18001234567"
              className="group flex items-center gap-2 text-[21px] text-white/70 transition-colors hover:text-white sm:text-[29px]"
            >
              +1 800 123 4567
              <Phone
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

          <p className="select-none text-center text-[110px] font-medium leading-none tracking-[-0.09em] text-white/10 sm:text-[170px] md:text-[230px] lg:text-[300px]">
            Greeny
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-4 pt-5 text-[10px] text-white/35 sm:flex-row">
          <span>© 2026 Greeny. All rights reserved.</span>

          <button
            type="button"
            onClick={backToTop}
            className="group flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-white/60 transition-all duration-300 hover:bg-white hover:text-black"
          >
            Back To Top
            <ArrowUp
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </footer>
    </Reveal>
  );
}
