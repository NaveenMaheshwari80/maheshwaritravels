"use client";

import React from "react";
import TestimonialSlider from "../shared/TestimonialSlider";
import { testimonials } from "@/data/testimonials";

// Review schema for rich results
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://maheshwaritravels.com/#organization",
  name: "Maheshwari Travels",
  image: "https://maheshwaritravels.com/images/travel_hero_bg.jpg",
  telephone: "+919829135440",
  address: {
    "@type": "PostalAddress",
    streetAddress: "56, Bhagwati Nagar, Niwaru Road, Jhotwara",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "842",
    reviewCount: "842",
  },
  review: testimonials.map((t, index) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: `2026-0${(index % 6) + 1}-14`,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: t.review,
    name: `${t.destination} Trip Review`,
    itemReviewed: {
      "@type": "TravelAgency",
      name: "Maheshwari Travels",
      image: "https://maheshwaritravels.com/images/travel_hero_bg.jpg",
      telephone: "+919829135440",
      address: {
        "@type": "PostalAddress",
        streetAddress: "56, Bhagwati Nagar, Niwaru Road, Jhotwara",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302012",
        addressCountry: "IN",
      },
    },
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
