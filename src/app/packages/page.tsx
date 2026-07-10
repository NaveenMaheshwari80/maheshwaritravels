import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PackagesList from "@/components/sections/PackagesList";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Tour Packages | Kashmir, Goa, Maldives, Europe Planners",
  description: "Browse our 12 customized tour packages at Maheshwari Travels. Read details, price, highlights, and custom day-wise itineraries for Goa, Kashmir, Kerala, Dubai, Maldives, Europe, etc.",
  alternates: {
    canonical: "/packages",
  }
};

export default function PackagesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Our Tour Packages</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Explore meticulously designed travel packages that suit couples, families, and group adventures.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Packages Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PackagesList />
      </section>
    </div>
  );
}
