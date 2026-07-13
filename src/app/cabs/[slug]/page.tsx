import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cabs } from "@/data/cabs";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaOrg from "@/components/shared/SchemaOrg";
import EnquiryForm from "@/components/shared/EnquiryForm";
import { Car, Users, ShieldCheck, CheckCircle2, AlertTriangle, Briefcase, MapPin, PhoneCall, MessageCircle, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cabs.map((cab) => ({
    slug: cab.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cab = cabs.find((c) => c.slug === slug);
  if (!cab) return {};

  return {
    title: cab.slugTitle,
    description: cab.slugDesc,
    alternates: {
      canonical: `/cabs/${slug}`,
    }
  };
}

export default async function CabDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cab = cabs.find((c) => c.slug === slug);

  if (!cab) {
    notFound();
  }

  // TaxiService + Product Structured Data JSON-LD
  const cabSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `${cab.name} Cab Service Jaipur`,
    "description": cab.description,
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
    },
    "areaServed": cab.localitiesServed.map((loc) => ({
      "@type": "City",
      "name": loc
    })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": cab.price.replace(/[^\d-]/g, "").split("-")[0] || "11",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": cab.price.replace(/[^\d-]/g, "").split("-")[0] || "11",
        "priceCurrency": "INR",
        "unitCode": "KMT",
        "unitText": "kilometer"
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    }
  };

  const whatsappUrl = `https://wa.me/918209411937?text=${encodeURIComponent(
    `Hi Maheshwari Travels, I want to Enquire Tariff and booking details for ${cab.name} (${cab.price} ${cab.priceSub}). Please share availability and exact quote.`
  )}`;

  // Filter other cabs to recommend
  const otherCabs = cabs.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <SchemaOrg schema={cabSchema} />

      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-blue-600 to-emerald-500" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/cabs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Cabs &amp; Taxis
          </Link>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow ${cab.badgeColor}`}>
              ★ {cab.badge}
            </span>
            <span className="bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1 rounded-full text-xs font-bold">
              {cab.acType}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {cab.name} Taxi Service in Jaipur
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-medium leading-relaxed">
            {cab.description}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left / Main Details Column */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Image Showcase & Price Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-lg p-6 space-y-6">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-200 shadow-inner">
                <Image
                  src={cab.image}
                  alt={`${cab.name} on per kilometer rental tariff in Jaipur`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Price & Key Info Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Rental Tariff Rate</span>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 mt-0.5">
                    {cab.price}
                  </div>
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wide">
                    {cab.priceSub}
                  </span>
                </div>

                <div className="flex flex-col justify-center sm:items-end border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
                    <Users className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>{cab.seats}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
                    <Car className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{cab.acType}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Highlights / Features */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Key Features of {cab.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cab.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 font-bold">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For & Outstation Policy */}
            <div className="space-y-6 bg-amber-50/60 border border-amber-200/80 rounded-3xl p-6 sm:p-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-black text-sm uppercase tracking-wider">
                  <Briefcase className="h-4 w-4 text-amber-600" /> Ideal For Bookings:
                </div>
                <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                  {cab.idealFor}
                </p>
              </div>

              <div className="border-t border-amber-200/60 pt-4 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-black text-sm uppercase tracking-wider">
                  <AlertTriangle className="h-4 w-4 text-amber-600" /> Outstation Billing &amp; Policy:
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  {cab.billingRule}
                </p>
              </div>
            </div>

            {/* Local Areas Served Index */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" /> Areas Served across Jaipur
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We provide prompt 15-minute pickup for {cab.name} across all major localities, transit points, and residential hubs in Jaipur:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {cab.localitiesServed.map((loc, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-blue-50 text-blue-800 font-bold text-xs rounded-xl border border-blue-100">
                    📍 {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Helpline Banner */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl font-bold">Need Instant Availability?</h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                  Call Deepak Maheshwari directly for immediate booking confirmation and custom outstation packages.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="tel:9829135440"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-5 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call 9829135440</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3 px-5 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Enquiry Form & Other Cabs */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Enquiry Form Widget */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-1">
              <EnquiryForm defaultDestination={`Car Rental: ${cab.name} (${cab.price}/km)`} />
            </div>

            {/* Other Recommended Cabs */}
            <div className="border border-slate-100 rounded-3xl p-6 space-y-4 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base border-b border-slate-200 pb-3">
                Other Popular Taxis in Jaipur
              </h3>
              <div className="space-y-4">
                {otherCabs.map((oc) => (
                  <Link
                    key={oc.slug}
                    href={`/cabs/${oc.slug}`}
                    className="group flex items-center space-x-4 bg-white p-3.5 rounded-2xl border border-slate-150 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="relative h-16 w-24 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={oc.image}
                        alt={oc.name}
                        fill
                        sizes="100px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <h4 className="font-black text-slate-800 text-sm group-hover:text-blue-600 transition-colors truncate">
                        {oc.name}
                      </h4>
                      <div className="text-xs font-extrabold text-amber-600">
                        {oc.price} <span className="text-[10px] font-normal text-slate-400">/ km</span>
                      </div>
                      <div className="text-[10px] font-semibold text-slate-500">
                        {oc.seats} • {oc.acType}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
