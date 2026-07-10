"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  // Show top 6 destinations on the home page
  const featuredDest = destinations.slice(0, 6);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
              Dream Escapes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Popular Travel Destinations
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our hand-picked tourist hot spots, each offering distinctive cultural heritages, sights, and activities.
            </p>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider shrink-0 group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="h-4 w-4 ml-1.5 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDest.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover-card-lift block"
            >
              {/* Dynamic Header Box */}
              <div className={`h-40 bg-gradient-to-tr ${dest.gradientClass} relative flex items-center justify-center p-6 text-white text-center`}>
                <div className="absolute inset-0 bg-slate-900/10 transition-opacity group-hover:bg-slate-900/20" />
                <Compass className="absolute bottom-4 left-4 h-5 w-5 text-white/40 group-hover:rotate-45 transition-transform duration-300" />
                <h3 className="text-2xl font-black drop-shadow-md relative z-10">{dest.name}</h3>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {dest.shortDesc}
                </p>

                <div className="flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors pt-2 uppercase tracking-wider">
                  <span>Explore attractions</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
