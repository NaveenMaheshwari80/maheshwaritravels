"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100 text-slate-500 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex items-center space-x-2">
        <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
          <Home className="h-3.5 w-3.5 mr-1" />
          <span>Home</span>
        </Link>

        {pathParts.map((part, index) => {
          const href = `/${pathParts.slice(0, index + 1).join("/")}`;
          const isLast = index === pathParts.length - 1;
          const label = part
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <React.Fragment key={href}>
              <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="text-slate-800 font-medium truncate" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-blue-600 transition-colors capitalize">
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
