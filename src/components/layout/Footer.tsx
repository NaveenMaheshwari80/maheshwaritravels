"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Destinations", href: "/destinations" },
    { name: "Latest Blog", href: "/blog" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const popularDestinations = [
    { name: "Kashmir", href: "/destinations/kashmir" },
    { name: "Goa", href: "/destinations/goa" },
    { name: "Rajasthan", href: "/destinations/rajasthan" },
    { name: "Kerala", href: "/destinations/kerala" },
    { name: "Maldives", href: "/destinations/maldives" },
    { name: "Europe", href: "/destinations/europe" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Company Profile & Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="relative h-9 w-9 shrink-0">
              <Image
                src="/logo.png"
                alt="Maheshwari Travels Logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white tracking-tight">Maheshwari</span>
              <span className="text-[10px] uppercase text-emerald-400 tracking-[0.2em] font-semibold -mt-1.5">
                Travels
              </span>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your trusted gateway to unforgettable global and domestic travel experiences. 
            Crafting premium, bespoke tours tailored to your needs.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-sky-500 text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919829135440"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-green-600 text-slate-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-base font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-emerald-400">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Popular Destinations */}
        <div>
          <h3 className="text-white text-base font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-emerald-400">
            Top Destinations
          </h3>
          <ul className="space-y-3 text-sm">
            {popularDestinations.map((dest) => (
              <li key={dest.name}>
                <Link href={dest.href} className="hover:text-emerald-400 transition-colors">
                  {dest.name} Tour Package
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter & Contact Quick Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-white text-base font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-emerald-400">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Subscribe to receive updates on exclusive seasonal discounts and travel deals.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 text-white placeholder-slate-500 px-4 py-2.5 rounded-l-md text-sm border-0 focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-400 text-xs mt-2 transition-all">
                Subscribed successfully! Thank you.
              </p>
            )}
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-2 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>56, Bhagwati Nagar, Niwaru Road, Jhotwara, Jaipur</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>+91 9829135440, +91 8209411937</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>info@maheshwaritravels.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Cab & Taxi SEO Keyword Cluster for Jaipur */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4 border-t border-slate-800/80 text-center md:text-left">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-center md:justify-start gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Popular Taxi & Cab Searches in Jaipur
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1.5 text-[11px] text-slate-400">
          <span className="hover:text-white transition-colors cursor-default">Taxi Service in Jhotwara Jaipur</span> •
          <span className="hover:text-white transition-colors cursor-default">Cab Service Vaishali Nagar Jaipur</span> •
          <span className="hover:text-white transition-colors cursor-default">Swift Dzire Taxi Jaipur (₹11/km)</span> •
          <span className="hover:text-white transition-colors cursor-default">Toyota Etios Cab Rental Jaipur</span> •
          <span className="hover:text-white transition-colors cursor-default">Ertiga 7-Seater Taxi Jhotwara</span> •
          <span className="hover:text-white transition-colors cursor-default">Innova Crysta on Rent in Jaipur</span> •
          <span className="hover:text-white transition-colors cursor-default">Tempo Traveller Hire Jaipur (16 Seater)</span> •
          <span className="hover:text-white transition-colors cursor-default">Force Urbania Luxury Van Jaipur</span> •
          <span className="hover:text-white transition-colors cursor-default">Luxury Tourist Bus Rental Jaipur</span> •
          <span className="hover:text-white transition-colors cursor-default">Jaipur Airport Pickup Drop Cab</span> •
          <span className="hover:text-white transition-colors cursor-default">Jaipur to Khatu Shyam Ji Cab</span> •
          <span className="hover:text-white transition-colors cursor-default">Jaipur to Salasar Balaji Taxi</span> •
          <span className="hover:text-white transition-colors cursor-default">Best Travel Agency Jhotwara Jaipur</span>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Maheshwari Travels. All Rights Reserved. Owner: Deepak Maheshwari. | <a href="https://stackflowdev.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-bold transition-colors">Designed by StackFlowDev.com</a>
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy-policy" className="hover:text-slate-300">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-slate-300">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
