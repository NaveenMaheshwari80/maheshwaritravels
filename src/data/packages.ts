export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface HotelInfo {
  category: string;
  name: string;
  rating: string;
  details: string;
}

export interface TourPackage {
  slug: string;
  name: string;
  duration: string;
  daysCount: number;
  nightsCount: number;
  price: number;
  featured: boolean;
  destination: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  hotels: HotelInfo[];
  faqs: { question: string; answer: string }[];
  galleryGradients: string[]; // Premium dynamic gradients for fallback styling
  image?: string;
}

export const tourPackages: TourPackage[] = [
  {
    slug: "goa-beach-paradise",
    name: "Goa Beach Paradise Tour",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    nightsCount: 3,
    price: 9999,
    featured: true,
    destination: "Goa",
    image: "/images/destinations/goa.png",
    highlights: [
      "Visit Baga, Calangute, and Anjuna Beaches",
      "Stunning Sunset Cruise on Mandovi River",
      "Historic Old Goa Churches & Temple visits",
      "Exciting Water Sports at Calangute Beach"
    ],
    inclusions: [
      "3 Nights stay in a 3-star resort near the beach",
      "Daily breakfast buffet at the resort",
      "Airport transfers in private AC vehicle",
      "One full-day North Goa sightseeing tour",
      "One full-day South Goa sightseeing tour"
    ],
    exclusions: [
      "Airfare / Train ticket to and from Goa",
      "Water sports charges and cruise tickets",
      "Lunch and dinners not mentioned in itinerary",
      "Personal expenses, laundry, tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa & Leisure Beach Walk",
        description: "Arrive at Goa Airport or Thivim Railway Station. Meet our representative and transfer to your resort in North Goa. Check in and spend the rest of the day at leisure, exploring local markets or walking along the sandy beaches."
      },
      {
        day: 2,
        title: "North Goa Beaches & Water Sports",
        description: "After breakfast, head out for a tour of North Goa. Explore Fort Aguada, Calangute Beach, Baga Beach, and Anjuna Beach. Participate in optional thrilling watersports like parasailing, jet-skiing, and banana rides."
      },
      {
        day: 3,
        title: "South Goa Heritage, Temples & Mandovi Cruise",
        description: "Enjoy breakfast, then drive to South Goa. Visit the historic Basilica of Bom Jesus and Se Cathedral in Old Goa. Visit Mangueshi Temple. In the evening, enjoy a 1-hour sunset cruise on the Mandovi River with Goan music and folk dances."
      },
      {
        day: 4,
        title: "Departure from Goa",
        description: "Savor your final breakfast in Goa. Checkout from the resort and transfer to the airport or railway station for your onward journey home with beautiful beach memories."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Resort Primo Bom Terra Verde / Similar",
        rating: "4.1/5",
        details: "Cozy eco-cottages near Baga beach with swimming pool and lush greenery."
      },
      {
        category: "Premium (4★)",
        name: "DoubleTree by Hilton / Similar",
        rating: "4.5/5",
        details: "Luxury rooms, close to central attractions, boasting great spa and dining options."
      }
    ],
    faqs: [
      {
        question: "What is the best time to visit Goa?",
        answer: "The best time to visit Goa is between November and February when the weather is cool and pleasant, and all beach shacks are open."
      },
      {
        question: "Are water sports safe in Goa?",
        answer: "Yes, all water sports are conducted under the supervision of certified instructors with mandatory life jackets."
      }
    ],
    galleryGradients: [
      "from-teal-400 to-cyan-500",
      "from-amber-200 to-yellow-500",
      "from-sky-300 to-blue-600"
    ]
  },
  {
    slug: "kashmir-heaven-on-earth",
    name: "Kashmir - Heaven on Earth",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    price: 18999,
    featured: true,
    destination: "Kashmir",
    image: "/images/destinations/kashmir.png",
    highlights: [
      "Stay in a traditional luxury Houseboat on Dal Lake",
      "Shikara Ride at sunset on Dal Lake",
      "Visit scenic Betaab Valley in Pahalgam",
      "Enjoy Gondola cable car ride in Gulmarg"
    ],
    inclusions: [
      "1 Night in Dal Lake Luxury Houseboat",
      "4 Nights in premium 3-star hotels (Srinagar & Pahalgam)",
      "Daily Breakfast and Dinner (MAP Plan)",
      "Private AC Sedan for all transits and sightseeing",
      "1-Hour complimentary Shikara Ride on Dal Lake"
    ],
    exclusions: [
      "Flights to and from Srinagar",
      "Gondola ride tickets (pre-booking required online)",
      "Pony rides and local taxi charges in Pahalgam/Gulmarg",
      "Lunch, snacks, and personal drinks"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Dal Lake Houseboat Stay",
        description: "Arrive at Srinagar Airport. Transfer to your traditional wooden Houseboat at Dal Lake. In the evening, enjoy a relaxing Shikara ride passing floating gardens and markets. Dinner and overnight stay on the houseboat."
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing & Mughal Gardens",
        description: "Move to a hotel. Discover the famous Mughal Gardens built by Emperor Jahangir: Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Visit the historic Shankaracharya Temple offering panoramic city views."
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg Day Trip",
        description: "Drive to Gulmarg, the Meadow of Flowers. Walk through alpine fields and ride the famous Gulmarg Gondola (one of the highest cable cars in the world) to Phase 1/Phase 2 for snow activities. Return to Srinagar."
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam (Valley of Shepherds)",
        description: "Travel to Pahalgam. En route, visit saffron fields and Avantipura ruins. Check into your Pahalgam hotel. Spend a relaxed evening walking along the roaring Lidder River."
      },
      {
        day: 5,
        title: "Pahalgam Local Valley Excursions",
        description: "Explore the scenic Betaab Valley (named after the Bollywood movie Betaab), Aru Valley, and Chandanwari (starting point of Amarnath Yatra) via local eco-taxis. Return to your hotel for dinner."
      },
      {
        day: 6,
        title: "Pahalgam to Srinagar Airport Departure",
        description: "After breakfast, drive back to Srinagar Airport (approx 2.5 hours) for your flight back home, carrying peaceful memories of Kashmir."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Hotel Mount View / Pride Houseboat / Similar",
        rating: "4.2/5",
        details: "Clean rooms, excellent hospitality, and classic wooden houseboat designs."
      },
      {
        category: "Premium (4★)",
        name: "Radisson Srinagar / Hotel Heevan Pahalgam / Similar",
        rating: "4.6/5",
        details: "Stunning valley views, central heating, and fine Kashmiri multi-cuisine restaurants."
      }
    ],
    faqs: [
      {
        question: "Is Kashmir safe for families and couples?",
        answer: "Yes, Kashmir is very welcoming and safe for tourists. Thousands of families and honeymooners visit every year without any security issues."
      },
      {
        question: "Should we book the Gulmarg Gondola tickets in advance?",
        answer: "Absolutely. Gulmarg Gondola tickets are sold online only and sell out weeks in advance. We highly recommend booking them as soon as you confirm your trip."
      }
    ],
    galleryGradients: [
      "from-blue-200 to-sky-400",
      "from-slate-100 to-indigo-300",
      "from-emerald-200 to-teal-400"
    ]
  },
  {
    slug: "magical-manali-honeymoon",
    name: "Magical Manali Honeymoon Special",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    price: 12999,
    featured: true,
    destination: "Manali",
    image: "/images/destinations/manali.png",
    highlights: [
      "Snow adventures at Solang Valley & Atal Tunnel",
      "Visit Hadimba Temple and Vashisht Hot Springs",
      "Romantic candle-lit dinner & room flower setup",
      "Mall Road shopping and Cafe hopping in Old Manali"
    ],
    inclusions: [
      "4 Nights stay in a premium valley-facing room",
      "Daily breakfast and dinner (MAP)",
      "Honeymoon special cake, flower bed decoration, and candle-lit dinner",
      "Private AC cab for pick-up from Delhi/Chandigarh and all sightseeing",
      "All toll taxes, parking fees, and driver allowances"
    ],
    exclusions: [
      "Adventure activities (paragliding, skiing, zorbing)",
      "Rohtang Pass permission charges and local taxi fees",
      "Lunch, mineral water, and personal laundry charges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi/Chandigarh to Manali Drive",
        description: "Board your private cab from Delhi or Chandigarh and drive to Manali. Marvel at the scenic hills of Bilaspur and Mandi. Check in at your Manali hotel, enjoy a welcome drink, and relax."
      },
      {
        day: 2,
        title: "Manali Local Sightseeing & Old Manali Cafes",
        description: "Visit the famous Hadimba Temple, built in the middle of giant deodar forest. Walk through Vashisht village to see the hot sulfur springs. Spend the evening shopping on Mall Road and exploring Old Manali's bohemian cafes."
      },
      {
        day: 3,
        title: "Solang Valley Snow Point & Atal Tunnel Excursion",
        description: "Travel to Solang Valley, hot spot for adventure sports. Try paragliding, quad biking, or skiing. Drive further through the engineering marvel, the Atal Tunnel, to enter Lahaul Valley (Sissu waterfall). Return for a special candle-lit dinner."
      },
      {
        day: 4,
        title: "Excursion to Kullu & Manikaran Sahib",
        description: "Drive to Kullu for river rafting and visiting local shawl factories. Continue to Manikaran Sahib, a holy Sikh Gurudwara famous for its natural hot springs. Return to Manali for overnight stay."
      },
      {
        day: 5,
        title: "Manali to Delhi/Chandigarh Departure",
        description: "Check out after breakfast and drive back to Delhi or Chandigarh Airport/Railway Station for your onward journey."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Hotel Hayer Regency / Hotel Solitaire / Similar",
        rating: "4.0/5",
        details: "Splendid valley views, walking distance to Mall Road, and good food options."
      },
      {
        category: "Premium (4★)",
        name: "Span Resort & Spa / Solang Valley Resort / Similar",
        rating: "4.7/5",
        details: "Luxury riverfront cottages, premium spa wellness centers, and gourmet dining."
      }
    ],
    faqs: [
      {
        question: "Is there snow in Manali throughout the year?",
        answer: "Snow can be found at Rohtang Pass from October to June. In Manali town and Solang Valley, snow is common from late December to February."
      }
    ],
    galleryGradients: [
      "from-cyan-300 to-indigo-400",
      "from-sky-100 to-slate-400",
      "from-teal-300 to-indigo-600"
    ]
  },
  {
    slug: "shimla-queen-of-hills",
    name: "Shimla - Queen of Hills Getaway",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    nightsCount: 3,
    price: 8999,
    featured: false,
    destination: "Shimla",
    highlights: [
      "Walk along the historic Mall Road & Ridge",
      "See Christ Church & Jakhoo Temple",
      "Fun snow activities at Kufri",
      "Enjoy Toy Train ride (historic UNESCO heritage)"
    ],
    inclusions: [
      "3 Nights stay in Shimla 3-star hotel",
      "Daily breakfast and dinner (MAP)",
      "Private AC cab for Delhi/Chandigarh pickup and sightseeing",
      "Local guided walking tour of Shimla heritage sites"
    ],
    exclusions: [
      "Toy Train tickets (must be booked in advance via IRCTC)",
      "Adventure park tickets in Kufri",
      "Lunch, snacks, and items of personal nature"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla Scenic Drive",
        description: "Pick up from Delhi and drive to Shimla (approx 7-8 hours). Take in the scenic Pinjore Gardens en route. Check in to your hotel and enjoy a peaceful night in the hills."
      },
      {
        day: 2,
        title: "Kufri Adventure Day Trip",
        description: "Drive to Kufri, a small hill station famous for snow peaks and wildlife park. Enjoy a horse ride or try adventure activities. Return to Shimla for dinner."
      },
      {
        day: 3,
        title: "Shimla Local Heritage Walk",
        description: "Explore Shimla on foot. Visit the Viceroy's Lodge (historic building where partition agreements were made), walk on The Ridge, see Christ Church, hike to Jakhoo Temple (Monkey Temple), and shop at Lakkar Bazar."
      },
      {
        day: 4,
        title: "Shimla to Delhi Departure",
        description: "Check out after breakfast and travel back to Delhi, concluding your memorable holiday in the Queen of Hills."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Hotel Willow Banks / Similar",
        rating: "4.1/5",
        details: "Centrally located close to Mall Road with beautiful terrace view of the valley."
      }
    ],
    faqs: [
      {
        question: "How can I book the Toy Train ride?",
        answer: "The Shimla Toy Train is operated by Indian Railways. Tickets can be booked online via the IRCTC website under the stations Kalka (KLK) and Shimla (SML)."
      }
    ],
    galleryGradients: [
      "from-sky-300 to-indigo-500",
      "from-slate-300 to-slate-500"
    ]
  },
  {
    slug: "kerala-backwaters-beaches",
    name: "Kerala Backwaters & Beaches Tour",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    price: 15499,
    featured: true,
    destination: "Kerala",
    image: "/images/destinations/kerala.png",
    highlights: [
      "Explore Tea Gardens in foggy Munnar",
      "Spice plantations & Wildlife spotting in Thekkady",
      "Overnight stay in a private Houseboat in Alleppey",
      "Relax on the beautiful Kovalam Beach"
    ],
    inclusions: [
      "2 Nights Munnar, 1 Night Thekkady, 1 Night Alleppey Houseboat, 1 Night Kovalam",
      "Breakfast at all hotels; All meals (Breakfast, Lunch, Dinner) in Houseboat",
      "Private AC Sedan with professional English/Hindi speaking driver",
      "Spice Plantation tour entry fee included"
    ],
    exclusions: [
      "Airfare / Train tickets to Cochin / Trivandrum",
      "Boating tickets in Periyar Wildlife Sanctuary",
      "Kathakali and Kalaripayattu show entry tickets",
      "Personal laundry, ayurvedic massages, and tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cochin Arrival & Drive to Munnar Hills",
        description: "Arrive at Cochin Airport/Station. Drive to Munnar, passing beautiful Valara and Cheeyappara waterfalls. Check in at your Munnar hotel surrounded by cardamom estates."
      },
      {
        day: 2,
        title: "Munnar Tea Gardens & Eravikulam National Park",
        description: "Explore Munnar. Visit Eravikulam National Park to spot the rare Nilgiri Tahr. Walk through Mattupetty Dam, Echo Point, and Rose Garden, followed by a visit to the Tata Tea Museum."
      },
      {
        day: 3,
        title: "Munnar to Thekkady (Periyar Forest Area)",
        description: "Drive to Thekkady. Take a guided walk through a Spice Plantation. In the afternoon, enjoy boat cruises on Periyar Lake to watch wild elephants and boars. Watch traditional martial arts shows in the evening."
      },
      {
        day: 4,
        title: "Thekkady to Alleppey Luxury Houseboat Cruise",
        description: "Travel to Alleppey. Check into your private traditional Kettuvallam Houseboat. Cruise along the backwaters, watch local village life, and enjoy fresh traditional Kerala food served onboard."
      },
      {
        day: 5,
        title: "Alleppey to Kovalam Beach Resort",
        description: "Disembark from the houseboat and drive to Kovalam Beach. Check into a beach-side resort. Spend your afternoon relaxing or swimming in the warm waters of Lighthouse Beach."
      },
      {
        day: 6,
        title: "Drive to Trivandrum Airport Departure",
        description: "After breakfast, check out. Visit Trivandrum's Padmanabhaswamy Temple (the richest temple in the world) before heading to Trivandrum Airport for your return flight."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Blanket Hotel Munnar / Lakes & Lagoons Houseboat / Similar",
        rating: "4.3/5",
        details: "Stunning forest settings, premium houseboats, and authentic Kerala local foods."
      }
    ],
    faqs: [
      {
        question: "Does the houseboat move at night?",
        answer: "No. According to government rules, houseboats anchor in the backwaters after 5:30 PM to allow local fishermen to cast their nets."
      }
    ],
    galleryGradients: [
      "from-emerald-300 to-green-600",
      "from-teal-400 to-indigo-600",
      "from-amber-100 to-orange-400"
    ]
  },
  {
    slug: "royal-rajasthan-heritage",
    name: "Royal Rajasthan Heritage Tour",
    duration: "7 Days / 6 Nights",
    daysCount: 7,
    nightsCount: 6,
    price: 19999,
    featured: true,
    destination: "Rajasthan",
    image: "/images/destinations/rajasthan.png",
    highlights: [
      "Explore Jaipur Pink City & Amer Fort",
      "Visit blue city Jodhpur & Mehrangarh Fort",
      "Camel Safari & desert camping in Jaisalmer",
      "Experience romantic Udaipur lake city"
    ],
    inclusions: [
      "2 Nights Jaipur, 1 Night Jodhpur, 1 Night Jaisalmer Camp, 2 Nights Udaipur",
      "Daily breakfast at hotels; Breakfast & Dinner in Jaisalmer Desert Camp",
      "Camel ride and Rajasthani folk dance program in Jaisalmer",
      "Private AC Innova for all sightseeing and interstate transfers"
    ],
    exclusions: [
      "Monument entry tickets and guide fees",
      "Elephant ride at Amer Fort / Jeep safari fees",
      "Lunch, snacks, and items of personal nature"
    ],
    itinerary: [
      {
        day: 1,
        title: "Jaipur Pink City Arrival & Birla Temple",
        description: "Arrive in Jaipur (capital city). Check in at your hotel. In the evening, visit Birla Temple and experience Chokhi Dhani (ethnic village resort) for traditional Rajasthani food and culture."
      },
      {
        day: 2,
        title: "Jaipur Forts, Palaces & Hawa Mahal",
        description: "Take a full-day city tour. Visit majestic Amer Fort (optional elephant/jeep ride), Jal Mahal (Water Palace), Hawa Mahal (Wind Palace), City Palace, and Jantar Mantar observatory."
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur (Blue City)",
        description: "Drive to Jodhpur (approx 6 hours). Visit the massive Mehrangarh Fort towering over the city, Jaswant Thada (white marble cenotaph), and stroll through Clock Tower market."
      },
      {
        day: 4,
        title: "Jodhpur to Jaisalmer Desert Camp Stay",
        description: "Drive to Jaisalmer. Check in at your Swiss tent in Sam Sand Dunes. Enjoy a camel safari over dunes, a stunning desert sunset, followed by traditional folk music, bonfire, and dinner."
      },
      {
        day: 5,
        title: "Jaisalmer Fort Sightseeing to Udaipur",
        description: "Visit Golden Fort (Jaisalmer Fort), Patwon ki Haveli, and Salim Singh ki Haveli. Late afternoon, board your car and travel to Udaipur, the romantic Lake City."
      },
      {
        day: 6,
        title: "Udaipur Lake Palaces & Boat Ride",
        description: "Explore Udaipur. Visit City Palace overlooking Lake Pichola, Saheliyon-ki-Bari gardens, and Jagdish Temple. In the evening, enjoy a boat ride on Lake Pichola passing Lake Palace."
      },
      {
        day: 7,
        title: "Udaipur Departure",
        description: "After breakfast, transfer to Udaipur Airport or Railway Station to return home with royal memories."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Umaid Bhawan Hotel Jaipur / Desert Springs Camp Jaisalmer / Similar",
        rating: "4.4/5",
        details: "Heritage architecture hotels, clean desert camps, and polite local service."
      }
    ],
    faqs: [
      {
        question: "Which is the best season to tour Rajasthan?",
        answer: "The winter season from October to March is the best time, as days are pleasant and nights are cool—ideal for sightseeing and desert camping."
      }
    ],
    galleryGradients: [
      "from-amber-400 to-red-600",
      "from-yellow-300 to-amber-600",
      "from-blue-400 to-indigo-600"
    ]
  },
  {
    slug: "dubai-luxury-oasis",
    name: "Dubai Luxury Oasis Tour",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    price: 39999,
    featured: true,
    destination: "Dubai",
    image: "/images/destinations/dubai.png",
    highlights: [
      "Go up to the Burj Khalifa 124th Floor",
      "Thrilling Desert Safari with BBQ Dinner",
      "Experience the stunning Museum of the Future",
      "Shop at Dubai Mall and watch Fountain Show"
    ],
    inclusions: [
      "4 Nights in 4-star city center hotel",
      "Daily breakfast; Desert Safari BBQ dinner included",
      "Burj Khalifa 124th Floor entry ticket",
      "Premium Desert Safari in 4x4 Land Cruiser",
      "Half-day Dubai city tour with guide"
    ],
    exclusions: [
      "International flights",
      "UAE tourist visa fees",
      "Tourism Dirham fee (approx USD 4 per room per night)",
      "Lunch, personal shopping, tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai & Marina Dhow Cruise",
        description: "Arrive at Dubai International Airport. Transfer to your hotel. In the evening, enjoy a luxury Dhow Cruise at Dubai Marina, dinner included, looking at illuminated skyscrapers."
      },
      {
        day: 2,
        title: "City Tour & Burj Khalifa 124th Floor",
        description: "Guided morning city tour: Jumeirah Mosque, Burj Al Arab (photo point), Palm Jumeirah. In the afternoon, visit Dubai Mall and climb the Burj Khalifa for skyviews."
      },
      {
        day: 3,
        title: "Desert Safari with BBQ Dinner",
        description: "Morning at leisure. In the afternoon, board a 4x4 Land Cruiser for dune bashing, sandboarding, and camel rides. Enjoy belly dancing, Tanoura show, and a delicious BBQ dinner under the stars."
      },
      {
        day: 4,
        title: "Museum of the Future & shopping",
        description: "Visit the architectural wonder - Museum of the Future. Spend the rest of the day shopping at the Gold Souk or Mall of the Emirates."
      },
      {
        day: 5,
        title: "Departure from Dubai",
        description: "Check out from your hotel and catch your airport transfer for your flight home."
      }
    ],
    hotels: [
      {
        category: "Premium (4★)",
        name: "Millennium Al Barsha / Holiday Inn Dubai Al Barsha / Similar",
        rating: "4.4/5",
        details: "Stylish modern rooms, rooftop pool, and direct access to metro and malls."
      }
    ],
    faqs: [
      {
        question: "Is visa on arrival available for Indian passport holders in Dubai?",
        answer: "Indian citizens with a valid US visa, green card, or UK/EU residence permit can get a visa on arrival. Others must pre-apply for a tourist visa, which we can easily process."
      }
    ],
    galleryGradients: [
      "from-yellow-500 to-amber-800",
      "from-sky-600 to-blue-900"
    ]
  },
  {
    slug: "bali-romantic-escape",
    name: "Bali Romantic Escape Tour",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    price: 32999,
    featured: true,
    destination: "Bali",
    image: "/images/destinations/bali.png",
    highlights: [
      "Stay in a Private Pool Villa in Ubud",
      "Visit Kintamani Volcano & Tegalalang Rice Terraces",
      "Stunning Sunset at Tanah Lot Sea Temple",
      "Speedboat tour to Nusa Penida island"
    ],
    inclusions: [
      "3 Nights Ubud Hotel, 2 Nights Seminyak Private Pool Villa",
      "Daily breakfast; 1 romantic candle-lit villa dinner",
      "Full-day Kintamani Volcano and Ubud art market tour",
      "Full-day Nusa Penida Island tour (Kelingking Beach, Broken Beach)",
      "All transfers in private AC vehicle with English speaking driver-guide"
    ],
    exclusions: [
      "International flights to Denpasar (Bali)",
      "Indonesia Visa on Arrival (approx USD 35 / IDR 500k)",
      "Bali tourist tax (approx USD 10)",
      "Lunch and dinner not specified"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bali Airport Arrival & Transfer to Ubud",
        description: "Arrive at Ngurah Rai Airport, Bali. Meet our representative and transfer to your Ubud hotel. Check in and relax in the cultural hub of Bali."
      },
      {
        day: 2,
        title: "Ubud Rice Terraces, Kintamani Volcano & Bali Swing",
        description: "Explore Ubud. See the Tegalalang Rice Terraces, take photos on the Bali Swing, and look at Mount Batur Volcano in Kintamani. Visit coffee plantations and waterfall."
      },
      {
        day: 3,
        title: "Nusa Penida Island Speedboat Day Trip",
        description: "Early morning speedboat transfer to Nusa Penida. Visit the iconic T-Rex shaped Kelingking Beach, Angel's Billabong, and Broken Beach. Return to Ubud in the evening."
      },
      {
        day: 4,
        title: "Ubud to Seminyak Private Pool Villa",
        description: "Check out and drive to Seminyak. Check in at your luxury private pool villa. Spend the day walking around Seminyak's beach clubs and trendy boutiques."
      },
      {
        day: 5,
        title: "Tanah Lot Sunset Temple Tour",
        description: "Relax in your villa pool in the morning. In the afternoon, visit Tanah Lot, a historic Hindu temple built on a rock out in the sea, perfect for sunset views."
      },
      {
        day: 6,
        title: "Departure from Bali",
        description: "Savor your final breakfast at the villa. Transfer to Bali Airport for your flight back home."
      }
    ],
    hotels: [
      {
        category: "Luxury (5★)",
        name: "The Kayon Jungle Resort Ubud / Astera Villa Seminyak / Similar",
        rating: "4.8/5",
        details: "Ultimate luxury, jungle valley pools, and private romantic villa sanctuaries."
      }
    ],
    faqs: [
      {
        question: "Is Bali good for vegetarians?",
        answer: "Yes, Bali is incredibly vegetarian-friendly. Most cafes and restaurants offer outstanding vegetarian and vegan options like Tempeh."
      }
    ],
    galleryGradients: [
      "from-green-400 to-teal-700",
      "from-cyan-400 to-emerald-600"
    ]
  },
  {
    slug: "thailand-explorer",
    name: "Thailand Explorer (Bangkok & Pattaya)",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    price: 17999,
    featured: false,
    destination: "Thailand",
    highlights: [
      "Speedboat tour to Coral Island Pattaya",
      "Visit Bangkok Golden Buddha & Marble Temple",
      "Alcazar Cabaret Show in Pattaya",
      "Shop at Bangkok Pratunam and Chatuchak Markets"
    ],
    inclusions: [
      "2 Nights Pattaya 3-star hotel, 2 Nights Bangkok 3-star hotel",
      "Daily breakfast buffet at hotels; lunch during Coral Island tour",
      "Speedboat Coral Island tour with beach lunch",
      "Bangkok city temple tour (Golden & Reclining Buddha)",
      "Intercity transfers in private AC vehicle"
    ],
    exclusions: [
      "International flights to Bangkok",
      "Thailand Visa fees (Visa on arrival or E-Visa)",
      "Water sports activities (parasailing, sea walking) in Coral Island",
      "Dinner and items of personal nature"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Airport Arrival & Transfer to Pattaya",
        description: "Arrive in Bangkok. Meet our driver and drive direct to Pattaya (approx 2 hours). Check in to hotel. In the evening, attend the Alcazar Cabaret Show."
      },
      {
        day: 2,
        title: "Coral Island Tour by Speedboat",
        description: "Board a speedboat to Coral Island (Koh Larn). Enjoy the white sand beach and swim. Try water sports. Enjoy an Indian lunch and return to Pattaya."
      },
      {
        day: 3,
        title: "Pattaya to Bangkok & City Temple Tour",
        description: "Drive back to Bangkok. Take a guided temple tour visiting Wat Traimit (Golden Buddha) and Wat Pho (Reclining Buddha). Check in at your Bangkok hotel."
      },
      {
        day: 4,
        title: "Leisure and Shopping in Bangkok",
        description: "A free day to shop at Pratunam Mall, MBK Center, Platinum Fashion Mall, or explore Bangkok's street food markets."
      },
      {
        day: 5,
        title: "Departure from Bangkok",
        description: "After breakfast, check out and transfer to Bangkok Airport for your flight back home."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Golden Beach Pattaya / Grand Alpine Bangkok / Similar",
        rating: "3.9/5",
        details: "Centrally located, friendly services, and close to markets."
      }
    ],
    faqs: [
      {
        question: "Is visa-free entry available for Indians in Thailand?",
        answer: "Yes, Thailand frequently runs visa-exempt schemes for Indian citizens. Please check the current status with our team before travel."
      }
    ],
    galleryGradients: [
      "from-cyan-500 to-indigo-700",
      "from-rose-400 to-amber-500"
    ]
  },
  {
    slug: "singapore-modern-marvel",
    name: "Singapore - The Modern Marvel",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    price: 34999,
    featured: false,
    destination: "Singapore",
    highlights: [
      "Explore Gardens by the Bay (Cloud Forest & Flower Dome)",
      "Full-day fun at Universal Studios Singapore",
      "Night Safari ride through wilderness",
      "Stunning views from Sentosa Island Cable Car"
    ],
    inclusions: [
      "4 Nights in 3-star superior hotel in Singapore",
      "Daily breakfast at the hotel",
      "Gardens by the Bay admission tickets",
      "Universal Studios full-day pass with transfers",
      "Sentosa Island tour with cable car ride and Wings of Time show"
    ],
    exclusions: [
      "International flights and Singapore tourist visa",
      "Lunch and dinners",
      "Personal travel insurance",
      "Optional tips to guides and drivers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Singapore Arrival & Night Safari",
        description: "Arrive at Changi Airport. Transfer to your hotel. In the evening, explore the world's first Night Safari park, riding tram to see nocturnal animals."
      },
      {
        day: 2,
        title: "City Tour & Gardens by the Bay",
        description: "Morning city tour: Merlion Park, Chinatown, Little India. Afternoon visit to Gardens by the Bay to see Supertree Grove and cooled glass domes."
      },
      {
        day: 3,
        title: "Universal Studios Day Adventure",
        description: "Spend a full day at Universal Studios on Sentosa Island. Ride the Battlestar Galactica rollercoasters, visit Transformers 3D, and see live shows."
      },
      {
        day: 4,
        title: "Sentosa Island Afternoon Tour",
        description: "Enjoy a free morning. In the afternoon, ride the Sentosa Cable Car. Visit Madame Tussauds and watch the Wings of Time water and laser light show."
      },
      {
        day: 5,
        title: "Departure from Singapore",
        description: "Check out and visit Jewel Changi Airport to see the world's tallest indoor waterfall before boarding your flight back home."
      }
    ],
    hotels: [
      {
        category: "Standard (3★)",
        name: "Hotel Boss Singapore / Ibis Styles Albert / Similar",
        rating: "4.1/5",
        details: "Modern compact rooms, pool, gym, located near MRT train stations."
      }
    ],
    faqs: [
      {
        question: "Is public transport easy to use in Singapore?",
        answer: "Yes, Singapore's MRT (metro train) network is world-class, clean, cheap, and very easy to navigate. We provide guidance on how to travel like a local."
      }
    ],
    galleryGradients: [
      "from-rose-500 to-indigo-600",
      "from-indigo-400 to-sky-600"
    ]
  },
  {
    slug: "maldives-luxury-water-villa",
    name: "Maldives Luxury Water Villa Escape",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    nightsCount: 3,
    price: 49999,
    featured: true,
    destination: "Maldives",
    highlights: [
      "Stay in an overwater villa with ocean access",
      "Speedboat transfers from Male Airport",
      "Unlimited drinks & buffet meals (All-Inclusive)",
      "Snorkeling and kayaking in crystal clear water"
    ],
    inclusions: [
      "3 Nights stay in an Overwater Villa at luxury island resort",
      "All-Inclusive meal plan (Breakfast, Lunch, Dinner, Snacks, and Drinks)",
      "Return airport transfers by Speedboat (Male Airport to Island Resort)",
      "Complimentary non-motorized water sports (Kayaking, Paddleboarding)",
      "All Maldives green taxes and resort service charges"
    ],
    exclusions: [
      "International flights to Male",
      "Motorized water sports (jet-ski, parasailing, diving)",
      "Spa treatment charges",
      "Personal items bought on the island"
    ],
    itinerary: [
      {
        day: 1,
        title: "Male Airport Arrival & Speedboat to Island Resort",
        description: "Arrive at Velana Airport (Male). Board your speedboat transfer to your private island resort. Check into your premium Overwater Villa. Walk right into the blue lagoon from your private deck."
      },
      {
        day: 2,
        title: "All-Inclusive Resort Luxury & Snorkeling",
        description: "Savor gourmet meals. Put on snorkeling gear and explore the house reef to watch colorful corals and tropical fish. Enjoy beach activities and evening resort music."
      },
      {
        day: 3,
        title: "Water Sports & Romantic Sunset Cruise",
        description: "Try kayaking or paddleboarding in the morning. Relax at the resort's infinity pool. In the evening, enjoy a sunset cruise to spot wild dolphins playing in the ocean."
      },
      {
        day: 4,
        title: "Departure from Maldives",
        description: "Have breakfast with an ocean view. Check out and board your return speedboat to Male Airport for your flight back home."
      }
    ],
    hotels: [
      {
        category: "Luxury (5★)",
        name: "Adaaran Club Rannalhi / Sun Siyam Olhuveli / Similar",
        rating: "4.7/5",
        details: "Stunning overwater villas, private beaches, multiple bars, and outstanding service."
      }
    ],
    faqs: [
      {
        question: "Is visa required for Maldives?",
        answer: "Maldives provides a free 30-day visa on arrival for all tourists, including Indian citizens. You just need a passport valid for at least 1 month and a confirmed resort voucher."
      }
    ],
    galleryGradients: [
      "from-cyan-400 to-teal-300",
      "from-blue-300 to-indigo-500"
    ]
  },
  {
    slug: "classical-europe-highlights",
    name: "Classical Europe Highlights (Paris & Switzerland)",
    duration: "8 Days / 7 Nights",
    daysCount: 8,
    nightsCount: 7,
    price: 99999,
    featured: true,
    destination: "Europe",
    highlights: [
      "See the Eiffel Tower & Louvre Museum in Paris",
      "Seine River Cruise in Paris at night",
      "Climb Mt. Titlis by cable car in Switzerland",
      "Explore beautiful Lake Lucerne & Interlaken"
    ],
    inclusions: [
      "3 Nights in Paris 4-star hotel, 4 Nights in Central Switzerland hotel",
      "Daily breakfast buffet at hotels",
      "Schengen visa guidance and document layout",
      "Eiffel Tower 2nd Level entry ticket; Mt. Titlis cable car tickets",
      "Private coach transfers and long-distance trains between Paris and Switzerland"
    ],
    exclusions: [
      "International flights and Schengen visa fees",
      "Travel insurance (mandatory for Schengen visa)",
      "Lunch and dinners not specified in the itinerary",
      "City tourist taxes (paid at hotels check-out)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Paris Arrival & Seine River Cruise",
        description: "Arrive in Paris. Transfer to your hotel. In the evening, board a scenic cruise along the Seine River to see Paris landmarks under lights."
      },
      {
        day: 2,
        title: "Paris City Sightseeing & Eiffel Tower 2nd Level",
        description: "Guided city tour: Arc de Triomphe, Champs-Élysées, Concorde Square. Visit the Eiffel Tower 2nd floor for spectacular Paris views. Free evening to explore."
      },
      {
        day: 3,
        title: "Louvre Museum & Montmartre Walk",
        description: "Visit the Louvre Museum (home of Mona Lisa). In the afternoon, walk up the streets of Montmartre to see the Sacré-Cœur basilica."
      },
      {
        day: 4,
        title: "Paris to Lucerne, Switzerland Scenic Train",
        description: "Check out and board a high-speed TGV train to Switzerland. Enjoy the changing landscapes. Check in at your Lucerne hotel."
      },
      {
        day: 5,
        title: "Mount Titlis Rotair Cable Car Adventure",
        description: "Travel to Engelberg. Ride the Titlis Rotair (revolving cable car) to the snow-covered peak. Walk the Titlis Cliff Bridge and explore ice caves."
      },
      {
        day: 6,
        title: "Interlaken & Lake Thun Scenic Day Trip",
        description: "Visit Interlaken, nestled between Lake Thun and Lake Brienz. Explore alpine streets, buy Swiss chocolates, and look at the Eiger, Mönch, and Jungfrau peaks."
      },
      {
        day: 7,
        title: "Lucerne City Exploration",
        description: "Discover Lucerne. See the wooden Chapel Bridge, the Lion Monument, and take an optional boat cruise on Lake Lucerne."
      },
      {
        day: 8,
        title: "Zurich Departure",
        description: "Check out and transfer to Zurich Airport for your flight back home, completing your European dream."
      }
    ],
    hotels: [
      {
        category: "Premium (4★)",
        name: "Novotel Paris Centre / Hotel Radisson Lucerne / Similar",
        rating: "4.5/5",
        details: "High-end comfort, great breakfast buffet, located close to transport stations."
      }
    ],
    faqs: [
      {
        question: "How long does it take to process a Schengen Visa?",
        answer: "Typically it takes 15 to 30 working days after your embassy appointment. We highly recommend starting visa processing at least 2 months before your planned travel."
      }
    ],
    galleryGradients: [
      "from-blue-700 to-slate-900",
      "from-rose-300 to-indigo-900",
      "from-sky-200 to-blue-600"
    ]
  }
];
