import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaOrg from "@/components/shared/SchemaOrg";
import EnquiryForm from "@/components/shared/EnquiryForm";
import { Compass, Calendar, Award, CheckCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return {};

  return {
    title: `${dest.name} Travel Guide | Best Attractions & Tips`,
    description: dest.shortDesc,
    alternates: {
      canonical: `/destinations/${slug}`,
    }
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": dest.name,
    "description": dest.shortDesc,
    "url": `https://maheshwaritravels.com/destinations/${slug}`,
    "image": "https://maheshwaritravels.com/images/travel_hero_bg.jpg"
  };

  return (
    <div className="bg-white min-h-screen">
      <SchemaOrg schema={destinationSchema} />

      {/* Top Banner with dynamic gradient */}
      <div className={`bg-gradient-to-r ${dest.gradientClass} text-white py-16 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
            Destination Travel Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {dest.name}
          </h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                About the Destination
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {dest.description}
              </p>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">Best Time to Visit</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-normal">{dest.bestTimeToVisit}</p>
              </div>
            </div>

            {/* Key Attractions */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Popular Tourist Attractions
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.attractions.map((att, i) => (
                  <li key={i} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-normal">{att}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Tips */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Useful Travel Tips
              </h2>
              <div className="space-y-4">
                {dest.tips.map((tip, i) => (
                  <div key={i} className="flex items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                    <Award className="h-5 w-5 text-blue-600 shrink-0 mr-3 mt-0.5" />
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Enquiry Widget */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <EnquiryForm defaultDestination={`${dest.name} Tour Package`} />
          </div>

        </div>
      </section>
    </div>
  );
}
