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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  description:
    "Best Cab & Taxi Rental Service in Jaipur, Jhotwara & Vaishali Nagar. Book Swift Dzire (₹11/km), Toyota Etios (₹11/km), Ertiga 7 Seater (₹14/km), Innova Classic (₹17/km), Innova Crysta (₹18/km), Tempo Traveller (₹26/km) & Luxury Bus alongside customized Rajasthan, Kashmir, Goa & Domestic Tour Packages. Call: +91 9829135440.",
  keywords: [
    "Maheshwari Travels",
    "Maheshwari Travels Jaipur",
    "Maheshwari Travels Jhotwara",
    "cab service Jhotwara Jaipur",
    "taxi service Jhotwara Jaipur",
    "cab rental Vaishali Nagar Jaipur",
    "taxi service Vaishali Nagar Jaipur",
    "car rental near me Jaipur",
    "Swift Dzire taxi service Jaipur",
    "Swift Dzire cab Jhotwara",
    "Toyota Etios taxi Jaipur",
    "Ertiga 7 seater cab Jaipur",
    "Ertiga taxi service Jhotwara",
    "Innova Crysta on rent Jaipur",
    "Innova Crysta taxi service Jhotwara",
    "Toyota Innova Classic hire Jaipur",
    "Tempo Traveller hire in Jaipur",
    "Tempo Traveller 16 seater rent Jaipur",
    "Tempo Traveller Jhotwara Vaishali Nagar",
    "Force Urbania luxury van rent Jaipur",
    "luxury AC tourist bus hire Jaipur",
    "56 seater bus rental Jaipur",
    "outstation taxi service Jaipur",
    "Chardham Yatra cab from Jaipur",
    "Jaipur to Khatu Shyam Ji cab service",
    "Jaipur to Salasar Balaji taxi",
    "Jaipur airport pickup drop cab",
    "best travel agency in Jaipur",
    "best tour planner Jhotwara Jaipur",
    "Deepak Maheshwari travels",
    "Rajasthan tour package from Jaipur",
    "Kashmir tour package from Jaipur",
    "Goa tour package from Jaipur",
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
  "@type": ["TravelAgency", "LocalBusiness", "TaxiService", "AutoRental"],
  "@id": `${BASE_URL}/#organization`,
  name: "Maheshwari Travels",
  alternateName: "Maheshwari Travels Jaipur Cab Rental",
  description:
    "Top-rated taxi service & travel planner based in Jhotwara, Jaipur. Offering Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova Classic, Innova Crysta, Tempo Traveller & Luxury Bus rentals on ₹/km tariff, plus customized tour packages across India.",
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
  priceRange: "₹11 - ₹32 per km",
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
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
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
    { "@type": "City", name: "Jaipur" },
    { "@type": "Place", name: "Jhotwara, Jaipur" },
    { "@type": "Place", name: "Vaishali Nagar, Jaipur" },
    { "@type": "Place", name: "Mansarovar, Jaipur" },
    { "@type": "Place", name: "Malviya Nagar, Jaipur" },
    { "@type": "Place", name: "Raja Park, Jaipur" },
    { "@type": "Place", name: "Bani Park, Jaipur" },
    { "@type": "Place", name: "C-Scheme, Jaipur" },
    { "@type": "Place", name: "Sodala, Jaipur" },
    { "@type": "Place", name: "Jaipur Airport (JAI)" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jaipur Cab & Bus Rental Tariff",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Swift Dzire Taxi Service Jaipur",
          description: "Comfortable 4-seater sedan cab rental for local Jaipur sightseeing & outstation tours."
        },
        priceSpecification: { "@type": "UnitPriceSpecification", price: "11", priceCurrency: "INR", unitText: "Per Kilometer" }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Toyota Etios Taxi Rental Jaipur",
          description: "Spacious luggage-friendly 4-seater cab rental for Chardham & Rajasthan outstation trips."
        },
        priceSpecification: { "@type": "UnitPriceSpecification", price: "11", priceCurrency: "INR", unitText: "Per Kilometer" }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maruti Ertiga 7-Seater Cab Jaipur",
          description: "Ideal family MUV 7-seater taxi rental with roof carrier & AC comfort."
        },
        priceSpecification: { "@type": "UnitPriceSpecification", price: "14", priceCurrency: "INR", unitText: "Per Kilometer" }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Toyota Innova Classic Rental Jaipur",
          description: "Reliable & rugged 7-seater SUV cab ideal for outstation Rajasthan tours & airport pickups."
        },
        priceSpecification: { "@type": "UnitPriceSpecification", price: "17", priceCurrency: "INR", unitText: "Per Kilometer" }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Toyota Innova Crysta Luxury Taxi Jaipur",
          description: "Executive VIP luxury 7-seater MPV cab with plush captain seats & superior ride comfort."
        },
        priceSpecification: { "@type": "UnitPriceSpecification", price: "18", priceCurrency: "INR", unitText: "Per Kilometer" }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tempo Traveller Rental Jaipur (9 to 26 Seater)",
          description: "Spacious luxury AC Tempo Traveller for group tours, weddings, corporate trips & outstation journeys."
        },
        priceSpecification: { "@type": "UnitPriceSpecification", price: "26", priceCurrency: "INR", unitText: "Per Kilometer" }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Force Urbania Luxury Van Hire Jaipur",
          description: "State-of-the-art European style luxury van with panoramic windows & airline seating."
        },
        priceSpecification: { "@type": "UnitPriceSpecification", price: "32", priceCurrency: "INR", unitText: "Per Kilometer" }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury AC Tourist Bus / Coach Hire Jaipur",
          description: "Premium 35 to 56 seater luxury tourist coaches for destination weddings, conferences & group travel."
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
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

        {/* Favicon - Custom Maheshwari Travels Logo */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="msapplication-TileColor" content="#1e3a5f" />
        <meta name="theme-color" content="#1e3a5f" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased" suppressHydrationWarning>
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
