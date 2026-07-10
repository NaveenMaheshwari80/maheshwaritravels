"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faqs";

// FAQ JSON-LD Schema - rendered server-side for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100" aria-labelledby="faq-heading">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            Common Inquiries
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Have questions about booking, safety, customization, or visas? Here are clear answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" role="list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                role="listitem"
                className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset transition-colors"
                >
                  <span className="flex items-center text-sm sm:text-base" itemProp="name">
                    <HelpCircle className="h-5 w-5 text-blue-500 mr-3 shrink-0" aria-hidden="true" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-slate-400 shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" aria-hidden="true" />
                  )}
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100 border-t border-slate-50" : "max-h-0 opacity-0"
                  }`}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 py-5 text-slate-600 text-xs sm:text-sm leading-relaxed bg-slate-50/50" itemProp="text">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
