"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Calendar, Users, Compass, Mail, Phone, User, MessageSquare } from "lucide-react";

interface EnquiryFormProps {
  defaultDestination?: string;
  className?: string;
}

export default function EnquiryForm({ defaultDestination = "", className = "" }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: defaultDestination,
    travelDate: "",
    travelers: 1,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (defaultDestination) {
      setFormData((prev) => ({ ...prev, destination: defaultDestination }));
    }
  }, [defaultDestination]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.destination.trim()) newErrors.destination = "Destination is required";
    if (!formData.travelDate) newErrors.travelDate = "Travel date is required";
    if (formData.travelers < 1) newErrors.travelers = "Must have at least 1 traveler";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "travelers" ? parseInt(value) || 1 : value,
    }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const whatsappText = `*New Free Custom Quote / Tariff Enquiry*
-----------------------------------------
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
📍 *Destination / Service:* ${formData.destination}
📅 *Travel Date:* ${formData.travelDate}
👥 *Travelers:* ${formData.travelers} Guest(s)
💬 *Special Requirements:* ${formData.message || "None"}
-----------------------------------------
Hello Maheshwari Travels, please share the exact itinerary & quote/tariff for my trip!`;

    const whatsappUrl = `https://wa.me/918209411937?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: defaultDestination,
      travelDate: "",
      travelers: 1,
      message: "",
    });
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center shadow-lg transition-all animate-fade-in-up space-y-4">
        <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto animate-bounce" />
        <h3 className="text-xl font-bold text-slate-900">Enquiry Sent to WhatsApp!</h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Your enquiry has been formatted and opened directly on our official WhatsApp inquiry desk (<strong className="text-slate-900">+91 8209411937</strong>). We will respond to you within minutes!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={`https://wa.me/918209411937?text=${encodeURIComponent("Hello Maheshwari Travels, following up on my recently submitted website quote request.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <span>Open WhatsApp Chat (+91 8209411937)</span>
          </a>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl border border-slate-100 shadow-xl p-6 sm:p-8 space-y-5 ${className}`}>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
        Request a Free Custom Quote
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 -mt-2">
        Fill out this form and get fully customized itineraries direct on your WhatsApp/Email.
      </p>

      {/* Name Input */}
      <div className="space-y-1">
        <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Full Name *
        </label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Deepak Sharma"
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none transition-all ${
              errors.name
                ? "border-red-300 focus:ring-red-200"
                : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
            }`}
          />
        </div>
        {errors.name && (
          <p className="text-xs text-red-500 flex items-center space-x-1">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> <span>{errors.name}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Input */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none transition-all ${
                errors.email
                  ? "border-red-300 focus:ring-red-200"
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone Input */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Mobile Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9829XXXXXX"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none transition-all ${
                errors.phone
                  ? "border-red-300 focus:ring-red-200"
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Destination Input */}
        <div className="space-y-1">
          <label htmlFor="destination" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Destination *
          </label>
          <div className="relative">
            <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Kashmir, Goa, Maldives"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none transition-all ${
                errors.destination
                  ? "border-red-300 focus:ring-red-200"
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
          </div>
          {errors.destination && (
            <p className="text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> <span>{errors.destination}</span>
            </p>
          )}
        </div>

        {/* Travel Date Input */}
        <div className="space-y-1">
          <label htmlFor="travelDate" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Travel Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              min={new Date().toISOString().split("T")[0]}
              value={formData.travelDate}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none transition-all ${
                errors.travelDate
                  ? "border-red-300 focus:ring-red-200"
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
          </div>
          {errors.travelDate && (
            <p className="text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> <span>{errors.travelDate}</span>
            </p>
          )}
        </div>
      </div>

      {/* Number of Travelers */}
      <div className="space-y-1">
        <label htmlFor="travelers" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Number of Travelers *
        </label>
        <div className="relative">
          <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
          <input
            type="number"
            id="travelers"
            name="travelers"
            min="1"
            max="100"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1">
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Your Travel Plan Requirements (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" aria-hidden="true" />
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about special hotel requests, food preferences, multi-city visits..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm uppercase tracking-wide flex items-center justify-center space-x-2 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending Request...</span>
          </>
        ) : (
          <span>Get Free Itinerary & Quote</span>
        )}
      </button>
    </form>
  );
}
