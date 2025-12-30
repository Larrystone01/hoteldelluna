"use client";
import { useEffect, useState } from "react";
import NavAndFooterWrap from "@/components/wrapper/Index";
import Slider from "@/components/content/backgroundSlider";
import Button from "@/components/Button";
import SubHero from "@/components/content/subHero";
import { GlobalContextProvider } from "@/context/context";
import SeoPage from "./components/seopage";
import { supabase } from "@/lib/supabaseClient";
import HeroRoomShowCase from "@/components/content/roomSection";
import FacilitiesShowcase from "./facilities/component/ServiceShowcase";
import { Cinzel } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";

const playfair = Cinzel({
  subsets: ["latin"],
  weight: ["500"],
});

export default function HomeClient() {
  const [roomsData, setRoomsData] = useState([]);
  useEffect(() => {
    const getRooms = async () => {
      const { data, error } = await supabase.from("rooms").select("*");
      if (error) console.error("Error fetching Rooms:", error.message);
      else setRoomsData(data);
    };
    getRooms();
  }, []);
  return (
    <GlobalContextProvider imageData={roomsData}>
      {/* Hidden SEO content with keywords */}
      <SeoPage
        hidden={true}
        title="Luxury Hotel in Ilorin | Hotel Del Luna"
        intro="Hotel Del Luna in Ilorin offers luxury accommodations, premium facilities, and exceptional hospitality for business and leisure travelers."
        sections={[
          {
            heading: "Comfortable Rooms and Suites in Ilorin",
            content:
              "Experience luxury and comfort in our well-furnished rooms and suites at Hotel Del Luna. Perfect for business trips, leisure, and family stays.",
            list: [
              "Standard and deluxe rooms",
              "Spacious suites with modern amenities",
              "Air-conditioned rooms with free Wi-Fi",
              "Safe and clean environment",
            ],
          },
          {
            heading: "Premium Hotel Facilities in Ilorin",
            content:
              "Enjoy our hotel facilities including 24-hour room service, restaurant, secure parking, and professional staff dedicated to your comfort.",
            list: [
              "Restaurant and lounge",
              "24-hour room service",
              "Secure parking",
              "Friendly and professional staff",
            ],
          },
          {
            heading: "Prime Location in Ilorin",
            content:
              "Conveniently located in Ilorin, Hotel Del Luna offers easy access to city attractions, business centers, and transport hubs.",
            list: [
              "Near main roads and transport hubs",
              "Close to business centers",
              "Safe and accessible location",
            ],
          },
          {
            heading: "Why Choose Hotel Del Luna",
            content:
              "Our guests choose Hotel Del Luna for unmatched comfort, luxury accommodations, and excellent customer service in Ilorin.",
            list: [
              "Luxury at affordable rates",
              "Peaceful and secure environment",
              "Exceptional hospitality",
            ],
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
      <Slider interval={4000}>
        <NavAndFooterWrap>
          <div className="container px-6 mx-auto">
            <section className="text-white">
              <div className="hero-container flex justify-center items-center h-screen">
                <div className="hero text-center">
                  <h1
                    className={`hero-text text-[25px] ${playfair.className} text-[]`}
                  >
                    <Typewriter
                      words={["Welcome To Hotel Del Luna"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </h1>
                  <h1 className="md:text-[60px] text-[30px]">
                    Explore More. Stay Better{" "}
                    <span className="block">
                      {" "}
                      Your Comfort is Our Priority{" "}
                    </span>
                    .
                  </h1>
                  <Button href="/about" label={"Explore"} />
                </div>
              </div>
            </section>
            <SubHero />
            <HeroRoomShowCase />
            <FacilitiesShowcase limit={3} btnLabel="VIEW MORE" width="150px" />
          </div>
        </NavAndFooterWrap>
      </Slider>
    </GlobalContextProvider>
  );
}
