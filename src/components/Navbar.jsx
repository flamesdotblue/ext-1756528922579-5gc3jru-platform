import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/30">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide text-white group-hover:text-indigo-200 transition-colors">Spacy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-white/80 hover:text-white transition">Home</a>
            <a href="#suites" className="text-white/80 hover:text-white transition">Suites</a>
            <a href="#amenities" className="text-white/80 hover:text-white transition">Amenities</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="mailto:stay@spacy.hotel" className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition">Book Now</a>
          </nav>

          <button onClick={() => setOpen(v => !v)} aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/5">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2 text-sm">
              <a href="#home" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5">Home</a>
              <a href="#suites" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5">Suites</a>
              <a href="#amenities" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5">Amenities</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5">Contact</a>
              <a href="mailto:stay@spacy.hotel" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-500">Book Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
