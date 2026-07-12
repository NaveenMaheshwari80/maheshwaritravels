import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CabFleetSection from "@/components/sections/CabFleetSection";
import JaipurLocalSEOSection from "@/components/sections/JaipurLocalSEOSection";
import { Car, Compass, ShieldCheck, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Jaipur Taxi & Cab Rental Directory | Swift Dzire, Innova Crysta, Urbania Rates",
  description: "Explore Maheshwari Travels taxi fleet in Jaipur. Book Swift Dzire (₹11/km), Ertiga (₹14/km), Innova Crysta (₹18/km), Tempo Traveller (₹26/km), and Urbania (₹32/km) with 24/7 service across Jhotwara, Vaishali Nagar, and Outstation routes.",
  alternates: {
    canonical: "/cabs",
  }
};

export default function CabsListingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-blue-600/30 px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 font-bold text-xs uppercase tracking-widest">
            <Car className="h-4 w-4" />
            <span>Jaipur Fleet Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Taxi &amp; Cab Rental Fleet
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Transparent per-kilometer tariffs, chilled AC vehicles, and reliable local chauffeurs. Choose from compact sedans, spacious MPVs, and ultra-luxury vans.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Cab Fleet Section with Billing Terms shown */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <CabFleetSection showBillingTerms={true} />
      </section>

      {/* Local SEO Granular Directory */}
      <JaipurLocalSEOSection />

      {/* Quick Info & Assurance Strip */}
      <section className="bg-slate-900 text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="p-3.5 bg-blue-600/20 text-blue-400 rounded-2xl shrink-0 border border-blue-500/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Direct Owner Coordination</h4>
              <p className="text-slate-400 text-xs leading-relaxed mt-1">
                No middleman commissions. Coordinate directly with Deepak Maheshwari for exact vehicle commitment.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="p-3.5 bg-emerald-600/20 text-emerald-400 rounded-2xl shrink-0 border border-emerald-500/20">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">15-Minute Local Pickup</h4>
              <p className="text-slate-400 text-xs leading-relaxed mt-1">
                Stationed across Jhotwara, Vaishali Nagar, and Mansarovar for lightning-fast airport &amp; railway station pickups.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="p-3.5 bg-amber-600/20 text-amber-400 rounded-2xl shrink-0 border border-amber-500/20">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Transparent 300 KM Rule</h4>
              <p className="text-slate-400 text-xs leading-relaxed mt-1">
                Clear outstation minimum mileage policy ensuring you only pay what is agreed upon with zero surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
