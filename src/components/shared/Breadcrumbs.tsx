"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const BASE_URL = "https://maheshwaritravels.com";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const pathParts = pathname.split("/").filter((part) => part);

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...pathParts.map((part, index) => ({
      name: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/${pathParts.slice(0, index + 1).join("/")}`,
    })),
  ];

  // JSON-LD BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="py-3 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100 text-slate-500 text-xs sm:text-sm"
      >
        <ol
          className="max-w-7xl mx-auto flex items-center space-x-2 list-none"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li
                key={item.href}
                className="flex items-center space-x-2"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                {index > 0 && (
                  <ChevronRight className="h-3 w-3 text-slate-400 shrink-0 mr-2" aria-hidden="true" />
                )}
                {index === 0 && (
                  <Home className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    className="text-slate-800 font-medium truncate"
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
