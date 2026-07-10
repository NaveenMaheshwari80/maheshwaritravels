import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import * as LucideIcons from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Flight, Hotel & Tour Booking Jaipur",
  description: "Explore the 12 core travel services offered by Maheshwari Travels in Jaipur, including domestic/international packages, hotel bookings, flight tickets, car rentals, and visa assistance.",
  alternates: {
    canonical: "/services",
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header banner */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <LucideIcons.Compass className="absolute -right-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Our Travel Services</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Providing complete travel arrangements and professional assistance for all your journeys.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Grid of all 12 services */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Compass;

            return (
              <div
                key={service.slug}
                className="bg-white border border-slate-100 rounded-3xl p-8 hover-card-lift flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon with service gradients */}
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-slate-50 text-slate-800 border border-slate-100`}>
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider group"
                  >
                    <span>View Service details</span>
                    <LucideIcons.ArrowRight className="h-3.5 w-3.5 ml-1 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamic Contact Callout */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Need Custom Service Combinations?</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Combine flight tickets, car rentals, and visa processing together. Speak with our founder directly to customize pricing plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="tel:9829135440"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-all"
            >
              Call +91 9829135440
            </a>
            <Link
              href="/contact"
              className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-6 py-3 rounded-full text-sm transition-all"
            >
              Fill Enquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
