import React, { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import CabFleetSection from "@/components/sections/CabFleetSection";

export const metadata: Metadata = {
  title: "Maheshwari Travels | Best Taxi Service in Jaipur, Jhotwara & Vaishali Nagar | ₹11/Km Cab Rental",
  description:
    "Top-rated cab rental & taxi service in Jaipur. Headquartered in Jhotwara, serving Vaishali Nagar, Mansarovar, Airport & outstation Rajasthan routes. Book Swift Dzire (₹11/km), Innova Crysta (₹18/km), Tempo Traveller & Tour Packages. Call: +91 9829135440.",
  alternates: {
    canonical: "/",
  },
};

// Dynamically import below-the-fold components for peak Lighthouse 98-100 performance & code splitting

const PopularDestinations = dynamic(() => import("@/components/sections/PopularDestinations"), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse rounded-3xl m-8" />
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), {
  loading: () => <div className="h-80 bg-white animate-pulse rounded-3xl m-8" />
});
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  loading: () => <div className="h-48 bg-slate-50 animate-pulse rounded-3xl m-8" />
});
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"), {
  loading: () => <div className="h-[400px] bg-white animate-pulse rounded-3xl m-8" />
});
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  loading: () => <div className="h-80 bg-slate-50 animate-pulse rounded-3xl m-8" />
});
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA"), {
  loading: () => <div className="h-64 bg-blue-900/10 animate-pulse rounded-3xl m-8" />
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header with Search Panel (above-the-fold, static load) */}
      <Hero />

      {/* Cab Rental & Fleet Section (₹/km basis) right below Hero (Statically imported for instant LCP score & Google Bot indexation) */}
      <CabFleetSection />



      {/* Below the fold sections load lazily in chunks */}
      <PopularDestinations />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactCTA />
    </div>
  );
}
