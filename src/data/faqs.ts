export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How do I book a tour package with Maheshwari Travels?",
    answer: "You can book by submitting the contact/enquiry form on our website, calling us directly at any of our numbers (9829135440, 8209411937, 9983173115), or messaging us on WhatsApp. Our travel planners will get back to you with custom quotes.",
    category: "Booking"
  },
  {
    question: "Can I customize the tour itineraries listed on the website?",
    id: 2,
    answer: "Absolutely! All our packages are 100% customizable. You can adjust the number of days, hotel category (3-star, 4-star, 5-star), destinations covered, and inclusions to fit your preferences and budget.",
    category: "Customization"
  },
  {
    id: 3,
    question: "What is your cancellation and refund policy?",
    answer: "Our cancellation fees depend on the policy of our partner hotels and airlines. Typically, cancellation made 30 days prior to travel incurs minimum charges, whereas cancellation closer to the date incurs charges depending on non-refundable bookings. We discuss this clearly during confirmation.",
    category: "Policy"
  },
  {
    id: 4,
    question: "Do you provide flight bookings and visa assistance separately?",
    answer: "Yes, we provide independent flight ticketing, visa application assistance, passport renewal services, and car rentals, even if you are not booking a complete tour package with us.",
    category: "Services"
  },
  {
    id: 5,
    question: "What travel options do you provide for corporate outings?",
    answer: "We specialize in corporate MICE tours. We arrange group flights, hotel bookings with conference halls, team-building facilitators, catering, local transport, and corporate GST-compliant invoicing.",
    category: "Corporate"
  }
];
