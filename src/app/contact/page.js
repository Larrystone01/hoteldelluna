import ContactPageContent from "./Contactpage";

export const metadata = {
  title: "Contact Us | Hotel Del Luna, Ilorin",
  description:
    "Get in touch with Hotel Del Luna in Ilorin for inquiries, bookings, or assistance. Our team is ready to provide prompt and friendly support.",
  alternates: { canonical: "https://hoteldelluna.vercel.app/contact" },
  openGraph: {
    title: "Contact Hotel Del Luna | Ilorin",
    description:
      "Reach out to Hotel Del Luna for reservations, questions, or customer support. Fast and friendly responses guaranteed.",
    url: "https://hoteldelluna.vercel.app/contact",
    type: "website",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hotel Del Luna",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
