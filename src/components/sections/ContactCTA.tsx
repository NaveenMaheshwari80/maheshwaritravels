"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, PhoneCall, Compass } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Graphic Decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Compass className="absolute -right-20 -bottom-20 h-96 w-96 text-white animate-spin-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
            Ready to Plan Your Next Vacation?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium">
            Contact us today. Speak directly with Deepak Maheshwari to plan customized itineraries that match your exact budget and preferences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Phone Call Button */}
          <a
            href="tel:9829135440"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-900 font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:shadow-white/10 flex items-center justify-center space-x-2"
          >
            <PhoneCall className="h-5 w-5" />
            <span>Call +91 9829135440</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919829135440?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20tour%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 flex items-center justify-center space-x-2"
          >
            <MessageSquare className="h-5 w-5" />
            <span>WhatsApp Enquiry</span>
          </a>

          {/* Contact Form Link */}
          <Link
            href="/contact"
            className="w-full sm:w-auto border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-xs sm:text-sm transition-all"
          >
            Fill Request Form
          </Link>
        </div>
      </div>
    </section>
  );
}
