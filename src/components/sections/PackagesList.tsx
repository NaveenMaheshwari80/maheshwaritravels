"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Compass, Search, Filter } from "lucide-react";
import { tourPackages, TourPackage } from "@/data/packages";

export default function PackagesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // 'all', 'domestic', 'international', 'featured'

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

    const isIntl = ["Dubai", "Bali", "Thailand", "Singapore", "Maldives", "Europe"].includes(pkg.destination);
    
    if (filterType === "domestic") {
      return matchesSearch && !isIntl;
    }
    if (filterType === "international") {
      return matchesSearch && isIntl;
    }
    if (filterType === "featured") {
      return matchesSearch && pkg.featured;
    }
    return matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search & Filter Controls Panel */}
      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by destination, highlights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-700"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
          {[
            { id: "all", label: "All Packages" },
            { id: "domestic", label: "Domestic India" },
            { id: "international", label: "International" },
            { id: "featured", label: "Featured Deals" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none cursor-pointer ${
                filterType === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                  : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.slug}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover-card-lift flex flex-col h-full"
            >
              {/* Image Banner fallback */}
              <div className={`h-52 w-full bg-gradient-to-tr ${pkg.galleryGradients[0] || "from-blue-400 to-indigo-500"} relative flex items-center justify-center text-white px-6 text-center overflow-hidden group`}>
                <div className="absolute inset-0 bg-slate-900/10 transition-opacity duration-300 group-hover:bg-slate-900/20" />
                <Compass className="absolute top-4 right-4 h-6 w-6 text-white/40" />

                <div className="space-y-1 relative z-10">
                  <span className="text-xs font-bold tracking-widest uppercase text-yellow-300 bg-black/25 px-2.5 py-1 rounded-full border border-yellow-300/20">
                    {pkg.destination}
                  </span>
                  <h3 className="text-xl font-bold font-sans drop-shadow-md leading-snug line-clamp-2 pt-1.5">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Duration & starting price */}
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
                    {pkg.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2 font-bold select-none">•</span>
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons */}
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
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <Compass className="h-16 w-16 text-slate-300 mx-auto mb-4 animate-spin-slow" />
          <h3 className="text-lg font-bold text-slate-700">No Packages Found</h3>
          <p className="text-slate-400 text-sm mt-1 max-w-xs mx-auto">
            Try adjusting your search queries or filter categories to see available packages.
          </p>
        </div>
      )}
    </div>
  );
}
