"use client";

import React from "react";
import { ShieldCheck, Sparkles, HeartHandshake, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Sparkles,
      title: "100% Customized Itineraries",
      desc: "Every traveler is unique. We tailor dates, hotels, sightseeing speeds, and activities to fit your exact desires.",
      colorClass: "bg-blue-50 text-blue-600",
    },
    {
      icon: ShieldCheck,
      title: "Complete Price Transparency",
      desc: "Zero hidden charges. Get completely clear breakdowns of GST, transfers, hotel vouchers, and attraction fees.",
      colorClass: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: HeartHandshake,
      title: "Deep Trusted Network",
      desc: "Years of partnerships with top-rated hotels, resorts, and verified drivers across India and globally.",
      colorClass: "bg-amber-50 text-amber-600",
    },
    {
      icon: Headphones,
      title: "24/7 Live Tour Support",
      desc: "Enjoy peace of mind. Our local representatives and dedicated coordinators are reachable round-the-clock on tour.",
      colorClass: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout: Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Why Travelers Trust Maheshwari Travels
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We don't just book tickets; we design memories. Based in Jaipur, Rajasthan, we handle all domestic and international tours with the utmost diligence, ensuring your safety, luxury, and budget alignment.
            </p>
            <div className="border-t border-slate-100 pt-6 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-extrabold text-blue-600">10,000+</span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Happy Travelers</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-emerald-600">15+</span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-slate-100 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${point.colorClass} mb-4`}>
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
