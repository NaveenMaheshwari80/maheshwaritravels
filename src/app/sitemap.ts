import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { tourPackages } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maheshwaritravels.com";

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/packages",
    "/destinations",
    "/blog",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Services Dynamic Pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3. Tour Packages Dynamic Pages
  const packagePages = tourPackages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9, // Higher priority for booking landing pages
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
    ...servicePages,
    ...packagePages,
    ...destinationPages,
    ...blogPages,
  ];
}
