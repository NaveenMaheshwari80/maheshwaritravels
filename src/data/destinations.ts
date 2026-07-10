export interface Destination {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  bestTimeToVisit: string;
  attractions: string[];
  tips: string[];
  gradientClass: string;
}

export const destinations: Destination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    shortDesc: "The paradise on Earth, famous for its houseboats, lakes, and snowy valleys.",
    description: "Kashmir is renowned for its captivating natural beauty. Surrounded by the snow-clad peaks of the Himalayas, it features the iconic Dal Lake with its wooden houseboats, flower-decked Shikaras, green alpine fields in Gulmarg, and wild river streams in Pahalgam.",
    bestTimeToVisit: "March to October (Summer/Autumn) & December to February (for Snowfall)",
    attractions: ["Dal Lake & Mughal Gardens", "Gulmarg Gondola & Ski slopes", "Betaab & Aru Valleys in Pahalgam", "Sonamarg Glaciers"],
    tips: [
      "Carry woolens even in summer as evenings can get quite cool.",
      "Pre-book Gulmarg Gondola tickets online to avoid long queues.",
      "BSNL, Airtel, and Jio postpaid connections work best in Kashmir."
    ],
    gradientClass: "from-sky-400 to-indigo-700"
  },
  {
    slug: "goa",
    name: "Goa",
    shortDesc: "India's beach paradise blending Portuguese heritage with vibrant coastal vibes.",
    description: "Goa is India's pocket-sized paradise of sun, sand, and surf. Famous for its golden sand beaches, coconut groves, historic Portuguese churches, spice plantations, and seafood, it is a favourite destination for families and couples alike.",
    bestTimeToVisit: "November to February",
    attractions: ["Baga & Calangute Beaches", "Basilica of Bom Jesus", "Fort Aguada", "Dudhsagar Waterfalls"],
    tips: [
      "Rent a two-wheeler for budget-friendly local exploration.",
      "Wear cotton clothing and carry plenty of sunscreen.",
      "Avoid swimming in beaches during the monsoon season (June to September)."
    ],
    gradientClass: "from-teal-400 to-cyan-700"
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    shortDesc: "The land of kings, imperial forts, heritage palaces, and desert dunes.",
    description: "Rajasthan is a treasure trove of culture, history, and royal hospitality. From the pink monuments of Jaipur to the blue houses of Jodhpur, the golden fort of Jaisalmer, and the romantic lake palaces of Udaipur, it offers a glimpse into India's rich royal heritage.",
    bestTimeToVisit: "October to March",
    attractions: ["Amber Fort in Jaipur", "Mehrangarh Fort Jodhpur", "Sam Sand Dunes Jaisalmer", "Lake Pichola Udaipur"],
    tips: [
      "Wear comfortable walking shoes for exploring large forts.",
      "Try local delicacies like Dal Baati Churma and Lal Maas.",
      "Hire certified tour guides at monument entrances for detailed historical insights."
    ],
    gradientClass: "from-amber-500 to-red-700"
  },
  {
    slug: "kerala",
    name: "Kerala",
    shortDesc: "God's Own Country, celebrated for its tranquil backwaters, hills, and Ayurveda.",
    description: "Kerala is a tropical paradise in Southern India. Flanked by the Arabian Sea on one side and the tea-covered Western Ghats on the other, it is famous for its network of backwaters, sandy beaches, wildlife reserves, and traditional Ayurvedic health therapies.",
    bestTimeToVisit: "September to March",
    attractions: ["Munnar Tea Estates", "Alleppey Backwaters Houseboat", "Kovalam Beach", "Periyar National Park Thekkady"],
    tips: [
      "Book an overnight houseboat stay for an authentic backwater experience.",
      "Try Ayurvedic massage therapy at certified government-approved centers.",
      "Respect local customs when visiting ancient temples."
    ],
    gradientClass: "from-emerald-500 to-teal-800"
  },
  {
    slug: "maldives",
    name: "Maldives",
    shortDesc: "A luxurious archipelago of private island resorts and turquoise lagoons.",
    description: "Maldives is the ultimate tropical luxury destination. Comprising over a thousand coral islands, it features private island resorts, overwater villas with slide entries into lagoons, vibrant coral reefs, and sandy beaches.",
    bestTimeToVisit: "November to April",
    attractions: ["Overwater Villas", "Banana Reef snorkeling", "Maafushi Local Island", "Sunset Dolphin Cruises"],
    tips: [
      "An all-inclusive package is highly recommended to manage dining costs on resort islands.",
      "Pack light summer wear, swimwear, and flip-flops.",
      "Respect local rules regarding alcohol and dress when visiting inhabited local islands."
    ],
    gradientClass: "from-cyan-400 to-blue-700"
  },
  {
    slug: "europe",
    name: "Europe",
    shortDesc: "A dream collection of historical capitals, scenic alps, and rich art.",
    description: "Europe represents the ultimate travel dream. Combining the art and romance of Paris, the majestic snow-clad Swiss Alps, historical ruins of Rome, and canals of Venice, it offers travel experiences that cater to everyone.",
    bestTimeToVisit: "May to September (Spring/Summer) & December (for Christmas Markets)",
    attractions: ["Eiffel Tower (Paris)", "Mount Titlis & Swiss Alps", "Colosseum (Rome)", "Canals of Venice"],
    tips: [
      "Apply for your Schengen visa at least 2 to 3 months prior to travel.",
      "Buy a Swiss Travel Pass for unlimited travel on Swiss trains, buses, and boats.",
      "Keep digital copies of your passport and visa on your cloud storage."
    ],
    gradientClass: "from-blue-600 to-indigo-900"
  },
  {
    slug: "bali",
    name: "Bali",
    shortDesc: "The Island of the Gods, featuring tropical forests, beaches, and temples.",
    description: "Bali is Indonesia's most popular holiday island. With its volcanic mountains, terraced rice paddies, sandy beaches, cliffside temples, and welcoming local culture, it is a top destination for honeymoons and wellness retreats.",
    bestTimeToVisit: "April to October (Dry season)",
    attractions: ["Ubud Monkey Forest & Rice Terraces", "Tanah Lot Temple", "Uluwatu Temple Cliff", "Nusa Penida Kelingking Beach"],
    tips: [
      "Dress respectfully (covering shoulders and knees) when entering Balinese Hindu temples.",
      "Carry cash (Indonesian Rupiah) as small vendors and cafes do not accept cards.",
      "Try local dishes like Nasi Goreng, Mie Goreng, and Satay."
    ],
    gradientClass: "from-emerald-400 to-indigo-800"
  },
  {
    slug: "dubai",
    name: "Dubai",
    shortDesc: "A futuristic city of gold, luxury shopping, and desert safaris.",
    description: "Dubai is a city of superlatives. Located in the Arabian Desert, it boasts the world's tallest building (Burj Khalifa), massive luxury shopping malls, artificial palm-shaped islands, and thrilling desert dune bashing experiences.",
    bestTimeToVisit: "November to March",
    attractions: ["Burj Khalifa 124th/148th Floors", "Dubai Mall & Fountain Show", "Palm Jumeirah & Atlantis", "Desert Dune Bashing & Safari"],
    tips: [
      "Expect high temperatures during the summer months (May to September).",
      "Observe local laws regarding public behaviour and dress codes.",
      "Purchase entry tickets to Burj Khalifa online in advance to secure sunset slots."
    ],
    gradientClass: "from-yellow-500 to-orange-700"
  },
  {
    slug: "thailand",
    name: "Thailand",
    shortDesc: "The land of smiles, ornate golden temples, and pristine tropical beaches.",
    description: "Thailand offers a vibrant mix of ancient culture and modern fun. Explore the glittering temples and shopping malls of Bangkok, the nightlife and coral islands of Pattaya, and the beaches of Phuket and Krabi.",
    bestTimeToVisit: "November to February",
    attractions: ["Grand Palace & Wat Pho (Bangkok)", "Coral Island (Pattaya)", "Phi Phi Islands (Phuket)", "Wat Phra That Doi Suthep (Chiang Mai)"],
    tips: [
      "Carry light cotton clothing and buy insect repellent locally.",
      "Taxis and Tuk-Tuks should have their meters turned on, or agree on the fare before boarding.",
      "Ensure passport validity of at least 6 months from the date of arrival."
    ],
    gradientClass: "from-orange-400 to-rose-600"
  },
  {
    slug: "singapore",
    name: "Singapore",
    shortDesc: "A clean, modern garden city-state featuring theme parks and future architecture.",
    description: "Singapore is a cosmopolitan city-state that seamlessly blends nature with technology. Known for its cleanliness, efficient transport, botanical gardens, and world-class theme parks like Universal Studios.",
    bestTimeToVisit: "Year-round (December to June is slightly drier)",
    attractions: ["Gardens by the Bay", "Universal Studios Singapore", "Sentosa Island", "Marina Bay Sands SkyPark"],
    tips: [
      "Littering and chewing gum are strictly prohibited and attract heavy fines.",
      "Use the MRT train system to get around; it is fast, cheap, and very convenient.",
      "Carry a small umbrella, as quick tropical rain showers are common."
    ],
    gradientClass: "from-pink-500 to-indigo-700"
  },
  {
    slug: "manali",
    name: "Manali",
    shortDesc: "A popular Himalayan resort town perfect for snow and adventure sports.",
    description: "Nestled in the Beas River Valley, Manali is a popular hill station in Himachal Pradesh. Surrounded by pine forests and high peaks, it is the gateway to Solang Valley, Atal Tunnel, and Lahaul Valley.",
    bestTimeToVisit: "October to June (December to February for snow)",
    attractions: ["Hadimba Temple", "Solang Valley adventure sports", "Atal Tunnel & Sissu", "Rohtang Pass snow point"],
    tips: [
      "Plan your Rohtang Pass visit in advance as permits are limited and controlled by the government.",
      "Enjoy local hot springs in Vashisht, but keep belongings safe.",
      "Pack heavy winter coats if traveling in winter."
    ],
    gradientClass: "from-cyan-300 to-indigo-700"
  },
  {
    slug: "shimla",
    name: "Shimla",
    shortDesc: "The historic summer capital of British India, known for its colonial architecture.",
    description: "Shimla, the capital of Himachal Pradesh, boasts rich colonial history. Walk down the vehicle-free Mall Road, see the historic Viceroy's Lodge, and enjoy the snow-clad peaks at nearby Kufri.",
    bestTimeToVisit: "March to June & November to February",
    attractions: ["The Ridge & Christ Church", "Kufri snow slopes", "Viceroy's Lodge (Indian Institute of Advanced Study)", "Jakhoo Temple (Monkey Temple)"],
    tips: [
      "Vehicles are not allowed on the main Mall Road; prepare for a gentle walk uphill.",
      "Be careful with monkeys near Jakhoo Temple; keep food items and glasses inside bags.",
      "Take the toy train from Kalka to Shimla for a scenic, historic journey."
    ],
    gradientClass: "from-sky-300 to-slate-700"
  }
];
