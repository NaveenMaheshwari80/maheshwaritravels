"use client";

import React, { useState } from "react";
import { Compass, Camera, Eye } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  gradient: string;
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Destinations", "Hotels", "Monuments", "Customers"];

  const items: GalleryItem[] = [
    { id: 1, title: "Scenic Srinagar Dal Lake Houseboats", category: "Destinations", gradient: "from-sky-400 to-blue-600" },
    { id: 2, title: "Premium Overwater Resort Villas Maldives", category: "Hotels", gradient: "from-cyan-400 to-teal-500" },
    { id: 3, title: "Majestic Amer Fort Jaipur heritage", category: "Monuments", gradient: "from-amber-400 to-orange-600" },
    { id: 4, title: "Family Vacation Memories Alleppey Kerala", category: "Customers", gradient: "from-emerald-300 to-green-600" },
    { id: 5, title: "Himalayan Snow Adventure Solang Valley Manali", category: "Destinations", gradient: "from-sky-300 to-indigo-500" },
    { id: 6, title: "Five-Star Luxury Hotel Suite Dubai Marina", category: "Hotels", gradient: "from-slate-700 to-slate-900" },
    { id: 7, title: "Romantic Sunset Point Kovalam Beach Kerala", category: "Destinations", gradient: "from-rose-400 to-pink-600" },
    { id: 8, title: "Historic Old Goa Churches Portuguese Era", category: "Monuments", gradient: "from-amber-500 to-yellow-600" },
    { id: 9, title: "Honeymoon Couples Dinner Beachside Seminyak Bali", category: "Customers", gradient: "from-pink-500 to-rose-700" },
    { id: 10, title: "Heritage Havelis Boutique Stays Rajasthan", category: "Hotels", gradient: "from-yellow-500 to-amber-700" },
    { id: 11, title: "Eiffel Tower Light Show Paris Night View", category: "Monuments", gradient: "from-blue-700 to-indigo-900" },
    { id: 12, title: "Golden Desert Safari Camping Jaisalmer dunes", category: "Destinations", gradient: "from-orange-500 to-red-600" },
  ];

  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="space-y-12">
      {/* Category selector */}
      <div className="flex flex-wrap gap-2 justify-center bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            type="button"
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none cursor-pointer ${
              filter === cat
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative h-64 rounded-3xl overflow-hidden bg-slate-100 border border-slate-50 shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            {/* Background Graphic representing picture */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} flex items-center justify-center p-6 text-white text-center`}>
              <Camera className="h-10 w-10 text-white/35 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Hover overlay description */}
            <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                {item.category}
              </span>
              <h3 className="font-bold text-sm sm:text-base leading-snug drop-shadow-md">
                {item.title}
              </h3>
              <div className="flex items-center text-slate-300 text-xs pt-2">
                <Eye className="h-4 w-4 mr-1 text-slate-300" />
                <span>Enlarge memory</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
