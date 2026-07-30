import { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  Cloud,
  Cpu,
  Database,
  Lock,
  Network,
  Shield,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  { title: "AI Security", icon: Shield, color: "from-cyan-400 to-blue-500" },
  {
    title: "Machine Learning",
    icon: Brain,
    color: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Data Intelligence",
    icon: Database,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "AI Governance",
    icon: Lock,
    color: "from-cyan-300 to-violet-500",
  },
  { title: "Cloud AI", icon: Cloud, color: "from-sky-400 to-blue-600" },
  {
    title: "Automation",
    icon: Cpu,
    color: "from-violet-400 to-indigo-500",
  },
  {
    title: "Risk Analysis",
    icon: Network,
    color: "from-blue-300 to-cyan-500",
  },
  {
    title: "Enterprise Solutions",
    icon: Sparkles,
    color: "from-fuchsia-400 to-violet-500",
  },
];

const floatingIcons = [
  { Icon: Shield, top: "8%", left: "12%", delay: 0 },
  { Icon: Brain, top: "14%", right: "5%", delay: 0.6 },
  { Icon: Cloud, bottom: "18%", left: "3%", delay: 1.2 },
  { Icon: Database, bottom: "6%", right: "16%", delay: 1.8 },
  { Icon: Lock, top: "43%", right: "-2%", delay: 2.4 },
  { Icon: Sparkles, top: "2%", left: "48%", delay: 3 },
  { Icon: Cpu, bottom: "29%", right: "2%", delay: 3.6 },
  { Icon: Network, bottom: "3%", left: "38%", delay: 4.2 },
];

const particles = Array.from({ length: 32 }, (_, index) => ({
  left: `${(index * 37 + 7) % 100}%`,
  top: `${(index * 23 + 11) % 100}%`,
  size: index % 4 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
  delay: `${(index % 8) * 0.65}s`,
  duration: `${5 + (index % 5)}s`,
}));

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (paused || reduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setRotation((value) => value + 0.18);
    }, 32);

    return () => window.clearInterval(interval);
  }, [paused, reduceMotion]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setParallax({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 18,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 18,
    });
  };

  const handleDragEnd = (_, info) => {
    setRotation((value) => value + info.offset.x * 0.22);
  };

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white"
      onMouseMove={handlePointerMove}
    >
      <style>{`
        @keyframes aittrust-grid-move {
          from { background-position: 0 0, 0 0; }
          to { background-position: 54px 54px, 54px 54px; }
        }

        @keyframes aittrust-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }

        @keyframes aittrust-particle {
          0%, 100% { opacity: 0.15; transform: translate3d(0, 0, 0) scale(0.8); }
          50% { opacity: 0.95; transform: translate3d(10px, -26px, 0) scale(1.35); }
        }

        @keyframes aittrust-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes aittrust-ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes aittrust-ring-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes aittrust-glow-pulse {
          0%, 100% { opacity: 0.35; transform: scale(0.94); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }

        .aittrust-grid {
          background-image:
            linear-gradient(rgba(125, 170, 255, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125, 170, 255, 0.055) 1px, transparent 1px);
          background-size: 54px 54px;
          animation: aittrust-grid-move 22s linear infinite;
          mask-image: radial-gradient(ellipse at center, black 0%, transparent 76%);
        }

        .aittrust-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E");
        }

        .aittrust-gradient-text {
          background: linear-gradient(100deg, #67e8f9, #60a5fa, #a78bfa, #22d3ee, #67e8f9);
          background-size: 240% 240%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: aittrust-gradient-shift 7s ease infinite;
        }

        .aittrust-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(112deg, transparent 35%, rgba(255,255,255,.22) 50%, transparent 65%);
          transform: translateX(-130%);
          transition: transform .7s ease;
        }

        .aittrust-shimmer:hover::after {
          transform: translateX(130%);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_83%_24%,rgba(124,58,237,0.2),transparent_29%),radial-gradient(circle_at_48%_100%,rgba(6,182,212,0.13),transparent_38%),linear-gradient(125deg,#050816_0%,#091127_48%,#07091a_100%)]" />
      <div className="aittrust-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="aittrust-noise pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen" />

      <div className="pointer-events-none absolute -left-44 top-10 h-[38rem] w-[38rem] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[35rem] w-[35rem] rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-16rem] left-1/3 h-[35rem] w-[35rem] rounded-full bg-cyan-400/10 blur-[130px]" />

      {particles.map((particle, index) => (
        <span
          key={index}
          className="pointer-events-none absolute rounded-full bg-cyan-100 shadow-[0_0_12px_2px_rgba(103,232,249,0.45)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animation: `aittrust-particle ${particle.duration} ease-in-out ${particle.delay} infinite`,
          }}
        />
      ))}

      <div className="relative mx-auto grid min-h-screen max-w-[1540px] items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 lg:px-14 xl:px-20">
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-cyan-200/15 bg-white/[0.055] px-4 py-2 text-sm font-medium text-cyan-50 shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_3px_rgba(103,232,249,0.75)]" />
            </span>
            Trusted AI Technology
            <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
          </motion.div>

          <motion.h1
            className="mt-7 text-balance text-5xl font-semibold leading-[0.97] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl xl:text-[5.5rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Build{" "}
            <span className="aittrust-gradient-text whitespace-nowrap">
              Trustworthy AI
            </span>
            <br />
            Solutions for the Future
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We help businesses build secure, transparent, scalable AI systems
            with enterprise-grade trust, governance, and intelligence.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
          >
            <motion.a
              href="#get-started"
              whileHover={{ y: -3, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="aittrust-shimmer group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_44px_rgba(79,70,229,0.42)] transition-shadow hover:shadow-[0_24px_65px_rgba(59,130,246,0.55)]"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-semibold text-slate-100 shadow-[0_14px_38px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all hover:border-cyan-200/45 hover:bg-white/[0.1] hover:shadow-[0_18px_48px_rgba(34,211,238,0.14)]"
            >
              Explore Services
              <Sparkles className="h-4.5 w-4.5 text-cyan-200 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            <div className="flex -space-x-1 text-lg tracking-[0.12em] text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.45)]">
              ★★★★★
            </div>
            <div className="h-8 w-px bg-white/15" />
            <p className="text-sm font-medium text-slate-300">
              Trusted by innovative companies worldwide.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex h-[540px] w-full max-w-[680px] items-center justify-center sm:h-[620px] lg:h-[700px]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.16, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setParallax({ x: 0, y: 0 });
          }}
        >
          <div
            className="pointer-events-none absolute h-[78%] w-[78%] rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-600/15 to-violet-600/25 blur-[76px]"
            style={{ animation: "aittrust-glow-pulse 6s ease-in-out infinite" }}
          />
          <div className="pointer-events-none absolute h-[70%] w-[70%] rounded-full border border-cyan-200/10 bg-[radial-gradient(circle,rgba(59,130,246,0.17),transparent_65%)]" />

          <div
            className="pointer-events-none absolute h-[67%] w-[67%] rounded-full border border-dashed border-cyan-300/20"
            style={{ animation: "aittrust-ring-spin 24s linear infinite" }}
          />
          <div
            className="pointer-events-none absolute h-[51%] w-[51%] rounded-full border border-violet-300/20"
            style={{ animation: "aittrust-ring-reverse 16s linear infinite" }}
          />
          <div
            className="pointer-events-none absolute h-[37%] w-[37%] rounded-full border border-dashed border-blue-200/25"
            style={{ animation: "aittrust-ring-spin 12s linear infinite" }}
          />

          {floatingIcons.map(({ Icon, delay, ...position }, index) => (
            <motion.div
              key={index}
              className="pointer-events-none absolute z-30 grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-[#0c1430]/70 text-cyan-100 shadow-[0_0_28px_rgba(59,130,246,0.22)] backdrop-blur-xl"
              style={position}
              animate={
                reduceMotion ? {} : { y: [0, -12, 0], rotate: [0, 4, 0] }
              }
              transition={{
                duration: 4.5 + (index % 3),
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-4.5 w-4.5" />
            </motion.div>
          ))}

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragStart={() => setPaused(true)}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 z-20 cursor-grab touch-pan-y active:cursor-grabbing"
            style={{ perspective: "1100px" }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 sm:h-[410px] sm:w-[410px]"
              style={{
                transformStyle: "preserve-3d",
                rotateY: rotation,
                rotateX: parallax.y * -0.12,
                x: parallax.x * 0.2,
                y: parallax.y * 0.2,
              }}
            >
              {services.map((service, index) => {
                const angle = (360 / services.length) * index;
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    className="absolute left-1/2 top-1/2 w-[142px] -translate-x-1/2 -translate-y-1/2 sm:w-[162px]"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(240px) rotateY(${-angle}deg)`,
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{ y: -12, scale: 1.07 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.15] to-white/[0.035] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
                      <div
                        className={`absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${service.color} opacity-30 blur-2xl`}
                      />
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${service.color} shadow-[0_0_22px_rgba(59,130,246,0.45)]`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-tight text-white">
                        {service.title}
                      </p>
                      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-30 grid h-36 w-36 place-items-center rounded-full border border-cyan-100/25 bg-[#0a1230]/70 shadow-[0_0_0_12px_rgba(34,211,238,0.035),0_0_70px_rgba(59,130,246,0.42),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-2xl sm:h-44 sm:w-44"
            animate={
              reduceMotion ? {} : { y: [0, -7, 0], scale: [1, 1.025, 1] }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-300/20 via-blue-500/20 to-violet-500/30 blur-sm" />
            <div className="relative grid h-20 w-20 place-items-center rounded-[1.65rem] bg-[conic-gradient(from_220deg,#22d3ee,#3b82f6,#8b5cf6,#22d3ee)] p-[1px] sm:h-24 sm:w-24">
              <div className="grid h-full w-full place-items-center rounded-[1.55rem] bg-[#080d21]">
                <Shield className="h-9 w-9 text-white drop-shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              </div>
            </div>
            <span className="relative mt-1 text-[10px] font-bold tracking-[0.24em] text-cyan-100 sm:text-[11px]">
              AITTRUST
            </span>
          </motion.div>

          <p className="absolute bottom-2 z-30 text-xs font-medium tracking-[0.18em] text-slate-400 sm:bottom-5">
            DRAG TO EXPLORE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
