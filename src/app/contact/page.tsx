import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaOrg from "@/components/shared/SchemaOrg";
import EnquiryForm from "@/components/shared/EnquiryForm";
import { Compass, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Maheshwari Travels Jaipur",
  description: "Get in touch with Maheshwari Travels. Contact Deepak Maheshwari in Jhotwara, Jaipur. Support numbers: 9829135440, 8209411937. Plan customized packages.",
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Maheshwari Travels",
    "image": "https://maheshwaritravels.com/images/travel_hero_bg.jpg",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Get in touch to customize your travel plans or request support.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
                Reach Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Our Office Information
              </h2>
              <p className="text-slate-500 text-sm">
                Feel free to call or WhatsApp us for instant bookings and queries.
              </p>
            </div>

            {/* Contacts details blocks */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">Office Address</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                    56, Bhagwati Nagar, Niwaru Road, Jhotwara, Jaipur, Rajasthan, Pin: 302012
                  </p>
                </div>
              </div>

              {/* Call helplines */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <Phone className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">Call Helplines</h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold tracking-wide">
                    +91 9829135440 (Deepak Maheshwari)<br />
                    +91 8209411937, +91 9983173115
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <Mail className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">Email Queries</h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold">
                    info@maheshwaritravels.com<br />
                    bookings@maheshwaritravels.com
                  </p>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <Clock className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">Business Hours</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-normal font-semibold">
                    Monday - Saturday: 09:00 AM - 08:00 PM<br />
                    Sunday: Closed (Helplines Active)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919829135440?text=Hi%2C%20I%20have%20an%20enquiry%20regarding%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold p-4 rounded-2xl shadow-lg hover:shadow-emerald-500/10 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact form & stylized map */}
          <div className="lg:col-span-7 space-y-8">
            <EnquiryForm />

            {/* Stylized Google Map Placeholders */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                Map Location Reference
              </h3>
              <div className="h-64 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider relative overflow-hidden shadow-inner">
                {/* Visual coordinate overlay */}
                <div className="absolute inset-0 bg-slate-900/5 hover:bg-slate-900/10 transition-opacity" />
                <Compass className="h-10 w-10 text-slate-400 mr-2 animate-spin-slow shrink-0" />
                <span>Jaipur (Jhotwara, Niwaru Road) Map Location</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
