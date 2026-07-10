"use client";

import React from "react";
import Link from "next/link";
import { Clock, Tag, Compass, ArrowRight } from "lucide-react";
import { tourPackages } from "@/data/packages";

export default function FeaturedPackages() {
  const featured = tourPackages.filter((pkg) => pkg.featured).slice(0, 6);

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

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((pkg) => (
            <div
              key={pkg.slug}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover-card-lift flex flex-col h-full"
            >
              {/* Image / Graphic Header */}
              <div className={`h-52 w-full bg-gradient-to-tr ${pkg.galleryGradients[0] || "from-blue-400 to-indigo-500"} relative flex items-center justify-center text-white px-6 text-center overflow-hidden group`}>
                {/* Gradient background pattern overlay */}
                <div className="absolute inset-0 bg-slate-900/10 transition-opacity duration-300 group-hover:bg-slate-900/20" />
                <Compass className="absolute top-4 right-4 h-6 w-6 text-white/45 animate-pulse-slow" />
                
                <div className="space-y-1 relative z-10">
                  <span className="text-xs font-bold tracking-widest uppercase text-yellow-300 bg-black/25 px-2.5 py-1 rounded-full border border-yellow-300/20">
                    {pkg.destination}
                  </span>
                  <h3 className="text-xl font-bold font-sans drop-shadow-md leading-snug line-clamp-2 pt-1.5">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Duration & Starting Price */}
                  <div className="flex items-center justify-between text-sm border-b border-slate-50 pb-4">
                    <div className="flex items-center text-slate-500 font-medium">
                      <Clock className="h-4 w-4 mr-1.5 text-blue-500" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
                        Starting from
                      </span>
                      <span className="text-lg font-extrabold text-blue-600">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2 font-bold select-none">•</span>
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-50">
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="text-center border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center"
                  >
                    Itinerary Details
                  </Link>
                  <Link
                    href={`/contact?book=${pkg.slug}`}
                    className="text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg shadow-blue-500/10 flex items-center justify-center"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
