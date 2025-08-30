import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Amenities />
      </main>
      <Footer />
    </div>
  );
}
