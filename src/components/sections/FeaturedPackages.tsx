"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Compass, ArrowRight } from "lucide-react";
import { tourPackages } from "@/data/packages";

export default function FeaturedPackages() {
  // Show 5 packages on the home page as requested
  const featured = tourPackages.filter((pkg) => pkg.featured).slice(0, 5);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full">
              Trending Tours
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Our Featured Tour Packages
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our most popular, traveler-approved itineraries meticulously planned for complete comfort.
            </p>
          </div>
          <Link
            href="/packages"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider shrink-0 group"
          >
            <span>View All Packages</span>
            <ArrowRight className="h-4 w-4 ml-1.5 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Packages Grid: 5 cards arranged in a busy visual structure: 4 grids + 1 big landscape row package banner */}
        <div className="space-y-8">
          {/* Top Grid: 4 items (2 on tablet, 4 on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.slice(0, 4).map((pkg) => (
              <div
                key={pkg.slug}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-100 transition-all flex flex-col h-full"
              >
                {/* Image Header with actual photo overlay */}
                <div className="h-48 w-full relative overflow-hidden group shrink-0">
                  <Image
                    src={pkg.image || "/images/travel_hero_bg.jpg"}
                    alt={pkg.name}
                    fill
                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />
                  <Compass className="absolute top-4 right-4 h-5 w-5 text-white/60 animate-pulse-slow" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-yellow-300 bg-black/45 px-2.5 py-1 rounded-full border border-yellow-300/10">
                      {pkg.destination}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    <h3 className="text-base font-extrabold text-slate-900 line-clamp-2 leading-snug">
                      {pkg.name}
                    </h3>
                    
                    {/* Duration & Starting Price */}
                    <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-3">
                      <div className="flex items-center text-slate-500 font-semibold">
                        <Clock className="h-3.5 w-3.5 mr-1 text-blue-500" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
                          From
                        </span>
                        <span className="text-base font-extrabold text-emerald-600">
                          ₹{pkg.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                      {pkg.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-emerald-500 mr-1.5 font-bold select-none">•</span>
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-50 shrink-0">
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="text-center border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center"
                    >
                      Details
                    </Link>
                    <Link
                      href={`/contact?book=${pkg.slug}`}
                      className="text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition-all shadow-sm flex items-center justify-center"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Large Horizontal Banner Row for 5th Item (Kashmir or Rajasthan etc) */}
          {featured[4] && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row min-h-[220px]">
              {/* Image half side */}
              <div className="relative w-full lg:w-2/5 min-h-[200px] lg:min-h-full">
                <Image
                  src={featured[4].image || "/images/travel_hero_bg.jpg"}
                  alt={featured[4].name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-yellow-300 bg-black/60 px-3 py-1.5 rounded-full border border-yellow-300/20">
                    Featured Deal
                  </span>
                </div>
              </div>

              {/* Content half side */}
              <div className="p-8 flex-grow flex flex-col justify-between text-white text-left">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-900/40 px-2.5 py-1 rounded-md uppercase">
                      {featured[4].destination}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1 font-semibold">
                      <Clock className="h-4 w-4 text-blue-400" /> {featured[4].duration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">{featured[4].name}</h3>
                  
                  {/* Highlights Bullet List horizontally */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {featured[4].highlights.slice(0, 4).map((hl, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-300 font-medium">
                        <span className="text-emerald-400 mr-2 font-bold select-none">✓</span>
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 mt-6 border-t border-slate-800">
                  <div className="text-left">
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      All-Inclusive Starting Price
                    </span>
                    <span className="text-2xl font-black text-emerald-400">
                      ₹{featured[4].price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/packages/${featured[4].slug}`}
                      className="border border-slate-700 hover:border-slate-600 text-slate-200 hover:bg-slate-800 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/contact?book=${featured[4].slug}`}
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
