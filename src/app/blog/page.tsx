import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BlogList from "@/components/sections/BlogList";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Blog | Latest Guides, Tips & Visa Updates",
  description: "Read the Maheshwari Travels blog. Get budget travel tips, Dubai visa guidance, best holiday times in Kashmir, honeymoons recommendations, and destination guides.",
  alternates: {
    canonical: "/blog",
  }
};

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Our Travel Blog</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Discover articles, visa guides, travel tips, and destination inspiration compiled by our team.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Blog Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogList />
      </section>
    </div>
  );
}
