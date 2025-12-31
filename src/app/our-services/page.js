import ServicesPage from "./servicePage";

export const metadata = {
  title: "Hotel Services | Hotel Del Luna, Ilorin",
  description:
    "Explore the exceptional services offered at Hotel Del Luna in Ilorin including room service, concierge, event planning, and more for a luxurious stay.",
  alternates: { canonical: "https://hoteldelluna.vercel.app/our-services" },
  openGraph: {
    title: "Hotel Services | Hotel Del Luna, Ilorin",
    description:
      "Discover the premium services available at Hotel Del Luna in Ilorin. Experience comfort, luxury, and excellent hospitality during your stay.",
    url: "https://hoteldelluna.vercel.app/our-services",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dfex2qeg7/image/upload/lounge-bar_joi4md.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Del Luna Services",
      },
    ],
  },
};

export default function Page() {
  return <ServicesPage />;
}
