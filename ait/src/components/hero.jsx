import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cloud,
  Activity,
  Cpu,
  Lock,
  Zap,
  Bot,
  Network,
  BarChart3,
  Workflow,
  Database,
  CheckCircle2,
} from "lucide-react";

const Hero = () => {
  const stats = [
    ["100+", "Projects Delivered"],
    ["50+", "Enterprise Clients"],
    ["99%", "Client Satisfaction"],
    ["24/7", "AI Support"],
  ];

  const logos = ["Microsoft", "Google", "AWS", "Oracle", "IBM", "Cisco"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-8 text-white sm:px-8 lg:px-12">
      <style>{`
        @keyframes aittrust-fade-up {
          0% { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes aittrust-slide-left {
          0% { opacity: 0; transform: translateX(36px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes aittrust-slide-right {
          0% { opacity: 0; transform: translateX(-36px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes aittrust-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -18px, 0); }
        }

        @keyframes aittrust-float-soft {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(10px, -12px, 0) rotate(2deg); }
        }

        @keyframes aittrust-pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.55); transform: scale(1); }
          50% { box-shadow: 0 0 0 9px rgba(6, 182, 212, 0); transform: scale(1.08); }
        }

        @keyframes aittrust-glow {
          0%, 100% { opacity: .45; filter: blur(46px); }
          50% { opacity: .9; filter: blur(58px); }
        }

        @keyframes aittrust-gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes aittrust-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes aittrust-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes aittrust-orbit {
          from { transform: rotate(0deg) translateX(152px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(152px) rotate(-360deg); }
        }

        @keyframes aittrust-orbit-small {
          from { transform: rotate(0deg) translateX(104px) rotate(0deg); }
          to { transform: rotate(-360deg) translateX(104px) rotate(360deg); }
        }

        @keyframes aittrust-data-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes aittrust-progress {
          0% { width: 28%; }
          50% { width: 98%; }
          100% { width: 86%; }
        }

        @keyframes aittrust-indicator {
          0%, 100% { transform: scale(1); opacity: .55; }
          50% { transform: scale(1.35); opacity: 1; }
        }

        @keyframes aittrust-beam {
          0% { transform: translateX(-60%) rotate(12deg); opacity: 0; }
          20% { opacity: .65; }
          100% { transform: translateX(160%) rotate(12deg); opacity: 0; }
        }

        @keyframes aittrust-particle {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: .3; }
          50% { transform: translate3d(18px, -32px, 0); opacity: .95; }
        }

        @keyframes aittrust-border-glow {
          0%, 100% { border-color: rgba(59, 130, 246, .18); box-shadow: 0 0 40px rgba(59, 130, 246, .12); }
          50% { border-color: rgba(124, 58, 237, .38); box-shadow: 0 0 64px rgba(124, 58, 237, .22); }
        }

        .aittrust-aurora {
          background:
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, .38), transparent 32%),
            radial-gradient(circle at 80% 10%, rgba(124, 58, 237, .32), transparent 30%),
            radial-gradient(circle at 50% 80%, rgba(6, 182, 212, .22), transparent 38%),
            linear-gradient(120deg, rgba(5, 8, 22, 1), rgba(11, 17, 32, .95), rgba(17, 24, 39, 1));
          background-size: 160% 160%;
          animation: aittrust-gradient-shift 16s ease infinite;
        }

        .aittrust-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at center, black 0%, transparent 76%);
        }

        .aittrust-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.42'/%3E%3C/svg%3E");
        }

        .aittrust-glass {
          background: linear-gradient(180deg, rgba(255,255,255,.105), rgba(255,255,255,.045));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 24px 80px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.12);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .aittrust-gradient-text {
          background: linear-gradient(90deg, #06B6D4, #3B82F6, #7C3AED, #06B6D4);
          background-size: 260% 260%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: aittrust-gradient-shift 7s ease infinite;
        }

        .aittrust-ripple {
          position: relative;
          overflow: hidden;
        }

        .aittrust-ripple::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,.34), transparent 28%);
          opacity: 0;
          transition: opacity .35s ease;
        }

        .aittrust-ripple:hover::after {
          opacity: 1;
        }

        .aittrust-card-hover {
          transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .35s ease, box-shadow .35s ease, background .35s ease;
        }

        .aittrust-card-hover:hover {
          transform: translateY(-8px) scale(1.015);
          border-color: rgba(96, 165, 250, .36);
          box-shadow: 0 30px 90px rgba(59, 130, 246, .18), inset 0 1px 0 rgba(255,255,255,.16);
          background: linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.055));
        }

        .aittrust-logo {
          filter: grayscale(1);
          opacity: .58;
          transition: all .3s ease;
        }

        .aittrust-logo:hover {
          filter: grayscale(0);
          opacity: 1;
          color: #93c5fd;
          text-shadow: 0 0 24px rgba(59,130,246,.45);
          transform: translateY(-2px);
        }

        .aittrust-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(6,182,212,.7), rgba(124,58,237,.7), transparent);
          height: 1px;
          overflow: hidden;
        }

        .aittrust-line::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 38%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
          animation: aittrust-data-flow 3s linear infinite;
        }

        .aittrust-neural-node {
          box-shadow: 0 0 24px rgba(6,182,212,.5);
          animation: aittrust-indicator 2.6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="aittrust-aurora absolute inset-0" aria-hidden="true" />
      <div
        className="aittrust-grid absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="aittrust-noise pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#3B82F6]/25 blur-3xl"
        style={{ animation: "aittrust-glow 8s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-[#7C3AED]/24 blur-3xl"
        style={{ animation: "aittrust-glow 10s ease-in-out infinite 1s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[28rem] rounded-full bg-[#06B6D4]/16 blur-3xl"
        style={{ animation: "aittrust-glow 9s ease-in-out infinite 2s" }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[-15%] top-24 h-16 w-[70%] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent blur-xl"
        style={{ animation: "aittrust-beam 8s linear infinite" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-20%] top-[62%] h-20 w-[80%] bg-gradient-to-r from-transparent via-violet-400/10 to-transparent blur-xl"
        style={{ animation: "aittrust-beam 11s linear infinite 2s" }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan-200/70"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 23) % 100}%`,
              animation: `aittrust-particle ${4 + (index % 5)}s ease-in-out infinite ${index * 0.18}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center">
        <div className="grid w-full grid-cols-1 items-center gap-16 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">
          <div
            className="max-w-2xl"
            style={{
              animation:
                "aittrust-slide-right .8s cubic-bezier(.2,.8,.2,1) both",
            }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70"
                  style={{
                    animation: "aittrust-pulse-dot 1.8s ease-in-out infinite",
                  }}
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </span>
              <span className="text-sm font-medium tracking-wide text-slate-200">
                Trusted AI Technology Partner
              </span>
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.65rem] lg:leading-[0.92]">
              Build Intelligent
              <span className="block aittrust-gradient-text">AI Solutions</span>
              <span className="block text-slate-100">With Confidence</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              AITTRUST helps businesses build secure AI products, cloud
              infrastructure, enterprise software, automation systems,
              cybersecurity solutions, and digital transformation platforms that
              drive innovation and trust.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#get-started"
                className="aittrust-ripple group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,.34)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(124,58,237,.42)] focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-[#050816]"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.055] px-7 py-4 text-base font-semibold text-slate-100 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.09] hover:shadow-cyan-500/15 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:ring-offset-2 focus:ring-offset-[#050816]"
              >
                Explore Services
                <Sparkles className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(([value, label], index) => (
                <div
                  key={label}
                  className="aittrust-glass aittrust-card-hover rounded-3xl p-4"
                  style={{
                    animation: `aittrust-fade-up .7s cubic-bezier(.2,.8,.2,1) ${0.12 + index * 0.08}s both`,
                  }}
                >
                  <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {value}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Trusted by industry leaders
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {logos.map((logo) => (
                  <div
                    key={logo}
                    className="aittrust-logo flex h-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.035] px-3 text-sm font-semibold text-slate-400 backdrop-blur-xl"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative min-h-[620px] w-full"
            style={{
              animation:
                "aittrust-slide-left .9s cubic-bezier(.2,.8,.2,1) .12s both",
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/18 via-violet-500/12 to-cyan-400/16 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="aittrust-glass absolute left-1/2 top-1/2 h-[29rem] w-[29rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                animation: "aittrust-border-glow 5s ease-in-out infinite",
              }}
            >
              <div className="absolute inset-8 rounded-full border border-cyan-300/15" />
              <div className="absolute inset-16 rounded-full border border-violet-300/15" />

              <div
                className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/30"
                style={{ animation: "aittrust-rotate 18s linear infinite" }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/30"
                style={{
                  animation: "aittrust-rotate-reverse 14s linear infinite",
                }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20"
                style={{ animation: "aittrust-rotate 10s linear infinite" }}
              />

              <div className="absolute left-1/2 top-1/2">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/15 shadow-[0_0_30px_rgba(6,182,212,.35)] backdrop-blur-xl"
                  style={{ animation: "aittrust-orbit 13s linear infinite" }}
                >
                  <Lock className="h-5 w-5 text-cyan-200" />
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-300/30 bg-violet-400/15 shadow-[0_0_30px_rgba(124,58,237,.35)] backdrop-blur-xl"
                  style={{
                    animation: "aittrust-orbit-small 9s linear infinite",
                  }}
                >
                  <Zap className="h-4 w-4 text-violet-100" />
                </div>
              </div>

              <div
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-white/14 bg-gradient-to-br from-white/16 via-white/[0.08] to-white/[0.035] p-5 shadow-[0_30px_90px_rgba(0,0,0,.42),0_0_70px_rgba(59,130,246,.22)] backdrop-blur-2xl"
                style={{ animation: "aittrust-float 5s ease-in-out infinite" }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-[2.35rem] border border-cyan-300/20 bg-gradient-to-br from-[#0B1120]/80 to-[#111827]/70">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/24 via-violet-500/24 to-cyan-400/24">
                    <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/20" />
                    <Bot className="relative z-10 h-12 w-12 text-cyan-100" />
                    <Cpu className="absolute -right-2 -top-2 h-6 w-6 text-blue-200" />
                    <Network className="absolute -bottom-2 -left-2 h-6 w-6 text-violet-200" />
                  </div>
                </div>
              </div>

              <div className="aittrust-line left-[12%] top-[32%] w-[30%] rotate-[24deg]" />
              <div className="aittrust-line right-[10%] top-[38%] w-[28%] -rotate-[28deg]" />
              <div className="aittrust-line bottom-[31%] left-[15%] w-[28%] -rotate-[18deg]" />
              <div className="aittrust-line bottom-[28%] right-[13%] w-[31%] rotate-[18deg]" />

              <div className="aittrust-neural-node absolute left-[21%] top-[26%] h-3 w-3 rounded-full bg-cyan-300" />
              <div
                className="aittrust-neural-node absolute right-[19%] top-[32%] h-3 w-3 rounded-full bg-violet-300"
                style={{ animationDelay: ".4s" }}
              />
              <div
                className="aittrust-neural-node absolute bottom-[27%] left-[25%] h-3 w-3 rounded-full bg-blue-300"
                style={{ animationDelay: ".8s" }}
              />
              <div
                className="aittrust-neural-node absolute bottom-[24%] right-[24%] h-3 w-3 rounded-full bg-cyan-200"
                style={{ animationDelay: "1.2s" }}
              />

              <div className="absolute left-[18%] top-[48%] flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 backdrop-blur-xl">
                <ShieldCheck className="h-6 w-6 text-emerald-300" />
              </div>

              <div className="absolute right-[18%] top-[52%] flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 backdrop-blur-xl">
                <Cloud className="h-6 w-6 text-blue-200" />
              </div>

              <div className="absolute bottom-[16%] left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 backdrop-blur-xl">
                <BarChart3 className="h-6 w-6 text-violet-200" />
              </div>
            </div>

            <div
              className="aittrust-glass aittrust-card-hover absolute left-0 top-20 w-56 rounded-3xl p-5 sm:left-4 lg:left-0"
              style={{
                animation: "aittrust-float-soft 6s ease-in-out infinite",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                    <Cpu className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      AI Processing
                    </p>
                    <p className="text-xs text-slate-400">Neural compute</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-cyan-200">98%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
                  style={{
                    animation: "aittrust-progress 4s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            <div
              className="aittrust-glass aittrust-card-hover absolute right-0 top-10 w-52 rounded-3xl p-5 sm:right-4 lg:right-0"
              style={{
                animation: "aittrust-float-soft 7s ease-in-out infinite 1s",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Cloud Secure
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.8)]"
                      style={{
                        animation:
                          "aittrust-indicator 1.8s ease-in-out infinite",
                      }}
                    />
                    <p className="text-xs text-emerald-200">Encrypted</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="aittrust-glass aittrust-card-hover absolute bottom-24 left-2 w-52 rounded-3xl p-5 sm:left-8 lg:left-4"
              style={{
                animation: "aittrust-float-soft 7.5s ease-in-out infinite .5s",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                    <Workflow className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Automation
                    </p>
                    <p className="text-xs text-slate-400">Running</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span
                    className="h-2 w-2 rounded-full bg-violet-300"
                    style={{
                      animation: "aittrust-indicator 1.2s ease-in-out infinite",
                    }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-violet-300"
                    style={{
                      animation:
                        "aittrust-indicator 1.2s ease-in-out infinite .2s",
                    }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-violet-300"
                    style={{
                      animation:
                        "aittrust-indicator 1.2s ease-in-out infinite .4s",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="aittrust-glass aittrust-card-hover absolute bottom-12 right-0 w-60 rounded-3xl p-5 sm:right-6 lg:right-0"
              style={{
                animation: "aittrust-float-soft 6.5s ease-in-out infinite 1.4s",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-200">
                    <Activity className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Analytics
                    </p>
                    <p className="text-xs text-slate-400">Realtime</p>
                  </div>
                </div>
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              </div>

              <div className="mt-4 flex h-16 items-end gap-2">
                {[36, 58, 44, 72, 52, 84, 68, 92].map((height, index) => (
                  <span
                    key={height + index}
                    className="flex-1 rounded-full bg-gradient-to-t from-cyan-500/35 to-violet-300/90"
                    style={{
                      height: `${height}%`,
                      animation: `aittrust-indicator ${1.8 + index * 0.12}s ease-in-out infinite ${index * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              className="absolute left-[12%] top-[5%] h-20 w-20 rounded-full bg-blue-400/10 blur-xl"
              style={{ animation: "aittrust-float 5s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="absolute right-[10%] bottom-[20%] h-24 w-24 rounded-full bg-violet-400/10 blur-xl"
              style={{ animation: "aittrust-float 7s ease-in-out infinite 1s" }}
              aria-hidden="true"
            />
            <div
              className="absolute right-[34%] top-[18%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] backdrop-blur-xl"
              style={{
                animation: "aittrust-float 6s ease-in-out infinite .8s",
              }}
            >
              <Database className="h-6 w-6 text-cyan-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
