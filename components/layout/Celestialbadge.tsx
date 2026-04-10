// components/CelestialBadge.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Drop-in "Developed by Celestial Web Solutions" badge — mirrors the
// Shopify-style pill used on reactrouter.com. Place this component anywhere
// in a page footer; it links to https://www.celestialwebsolutions.net
// ─────────────────────────────────────────────────────────────────────────────

export default function CelestialBadge() {
  return (
    <a
      href="https://www.celestialwebsolutions.net"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Website developed by Celestial Web Solutions"
      className="
        group inline-flex flex-col items-center gap-1.5
        bg-[#F8F7F4] dark:bg-[#0D0B09] hover:bg-[#F1EDE7] dark:hover:bg-[#1A1612]
        border border-[#E7E2DC] dark:border-[#2A2420] hover:border-[#E87C1E]/40
        rounded-xl px-5 py-3
        transition-all duration-300
        shadow-lg shadow-black/10 dark:shadow-black/40 hover:shadow-[#E87C1E]/10
        no-underline
      "
    >
      {/* "Developed by" label */}
      <span
        className="
          font-jost text-[10px] tracking-[0.2em] uppercase
          text-[#A89B8A] dark:text-[#6B5E54] group-hover:text-[#9C8070]
          transition-colors duration-300
          italic
        "
      >
        Developed by
      </span>

      {/* Logo + wordmark row */}
      <span className="flex items-center gap-2.5">
        {/* Logo image — placed in /public/images/celestial-logo.png */}
        <img
          src="/images/logo.png"
          alt="Celestial Web Solutions logo"
          width={28}
          height={28}
          className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Wordmark */}
        <span className="flex flex-col leading-none">
          <span
            className="
              font-jost font-bold text-[13px] tracking-[0.12em] uppercase
              text-[#2A2420] dark:text-[#C4C4C4] group-hover:text-black dark:group-hover:text-white
              transition-colors duration-300
            "
          >
            Celestial
          </span>
          <span
            className="
              font-jost font-normal text-[9px] tracking-[0.18em] uppercase
              text-[#E87C1E] dark:text-[#E87C1E]/80 group-hover:text-[#E87C1E]
              transition-colors duration-300
            "
          >
            Web Solutions
          </span>
        </span>
      </span>
    </a>
  );
}