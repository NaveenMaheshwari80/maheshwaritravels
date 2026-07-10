import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maheshwari Travels | Premium Travel Agency & Tour Planner in Jaipur",
  description: "Book customized domestic and international tour packages, luxury honeymoon packages, hotel bookings, flight tickets, car rentals, and visa assistance with Maheshwari Travels. Run by Deepak Maheshwari in Jaipur.",
  keywords: [
    "Maheshwari Travels",
    "Travel Agency Jaipur",
    "Tour Planner Jaipur",
    "Kashmir Tour Packages",
    "Goa Tour Packages",
    "Rajasthan Tour Packages",
    "Deepak Maheshwari Travels",
    "International Tour Packages",
    "Visa Assistance Jaipur"
  ],
  metadataBase: new URL("https://maheshwaritravels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maheshwari Travels | Premium Travel Agency in Jaipur",
    description: "Book customized domestic and international tour packages, honeymoon getaways, flight bookings, and visa assistance with Maheshwari Travels.",
    url: "https://maheshwaritravels.com",
    siteName: "Maheshwari Travels",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheshwari Travels | Premium Tour Planner",
    description: "Plan your next dream holiday with Maheshwari Travels. Premium customized tour itineraries, hotel deals, and flight bookings.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
