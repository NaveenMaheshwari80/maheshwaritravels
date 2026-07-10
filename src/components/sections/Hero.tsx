"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Hero3DVehicle from "./Hero3DVehicle";

export default function Hero() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [travelers, setTravelers] = useState("1");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;
    router.push(
      `/contact?dest=${encodeURIComponent(destination)}&month=${encodeURIComponent(
        month
      )}&travelers=${encodeURIComponent(travelers)}`
    );
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero - Plan Your Trip with Maheshwari Travels"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/travel_hero_bg.jpg"
          alt="Maheshwari Travels - Scenic travel destinations including beaches and mountains"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/40" /> {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-slate-900/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-emerald-300 border border-white/10">
            ★ Welcome to Maheshwari Travels
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
            Inspiring Journeys, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-200">
              Tailored Perfectly for You
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto font-medium drop-shadow">
            Experience the world in absolute comfort. We design premium customized domestic and international tour packages that match your dream.
          </p>
        </div>

        {/* Search Planner Bar - Glassmorphism */}
        <form
          onSubmit={handleSearchSubmit}
          aria-label="Search and plan your trip"
          role="search"
          className="max-w-4xl mx-auto glassmorphism rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col lg:flex-row gap-4 items-center animate-fade-in-up delay-200"
        >
          {/* Destination */}
          <div className="w-full flex items-center space-x-3 bg-white/90 text-slate-800 px-4 py-3 rounded-2xl border border-slate-100">
            <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
            <div className="flex-grow text-left">
              <label htmlFor="hero-dest" className="block text-[10px] uppercase font-bold text-slate-400">
                Where to?
              </label>
              <input
                id="hero-dest"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Kashmir, Goa, Europe"
                className="w-full text-sm font-semibold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none placeholder-slate-400"
                required
              />
            </div>
          </div>

          {/* Travel Month */}
          <div className="w-full flex items-center space-x-3 bg-white/90 text-slate-800 px-4 py-3 rounded-2xl border border-slate-100">
            <Calendar className="h-5 w-5 text-blue-600 shrink-0" />
            <div className="flex-grow text-left">
              <label htmlFor="hero-month" className="block text-[10px] uppercase font-bold text-slate-400">
                When?
              </label>
              <select
                id="hero-month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full text-sm font-semibold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-slate-700 cursor-pointer"
              >
                <option value="">Any Month</option>
                <option value="Jan-Feb">Jan - Feb</option>
                <option value="Mar-Apr">Mar - Apr</option>
                <option value="May-Jun">May - Jun</option>
                <option value="Jul-Aug">Jul - Aug</option>
                <option value="Sep-Oct">Sep - Oct</option>
                <option value="Nov-Dec">Nov - Dec</option>
              </select>
            </div>
          </div>

          {/* Travelers Count */}
          <div className="w-full flex items-center space-x-3 bg-white/90 text-slate-800 px-4 py-3 rounded-2xl border border-slate-100">
            <Users className="h-5 w-5 text-blue-600 shrink-0" />
            <div className="flex-grow text-left">
              <label htmlFor="hero-travelers" className="block text-[10px] uppercase font-bold text-slate-400">
                Guests
              </label>
              <select
                id="hero-travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full text-sm font-semibold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-slate-700 cursor-pointer"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests (Couple)</option>
                <option value="3-5">3 - 5 Guests (Family)</option>
                <option value="6+">6+ Guests (Group)</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2 shrink-0 cursor-pointer hover:shadow-blue-500/40"
          >
            <Search className="h-5 w-5" />
            <span className="lg:hidden xl:inline">Plan My Trip</span>
          </button>
        </form>

        {/* 3D Interactive Travel Cruiser & Winding Road Visualizer */}
        <div className="pt-2 animate-fade-in-up delay-300">
          <Hero3DVehicle />
        </div>
      </div>

      {/* Subtle bottom fade to overlay onto sections */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
