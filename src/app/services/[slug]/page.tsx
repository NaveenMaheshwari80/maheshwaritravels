import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaOrg from "@/components/shared/SchemaOrg";
import EnquiryForm from "@/components/shared/EnquiryForm";
import * as LucideIcons from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Maheshwari Travels`,
    description: service.shortDesc,
    alternates: {
      canonical: `/services/${slug}`,
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Compass;

  // Schema structured data for service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDesc,
    "provider": {
      "@type": "TravelAgency",
      "name": "Maheshwari Travels",
      "telephone": "+919829135440",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "56, Bhagwati Nagar, Niwaru Road, Jhotwara",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302012",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SchemaOrg schema={serviceSchema} />

      {/* Top Banner with dynamic gradient background */}
      <div className={`bg-gradient-to-r ${service.bannerGradient} text-white py-16 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <LucideIcons.Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/20 rounded-xl">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Maheshwari Travels Services
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Service Details Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-10">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Service Overview
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                What We Offer / Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <LucideIcons.Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Book This With Us */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Why Choose Us for This Service
              </h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                    <p className="text-slate-600 text-xs sm:text-sm font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Booking Form Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <EnquiryForm defaultDestination={service.title} />
          </div>
        </div>
      </section>
    </div>
  );
}
