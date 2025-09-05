"use client";
import { useGlobalContext } from "@/context/context";
import { useState, useEffect } from "react";
import { BedSingle, CircleArrowRight, CircleArrowLeft } from "lucide-react";
import Button from "../Button";

export default function HeroRoomShowCase() {
  const { imageData } = useGlobalContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(0);

  const getImageByCategory = () => {
    const categories = {};

    imageData.forEach((image) => {
      if (!categories[image.roomCategory]) {
        categories[image.roomCategory] = image;
      }
    });
    return Object.values(categories);
  };

  const HeroSectionRoomsShowcase = getImageByCategory();

  // Auto-scroll functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex + 1) % HeroSectionRoomsShowcase.length
  //     );
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, [HeroSectionRoomsShowcase.length]);

  // const formatPrice = (price) => {
  //   return ₦${price.toLocaleString()};
  // };

  const handleManualScroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return Math.min(prevIndex + 1, HeroSectionRoomsShowcase.length - 1);
      } else {
        return Math.max(prevIndex - 1, 0);
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // desktop
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // tablet
      } else {
        setSlidesPerView(1); // mobile
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const totalSlides = HeroSectionRoomsShowcase.length;
  const maxIndex = totalSlides - slidesPerView;
  const clampedIndex = Math.min(currentIndex, maxIndex);
  const translateX = `-${(clampedIndex * 100) / slidesPerView}%`;

  return (
    <>
      <section className="relative">
        <div className="pt-10 pb-15">
          <div className="absolute bg-yellow-200 -mx-6 inset-0 -z-10"></div>
          <div className="room-suites text-center space-y-4 mb-5">
            <h1 className="text-[50px]">Rooms & Suites</h1>
            <p className="max-w-lg mx-auto text-[20px]">
              Have an experience like never before with our curated list of
              accommodations that beats the imagination with unmatched safety
              measures. we’ve done the groundwork to present you with a variety
              of choices that guarantee a worry-free stay.
            </p>
            <Button label={"ALL ROOMS"} width="150px" href="/rooms" />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden pb-7">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translateX})`,
                  }}
                >
                  {HeroSectionRoomsShowcase.map((room) => (
                    <div
                      key={room.id}
                      className="md:w-1/2 lg:w-1/3 w-full flex-shrink-0 px-3"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                        {/* Room Image */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={room.src}
                            alt={room.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Premium
                          </div>
                        </div>

                        {/* Room Details */}
                        <div className="p-6 flex flex-col space-y-5">
                          <div className="flex items-center text-gray-600">
                            <BedSingle size={16} className="mr-1" />
                            <span className="text-sm">
                              Adults: {room.noOfOccupant}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {room.name}
                            </h3>
                          </div>

                          {/* Price and Book Button */}
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-3xl font-bold text-yellow-300 flex items-center space-x-1">
                                <span>{room.price}</span>
                                <span className="text-[14px] text-gray-500">
                                  per night
                                </span>
                              </div>
                            </div>
                            <Button label="BOOK" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => handleManualScroll("prev")}
                className={`absolute right-18 -bottom-18 transform -translate-y-1/2 bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                  currentIndex === 0
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-white cursor-pointer"
                }`}
              >
                <CircleArrowLeft />
              </button>
              <button
                onClick={() => handleManualScroll("next")}
                className={`absolute right-4 -bottom-18 transform -translate-y-1/2 bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                  currentIndex === maxIndex
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-white cursor-pointer"
                }`}
              >
                <CircleArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
