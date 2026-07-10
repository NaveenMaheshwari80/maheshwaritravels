import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tourPackages } from "@/data/packages";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaOrg from "@/components/shared/SchemaOrg";
import EnquiryForm from "@/components/shared/EnquiryForm";
import { Clock, Tag, MapPin, Compass, Check, X, ShieldAlert, Award, Star, HelpCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = tourPackages.find((p) => p.slug === slug);
  if (!pkg) return {};

  return {
    title: `${pkg.name} | Tour Package | Maheshwari Travels`,
    description: `Book the ${pkg.name}. Duration: ${pkg.duration}. Key Highlights: ${pkg.highlights.join(", ")}. Plan your vacation with Deepak Maheshwari.`,
    alternates: {
      canonical: `/packages/${slug}`,
    }
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = tourPackages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  // Schema.org Product / Trip structured data
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": pkg.name,
    "image": "https://maheshwaritravels.com/images/travel_hero_bg.jpg",
    "description": `Book the ${pkg.name}. Duration: ${pkg.duration}. Highlights include: ${pkg.highlights.slice(0, 3).join(", ")}.`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": pkg.price,
      "valueAddedTaxIncluded": "true",
      "priceValidUntil": "2027-12-31",
      "url": `https://maheshwaritravels.com/packages/${slug}`,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "TravelAgency",
        "name": "Maheshwari Travels"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SchemaOrg schema={tripSchema} />

      {/* Top visual hero banner */}
      <div className={`bg-gradient-to-tr ${pkg.galleryGradients[0] || "from-blue-600 to-indigo-900"} text-white py-20 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-yellow-300">
            {pkg.destination} Tour
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            {pkg.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold pt-2 text-slate-100">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1.5 text-yellow-300 shrink-0" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-5 w-5 mr-1.5 text-yellow-300 shrink-0" />
              <span>Starting from ₹{pkg.price.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Itinerary */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Visual Mini Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {pkg.galleryGradients.map((grad, i) => (
                <div
                  key={i}
                  className={`h-24 sm:h-32 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center text-white/50 text-[10px] font-bold uppercase tracking-wider shadow-sm`}
                >
                  Photo {i + 1}
                </div>
              ))}
            </div>

            {/* Tour Highlights */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <Award className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-normal">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day Wise Itinerary */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Day-Wise Itinerary
              </h2>
              <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
                {pkg.itinerary.map((item) => (
                  <div key={item.day} className="relative">
                    {/* Circle Pin */}
                    <div className="absolute -left-[35px] top-0.5 h-6 w-6 rounded-full bg-blue-600 border-4 border-white text-white shadow flex items-center justify-center text-[10px] font-extrabold">
                      {item.day}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        Day {item.day}: {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Options */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Accommodations / Hotels
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pkg.hotels.map((hotel, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                        {hotel.category}
                      </span>
                      <div className="flex items-center text-amber-500 text-xs font-semibold">
                        <Star className="h-3.5 w-3.5 fill-current mr-0.5" />
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base leading-tight">
                      {hotel.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-normal">
                      {hotel.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Terms of Package
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest flex items-center">
                    <Check className="h-5 w-5 mr-1" />
                    Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-600">
                        <Check className="h-4 w-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest flex items-center">
                    <X className="h-5 w-5 mr-1" />
                    Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-600">
                        <X className="h-4 w-4 text-red-500 mr-2 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Package FAQs */}
            {pkg.faqs && pkg.faqs.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                  Package Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {pkg.faqs.map((faq, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base flex items-start">
                        <HelpCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        {faq.question}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-7">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Enquiry Widget */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <EnquiryForm defaultDestination={pkg.name} />
          </div>

        </div>
      </section>
    </div>
  );
}
