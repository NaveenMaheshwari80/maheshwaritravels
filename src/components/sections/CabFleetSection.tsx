"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Users,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Sparkles,
  Award,
  AlertTriangle,
  Briefcase,
  HelpCircle,
  Bus,
} from "lucide-react";

import { cabs, CabVehicle as Vehicle } from "@/data/cabs";

const FLEET_DATA = cabs;

export default function CabFleetSection({ showBillingTerms = false }: { showBillingTerms?: boolean } = {}) {
  const [activeTab, setActiveTab] = useState<"all" | "sedan" | "suv" | "van" | "bus">("all");

  const filteredVehicles =
    activeTab === "all" ? FLEET_DATA : FLEET_DATA.filter((v) => v.category === activeTab);

  const getWhatsAppUrl = (carName: string, price: string) => {
    const text = encodeURIComponent(
      `Hello Maheshwari Travels, I want to inquire about booking ${carName} (${price}) on ₹/km basis or outstation package. Please confirm availability and terms (Min 300km/day rule applicable).`
    );
    return `https://wa.me/918209411937?text=${text}`;
  };

  const getTariffInquiryUrl = (carName: string, price: string, priceSub: string) => {
    const text = encodeURIComponent(
      `Hello Maheshwari Travels, I want to Enquire Tariff and outstation quote for ${carName} (${price} ${priceSub}). Please share exact per km fare, toll/parking policies, and minimum daily distance rules.`
    );
    return `https://wa.me/918209411937?text=${text}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/80 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Bar / Trust Ticker (Makes section feel busy and professional) */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 mb-8 shadow-xl border border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="flex items-center space-x-3 border-r border-slate-800/80 pr-2">
            <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">Min 300 KM / Day Rule</h4>
              <p className="text-[11px] text-slate-300 leading-tight">Outstation charged min 300 km/day</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 lg:border-r border-slate-800/80 pr-2">
            <div className="h-10 w-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100">Verified Chauffeurs</h4>
              <p className="text-[11px] text-slate-400 leading-tight">Experienced & polite drivers</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 border-r border-slate-800/80 pr-2">
            <div className="h-10 w-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100">Well-Maintained Fleet</h4>
              <p className="text-[11px] text-slate-400 leading-tight">Clean, sanitized & AC cars</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100">24x7 Road Support</h4>
              <p className="text-[11px] text-slate-400 leading-tight">Instant backup across India</p>
            </div>
          </div>
        </div>

        {/* STRICT MINIMUM 300 KM ALERT BANNER (Only shown when showBillingTerms is true, e.g. on Services page) */}
        {showBillingTerms && (
          <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-amber-500/15 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-6 mb-12 text-left shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="h-12 w-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <AlertTriangle className="h-6 w-6 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="inline-block text-[11px] font-black uppercase tracking-widest bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md">
                    Strict Outstation Billing Policy
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    Minimum 300 KM per Calendar Day Rule Applicable
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                    To maintain quality service and avoid operational loss, all outstation vehicle bookings are subject to a <span className="underline decoration-amber-500 decoration-2 font-black text-slate-950">minimum charge of 300 KM per calendar day</span>. If your actual travel is less than 300 km in a day, you will be billed for exactly 300 km. If you travel more than 300 km, billing will be calculated strictly on actual kilometers covered!
                  </p>
                </div>
              </div>
              <a
                href="tel:9829135440"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-amber-400 font-black px-5 py-3 rounded-2xl text-xs uppercase tracking-wider transition-all shrink-0 text-center flex items-center justify-center gap-2 border border-amber-500/30 shadow-md"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Discuss Trip KM</span>
              </a>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl text-left space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              <Car className="h-3.5 w-3.5" /> Cab Rentals, Tempo Travellers & Buses
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Rent by Kilometer (<span className="text-blue-600">₹/km Basis</span>)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Choose from our well-maintained range of Sedans, SUVs, Tempo Travellers, and Luxury AC Buses. Transparent upfront per-kilometer rates designed for comfort, punctuality, and complete peace of mind.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-200/70 p-1.5 rounded-2xl shrink-0 self-start lg:self-end">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
              }`}
            >
              All Vehicles ({FLEET_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab("sedan")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === "sedan"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
              }`}
            >
              Sedans (2)
            </button>
            <button
              onClick={() => setActiveTab("suv")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === "suv"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
              }`}
            >
              SUVs & MUVs (3)
            </button>
            <button
              onClick={() => setActiveTab("van")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === "van"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
              }`}
            >
              Traveller / Urbania (2)
            </button>
            <button
              onClick={() => setActiveTab("bus")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1 ${
                activeTab === "bus"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
              }`}
            >
              <Bus className="h-3.5 w-3.5" />
              <span>AC Coaches (1)</span>
            </button>
          </div>
        </div>

        {/* Fleet Grid (Busy, Rich & Dynamic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car, idx) => (
            <div
              key={car.id}
              className="bg-white border-2 border-slate-100 hover:border-blue-500/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={`${car.name} on per kilometer rental tariff in Jaipur`}
                    fill
                    priority={showBillingTerms && idx <= 1}
                    loading={showBillingTerms && idx <= 1 ? "eager" : "lazy"}
                    quality={75}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md ${car.badgeColor}`}>
                      ★ {car.badge}
                    </span>
                  </div>

                  {/* Price Tag Overlay inside photo */}
                  <div className="absolute bottom-4 right-4 z-10 bg-slate-900/95 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-right shadow-lg">
                    <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight leading-none">
                      {car.price}
                    </div>
                    <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                      {car.priceSub}
                    </div>
                  </div>

                  {/* Seats Tag bottom left */}
                  <div className="absolute bottom-4 left-4 z-10 bg-white/95 text-slate-900 font-extrabold text-xs px-3 py-1.5 rounded-xl shadow flex items-center gap-1.5 border border-slate-200">
                    <Users className="h-3.5 w-3.5 text-blue-600" />
                    <span>{car.seats}</span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-4 text-left">
                  <div className="flex items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {car.name}
                    </h3>
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg shrink-0">
                      {car.acType}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed font-medium min-h-[40px]">
                    {car.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {car.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-50 p-2 rounded-xl border border-slate-150">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Min 300km reminder tag (only for cabs and tempo travellers, not for Bus) */}
                  {car.category !== "bus" ? (
                    <div className="bg-slate-100/80 rounded-xl px-3 py-1.5 flex items-center justify-between text-[11px] font-bold text-slate-700 border border-slate-200/60">
                      <span className="flex items-center gap-1 text-amber-600">
                        <AlertTriangle className="h-3 w-3" /> Min Charge:
                      </span>
                      <span>300 KM / Calendar Day</span>
                    </div>
                  ) : (
                    <div className="bg-slate-100/80 rounded-xl px-3 py-1.5 flex items-center justify-between text-[11px] font-bold text-slate-700 border border-slate-200/60">
                      <span className="flex items-center gap-1 text-indigo-600">
                        <Bus className="h-3 w-3" /> Booking Type:
                      </span>
                      <span>Custom Package / Contact Us</span>
                    </div>
                  )}

                  {/* Ideal For Note */}
                  <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-3 text-left">
                    <div className="text-[10px] font-black text-amber-800 uppercase tracking-wider flex items-center gap-1">
                      <Briefcase className="h-3 w-3 text-amber-600" /> Ideal For:
                    </div>
                    <div className="text-xs font-semibold text-slate-800 mt-0.5">
                      {car.idealFor}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={getWhatsAppUrl(car.name, car.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-emerald-500/30 flex items-center justify-center gap-1.5 text-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Book</span>
                  </a>
                  <a
                    href={getTariffInquiryUrl(car.name, car.price, car.priceSub)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-extrabold py-3 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 text-center cursor-pointer"
                  >
                    <span>Enquire Tariff</span>
                  </a>
                </div>
                <Link
                  href={`/cabs/${car.slug}`}
                  className="block w-full text-center py-2 bg-slate-50 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-bold text-xs rounded-xl border border-slate-200 hover:border-blue-200 transition-colors"
                >
                  View Full {car.name} Tariff & Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tariff & Billing Guidelines Banner (Only shown when showBillingTerms is true on Services page) */}
        {showBillingTerms && (
          <div className="mt-14 bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  <HelpCircle className="h-4 w-4" /> Comprehensive Billing Terms & Conditions
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  How does the Minimum 300 KM / Day Outstation Rule Work?
                </h3>
                <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-2 font-medium">
                  <p>
                    • <strong className="text-slate-900">Why 300 KM Minimum?</strong> When our vehicles travel outstation, we allocate the cab and chauffeur exclusively for your full day. To cover driver daily wage, highway maintenance, and fuel efficiency without running into loss, every outstation calendar day carries a minimum billing guarantee of 300 kilometers.
                  </p>
                  <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 font-semibold">
                    📌 <strong className="text-blue-600">Example 1 (Less than 300 km):</strong> You travel from Jaipur to Ajmer and back in 1 day (Total travel = 230 km). You will be billed for <strong className="underline">300 km × rate</strong>.<br />
                    📌 <strong className="text-blue-600">Example 2 (More than 300 km):</strong> You travel from Jaipur to Udaipur in 1 day (Total travel = 410 km). You will be billed for actual <strong className="underline">410 km × rate</strong>.
                  </p>
                  <p>
                    • <strong className="text-slate-900">Taxes & Allowances:</strong> Toll tax, state entry border tax, parking charges, and driver night allowance (applicable after 10:00 PM) are extra as per actual receipts.<br />
                    • <strong className="text-slate-900">Group Wedding & Pilgrimage Package:</strong> For booking Tempo Travellers or Luxury AC Buses for multi-day tours, call us for special lump-sum package quotations!
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <a
                  href="tel:9829135440"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 py-4 rounded-2xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>Call For Bus & Tempo: +91 9829135440</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
