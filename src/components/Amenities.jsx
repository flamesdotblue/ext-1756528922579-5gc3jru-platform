import React from 'react';
import { Wifi, Shield, Coffee, ShowerHead, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
  {
    title: 'Zero-G Suites',
    desc: 'Private cabins with adaptive gravity, aurora-lit windows, and panoramic Earthrise views.',
    Icon: Sparkles,
  },
  {
    title: 'Quantum Wi‑Fi',
    desc: 'Ultra-low latency interstellar internet for streaming and holo-calls back home.',
    Icon: Wifi,
  },
  {
    title: 'Cosmic Wellness',
    desc: 'Hydrosonic showers, star sauna, and AI-guided circadian reset for perfect rest.',
    Icon: ShowerHead,
  },
  {
    title: 'Safety First',
    desc: 'Redundant shielding, medical bay staffed by astro-medics, and 24/7 mission control.',
    Icon: Shield,
  },
  {
    title: 'Orbit Lounge',
    desc: 'Zero‑gravity mixology, coffees roasted at apogee, and nebula tasting flights.',
    Icon: Coffee,
  },
  {
    title: 'Crew Concierge',
    desc: 'Dedicated crew to personalize excursions, stargazing, and docking transfers.',
    Icon: Users,
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold"
          >
            Amenities crafted for the cosmos
          </motion.h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Every detail of Spacy is engineered for serenity, safety, and awe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((a, idx) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 hover:border-white/20 hover:from-white/[0.08]"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-400/20">
                  <a.Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{a.title}</h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 bg-gradient-to-b from-transparent to-indigo-600/10" />
    </section>
  );
}
