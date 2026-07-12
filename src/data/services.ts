export interface Service {
  slug: string;
  title: string;
  iconName: string;
  shortDesc: string;
  description: string;
  features: string[];
  benefits: string[];
  bannerGradient: string;
}

export const services: Service[] = [
  {
    slug: "domestic-tours",
    title: "Domestic Tours",
    iconName: "Compass",
    shortDesc: "Explore the rich heritage and diverse landscapes of India, from Kashmir to Kerala.",
    description: "Discover India's magical destinations with our expertly curated domestic tours. From the snow-capped Himalayan ranges to the pristine beaches of Goa, the vibrant cultures of Rajasthan, and the soothing backwaters of Kerala, we offer customizable travel plans that guarantee comfort, safety, and unforgettable memories.",
    features: [
      "Customizable itineraries matching your interests",
      "Comfortable handpicked accommodation options",
      "Reliable local transport and guided excursions",
      "24/7 on-tour customer support support line"
    ],
    benefits: [
      "Zero hidden charges, clear price breakdowns",
      "Experienced local tour coordinators",
      "Flexible booking and rescheduling options"
    ],
    bannerGradient: "from-blue-600 to-indigo-800"
  },
  {
    slug: "honeymoon-packages",
    title: "Honeymoon Packages",
    iconName: "Heart",
    shortDesc: "Celebrate your love in romantic destinations with customized luxury layouts.",
    description: "Begin your beautiful journey together with our romantic honeymoon packages. We design intimate and luxurious escapes featuring candle-lit dinners, private sightseeing, floral room decorations, and exclusive couples' experiences in romantic destinations across India like Kashmir, Kerala, Goa, and Himachal.",
    features: [
      "Romantic room setup and surprise welcome amenities",
      "Private candle-lit dinners and couples spa sessions",
      "Exclusive private vehicle transfers for complete privacy",
      "Flexibility to go at your own comfortable pace"
    ],
    benefits: [
      "Highly personalized and thoughtful touches",
      "Stunning scenery locations for photography",
      "Complimentary honeymoon travel goodies"
    ],
    bannerGradient: "from-rose-500 to-pink-700"
  },
  {
    slug: "family-tours",
    title: "Family Tours",
    iconName: "Users",
    shortDesc: "Create lasting memories with specially designed family-friendly vacations.",
    description: "Family vacations are about bonding and creating stories. Our family packages are structured to accommodate guests of all ages, ensuring child-friendly hotels, senior-citizen-friendly travel schedules, and activities that keep everyone engaged, safe, and happy.",
    features: [
      "Interconnected or spacious family rooms",
      "Balanced itineraries with relaxed transit schedules",
      "Sightseeing spots suited for all age brackets",
      "Kid-friendly dining suggestions and assistance"
    ],
    benefits: [
      "Worry-free planning for multi-generation groups",
      "Affordable group deals and kids discounts",
      "Secure and private AC coaches"
    ],
    bannerGradient: "from-amber-500 to-orange-700"
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    iconName: "Users3",
    shortDesc: "Fun-filled, safe, and highly coordinated group travel adventures.",
    description: "Travel is better together. Join our fun-filled fixed departure group tours or create a custom private group tour for your friends, community, or colleagues. Enjoy shared laughs, cost-efficient booking deals, and professional group leaders managing every single detail.",
    features: [
      "Dedicated professional tour manager accompanying the group",
      "High-quality AC tour coaches for comfortable group transits",
      "Curated group dining showcasing regional cuisines",
      "Interactive icebreaking and evening group activities"
    ],
    benefits: [
      "Unbeatable price-to-value ratio for group bookings",
      "Safe environment for solo and first-time travelers",
      "Opportunity to meet and network with like-minded travelers"
    ],
    bannerGradient: "from-purple-600 to-indigo-900"
  },
  {
    slug: "corporate-tours",
    title: "Corporate Tours (MICE)",
    iconName: "Briefcase",
    shortDesc: "Seamless corporate retreats, team building, conferences, and MICE.",
    description: "Elevate your corporate travel experience. We specialize in corporate MICE (Meetings, Incentives, Conferences, Exhibitions), arranging flawless business travel, incentive trips, team-building offsites, and conferences with high-end audiovisual setups, meetings coordinates, and premium hospitality.",
    features: [
      "End-to-end conference hall and AV setup coordination",
      "Custom team building activities and expert facilitators",
      "VIP flight/hotel booking and fast track airport support",
      "Slick corporate billing, tax-invoice compliance, and detailed reporting"
    ],
    benefits: [
      "Dedicated account managers for single-point contact",
      "Strict adherence to corporate budgets and guidelines",
      "GST-compliant invoicing for hassle-free tax inputs"
    ],
    bannerGradient: "from-slate-700 to-slate-900"
  },
  {
    slug: "car-rental",
    title: "Car & Coach Rental",
    iconName: "Car",
    shortDesc: "Premium sedans, SUVs, and luxury Tempo Travellers for local & outstation tours.",
    description: "Rent clean, comfortable vehicles with polite, experienced drivers. Based in Jaipur, we operate a premium fleet of hatchbacks, luxury sedans, rugged SUVs, and spacious Tempo Travellers. Perfect for local sightseeing in Jaipur, outstation tours in Rajasthan, or airport transfers.",
    features: [
      "Chauffeur-driven well-maintained clean vehicle fleet",
      "Drivers with deep routing knowledge of all of Rajasthan",
      "GPS tracking and speed limiting enabled coaches",
      "Transparent per-km or fixed full-day hire pricing"
    ],
    benefits: [
      "Drivers trained in hospitality and tourist safety",
      "24/7 vehicle breakdown replacement assurance",
      "No hidden driver allowance or parking pricing surprises"
    ],
    bannerGradient: "from-neutral-700 to-neutral-900"
  }
];
