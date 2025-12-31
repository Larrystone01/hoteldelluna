import BookingContent from "./bookingContent";
import { Suspense } from "react";

export const metadata = {
  title: "Book a Room | Hotel Del Luna, Ilorin",
  description:
    "Reserve your stay at Hotel Del Luna in Ilorin. Quick and secure online booking for luxury rooms and suites with modern amenities.",
  alternates: { canonical: "https://hoteldelluna.vercel.app/booking" },
  openGraph: {
    title: "Book a Room | Hotel Del Luna, Ilorin",
    description:
      "Secure your room at Hotel Del Luna quickly and easily. Enjoy comfort, premium services, and a seamless online booking experience.",
    url: "https://hoteldelluna.vercel.app/booking",
    type: "website",
    images: [
      {
        url: "/images/grand-vista.jpeg",
        width: 1200,
        height: 630,
        alt: "Book a Room at Hotel Del Luna",
      },
    ],
  },
};

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <BookingContent />
    </Suspense>
  );
}
