import React from 'react';
import { Rocket, Mail, Phone, MapPin, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/30">
                <Rocket className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-wide">Spacy</span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              Boutique orbital stays with zero‑gravity comfort and star‑struck views.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 text-yellow-300">
              <Star className="h-4 w-4 fill-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-300" />
              <span className="ml-2 text-xs text-white/70">Rated 5.0 by 12,000+ guests</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Docking & Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-300" /> Low Earth Orbit, Node 3</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-300" /> +1 (000) 321-ORBIT</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-300" /> <a className="hover:underline" href="mailto:stay@spacy.hotel">stay@spacy.hotel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Plan your stay</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a className="hover:underline" href="#suites">Suites & Rates</a></li>
              <li><a className="hover:underline" href="#amenities">Amenities</a></li>
              <li><a className="hover:underline" href="mailto:stay@spacy.hotel?subject=Booking%20Inquiry">Request availability</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Spacy Hotel. All rights reserved.</p>
          <p>Crafted on Earth · Launched to orbit with love.</p>
        </div>
      </div>
    </footer>
  );
}
