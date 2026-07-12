import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CabFleetSection from "@/components/sections/CabFleetSection";
import JaipurLocalSEOSection from "@/components/sections/JaipurLocalSEOSection";
import * as LucideIcons from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Cab & Coach Rental, Domestic Tours Jaipur",
  description: "Explore the cab & bus rental fleet on ₹/km basis along with core domestic, family, group, and honeymoon tour packages offered by Maheshwari Travels in Jaipur.",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Our Travel & Rental Services</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Featuring transparent per-kilometer cab & bus rentals alongside customized tour packages.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Cab Rental & Fleet Section (₹/km basis with Comprehensive Billing Terms & Conditions) */}
      <CabFleetSection showBillingTerms={true} />

      {/* Jaipur & Outstation Cab Service Directory (Exclusively on Services page) */}
      <JaipurLocalSEOSection />

      {/* Grid of all core tour packages */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Holiday & Tour Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Curated Tour & Holiday Layouts
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            In addition to our vehicle rentals, explore our specialized holiday layouts for families, couples, and corporate groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Compass;

            return (
              <div
                key={service.slug}
                className="bg-white border-2 border-slate-100 hover:border-blue-500/40 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon with service gradients */}
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-slate-100 group-hover:bg-blue-600 text-slate-800 group-hover:text-white transition-colors`}>
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-medium">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider group-hover:translate-x-1 duration-200"
                  >
                    <span>View Tour Details</span>
                    <LucideIcons.ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamic Contact Callout */}
      <section className="bg-white py-16 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Need Custom Tour or Fleet Combinations?</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Want to book a 56-seater bus along with 3 Innovas for a destination wedding or corporate conference? Speak directly with our booking desk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="tel:9829135440"
              className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25"
            >
              Call Helpline: +91 9829135440
            </a>
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all shadow-md"
            >
              Request Custom Quotation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
