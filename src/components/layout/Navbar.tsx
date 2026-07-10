"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white text-slate-800 border-b border-slate-100 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group" aria-label="Maheshwari Travels - Home">
            <Compass
              className="h-8 w-8 text-blue-600 transition-transform duration-500 group-hover:rotate-180"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl tracking-tight font-sans text-slate-900">
                Maheshwari
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold -mt-1.5 text-emerald-600">
                Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6" role="menubar" aria-label="Desktop navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                role="menuitem"
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-150 relative py-1 hover:text-emerald-500 ${
                  isActive(link.href)
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Quick CTA Call & Book */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919829135440"
              className="flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label="Call Maheshwari Travels: +91 9829135440"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>+91 9829135440</span>
            </a>
            <Link
              href="/contact?book=true"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-blue-700 transition-all transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md transition-colors text-slate-800 hover:bg-slate-100"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel with smooth sliding transition */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[520px] opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        } bg-white border-t border-slate-100 shadow-xl overflow-hidden`}
        role="region"
        aria-label="Mobile navigation"
      >
        <div className="px-4 space-y-1 sm:px-3 text-slate-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "hover:bg-slate-50 text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 px-3 flex flex-col space-y-3">
            <a
              href="tel:+919829135440"
              className="flex items-center justify-center space-x-2 text-slate-700 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call Us: +91 9829135440</span>
            </a>
            <Link
              href="/contact?book=true"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-blue-600 text-white py-3 rounded-xl text-sm font-bold shadow-md hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
