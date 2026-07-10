"use client";

import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import * as LucideIcons from "lucide-react";

export default function ServicesOverview() {
  // Show first 6 services on the homepage
  const displayedServices = services.slice(0, 6);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Premium Travel Services Designed for Comfort
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            From booking tickets and assisting with visas to designing complete bespoke itineraries, we take care of all your travel details.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => {
            // Dynamically resolve icon or default to Compass
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Compass;

            return (
              <div
                key={service.slug}
                className="bg-white border border-slate-100 rounded-3xl p-8 hover-card-lift flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-50 text-blue-600">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider group"
                  >
                    <span>View details</span>
                    <LucideIcons.ArrowRight className="h-3.5 w-3.5 ml-1 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-700 font-bold px-8 py-3.5 rounded-full hover:bg-slate-50 hover:text-blue-600 transition-all shadow-sm hover:shadow-md text-sm"
          >
            Explore All 12 Services
          </Link>
        </div>
      </div>
    </section>
  );
}
