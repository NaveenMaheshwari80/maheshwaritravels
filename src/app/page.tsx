import React from "react";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedPackages from "@/components/sections/FeaturedPackages";
import PopularDestinations from "@/components/sections/PopularDestinations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header with Search Panel */}
      <Hero />

      {/* Services grid */}
      <ServicesOverview />

      {/* Featured Travel Packages */}
      <FeaturedPackages />

      {/* Popular tourist destinations */}
      <PopularDestinations />

      {/* Corporate trust and statistics */}
      <WhyChooseUs />

      {/* Sliding reviews */}
      <TestimonialsSection />

      {/* Recent blog posts */}
      <BlogSection />

      {/* Core Frequently Asked Questions */}
      <FAQSection />

      {/* Big call to action */}
      <ContactCTA />
    </div>
  );
}
