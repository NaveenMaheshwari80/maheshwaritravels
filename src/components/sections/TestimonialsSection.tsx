"use client";

import React from "react";
import TestimonialSlider from "../shared/TestimonialSlider";
import { testimonials } from "@/data/testimonials";

// Review schema for rich results
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://maheshwaritravels.com/#organization",
  name: "Maheshwari Travels",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: testimonials.length.toString(),
    reviewCount: testimonials.length.toString(),
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
    },
    reviewBody: t.review,
    name: `${t.destination} trip review`,
  })),
};

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            What Our Travelers Say About Us
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Real stories from families, couples, and group travelers who booked their holidays with Maheshwari Travels.
          </p>
        </div>

        {/* Testimonials Slider */}
        <TestimonialSlider />
      </div>
    </section>
  );
}
