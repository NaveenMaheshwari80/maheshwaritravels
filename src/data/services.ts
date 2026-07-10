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
    slug: "international-tours",
    title: "International Tours",
    iconName: "Globe",
    shortDesc: "Embark on global journeys to iconic destinations with complete peace of mind.",
    description: "Cross borders and experience the world. Whether you dream of shopping in Dubai, relaxing on the white sands of the Maldives, exploring the historical landmarks of Europe, or seeking adventure in Southeast Asia, our international tour packages cover everything from flights and stays to visas and sightseeing.",
    features: [
      "End-to-end itinerary management",
      "Verified premium international hotel stays",
      "Bilingual local guides and transfers",
      "Tailor-made itineraries for couples, families, and groups"
    ],
    benefits: [
      "Complete visa guidance and assistance",
      "Hassle-free international travel insurance inclusion",
      "Best rates for multi-city flight bookings"
    ],
    bannerGradient: "from-teal-600 to-emerald-800"
  },
  {
    slug: "honeymoon-packages",
    title: "Honeymoon Packages",
    iconName: "Heart",
    shortDesc: "Celebrate your love in romantic destinations with customized luxury layouts.",
    description: "Begin your beautiful journey together with our romantic honeymoon packages. We design intimate and luxurious escapes featuring candle-lit dinners, private sightseeing, floral room decorations, and exclusive couples' experiences in romantic destinations like Switzerland, Maldives, Bali, Kashmir, and Kerala.",
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
    iconName: "Users3", // We will map this to Lucide's Users or similar in code
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
    slug: "hotel-booking",
    title: "Hotel Booking",
    iconName: "Home", // Map to Lucide's Hotel / Building or Home
    shortDesc: "Exclusive partnerships with luxury resorts, heritage villas, and budget stays.",
    description: "Unlock special corporate and retail rates at hotels worldwide. Through our established global network of partners, we offer rooms at verified, top-rated hotels, boutique home-stays, historic heritage havelis, and five-star luxury resorts at rates lower than public booking portals.",
    features: [
      "Access to exclusive wholesale and offline rates",
      "Verified properties with consistent hygienic standards",
      "Flexible cancelation and dynamic late checkout permissions",
      "Special inclusions like free breakfast, Wi-Fi, and upgrades"
    ],
    benefits: [
      "Personalized room requests (view preference, high floor, etc.)",
      "Direct backup contact at the hotel front office",
      "Vast selection from budget to super-luxury properties"
    ],
    bannerGradient: "from-sky-500 to-blue-700"
  },
  {
    slug: "flight-booking",
    title: "Flight Booking",
    iconName: "Plane",
    shortDesc: "Instant flight ticketing, group flight bookings, and corporate air fares.",
    description: "Get the best flight routes and special travel fares. We manage domestic and international flight ticketing, group seats for weddings and business tours, seat selection, meal preferences, excess baggage bookings, and direct assistance in case of flight delays or cancelations.",
    features: [
      "Access to special offline and corporate flight inventories",
      "Instant group ticketing with flexible name-entry timelines",
      "Complimentary web check-in and boarding pass delivery",
      "Real-time alerts on flight schedule changes"
    ],
    benefits: [
      "Hassle-free refunds and transparent cancellation fee structure",
      "Liaison directly with airlines on your behalf",
      "Baggage and wheelchair assistance booking options"
    ],
    bannerGradient: "from-blue-400 to-indigo-600"
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    iconName: "ClipboardCheck",
    shortDesc: "Expert document verification and visa processing with high success rates.",
    description: "Visa processing can be tedious and stressful. Our expert visa counseling team reviews your documents, guides you on finances, formats invitation letters, schedules embassy appointments, and submits applications meticulously to maximize your visa approval probability for US, UK, Schengen, Canada, Dubai, and Singapore.",
    features: [
      "Detailed document checklist customized to your profile",
      "Meticulous visa application form review and filling",
      "Mock interviews and interview scheduling support",
      "Regular updates on your application status"
    ],
    benefits: [
      "Highly experienced team with deep understanding of visa rules",
      "Minimize the risk of visa rejection due to document errors",
      "Doorstep document pick-up and delivery options"
    ],
    bannerGradient: "from-emerald-500 to-teal-700"
  },
  {
    slug: "passport-services",
    title: "Passport Services",
    iconName: "FileText",
    shortDesc: "Hassle-free passport applications, renewals, and Tatkaal assistance.",
    description: "We simplify passport documentation. Whether you are applying for a fresh passport, seeking a renewal for an expiring passport, changing addresses, or processing an urgent Tatkaal application, we walk you through the documents, fill out the online forms, and book your slots at the Passport Seva Kendra.",
    features: [
      "Fresh passport and renewal application booking",
      "Tatkaal passport application guidance",
      "Name-change and address-change document processing",
      "E-passport and damage-passport consultation"
    ],
    benefits: [
      "Avoid standing in lines or making booking mistakes",
      "Expert scrutiny of birth certificates, affidavits, and IDs",
      "Complete transparency on government fees"
    ],
    bannerGradient: "from-cyan-600 to-blue-800"
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
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    iconName: "Shield",
    shortDesc: "Secure your trips against medical emergencies, cancellations, and baggage loss.",
    description: "Protect your travels and finances. We offer comprehensive travel insurance packages covering medical emergency costs abroad, flight delay compensations, trip cancellation losses, lost passport recovery assistance, and baggage loss coverage. Essential for complete peace of mind.",
    features: [
      "High medical expense coverage limits including pre-existing conditions",
      "Trip delay, cancellation, and interruption reimbursement plans",
      "Loss of checked-in baggage and passport support options",
      "Global toll-free emergency helpline access"
    ],
    benefits: [
      "Cashless hospitalization networks globally",
      "Fast and structured insurance claim settlement guidance",
      "Affordable premiums custom to your age and itinerary duration"
    ],
    bannerGradient: "from-green-600 to-emerald-800"
  }
];
