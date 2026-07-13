import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { Calendar, User, Clock, Compass, PhoneCall, MessageSquare, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Filter other popular articles
  const otherPosts = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  // Blog Posting Schema JSON-LD
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": "https://maheshwaritravels.com/images/travel_hero_bg.jpg",
    "genre": post.category,
    "keywords": post.keywords.join(", "),
    "publisher": {
      "@type": "TravelAgency",
      "name": "Maheshwari Travels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://maheshwaritravels.com/images/travel_hero_bg.jpg"
      }
    },
    "url": `https://maheshwaritravels.com/blog/${slug}`,
    "datePublished": "2026-07-05",
    "dateCreated": "2026-07-05",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "description": post.excerpt
  };

  return (
    <div className="bg-white min-h-screen">
      <SchemaOrg schema={blogSchema} />

      {/* Top Banner with dynamic gradient */}
      <div className={`bg-gradient-to-r ${post.bannerGradient} text-white py-16 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute -left-10 -bottom-10 h-72 w-72 text-white animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-300 bg-black/20 px-3 py-1 rounded-full border border-yellow-300/10">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-100">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-slate-300" />
              {post.date}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1 text-slate-300" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-slate-300" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main content grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Article details */}
          <article className="lg:col-span-8 space-y-6">
            <div
              className="prose prose-slate max-w-none prose-sm sm:prose-base leading-relaxed text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2 prose-h3:text-lg prose-ul:list-disc prose-ul:pl-6 prose-strong:text-slate-950 prose-a:text-blue-600 prose-a:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Quick Contact Banner */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-3xl p-6 shadow-lg space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-lg leading-tight">Planning a Custom Holiday?</h3>
                <p className="text-xs text-slate-200 leading-normal">
                  Let us design a personalized itinerary that matches your budget and timeline.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <a
                  href="tel:9829135440"
                  className="bg-white hover:bg-slate-50 text-blue-900 font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call +91 9829135440</span>
                </a>
                <a
                  href="https://wa.me/918209411937?text=Hi%2C%20I%20have%20a%20query%20from%20your%20blog%20article."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-md shadow-emerald-500/10"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Other Popular Articles */}
            <div className="border border-slate-100 rounded-3xl p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-base border-b border-slate-50 pb-2">
                Popular Articles
              </h3>
              <div className="space-y-4">
                {otherPosts.map((op) => (
                  <Link
                    key={op.slug}
                    href={`/blog/${op.slug}`}
                    className="group block space-y-1"
                  >
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      {op.title}
                    </h4>
                    <div className="flex items-center text-[10px] text-slate-400 font-medium">
                      <span>{op.date}</span>
                      <ChevronRight className="h-3 w-3 mx-1 text-slate-300" />
                      <span>{op.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
