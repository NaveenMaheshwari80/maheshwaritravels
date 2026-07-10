import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Destinations | Plan Your Trips to Kashmir, Goa, Maldives, Europe",
  description: "Explore top global and domestic travel destinations with Maheshwari Travels. Read tourist attraction guides, best times to visit, and local travel tips.",
  alternates: {
    canonical: "/destinations",
  }
};

export default function DestinationsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Header */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Travel Destinations</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Discover breathtaking getaways, seasonal hotspots, and historical cultures.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Grid listing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover-card-lift block"
            >
              {/* Colored Card Banner */}
              <div className={`h-44 bg-gradient-to-tr ${dest.gradientClass} relative flex items-center justify-center p-6 text-white text-center`}>
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-opacity" />
                <Compass className="absolute bottom-4 left-4 h-5 w-5 text-white/40 group-hover:rotate-45 transition-transform duration-300" />
                <h3 className="text-2xl font-black drop-shadow-md relative z-10">{dest.name}</h3>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {dest.shortDesc}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors pt-2 uppercase tracking-wider">
                  <span>Explore destination details</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
