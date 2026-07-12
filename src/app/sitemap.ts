import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { destinations } from "@/data/destinations";
import { blogs } from "@/data/blogs";
import { cabs } from "@/data/cabs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maheshwaritravels.com";

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/cabs",
    "/destinations",
    "/blog",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/cabs" ? 0.9 : 0.8,
  }));

  // 2. Cabs/Taxis Dynamic Pages (Highest Priority for Car Rentals)
  const cabPages = cabs.map((cab) => ({
    url: `${baseUrl}/cabs/${cab.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Services Dynamic Pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Destinations Dynamic Pages
  const destinationPages = destinations.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 5. Blogs Dynamic Pages
  const blogPages = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...cabPages,
    ...servicePages,
    ...destinationPages,
    ...blogPages,
  ];
}
