"use client";

import React from "react";
import { MapPin, Car, Navigation, PhoneCall, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";

const JAIPUR_LOCALITIES = [
  { name: "Jhotwara", desc: "Our HQ & Main Cab Fleet Hub" },
  { name: "Vaishali Nagar", desc: "Express 15-Min Doorstep Pickup" },
  { name: "Mansarovar", desc: "Local & Outstation Cab Booking" },
  { name: "Malviya Nagar", desc: "Corporate & Retail Taxi Service" },
  { name: "Jaipur Airport (JAI)", desc: "24/7 Flight Pickup & Drop Cabs" },
  { name: "Jaipur Railway Station", desc: "Instant Station Transfers" },
  { name: "Bani Park & C-Scheme", desc: "Executive VIP & Hotel Transfers" },
  { name: "Raja Park & Sodala", desc: "Family Outstation & Tour Cabs" },
  { name: "Ajmer Road & Tonk Road", desc: "Express Highway Pickups" },
];

const POPULAR_FLEET_KEYWORDS = [
  { model: "Swift Dzire Taxi Service", rate: "₹11 / km", badge: "Most Popular Local Sedan" },
  { model: "Toyota Etios Outstation Cab", rate: "₹11 / km", badge: "Spacious Boot Space" },
  { model: "Maruti Ertiga 7-Seater Cab", rate: "₹14 / km", badge: "Budget Family SUV" },
  { model: "Toyota Innova Classic Cab", rate: "₹17 / km", badge: "Rugged Highway Cruiser" },
  { model: "Innova Crysta Luxury Taxi", rate: "₹18 / km", badge: "VIP Executive Comfort" },
  { model: "Tempo Traveller (9-26 Seater)", rate: "₹26 / km", badge: "Group & Wedding Special" },
  { model: "Force Urbania Luxury Van", rate: "₹32 / km", badge: "State-of-the-Art European Van" },
  { model: "Luxury AC Tourist Bus / Coach", rate: "Custom Package", badge: "35 to 56 Seater Coaches" },
];

const OUTSTATION_ROUTES = [
  "Jaipur to Khatu Shyam Ji & Salasar Balaji Cab",
  "Chardham Yatra Taxi & Coach Service from Jaipur",
  "Jaipur to Delhi NCR & Gurgaon Express Taxi",
  "Jaipur to Agra, Mathura & Vrindavan Tour Cab",
  "Jaipur to Udaipur, Mount Abu & Jodhpur Cab",
  "Jaipur to Shimla, Manali & Kashmir Holiday Tour",
  "Jaipur to Ranthambore Safari & Sariska Cab",
  "Jaipur to Pushkar, Ajmer & Kishangarh Taxi",
];

export default function JaipurLocalSEOSection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full">
            <Award className="h-3.5 w-3.5" /> Trusted Jaipur Taxi Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Jaipur & Outstation Cab Service Directory
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
            Headquartered at <strong className="text-white">Bhagwati Nagar, Niwaru Road, Jhotwara</strong>, Maheshwari Travels provides guaranteed doorstep pickup across every corner of Jaipur and Rajasthan.
          </p>
        </div>

        {/* Three Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Localities Served */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Jaipur Localities Served</h3>
                  <p className="text-xs text-slate-400 font-medium">Quick 15-30 Min Doorstep Pickup</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {JAIPUR_LOCALITIES.map((loc, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex items-center justify-between hover:border-blue-500/40 transition-colors">
                    <span className="text-sm font-bold text-slate-100">{loc.name}</span>
                    <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg shrink-0 ml-2">
                      {loc.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-700/60 text-xs text-slate-400 flex items-center gap-2 font-medium">
              <Clock className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Also covering Sikar Road, Ajmer Highway, Sitapura & Sanganer.</span>
            </div>
          </div>

          {/* Pillar 2: Fleet & Models SEO */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Car className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Dedicated Taxi Catalog</h3>
                  <p className="text-xs text-slate-400 font-medium">Transparent Per-Km Tariff Rates</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {POPULAR_FLEET_KEYWORDS.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex items-center justify-between hover:border-amber-500/40 transition-colors">
                    <div>
                      <div className="text-sm font-bold text-slate-100">{item.model}</div>
                      <div className="text-[10px] font-semibold text-slate-400 mt-0.5">{item.badge}</div>
                    </div>
                    <span className="text-xs font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-lg shrink-0 ml-2">
                      {item.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-700/60 text-xs text-slate-400 flex items-center gap-2 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>All cabs clean, sanitized, GPS-tracked with experienced drivers.</span>
            </div>
          </div>

          {/* Pillar 3: Outstation & Pilgrimage Routes */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Navigation className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Popular Outstation Routes</h3>
                  <p className="text-xs text-slate-400 font-medium">Intercity & Pilgrimage Taxi Network</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {OUTSTATION_ROUTES.map((route, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-sm font-bold text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{route}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-700/60 text-xs text-slate-400 flex items-center gap-2 font-medium">
              <PhoneCall className="h-4 w-4 text-blue-400 shrink-0" />
              <span>24/7 Helpline & instant quotation available on phone.</span>
            </div>
          </div>

        </div>

        {/* Bottom Trust SEO Callout Banner */}
        <div className="bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-slate-900 border border-blue-500/30 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-white">Looking for a Cab right now in Jhotwara or Vaishali Nagar?</h3>
            <p className="text-slate-300 text-sm font-medium max-w-2xl">
              Skip the app surge charges and waiting times. Speak directly with our founder, <strong className="text-amber-400">Deepak Maheshwari</strong>, for immediate cab dispatch and customized tour bookings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:9829135440"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="h-4 w-4" /> Call +91 9829135440
            </a>
            <a
              href="https://wa.me/919829135440?text=Hello%2C%20I%20am%20looking%20for%20a%20cab%20%2F%20tour%20booking%20in%20Jaipur."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 text-center flex items-center justify-center gap-2"
            >
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
