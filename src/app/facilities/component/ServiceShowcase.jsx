"use client";
import Image from "next/image";
import { useGlobalContext } from "@/context/context";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { facilitiesData } from "@/lib/data";

export default function FacilitiesShowcase({
  facilityData,
  limit,
  btnLabel = "Take a Virtual tour of our Facility",
  width = "350px",
}) {
  // const { imageData } = useGlobalContext();
  const imageData = facilitiesData;
  const Data = facilityData ?? imageData;

  const displayedData = limit ? Data.slice(0, limit) : Data;

  return (
    <>
      <SeoPage
        hidden={true}
        title="Hotel Facilities — Hotel Del Luna in Ilorin"
        intro="Hotel Del Luna offers modern facilities and premium amenities for guests seeking comfort, luxury, and relaxation in Ilorin."
        sections={[
          {
            heading: "Restaurant and Dining",
            content:
              "Savor delicious meals at our in-house restaurant featuring local and international cuisine.",
            list: [
              "Buffet and à la carte options",
              "Room service available",
              "Fresh and high-quality ingredients",
            ],
          },
          {
            heading: "Recreational Facilities",
            content:
              "Relax and unwind with our recreational options designed for comfort and leisure.",
            list: ["Swimming pool", "Spa and wellness center", "Fitness gym"],
          },
          {
            heading: "Business and Event Services",
            content:
              "Host meetings or events with our professional business and conference facilities.",
            list: [
              "Conference rooms",
              "High-speed internet",
              "Projectors and AV equipment",
            ],
          },
          {
            heading: "Guest Services",
            content:
              "Our dedicated staff ensure a seamless stay with personalized services.",
            list: [
              "24-hour front desk",
              "Concierge services",
              "Housekeeping and laundry",
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
      <section className="py-10">
        <div className="facilities-hero border-b pb-10">
          <h1 className="uppercase relative flex items-center gap-3 text-yellow-300 mb-10">
            <span className="w-10 h-[2px] bg-yellow-300"></span>
            facilities{" "}
          </h1>
          <div className="text-button flex flex-col space-y-6 md:flex-row items-center">
            <div className="text flex-1">
              <h1 className="text-[35px]">
                ENJOY COMPLETE & BEST QUALITY FACILITIES
              </h1>
              <p>
                Explore our world-class amenities! From exquisite dining to
                rejuvenating pools, Hotel Del Luna offers an unparalleled
                experience in luxury and relaxation.
              </p>
            </div>
            <div className="button flex-1 self-start">
              <Button width={width} label={btnLabel} href="/facilities" />
            </div>
          </div>
        </div>
        <div className="facilities-container overflow-hidden">
          {displayedData.map((facility, index) => {
            // const varianats = {
            //   initial: {index % 2 === 0 ? },
            // };
            return (
              <div
                className="facility-container md:grid md:grid-cols-2 gap-6 border-b py-9"
                key={facility.id}
              >
                <motion.div
                  initial={
                    index % 2 === 0
                      ? { x: "-100%", opacity: 0 }
                      : { x: "100%", opacity: 0 }
                  }
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  className={`description flex flex-col justify-center space-y-5 ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h3
                    className={`uppercase text-yellow-300 text-[20px] ${
                      index % 2 === 0
                        ? "flex flex-col-reverse md:flex-row md:justify-between"
                        : "flex flex-col-reverse md:flex-row-reverse mr-auto gap-3"
                    }`}
                  >
                    <span>{facility.category}</span>{" "}
                    <span className="bg-yellow-300 text-white rounded-full w-7 h-7 flex justify-center items-center mb-3">
                      {facility.id}
                    </span>
                  </h3>
                  <h1 className="relative flex pb-2 after:content-[''] after:absolute after:h-6 after:w-[1px] after:-bottom-5 after:bg-black">
                    {facility.name}
                  </h1>
                  <p className="pt-1">{facility.description}</p>
                  <Link href="/facilities" className="mb-3">
                    <ArrowRight color="gold" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={
                    index % 2 === 0
                      ? { x: "100%", opacity: 0 }
                      : { x: "-100%", opacity: 0 }
                  }
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  className={`facility-image relative w-full h-96 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={facility.src}
                    alt={facility.category}
                    sizes="100vw"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
