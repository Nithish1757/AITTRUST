import { useState } from "react";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  {
    name: "Solutions",
    href: "#solutions",
    children: [
      {
        name: "Threat Intelligence",
        href: "#threat-intelligence",
        description: "Real-time model risk scoring",
      },
      {
        name: "Model Guardrails",
        href: "#guardrails",
        description: "Policy enforcement at inference",
      },
      {
        name: "Data Provenance",
        href: "#provenance",
        description: "Verifiable training lineage",
      },
      {
        name: "Compliance Cloud",
        href: "#compliance",
        description: "SOC 2, HIPAA & EU AI Act",
      },
    ],
  },
  { name: "Technology", href: "#technology" },
  { name: "About", href: "#about" },
  {
    name: "Resources",
    href: "#resources",
    children: [
      {
        name: "Documentation",
        href: "#docs",
        description: "Guides & API reference",
      },
      {
        name: "Research Papers",
        href: "#research",
        description: "Applied alignment science",
      },
      {
        name: "Changelog",
        href: "#changelog",
        description: "Shipped every week",
      },
      {
        name: "Trust Center",
        href: "#trust",
        description: "Security posture, live",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [activePage, setActivePage] = useState("Home");

  const handleNavigate = (name) => {
    setActivePage(name);
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-5">
        <nav
          aria-label="Main navigation"
          className="relative rounded-b-3xl border border-t-0 border-white/10 bg-[#060816]/70 shadow-[0_18px_60px_-20px_rgba(6,8,22,0.9)] ring-1 ring-inset ring-white/[0.04] backdrop-blur-xl transition-colors duration-300"
        >
          {/* top hairline gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
          />
          {/* ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/4 h-32 w-1/2 rounded-full bg-violet-600/10 blur-3xl"
          />

          <div className="relative flex h-[74px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* ------------------------------- LEFT / LOGO ------------------------------- */}
            <a
              href="#home"
              onClick={() => handleNavigate("Home")}
              aria-label="AITTRUST — AI, Security and Trust — home"
              className="group flex shrink-0 items-center gap-3 rounded-2xl px-1.5 py-1.5 outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816]"
            >
              <span className="relative grid h-11 w-11 place-items-center">
                {/* outer rotating gradient ring */}
                <span
                  aria-hidden="true"
                  className="animate-ring-spin absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,#8B5CF6,#3B82F6,#0EA5E9,#8B5CF6)] opacity-80 blur-[1px] transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* inner dark plate */}
                <span
                  aria-hidden="true"
                  className="absolute inset-[1.5px] rounded-[14px] bg-[#080B1C]"
                />
                {/* halo glow */}
                <span
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-3xl bg-violet-500/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <Shield
                  className="relative h-[19px] w-[19px] text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.9)] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                {/* AI network nodes */}
                <span
                  aria-hidden="true"
                  className="animate-pulse-glow absolute right-[5px] top-[6px] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.8)]"
                />
                <span
                  aria-hidden="true"
                  className="animate-pulse-glow absolute bottom-[7px] left-[5px] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_8px_2px_rgba(139,92,246,0.8)] [animation-delay:600ms]"
                />
                <span
                  aria-hidden="true"
                  className="animate-pulse-glow absolute bottom-[6px] right-[7px] h-1 w-1 rounded-full bg-sky-300 shadow-[0_0_8px_2px_rgba(56,189,248,0.75)] [animation-delay:1200ms]"
                />
                {/* connecting hairlines */}
                <span
                  aria-hidden="true"
                  className="absolute right-[8px] top-[10px] h-4 w-px rotate-45 bg-gradient-to-b from-blue-400/70 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-[10px] left-[8px] h-4 w-px -rotate-45 bg-gradient-to-t from-violet-400/70 to-transparent"
                />
              </span>

              <span className="flex flex-col leading-none">
                <span className="text-[17px] font-bold tracking-[0.16em] text-white transition-colors duration-300 group-hover:text-violet-100">
                  AITTRUST
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  AI • Security • Trust
                </span>
              </span>
            </a>

            {/* ----------------------------- CENTER / DESKTOP ---------------------------- */}
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.name;
                const isOpen = openMenu === item.name;

                return (
                  <li
                    key={item.name}
                    className="group relative"
                    onMouseEnter={() => item.children && setOpenMenu(item.name)}
                    onMouseLeave={() => item.children && setOpenMenu(null)}
                  >
                    {item.children ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`menu-${item.name.toLowerCase()}`}
                        aria-haspopup="true"
                        onClick={() => setOpenMenu(isOpen ? null : item.name)}
                        className={`relative flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[14.5px] font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816] ${
                          isActive
                            ? "text-white"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 text-slate-500 transition-all duration-300 group-hover:text-violet-300 ${
                            isOpen ? "rotate-180" : "group-hover:rotate-12"
                          }`}
                          aria-hidden="true"
                        />
                        <Underline active={isActive} />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => handleNavigate(item.name)}
                        className={`relative flex items-center rounded-xl px-4 py-2.5 text-[14.5px] font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816] ${
                          isActive
                            ? "text-white"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {item.name}
                        <Underline active={isActive} />
                      </a>
                    )}

                    {/* Dropdown */}
                    {item.children && (
                      <div
                        id={`menu-${item.name.toLowerCase()}`}
                        role="region"
                        aria-label={`${item.name} menu`}
                        className={`absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-4 transition-all duration-300 ${
                          isOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-2 opacity-0"
                        }`}
                      >
                        <ul className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D22]/90 p-2 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.95)] ring-1 ring-inset ring-white/[0.05] backdrop-blur-xl">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <a
                                href={child.href}
                                onClick={() => handleNavigate(item.name)}
                                className="group/link flex items-start gap-3 rounded-xl px-3.5 py-3 outline-none transition-colors duration-300 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-violet-400/70"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-transform duration-300 group-hover/link:scale-125"
                                />
                                <span className="flex flex-col">
                                  <span className="text-sm font-semibold text-slate-100 transition-colors duration-300 group-hover/link:text-white">
                                    {child.name}
                                  </span>
                                  <span className="mt-0.5 text-xs text-slate-400">
                                    {child.description}
                                  </span>
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* -------------------------------- RIGHT SIDE ------------------------------- */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#signin"
                className="hidden rounded-xl px-4 py-2.5 text-[14.5px] font-medium text-slate-300 outline-none transition-all duration-300 hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816] sm:inline-flex"
              >
                Sign In
              </a>

              <a
                href="#get-started"
                className="animate-gradient-pan hidden rounded-xl bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(139,92,246,0.75)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_18px_40px_-10px_rgba(59,130,246,0.85)] focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816] active:scale-[0.98] sm:inline-flex"
              >
                Get Started
              </a>

              {/* Hamburger */}
              <button
                type="button"
                aria-label={
                  mobileOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-panel"
                onClick={() => setMobileOpen((v) => !v)}
                className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white outline-none transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816] lg:hidden"
              >
                <Menu
                  className={`absolute h-5 w-5 transition-all duration-300 ${
                    mobileOpen
                      ? "rotate-90 scale-50 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                  aria-hidden="true"
                />
                <X
                  className={`absolute h-5 w-5 transition-all duration-300 ${
                    mobileOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-50 opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* --------------------------------- MOBILE --------------------------------- */}
          {mobileOpen && (
            <div
              id="mobile-nav-panel"
              className="animate-nav-panel absolute inset-x-0 top-full origin-top px-3 pb-4 pt-3 lg:hidden"
            >
              <div className="rounded-3xl border border-white/10 bg-[#0A0D22]/90 p-4 shadow-[0_35px_90px_-25px_rgba(0,0,0,0.95)] ring-1 ring-inset ring-white/[0.05] backdrop-blur-xl sm:p-6">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = activePage === item.name;
                    const isSubOpen = mobileSubmenu === item.name;

                    return (
                      <li
                        key={item.name}
                        className="animate-nav-item"
                        style={{ animationDelay: `${i * 45}ms` }}
                      >
                        {item.children ? (
                          <>
                            <button
                              type="button"
                              aria-expanded={isSubOpen}
                              aria-controls={`mobile-menu-${item.name.toLowerCase()}`}
                              onClick={() =>
                                setMobileSubmenu(isSubOpen ? null : item.name)
                              }
                              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium outline-none transition-all duration-300 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-violet-400/70 ${
                                isActive ? "text-white" : "text-slate-300"
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                {isActive && (
                                  <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_2px_rgba(139,92,246,0.9)]"
                                  />
                                )}
                                {item.name}
                              </span>
                              <ChevronDown
                                className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${
                                  isSubOpen ? "rotate-180 text-violet-300" : ""
                                }`}
                                aria-hidden="true"
                              />
                            </button>

                            <ul
                              id={`mobile-menu-${item.name.toLowerCase()}`}
                              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                                isSubOpen
                                  ? "mt-1 grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <li className="min-h-0 overflow-hidden">
                                <ul className="ml-4 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                                  {item.children.map((child) => (
                                    <li key={child.name}>
                                      <a
                                        href={child.href}
                                        onClick={() =>
                                          handleNavigate(item.name)
                                        }
                                        className="block rounded-xl px-3 py-2.5 text-sm text-slate-400 outline-none transition-colors duration-300 hover:bg-white/[0.05] hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400/70"
                                      >
                                        {child.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </ul>
                          </>
                        ) : (
                          <a
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => handleNavigate(item.name)}
                            className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-base font-medium outline-none transition-all duration-300 hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400/70 ${
                              isActive ? "text-white" : "text-slate-300"
                            }`}
                          >
                            {isActive && (
                              <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_2px_rgba(139,92,246,0.9)]"
                              />
                            )}
                            {item.name}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div
                  aria-hidden="true"
                  className="my-4 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent"
                />

                <div className="flex flex-col gap-3">
                  <a
                    href="#signin"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/10 px-5 py-3.5 text-center text-base font-medium text-slate-200 outline-none transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400/70"
                  >
                    Sign In
                  </a>
                  <a
                    href="#get-started"
                    onClick={() => setMobileOpen(false)}
                    className="animate-gradient-pan rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 px-5 py-3.5 text-center text-base font-semibold text-white shadow-[0_14px_34px_-10px_rgba(139,92,246,0.8)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-violet-300 active:scale-[0.99]"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

function Underline({ active }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-center rounded-full bg-gradient-to-r from-violet-500 via-violet-400 to-blue-500 transition-all duration-300 ${
        active
          ? "scale-x-100 opacity-100 shadow-[0_0_12px_2px_rgba(139,92,246,0.85)]"
          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-90"
      }`}
    />
  );
}
