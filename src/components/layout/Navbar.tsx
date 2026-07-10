"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || pathname !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-slate-100"
          : "bg-slate-900/40 backdrop-blur-sm py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Compass
              className={`h-8 w-8 transition-transform duration-500 group-hover:rotate-180 ${
                isScrolled || pathname !== "/" ? "text-blue-600" : "text-white"
              }`}
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl tracking-tight font-sans">
                Maheshwari
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold -mt-1.5 ${
                isScrolled || pathname !== "/" ? "text-emerald-600" : "text-emerald-400"
              }`}>
                Travels
              </span>
            </div>
          </Link>
 
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 hover:text-emerald-500 ${
                  isActive(link.href)
                    ? isScrolled || pathname !== "/"
                      ? "text-blue-600 font-bold"
                      : "text-white font-bold border-b-2 border-emerald-400"
                    : isScrolled || pathname !== "/"
                    ? "text-slate-600 hover:text-blue-600"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Quick CTA Call & Book */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:9829135440"
              className={`flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-full border transition-colors ${
                isScrolled || pathname !== "/"
                  ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 9829135440</span>
            </a>
            <Link
              href="/contact?book=true"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Now
            </Link>
          </div>
 
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-md transition-colors ${
                isScrolled || pathname !== "/"
                  ? "text-slate-800 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-slate-100 shadow-xl`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 text-slate-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
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
              href="tel:9829135440"
              className="flex items-center justify-center space-x-2 text-slate-700 py-2.5 rounded-md border border-slate-200 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us: +91 9829135440</span>
            </a>
            <Link
              href="/contact?book=true"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-blue-600 text-white py-3 rounded-md text-sm font-bold shadow-md hover:bg-blue-700"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
