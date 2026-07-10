"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, User, Search, Clock, Compass } from "lucide-react";
import { blogs, BlogPost } from "@/data/blogs";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Travel Guides", "Tips & Info", "Visa & Legal", "Recommendations"];

  const filteredBlogs = blogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Search & Categories Panel */}
      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-6 justify-between items-center">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search travel blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-700"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                  : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid mapping */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover-card-lift flex flex-col h-full"
            >
              {/* Colored Header Banner */}
              <div className={`h-48 bg-gradient-to-tr ${post.bannerGradient} relative flex items-center justify-center p-6 text-white text-center`}>
                <div className="absolute inset-0 bg-slate-900/10" />
                <Compass className="absolute top-4 left-4 h-5 w-5 text-white/40" />
                <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest bg-black/30 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold font-sans drop-shadow-md relative z-10 leading-snug line-clamp-3">
                  {post.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="flex items-center shrink-0">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center truncate">
                      <User className="h-3.5 w-3.5 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 pt-1">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase flex items-center shrink-0">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider group"
                  >
                    <span>Read Full Post</span>
                    <svg
                      className="h-3.5 w-3.5 ml-1 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <Compass className="h-16 w-16 text-slate-300 mx-auto mb-4 animate-spin-slow" />
          <h3 className="text-lg font-bold text-slate-700">No Articles Found</h3>
          <p className="text-slate-400 text-sm mt-1 max-w-xs mx-auto">
            Try adjusting your search queries or category filters to find other articles.
          </p>
        </div>
      )}
    </div>
  );
}
