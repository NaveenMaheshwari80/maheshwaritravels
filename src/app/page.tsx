import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Statically import above-the-fold content, dynamically import below-the-fold components (code splitting)
const ServicesOverview = dynamic(() => import("@/components/sections/ServicesOverview"), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse rounded-3xl m-8" />
});
const FeaturedPackages = dynamic(() => import("@/components/sections/FeaturedPackages"), {
  loading: () => <div className="h-[500px] bg-white animate-pulse rounded-3xl m-8" />
});
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

      {/* Below the fold sections load lazily in chunks */}
      <ServicesOverview />
      <FeaturedPackages />
      <PopularDestinations />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactCTA />
    </div>
  );
}
