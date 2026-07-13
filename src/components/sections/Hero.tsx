"use client";

import React, { useState, useEffect } from "react";
import { Search, MapPin, Calendar, Users, Car, Navigation, MessageCircle, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { cabs, CabVehicle } from "@/data/cabs";

export default function Hero() {
  // State for Send Inquiry form fields
  const [members, setMembers] = useState("4"); // Default 4 members
  const [selectedCar, setSelectedCar] = useState("any");
  const [whereFrom, setWhereFrom] = useState("Jaipur");
  const [whereTo, setWhereTo] = useState("");
  const [whenDate, setWhenDate] = useState("");

  // Determine if group size > 4
  const isLargeGroup = Number(members) > 4;

  // Filter cars based on member selection:
  // If members <= 4: Show all vehicles (including Sedans)
  // If members > 4: Exclude Sedans (since Sedan is only 4+1 seats)
  const availableCars = isLargeGroup
    ? cabs.filter((cab) => cab.category !== "sedan")
    : cabs;

  // If user switches to >4 members while a Sedan is currently selected, reset selectedCar
  useEffect(() => {
    if (isLargeGroup && selectedCar !== "any") {
      const currentCarObj = cabs.find((c) => c.id === selectedCar);
      if (currentCarObj && currentCarObj.category === "sedan") {
        setSelectedCar("any");
      }
    }
  }, [members, isLargeGroup, selectedCar]);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();

    const carObj = cabs.find((c) => c.id === selectedCar);
    const carName = carObj
      ? `${carObj.name} (${carObj.seats} • ${carObj.price} ${carObj.priceSub})`
      : "Any Suitable Vehicle / Recommend Best Car";

    const inquiryMessage = `*🚗 New Cab & Trip Inquiry (Maheshwari Travels)*
-----------------------------------------
👥 *Select Member:* ${members} Member(s) ${isLargeGroup ? "(Requires 6+ Seater SUV/Van • Sedan Excluded)" : "(Up to 4+1 Allowed)"}
🚙 *Select Car:* ${carName}
📍 *Where From (Pickup):* ${whereFrom.trim() || "Jaipur"}
🏁 *To Destination:* ${whereTo.trim() || "Not specified"}
📅 *When (Travel Date):* ${whenDate || "Flexible / Not specified"}
-----------------------------------------
Hello Maheshwari Travels, please confirm cab availability, total tariff rate, and outstation booking terms for this inquiry!`;

    // WhatsApp URL targeting exactly 8209411937
    const whatsappUrl = `https://wa.me/918209411937?text=${encodeURIComponent(inquiryMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 sm:py-24"
      aria-label="Hero - Plan Your Trip with Maheshwari Travels"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/travel_hero_bg.jpg"
          alt="Maheshwari Travels - Scenic travel destinations including beaches and mountains"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          quality={65}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/50" /> {/* Dark gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/15 backdrop-blur-md text-emerald-300 border border-white/20 shadow-lg">
            <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" /> Welcome to Maheshwari Travels Jaipur
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-lg">
            Inspiring Journeys, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-200 to-amber-200">
              Tailored Perfectly for You
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-medium drop-shadow leading-relaxed">
            Experience absolute comfort across Rajasthan &amp; India. Choose your passengers and vehicle below for instant transparent tariff quotes directly on WhatsApp.
          </p>
        </div>

        {/* Send Inquiry Overlay Bar - Glassmorphism Card */}
        <div className="max-w-5xl mx-auto glassmorphism rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/30 animate-fade-in-up delay-200 text-left">
          {/* Overlay Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/40 pb-4 mb-5">
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide">
                  Send Inquiry &amp; Instant Tariff Quote
                </h2>
                <p className="text-[11px] font-bold text-slate-600">
                  Direct WhatsApp Response on <span className="text-emerald-700 underline font-black">+91 8209411937</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-extrabold shrink-0 self-start sm:self-auto">
              <MessageCircle className="h-4 w-4 text-emerald-600 shrink-0 fill-emerald-600" />
              <span>Direct WhatsApp Inquiry</span>
            </div>
          </div>

          <form onSubmit={handleSendInquiry} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-start">
              
              {/* 1. Select Member */}
              <div className="w-full bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all">
                <label htmlFor="inquiry-members" className="block text-[10px] uppercase font-black text-slate-500 tracking-wider mb-1 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-blue-600" /> Select Member
                </label>
                <select
                  id="inquiry-members"
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  className="w-full text-xs sm:text-sm font-extrabold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-slate-900 cursor-pointer"
                >
                  <option value="1">1 Member / Guest</option>
                  <option value="2">2 Members (Couple)</option>
                  <option value="3">3 Members (Small Family)</option>
                  <option value="4">4 Members (Standard Family)</option>
                  <option value="5">5 Members (Need SUV 6+ Seat)</option>
                  <option value="6">6 Members (Need SUV 7+ Seat)</option>
                  <option value="7">7 Members (Ertiga / Innova)</option>
                  <option value="8">8 Members (Innova / Tempo)</option>
                  <option value="12">9 to 12 Members (Tempo Traveller)</option>
                  <option value="16">13 to 16 Members (Urbania / Tempo)</option>
                  <option value="20">17 to 20+ Members (Bus / Coach)</option>
                </select>
              </div>

              {/* 2. Select Car (Dynamic based on members count) */}
              <div className="w-full bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all">
                <label htmlFor="inquiry-car" className="block text-[10px] uppercase font-black text-slate-500 tracking-wider mb-1 flex items-center gap-1">
                  <Car className="h-3.5 w-3.5 text-emerald-600" /> Select Car {isLargeGroup && <span className="text-amber-600 font-bold">(Sedans Hidden)</span>}
                </label>
                <select
                  id="inquiry-car"
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-full text-xs sm:text-sm font-extrabold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-slate-900 cursor-pointer truncate"
                >
                  <option value="any">✨ Recommend Best Suitable Car</option>
                  {availableCars.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.seats.split(" ")[0]} • {c.price}/km)
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Where From (Pickup) */}
              <div className="w-full bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all">
                <label htmlFor="inquiry-from" className="block text-[10px] uppercase font-black text-slate-500 tracking-wider mb-1 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" /> Where From...
                </label>
                <input
                  id="inquiry-from"
                  type="text"
                  value={whereFrom}
                  onChange={(e) => setWhereFrom(e.target.value)}
                  placeholder="e.g. Jaipur, Airport"
                  className="w-full text-xs sm:text-sm font-extrabold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none placeholder-slate-400 text-slate-900"
                />
              </div>

              {/* 4. To Destination */}
              <div className="w-full bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all">
                <label htmlFor="inquiry-to" className="block text-[10px] uppercase font-black text-slate-500 tracking-wider mb-1 flex items-center gap-1">
                  <Navigation className="h-3.5 w-3.5 text-purple-600" /> ...To Destination
                </label>
                <input
                  id="inquiry-to"
                  type="text"
                  value={whereTo}
                  onChange={(e) => setWhereTo(e.target.value)}
                  placeholder="e.g. Khatu Shyam Ji, Udaipur"
                  className="w-full text-xs sm:text-sm font-extrabold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none placeholder-slate-400 text-slate-900"
                  required
                />
              </div>

              {/* 5. When (Date Picker) */}
              <div className="w-full bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all">
                <label htmlFor="inquiry-date" className="block text-[10px] uppercase font-black text-slate-500 tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-blue-600" /> When (Travel Date)
                </label>
                <input
                  id="inquiry-date"
                  type="date"
                  value={whenDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setWhenDate(e.target.value)}
                  className="w-full text-xs sm:text-sm font-extrabold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-slate-900 cursor-pointer"
                />
              </div>

            </div>

            {/* Helper Alert when group is > 4 members */}
            {isLargeGroup && (
              <div className="bg-amber-50 border border-amber-300 rounded-2xl p-3 flex items-start gap-2.5 text-slate-800 text-xs font-semibold animate-fade-in-up">
                <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-amber-900">Sedan Cars Hidden for Your Selection:</span> You selected <strong className="underline">{members} members</strong>. Since Sedan taxis (Swift Dzire, Toyota Etios) only have <strong className="text-slate-950 font-black">4+1 seats</strong>, they have been automatically removed from the car list above so you only see comfortable 6+, 7+, and 12+ seater SUVs &amp; Vans!
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-200/50">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Inquiries sent directly to WhatsApp Number: <strong className="text-slate-950 font-black tracking-wide">+91 8209411937</strong></span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-3.5 rounded-2xl transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/45 flex items-center justify-center gap-2 text-sm uppercase tracking-wider shrink-0 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                <span>Send Inquiry on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Subtle bottom fade to overlay onto sections */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}

