"use client";
import Image from "next/image";
import { useGlobalContext } from "@/context/context";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { facilitiesData } from "@/lib/image";

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
      <section className="py-10">
        <div className="facilities-hero border-b pb-10">
          <h1 className="uppercase relative flex items-center gap-3 text-yellow-300 mb-10">
            <span className="w-10 h-[2px] bg-yellow-300"></span>
            facilities{" "}
          </h1>
          <div className="text-button flex items-center">
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
            <div className="button flex-1">
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
                        : "flex flex-row-reverse mr-auto gap-3"
                    }`}
                  >
                    <span>{facility.category}</span>{" "}
                    <span className="bg-yellow-300 text-white rounded-full w-7 h-7 flex justify-center items-center">
                      {facility.id}
                    </span>
                  </h3>
                  <h1 className="relative flex pb-2 after:content-[''] after:absolute after:h-6 after:w-[1px] after:-bottom-5 after:bg-black">
                    {facility.name}
                  </h1>
                  <p className="pt-1">{facility.description}</p>
                  <Link href="/facilities">
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
