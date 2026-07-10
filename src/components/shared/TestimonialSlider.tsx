"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Background Quote Icon Decoration */}
      <Quote className="absolute top-0 left-4 h-24 w-24 text-slate-100 -z-10" />

      {/* Main Review Card */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-8 sm:p-12 md:p-16 relative overflow-hidden transition-all duration-500">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Stars */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < testimonials[currentIndex].rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-slate-200"
                }`}
              />
            ))}
          </div>

          {/* Testimonial Content */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed italic font-sans max-w-2xl">
            "{testimonials[currentIndex].review}"
          </p>

          {/* User Profile */}
          <div className="flex flex-col items-center">
            {/* Avatar initials with nice gradient background */}
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 text-white font-bold text-lg flex items-center justify-center shadow-md mb-3 border-2 border-white">
              {testimonials[currentIndex].imageFallback}
            </div>
            <h4 className="font-bold text-slate-900 text-base sm:text-lg">
              {testimonials[currentIndex].name}
            </h4>
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mt-0.5">
              Traveled to {testimonials[currentIndex].destination}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-md text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-blue-600" : "w-2.5 bg-slate-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-md text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
