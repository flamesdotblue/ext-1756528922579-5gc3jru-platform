import React from 'react';
import { Rocket, Star, Calendar, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <StarsBackground />
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200">
                  <Star className="h-3.5 w-3.5 text-yellow-300" />
                  Orbit-class Luxury • Opening 2089
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                  Sleep among the stars at Spacy
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl">
                  The first boutique hotel in low Earth orbit. Zero-gravity suites, panoramic nebula views, and cuisine by award-winning astro-chefs.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:stay@spacy.hotel?subject=Booking%20Inquiry&body=I%20want%20to%20book%20a%20stay%20at%20Spacy."
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition"
                  >
                    <Calendar className="h-4 w-4" /> Book your orbit
                  </a>
                  <a
                    href="#amenities"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
                  >
                    <Rocket className="h-4 w-4" /> Explore amenities
                  </a>
                  <a
                    href="https://www.youtube.com/results?search_query=space+hotel"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white/80 hover:text-white"
                  >
                    <Play className="h-4 w-4" /> Watch a demo
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
              <OrbitalVisual />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-indigo-600/10" />
    </section>
  );
}

function StarsBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="animate-pulse-slow">
          <Starfield density={120} />
        </div>
      </div>
    </div>
  );
}

function Starfield({ density = 80 }) {
  // Generate a deterministic set of stars for SSR-friendly render
  const stars = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < density; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 0.5;
      const twinkle = Math.random() * 2 + 1;
      arr.push({ top, left, size, twinkle });
    }
    return arr;
  }, [density]);

  return (
    <div className="absolute inset-0">
      {stars.map((s, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: 0.9,
            filter: 'blur(0.3px)',
            animation: `twinkle ${s.twinkle}s ease-in-out infinite`,
          }}
        />
      ))}
      <style>{`@keyframes twinkle { 0%, 100% { opacity: 0.3 } 50% { opacity: 1 } } .animate-pulse-slow { animation: pulse 8s ease-in-out infinite; } @keyframes pulse { 0%,100%{opacity:1}50%{opacity:.95} }`}</style>
    </div>
  );
}

function OrbitalVisual() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent border border-white/10 shadow-2xl shadow-indigo-900/40"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Planetary orbits={4} />
      </motion.div>

      <div className="absolute -inset-8 blur-3xl bg-indigo-500/20 rounded-[3rem]" aria-hidden />
    </div>
  );
}

function Planetary({ orbits = 3 }) {
  const rings = new Array(orbits).fill(0).map((_, i) => i);

  return (
    <div className="relative h-full w-full grid place-items-center">
      <div className="relative h-[78%] w-[78%]">
        {rings.map((r) => (
          <div
            key={r}
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ transform: `scale(${1 - r * 0.15})`, animation: `spin ${28 - r * 3}s linear infinite` }}
          >
            <span
              className="absolute -top-2 -left-2 h-3 w-3 rounded-full bg-indigo-300 shadow shadow-indigo-500/40"
              style={{ transform: `translate(${r * 8}px, ${r * 6}px)` }}
            />
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-300 shadow-2xl shadow-indigo-800/40 border border-white/20" />
          <div className="absolute inset-0 -z-0 blur-2xl bg-indigo-400/30 rounded-full" />
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}
