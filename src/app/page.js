import HomeClient from "./homeclient";

export const metadata = {
  title: "Hotel Del Luna | Luxury Hotel in Ilorin",
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
    canonical: "https://hoteldelluna.vercel.app",
  },
  openGraph: {
    title: "Luxury Hotel in Ilorin | Hotel Del Luna",
    description:
      "Stay at Hotel Del Luna in Ilorin. Comfort, elegance, and excellent hospitality.",
    url: "https://hoteldelluna.vercel.app",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dfex2qeg7/image/upload/hotel-view-bg_ycopg0.jpg",
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
    images: [
      "https://res.cloudinary.com/dfex2qeg7/image/upload/booking-img_x700ue.jpg",
      "https://res.cloudinary.com/dfex2qeg7/image/upload/hotel-view-bg_ycopg0.jpg",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeClient />
    </>
  );
}
