import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo & Video Gallery | Beautiful Tourist Destination Memories",
  description: "Browse the travel photo gallery of Maheshwari Travels. View memories of our happy customers in Kashmir, Goa, Maldives, Europe, Kerala, and Rajasthan.",
  alternates: {
    canonical: "/gallery",
  }
};

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Travel Gallery</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Take a look at scenic sights, premium accommodations, and happy traveler memories.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Gallery Grid Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
    </div>
  );
}
