export default function SectionLabel({ children, center = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-[9px] font-medium uppercase tracking-wide sm:text-[10px] ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-2 w-2 rounded-xs bg-black" />
      {children}
    </div>
  );
}
