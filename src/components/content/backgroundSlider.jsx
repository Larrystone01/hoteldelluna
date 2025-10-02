"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Slider({
  images = ["/images/hotel-view-bg.jpg", "/images/hotel-view-bg2.jpg"],
  interval = 5000,
  children,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [interval, images.length]);
  return (
    <>
      <div className="relative w-full h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            // style={{
            //   transform: `translateX(${(index - currentIndex) * 100}%)`,
            // }}
          >
            <Image
              src={src}
              fill
              alt={`background Image ${index}`}
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
        <div className="relative h-full z-10">{children}</div>
      </div>
    </>
  );
}
