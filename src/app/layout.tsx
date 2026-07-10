import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Inter: better web vitals score vs Geist for travel-industry legibility
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // prevents FOIT/layout shift
});

const BASE_URL = "https://maheshwaritravels.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Maheshwari Travels | Tour Packages & Travel Agency in Jaipur",
    template: "%s | Maheshwari Travels",
  },
  description:
    "Book customized domestic & international tour packages, honeymoon trips, luxury holidays, flight tickets, hotel bookings, car rentals & visa assistance with Maheshwari Travels, Jaipur. Call: +91 9829135440.",
  keywords: [
    "Maheshwari Travels",
    "travel agency Jaipur",
    "tour packages Jaipur",
    "Kashmir tour package",
    "Goa tour package",
    "Rajasthan tour package",
    "honeymoon package Jaipur",
    "international tour packages",
    "visa assistance Jaipur",
    "Deepak Maheshwari travels",
    "cab rental Jaipur",
    "MICE corporate travel",
    "Kerala tour package",
    "Manali tour package",
    "Dubai tour package",
    "Bali tour package",
  ],

  authors: [{ name: "Deepak Maheshwari", url: BASE_URL }],
  creator: "Maheshwari Travels",
  publisher: "Maheshwari Travels",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Maheshwari Travels",
    locale: "en_IN",
    url: BASE_URL,
    title: "Maheshwari Travels | Premium Tour Planner in Jaipur",
    description:
      "Plan your dream holiday with Maheshwari Travels. Customized domestic & international packages, honeymoon getaways, hotel bookings & visa assistance from Jaipur.",
    images: [
      {
        url: "/images/travel_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Maheshwari Travels - Premium Tour Packages from Jaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maheshwari Travels | Premium Tour Planner in Jaipur",
    description:
      "Plan your dream holiday with Maheshwari Travels. Premium customized tour itineraries, hotel deals & flight bookings from Jaipur.",
    images: ["/images/travel_hero_bg.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Add Google Search Console verification token here when available
    // google: "VERIFICATION_TOKEN",
  },

  category: "travel",
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "Maheshwari Travels",
  alternateName: "Maheshwari Travels Jaipur",
  description:
    "Premium travel agency based in Jhotwara, Jaipur offering customized domestic and international tour packages, honeymoon trips, hotel bookings, flight tickets, car rentals, and visa assistance.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/travel_hero_bg.jpg`,
    width: 1200,
    height: 630,
  },
  image: `${BASE_URL}/images/travel_hero_bg.jpg`,
  telephone: ["+919829135440", "+918209411937", "+919983173115"],
  email: "info@maheshwaritravels.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Net Banking, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "56, Bhagwati Nagar, Niwaru Road, Jhotwara",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9392,
    longitude: 75.7466,
  },
  hasMap: "https://maps.google.com/?q=26.9392,75.7466",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://twitter.com",
  ],
  founder: {
    "@type": "Person",
    name: "Deepak Maheshwari",
    jobTitle: "Founder & Proprietor",
    telephone: "+919829135440",
    worksFor: { "@id": `${BASE_URL}/#organization` },
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "City", name: "Jaipur" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tour Packages",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kashmir Tour Package" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Goa Beach Holiday" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rajasthan Heritage Tour" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kerala Backwaters Package" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "International Tour Packages" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "842",
    reviewCount: "842",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Maheshwari Travels",
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/contact?dest={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
    >
      <head>
        {/* Preconnect to Google Fonts CDN (already used for Inter) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://maps.google.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        {/* Skip to main content - accessibility + SEO */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* JSON-LD Structured Data */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <Navbar />
        <main className="flex-grow pt-16" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
