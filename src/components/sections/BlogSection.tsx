"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, Compass } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  // Show the latest 3 blog posts on the home page
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full">
              Travel Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Latest from Our Travel Blog
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Read travel guides, visa updates, budget holiday tips, and destination reviews written by our senior experts.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider shrink-0 group"
          >
            <span>Read All Articles</span>
            <ArrowRight className="h-4 w-4 ml-1.5 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover-card-lift flex flex-col h-full"
            >
              {/* Colored Card Header */}
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
                  {/* Meta data */}
                  <div className="flex items-center space-x-4 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="flex items-center shrink-0">
                      <Calendar className="h-3.5 w-3.5 mr-1 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center truncate">
                      <User className="h-3.5 w-3.5 mr-1 text-slate-400" />
                      {post.author}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 pt-1">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
