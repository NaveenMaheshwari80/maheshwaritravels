export interface CabVehicle {
  id: string;
  slug: string;
  name: string;
  category: "sedan" | "suv" | "van" | "bus";
  price: string;
  priceSub: string;
  seats: string;
  acType: string;
  image: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
  idealFor: string;
  slugTitle: string;
  slugDesc: string;
  billingRule: string;
  localitiesServed: string[];
}

export const cabs: CabVehicle[] = [
  {
    id: "dzire",
    slug: "swift-dzire-taxi-jaipur",
    name: "Swift Dzire",
    category: "sedan",
    price: "₹11 - ₹12",
    priceSub: "per kilometer",
    seats: "4 + 1 Seats",
    acType: "Chilled AC",
    image: "/images/cars/swift-dzire.jpg",
    badge: "Most Economical",
    badgeColor: "bg-emerald-500 text-white",
    description:
      "Comfortable compact sedan ideal for small families, quick business trips, and budget-friendly outstation highway rides across Rajasthan.",
    features: ["4+1 Seating", "Ample Boot Space", "Music System", "Pocket Friendly Tariff"],
    idealFor: "Couples, Solo travelers, City visits & Quick airport drops in Jaipur",
    slugTitle: "Swift Dzire Taxi in Jaipur per km Rate | Book Cab @ ₹11/Km",
    slugDesc: "Rent Swift Dzire taxi in Jaipur starting @ ₹11-₹12/km. Perfect 4-seater AC sedan for Jaipur local sightseeing, Jhotwara cab booking, and outstation Rajasthan tours.",
    billingRule: "Outstation billing minimum 300 KM per calendar day. Local Jaipur pickup in 15 mins.",
    localitiesServed: ["Jhotwara", "Vaishali Nagar", "Mansarovar", "Jaipur Airport (JAI)", "Jaipur Railway Station (JP)", "Bani Park", "Sodala", "Malviya Nagar"]
  },
  {
    id: "etios",
    slug: "toyota-etios-cab-jaipur",
    name: "Toyota Etios",
    category: "sedan",
    price: "₹11 - ₹12",
    priceSub: "per kilometer",
    seats: "4 + 1 Seats",
    acType: "Superior AC",
    image: "/images/cars/toyota-etios.jpg",
    badge: "Spacious Sedan",
    badgeColor: "bg-blue-600 text-white",
    description:
      "Known for extra rear legroom and large luggage capacity. Perfect choice for comfortable long-distance highway cruising and family sightseeing.",
    features: ["Extra Legroom", "Large Boot Space", "Silent Cabin", "Super Reliable Engine"],
    idealFor: "Families with heavy luggage, Airport transfers & Outstation tours from Jaipur",
    slugTitle: "Toyota Etios Cab Rental in Jaipur | ₹11/Km Outstation & Local Taxi",
    slugDesc: "Hire Toyota Etios cab in Jaipur with luggage space & legroom at just ₹11/km. Reliable taxi service from Jhotwara, Vaishali Nagar, and Jaipur Airport.",
    billingRule: "Outstation billing minimum 300 KM per calendar day. Tolls & parking extra as per actuals.",
    localitiesServed: ["Jhotwara", "Vaishali Nagar", "Mansarovar", "Raja Park", "C-Scheme", "Jaipur Airport (JAI)", "Sindhi Camp"]
  },
  {
    id: "ertiga",
    slug: "maruti-ertiga-taxi-jaipur",
    name: "Maruti Suzuki Ertiga",
    category: "suv",
    price: "₹14 - ₹15",
    priceSub: "per kilometer",
    seats: "6/7 + 1 Seats",
    acType: "Dual Roof AC",
    image: "/images/cars/ertiga.jpg",
    badge: "Best Family Choice",
    badgeColor: "bg-purple-600 text-white",
    description:
      "The most popular 7-seater MUV in India offering a smooth ride, flexible seating, and roof-mounted AC vents for all 3 rows.",
    features: ["3-Row AC Vents", "Flexible Luggage Space", "Pushback Seats", "Smooth Ride"],
    idealFor: "Medium families, Hill station trips (Kashmir/Himachal), Khatu Shyam Ji & Weekend getaways",
    slugTitle: "Maruti Ertiga 7-Seater Taxi in Jaipur | ₹14/Km SUV Cab Rental",
    slugDesc: "Book Maruti Ertiga SUV taxi in Jaipur @ ₹14-₹15/km. Ideal 7-seater cab with roof AC for Khatu Shyam Ji, Salasar Balaji, Udaipur, and local tours.",
    billingRule: "Outstation trips charged minimum 300 KM per day. Driver allowance applicable after 10 PM.",
    localitiesServed: ["Jhotwara Headquarters", "Vaishali Nagar", "Mansarovar", "Bani Park", "Jaipur Airport", "Railway Station"]
  },
  {
    id: "innova-classic",
    slug: "toyota-innova-classic-taxi-jaipur",
    name: "Toyota Innova (Classic)",
    category: "suv",
    price: "₹17",
    priceSub: "per kilometer",
    seats: "7/8 + 1 Seats",
    acType: "Dual Roof AC",
    image: "https://www.pngkey.com/png/detail/364-3644037_toyota-inova-innova-car-new-model-2015.png",
    badge: "Popular Highway MUV",
    badgeColor: "bg-orange-600 text-white",
    description:
      "The evergreen highway workhorse. Known for comfortable 3-row seating, robust reliability, and smooth ride on all terrains at a budget-friendly rate.",
    features: ["3-Row AC Vents", "Spacious Cabin", "Pushback Seats", "Rugged Reliability"],
    idealFor: "Family pilgrimages, Rajasthan heritage tours, Group trips & Outstation rides",
    slugTitle: "Toyota Innova Taxi on Rent in Jaipur @ ₹17/Km | Highway MUV",
    slugDesc: "Rent Toyota Innova Classic 7/8 seater cab in Jaipur @ ₹17 per km. Budget friendly SUV for Rajasthan outstation tours and pilgrimages from Jhotwara.",
    billingRule: "300 KM per day minimum rule applicable for all outstation bookings from Jaipur.",
    localitiesServed: ["Jhotwara", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jaipur Airport", "Chardham Yatra departures"]
  },
  {
    id: "innova",
    slug: "toyota-innova-crysta-rental-jaipur",
    name: "Toyota Innova Crysta",
    category: "suv",
    price: "₹18",
    priceSub: "per kilometer",
    seats: "7/8 + 1 Seats",
    acType: "Climate Control AC",
    image: "/images/cars/innova-crysta.jpg",
    badge: "VIP Luxury MPV",
    badgeColor: "bg-amber-600 text-white",
    description:
      "The undisputed king of highway comfort. Premium captain seats, unmatched safety, and powerful engine for effortless touring across Rajasthan and North India.",
    features: ["Captain Pushback Seats", "Surround AC", "VIP Interior", "Superior Suspension"],
    idealFor: "VIP/Corporate guests, Luxury family tours, Rajasthan heritage trips & Long pilgrimages",
    slugTitle: "Innova Crysta on Rent in Jaipur | ₹18/Km VIP Luxury MPV Taxi",
    slugDesc: "Book Toyota Innova Crysta cab in Jaipur @ ₹18 per km. Premium 7-seater SUV with captain seats for corporate travel, Delhi airport transfers, and outstation.",
    billingRule: "Outstation calculation: Minimum 300 KM per calendar day. Transparent billing without hidden charges.",
    localitiesServed: ["Jhotwara HQ", "Vaishali Nagar VIP area", "C-Scheme", "Bani Park", "Jaipur International Airport (JAI)", "Raja Park"]
  },
  {
    id: "tempo",
    slug: "tempo-traveller-hire-jaipur",
    name: "Tempo Traveller (Luxury)",
    category: "van",
    price: "₹26",
    priceSub: "per kilometer",
    seats: "9 / 12 / 16 / 20+ Seats",
    acType: "Blower Roof AC",
    image: "/images/cars/tempo-traveller.jpg",
    badge: "Group Special",
    badgeColor: "bg-rose-600 text-white",
    description:
      "Customized luxury tempo travellers equipped with sofa pushback seats, LED TV, mood lighting, and high roof standing comfort for large groups.",
    features: ["2x1 Luxury Pushback", "LED TV & Sound System", "USB Charging", "Curtains & Carpet"],
    idealFor: "Group vacations, Marriage functions, Chardham Yatra & Corporate picnics",
    slugTitle: "Tempo Traveller on Rent in Jaipur | 12, 16, 20 Seater @ ₹26/Km",
    slugDesc: "Hire 9, 12, 16, or 20 seater Tempo Traveller in Jaipur @ ₹26/km. Pushback sofa seats, LED TV & high roof AC for Chardham Yatra, weddings, and group tours.",
    billingRule: "Outstation minimum 300 KM per calendar day. Seat capacity dependent pricing. Contact for customized quote.",
    localitiesServed: ["Jhotwara", "Vaishali Nagar", "Mansarovar", "Jaipur Railway Station", "Airport Group Pickups", "Sikar Road"]
  },
  {
    id: "urbania",
    slug: "force-urbania-luxury-van-jaipur",
    name: "Force Urbania",
    category: "van",
    price: "₹32",
    priceSub: "per kilometer",
    seats: "10 to 17 Seats",
    acType: "Dual Zone Chiller AC",
    image: "/images/cars/force-urbania.jpg",
    badge: "Ultra Luxury Van",
    badgeColor: "bg-slate-900 text-amber-400 border border-amber-400/40",
    description:
      "State-of-the-art aerodynamic executive van with airplane-like cabin, individual AC vents, reading lamps, and panoramic windows for ultimate luxury.",
    features: ["Airliner Style Cabin", "Panoramic Windows", "Individual Reading Lights", "Air Suspension"],
    idealFor: "Foreign tourists, Executive delegations, Premium destination weddings & VIP group travel",
    slugTitle: "Force Urbania on Rent in Jaipur | Luxury Executive Van @ ₹32/Km",
    slugDesc: "Book ultra-luxury Force Urbania van in Jaipur @ ₹32 per km. Airliner style interior with individual AC vents & panoramic windows for VIP delegations.",
    billingRule: "Outstation minimum 300 KM per day. Luxury chauffeur service included.",
    localitiesServed: ["Jhotwara HQ", "Vaishali Nagar", "C-Scheme Corporate Area", "Jaipur Airport VIP Terminal", "Raja Park"]
  },
  {
    id: "bus",
    slug: "luxury-ac-tourist-bus-jaipur",
    name: "Luxury AC Tourist Coach / Bus",
    category: "bus",
    price: "Contact Us",
    priceSub: "35 to 56 seats luxury bus",
    seats: "35 / 42 / 52 / 56 Seats",
    acType: "Air Suspension AC",
    image: "/images/cars/luxury-bus.jpg",
    badge: "Large Group Coach",
    badgeColor: "bg-indigo-600 text-white",
    description:
      "Spacious luxury 2x2 pushback AC tourist buses and coaches equipped with air suspension, large luggage booth, LED entertainment, and reading lights.",
    features: ["2x2 Pushback Seats", "Air Suspension Ride", "Massive Luggage Booth", "PA & Sound System"],
    idealFor: "Big marriage parties, Corporate conferences, School/College tours & Pilgrimages",
    slugTitle: "Luxury AC Tourist Bus on Rent in Jaipur | 35 to 56 Seater Coaches",
    slugDesc: "Hire 35, 42, 52, or 56 seater luxury AC tourist buses in Jaipur. Air suspension pushback coaches for weddings, conferences, and corporate bookings.",
    billingRule: "Customized package pricing based on route, seating capacity, and duration.",
    localitiesServed: ["All across Jaipur", "Jhotwara", "Vaishali Nagar", "Mansarovar", "Rajasthan Outstation Departure"]
  }
];
