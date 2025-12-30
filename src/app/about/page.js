import React from "react";
import Image from "next/image";
import NavAndFooterWrap from "@/components/wrapper/Index";
import Slider from "@/components/content/backgroundSlider";
import Button from "@/components/Button";
import BreadCrumbs from "@/components/content/breadcrumbs";
import SeoPage from "../components/seopage";

export const metadata = {
  title: "About Us | Hotel Del Luna, Ilorin",
  description:
    "Learn about Hotel Del Luna in Ilorin, our mission, history, and commitment to providing luxury accommodations and exceptional hospitality.",
  alternates: { canonical: "https://hoteldelluna.com/about" },
  openGraph: {
    title: "About Us | Hotel Del Luna, Ilorin",
    description:
      "Discover Hotel Del Luna’s story, mission, and dedication to providing comfortable rooms and premium facilities in Ilorin.",
    url: "https://hoteldelluna.vercel.app/about",
    type: "website",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Del Luna About Us",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <Slider images={["/images/lobby.jpg"]}>
      <NavAndFooterWrap>
        <SeoPage
          hidden={true}
          title="About Hotel Del Luna — Luxury Hotel in Ilorin"
          intro="Hotel Del Luna in Ilorin offers premium accommodations, modern facilities, and exceptional hospitality. Learn about our story, mission, and commitment to guests."
          sections={[
            {
              heading: "Our Mission",
              content:
                "To provide guests with a luxurious and comfortable stay in Ilorin, combining modern amenities with exceptional service.",
            },
            {
              heading: "Our Story",
              content:
                "Hotel Del Luna was founded to offer travelers in Ilorin a premium hospitality experience. We focus on comfort, safety, and attention to detail.",
            },
            {
              heading: "Our Values",
              content:
                "We prioritize guest satisfaction, quality service, and maintaining a peaceful and elegant environment.",
              list: [
                "Exceptional hospitality",
                "Clean and safe environment",
                "Guest-first approach",
              ],
            },
            {
              heading: "Why Choose Us",
              content:
                "Guests choose Hotel Del Luna for its welcoming atmosphere, modern amenities, and prime location in Ilorin.",
            },
          ]}
          schema={{
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Hotel Del Luna",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ilorin",
              addressCountry: "NG",
            },
            url: "https://hoteldelluna.vercel.app",
          }}
        />
        <div className="container px-6 mx-auto">
          <section className="about-hero">
            <div className="flex justify-center items-center text-white h-screen text-center">
              <p className="text-[30px]">
                &quot;Nestled in the heart of the city, Hotel Del Luna combines
                timeless elegance with modern comfort. Our mission is to create
                unforgettable experiences for every guest by offering premium
                services, luxurious rooms, and exceptional hospitality.&quot;
              </p>
            </div>
          </section>
          <section className="py-8">
            <BreadCrumbs />
            <div className="about-grid flex flex-col md:grid md:grid-cols-2 gap-8">
              <div className="about-part">
                <h1 className="text-[30px] md:text-[60px] leading-none">
                  Start your Amazing Adventure!
                </h1>
                <div className="flex flex-col space-y-3 text-[16px] mt-3">
                  <p>
                    Hotel Del Luna welcomes guests with exceptional service,
                    efficiency, natural warmth, and an inviting ambiance. We
                    strive to make your stay feel like a home away from home,
                    whether you&apos;re here for business, recreation, or
                    leisure. Our hotel offers unmatched services and facilities.
                  </p>{" "}
                  <p>
                    Located in a serene residential area of the city, we are
                    close to major business hubs and multinational companies.
                    Known for our warm hospitality and guest comfort, we offer
                    luxurious, well-furnished rooms equipped with modern
                    amenities such as Wi-Fi, flat-screen TVs, and fridges.
                  </p>{" "}
                  <p>
                    Our accommodations include Deluxe, Signature Stay, Garden
                    Retreat, Business Suites, Queen Suite, and King Suite, along
                    with a board meeting room and business center. We also
                    provide versatile event and conference halls. Our friendly
                    staff is dedicated to ensuring you have an excellent
                    experience. Your search for an exceptional hotel ends here.
                  </p>
                  <div className="self-start">
                    <Button width="200px" label={"Watch Video"} href="/" />
                  </div>
                </div>
              </div>
              <div className="image-part relative min-h-[500px]">
                <Image
                  src="/images/hotel-view.jpeg"
                  alt="background-image"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </NavAndFooterWrap>
    </Slider>
  );
}
