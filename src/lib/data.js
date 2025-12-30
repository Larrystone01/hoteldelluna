import {
  Wifi,
  UtensilsCrossed,
  Dumbbell,
  Car,
  Waves,
  Baby,
  Briefcase,
  Wine,
  Sparkles,
  Coffee,
  Shield,
  Headphones,
} from "lucide-react";

export const facilitiesData = [
  {
    id: 1,
    name: "Indoor Gym",
    src: "/images/gym-interior.jpeg",
    description:
      "Stay active during your stay with our fully equipped fitness center. From cardio machines to free weights and yoga mats, our gym has everything you need to keep up with your routine in a comfortable, modern space.",
    category: "Gym",
  },
  {
    id: 2,
    name: "Lobby",
    src: "/images/lobby.jpg",
    description:
      "The heart of the hotel. Our lobby isn’t just a waiting area — it’s your first impression of comfort and elegance. Spacious, welcoming, and staffed with attentive professionals ready to assist you, it sets the tone for your entire stay..",
    category: "hotel lobby",
  },
  {
    id: 3,
    name: "The Restaurant",
    src: "/images/restaurant.jpeg",
    description:
      "More than just meals — it’s an experience. Our restaurant offers a curated menu of local and international cuisine, prepared with fresh ingredients and served in a warm, welcoming setting. From breakfast buffets to fine dining dinners, we’ve got your cravings covered",
    category: "restaurant",
  },
  {
    id: 4,
    name: "Lounge Bar",
    src: "/images/lounge-bar.jpg",
    description:
      "The perfect spot to unwind. Sip on handcrafted cocktails, premium wines, or your favorite spirits in a stylish lounge atmosphere — whether you’re celebrating, socializing, or simply relaxing after a long day.",
    category: "lounge",
  },
  {
    id: 5,
    name: "Event Hall & Conference",
    src: "/images/hall.jpg",
    description:
      "A stage for unforgettable moments. From weddings to galas, our event hall combines elegant design with customizable layouts to suit any occasion. Backed by professional planning support, modern sound systems, and seamless service, we make sure your event runs flawlessly while leaving a lasting impression on every guest.",
    category: "banquet hall",
  },
  {
    id: 6,
    name: "Meeting Room",
    src: "/images/meeting-room.jpg",
    description:
      "Where business meets focus. Equipped with high-speed connectivity, presentation tools, and flexible seating, our meeting rooms are built to help ideas flow and decisions get made.",
    category: "meeting room",
  },
  {
    id: 7,
    name: "Swimming Pool",
    src: "/images/swimming-pool.jpg",
    description:
      "Not just a pool — an escape. Whether you’re starting your morning with energizing laps or unwinding under the sun with a cocktail, our poolside area is designed for relaxation and leisure. Comfortable loungers, clean facilities, and a serene atmosphere make it the perfect spot to disconnect and recharge.",
    category: "swimming pool",
  },
  {
    id: 8,
    name: "Spa",
    src: "/images/spa.jpeg",
    description:
      "Your escape into relaxation. Indulge in massages, facials, or full-body treatments designed to melt away stress and rejuvenate your body and mind.",
    category: "spa",
  },
];

export const navItems = [
  {
    id: "home",
    label: "HOME",
    href: "/",
  },
  {
    id: "about",
    label: "ABOUT US",
    href: "/about",
  },
  {
    id: "services",
    label: "SERVICES",
    href: "/our-services",
  },
  {
    id: "rooms",
    label: "ROOMS",
    href: "/rooms",
  },
  {
    id: "facilities",
    label: "FACILITIES",
    href: "/facilities",
  },
  {
    id: "booking",
    label: "BOOK US",
    href: "/booking",
  },
  {
    id: "contact",
    label: "CONTACT",
    href: "/contact",
  },
  {
    id: "blog",
    label: "BLOGS",
    href: "/blogs",
  },
];

export const FAQS = [
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 48 hours before check-in. After that, one night's stay will be charged.",
  },
  {
    q: "Do you offer airport shuttle service?",
    a: "Yes, we provide complimentary airport shuttle service. Please inform us of your arrival time.",
  },
  {
    q: "Are pets allowed?",
    a: "We welcome small pets (under 10kg) with a small additional fee. Please mention this when booking.",
  },
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 2:00 PM and check-out is until 12:00 PM. Early check-in/late check-out available upon request.",
  },
];

export const services = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Free High-Speed WiFi",
    description:
      "Stay connected with complimentary high-speed internet throughout the hotel.",
    category: "amenities",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: "Restaurant & Bar",
    description:
      "Enjoy exquisite cuisine and premium beverages at our on-site restaurant and bar.",
    category: "dining",
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Fitness Center",
    description:
      "State-of-the-art gym equipment available 24/7 for our guests.",
    category: "wellness",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Airport Shuttle",
    description:
      "Complimentary airport pickup and drop-off service for your convenience.",
    category: "transport",
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Swimming Pool",
    description:
      "Relax by our outdoor pool with a stunning view and poolside service.",
    category: "wellness",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Spa & Wellness",
    description:
      "Rejuvenate with our full-service spa offering massages and beauty treatments.",
    category: "wellness",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Business Center",
    description:
      "Fully equipped business center with meeting rooms and conference facilities.",
    category: "business",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Room Service",
    description:
      "24-hour room service delivering meals and refreshments to your door.",
    category: "dining",
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Kids Club",
    description:
      "Supervised activities and entertainment for children aged 4-12.",
    category: "family",
  },
  {
    icon: <Wine className="w-8 h-8" />,
    title: "Rooftop Lounge",
    description:
      "Enjoy panoramic city views with cocktails and light bites at our rooftop bar.",
    category: "dining",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "24/7 Security",
    description:
      "Round-the-clock security personnel and CCTV monitoring for your safety.",
    category: "amenities",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Concierge Service",
    description:
      "Our dedicated concierge team assists with bookings, tours, and recommendations.",
    category: "amenities",
  },
];
