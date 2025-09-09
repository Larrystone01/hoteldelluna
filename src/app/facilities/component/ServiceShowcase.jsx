"use client";
import Image from "next/image";
import { useGlobalContext } from "@/context/context";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesShowcase({ limit }) {
  const { imageData } = useGlobalContext();
  const displayedData = limit ? imageData.slice(0, limit) : imageData;
  return (
    <>
      <div className="facilities-container">
        {displayedData.map((facility, index) => (
          <div
            className="facility-container grid md:grid-cols-2 gap-6 border-b py-9"
            key={facility.id}
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={`description flex flex-col justify-center space-y-5 ${
                index % 2 === 0 ? "order-1" : "order-2"
              }`}
            >
              <h3 className="flex flex-col-reverse md:flex-row md:justify-between uppercase text-yellow-300 text-[20px]">
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
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={`facility-image relative w-full h-96 ${
                index % 2 === 0 ? "order-2" : "order-1"
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
        ))}
      </div>
    </>
  );
}
