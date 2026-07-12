import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  // Show top 5 destinations on the home page as requested
  const featuredDest = destinations.slice(0, 5);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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

        {/* Dynamic Asymmetric Grid for 5 cards: 1 big horizontal banner + 4 grid cards (makes website feel busy and premium) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Big Horizontal Banner Card (Goes across 12 cols on mobile/tablet, 7 cols on lg screens) */}
          {featuredDest[0] && (
            <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[350px] relative rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-slate-950 flex flex-col justify-end">
              <Image
                src={featuredDest[0].image || "/images/travel_hero_bg.jpg"}
                alt={`${featuredDest[0].name} - Top travel destination in India`}
                fill
                priority
                loading="eager"
                quality={65}
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 800px, 700px"
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
              
              <div className="relative z-10 p-8 space-y-4 text-white text-left">
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold tracking-wider bg-blue-600 text-white px-3 py-1 rounded-full uppercase">
                  <MapPin className="h-3 w-3" /> Top Choice
                </span>
                <h3 className="text-3xl font-black drop-shadow-md">{featuredDest[0].name}</h3>
                <p className="text-slate-200 text-sm leading-relaxed max-w-xl line-clamp-2">
                  {featuredDest[0].shortDesc}
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={`/destinations/${featuredDest[0].slug}`}
                    className="bg-white text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <span>Explore attractions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Right Side: Grid of 4 cards (takes 5 cols on lg screens) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {featuredDest.slice(1).map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col sm:flex-row lg:flex-row h-[140px] items-center"
              >
                {/* Visual Image Banner - Grid block half side */}
                <div className="relative w-full sm:w-1/3 lg:w-1/3 h-full shrink-0">
                  <Image
                    src={dest.image || "/images/travel_hero_bg.jpg"}
                    alt={`${dest.name} tour packages from Jaipur`}
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 350px, (max-width: 1024px) 250px, 200px"
                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </div>

                {/* Content block half side */}
                <div className="p-4 flex-grow flex flex-col justify-between h-full text-left">
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                      <span>{dest.name}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mt-1">
                      {dest.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-bold text-blue-600 uppercase tracking-wider pt-2 border-t border-slate-50">
                    <span>View Attractions</span>
                    <ArrowRight className="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
