import HomeClient from "./homeclient";

export const metadata = {
  title: "Luxury Hotel in Ilorin | Hotel Del Luna",
  description:
    "Hotel Del Luna is a luxury hotel in Ilorin offering comfortable rooms, modern facilities, and exceptional service for business and leisure travelers. Book your stay today.",
  keywords: [
    "Hotel Del Luna",
    "Luxury hotel Ilorin",
    "Ilorin hotels",
    "Comfortable rooms Ilorin",
    "Hotel booking Ilorin",
    "Premium hotel facilities",
    "Hotel amenities Ilorin",
  ],
  alternates: {
    canonical: "https://hoteldelluna.com",
  },
  openGraph: {
    title: "Luxury Hotel in Ilorin | Hotel Del Luna",
    description:
      "Stay at Hotel Del Luna in Ilorin. Comfort, elegance, and excellent hospitality.",
    url: "https://hoteldelluna.com",
    type: "website",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Del Luna Ilorin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Hotel in Ilorin | Hotel Del Luna",
    description:
      "Experience comfort, elegance, and exceptional hospitality at Hotel Del Luna in Ilorin.",
    images: ["/images/og-home.jpg"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
