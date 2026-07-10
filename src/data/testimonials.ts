export interface Testimonial {
  id: number;
  name: string;
  destination: string;
  rating: number;
  review: string;
  imageFallback: string; // A 2-character initials string for beautiful avatar generation
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    destination: "Kashmir",
    rating: 5,
    review: "Our Kashmir trip booked through Maheshwari Travels was absolutely flawless. The houseboat stay in Dal Lake was a dream, and the driver was extremely polite and professional. Highly recommended!",
    imageFallback: "AS"
  },
  {
    id: 2,
    name: "Priyanka Patel",
    destination: "Maldives",
    rating: 5,
    review: "Deepak ji customized our honeymoon water villa package in Maldives within our budget. The speed boat transfers were on time, and the resort was stunning. We will definitely book all our future trips here.",
    imageFallback: "PP"
  },
  {
    id: 3,
    name: "Rahul Verma",
    destination: "Rajasthan Tour",
    rating: 5,
    review: "We rented a Tempo Traveller for a family trip to Udaipur and Jaisalmer. The vehicle was clean, well-maintained, and the driver knew the routes perfectly. Excellent local tour management by Maheshwari Travels.",
    imageFallback: "RV"
  },
  {
    id: 4,
    name: "Sanjay Gupta",
    destination: "Singapore & Bali",
    rating: 4,
    review: "Extremely helpful team. They managed our flights, hotels, and visas for Singapore and Bali. The visa document preparation guidance was very professional, and we got our visas on time.",
    imageFallback: "SG"
  },
  {
    id: 5,
    name: "Dr. Meenakshi Iyer",
    destination: "Kerala",
    rating: 5,
    review: "A wonderfully planned family tour for 3 generations. Child-friendly hotels, relaxed travel pace, and great support from the coordinator throughout the tour. Thank you Deepak Maheshwari ji!",
    imageFallback: "MI"
  }
];
