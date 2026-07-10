import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { ShieldCheck, Users, Eye, Target, Compass, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Maheshwari Travels Jaipur",
  description: "Learn more about Maheshwari Travels, run by Deepak Maheshwari in Jhotwara, Jaipur. Read our mission, vision, and how we deliver luxury and budget travel since inception.",
  alternates: {
    canonical: "/about",
  }
};

export default function AboutPage() {
  const stats = [
    { label: "Years in Industry", value: "15+" },
    { label: "Satisfied Customers", value: "10,000+" },
    { label: "Destinations Covered", value: "150+" },
    { label: "Corporate Partners", value: "45+" },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Maheshwari Travels",
    "image": "https://maheshwaritravels.com/images/travel_hero_bg.jpg",
    "@id": "https://maheshwaritravels.com/#agency",
    "url": "https://maheshwaritravels.com",
    "telephone": "+919829135440",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "56, Bhagwati Nagar, Niwaru Road, Jhotwara",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302012",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SchemaOrg schema={localBusinessSchema} />

      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">About Maheshwari Travels</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Building trust and crafting customized journeys since inception.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Story & Owner Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Crafting Memorable Holidays for Over a Decade
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established in the heart of Jaipur, Rajasthan, <strong>Maheshwari Travels</strong> was founded with a singular focus: to make travel stress-free, luxurious, and accessible. Over the years, we have grown from a local car-rental operator into a full-scale travel planning house, managing thousands of packages annually.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We specialize in custom itineraries. Our founder, <strong>Deepak Maheshwari</strong>, believes in absolute honesty and direct coordination, ensuring that what you see in your itinerary is exactly what you experience on the ground.
            </p>

            {/* Stats list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card Column */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center border-2 border-white shadow-md">
                  DM
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Deepak Maheshwari</h3>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Founder & Proprietor</span>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                &ldquo;Travel has the power to change perspectives. At Maheshwari Travels, our vision is to provide hassle-free packages that inspire confidence and create timeless memories for families and couples.&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
                <div>
                  <span className="font-semibold text-slate-700 block">Office Address:</span>
                  56, Bhagwati Nagar, Niwaru Road, Jhotwara, Jaipur, RJ
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Helplines:</span>
                  +91 9829135440, +91 8209411937, +91 9983173115
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 space-y-4 hover-card-lift">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-50 text-blue-600">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To deliver premium travel experiences by offering highly custom, transparently priced tour packages, seamless flight/hotel bookings, and secure visa counseling that prioritize guest comfort and peace of mind above all else.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 space-y-4 hover-card-lift">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-emerald-50 text-emerald-600">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To become Rajasthan&apos;s leading customer-trusted travel agency, recognized for absolute reliability, customized holiday expertise, and technology-readiness to serve global travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Trust factors */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Customers Rely on Us</h2>
          <p className="text-slate-500 text-sm">Every booking represents a trust bond that we fulfill with complete care.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <Award className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-800 text-base">Verified Stays</h4>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed px-4">
              We check every property in person to guarantee cleanliness and comfort.
            </p>
          </div>
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <Users className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-800 text-base">Experienced Guides</h4>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed px-4">
              Our partners are licensed professionals who showcase true local heritages.
            </p>
          </div>
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-800 text-base">Travel Security</h4>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed px-4">
              We bundle comprehensive travel insurance policies for secure trips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
