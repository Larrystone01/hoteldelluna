"use client";
import Slider from "react-slick";
import { useGlobalContext } from "@/context/context";
import { BedSingle, CircleArrowRight, CircleArrowLeft } from "lucide-react";
import Button from "../Button";

const CustomPrevArrow = ({ onClick, className }) => {
  return (
    <button
      className={`absolute right-18 -bottom-15 z-10 rounded-full p-2 shadow-lg transition-all ${
        className?.includes("slick-disabled")
          ? "bg-gray-300 text-gray-400 cursor-not-allowed"
          : "bg-white text-black hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <CircleArrowLeft />
    </button>
  );
};
const CustomNextArrow = ({ onClick, className }) => {
  return (
    <button
      className={`absolute right-3 -bottom-15 z-10 rounded-full p-2 shadow-lg transition-all ${
        className?.includes("slick-disabled")
          ? "bg-gray-300 text-gray-400 cursor-not-allowed"
          : "bg-white text-black hover:bg-gray-100 cursor-pointer"
      }`}
      onClick={onClick}
    >
      <CircleArrowRight />
    </button>
  );
};

export default function HeroRoomShowCase() {
  const { imageData } = useGlobalContext();

  const getImageByCategory = () => {
    const categories = {};

    imageData.forEach((image) => {
      if (!categories[image.roomCategory]) {
        categories[image.roomCategory] = image;
      }
    });
    return Object.values(categories);
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const HeroSectionRoomsShowcase = getImageByCategory();
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
          <div className="slider-container relative">
            <Slider {...settings}>
              {HeroSectionRoomsShowcase.map((image) => (
                <div key={image.id} className="">
                  <div className="bg-white flex flex-col group max-w-[390px] mx-auto overflow-hidden">
                    <div className="w-full h-[220px] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.roomCategory}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                    </div>
                    <div className="p-3 flex flex-col space-y-7">
                      <h1 className="flex gap-2 items-center">
                        <BedSingle size={15} />{" "}
                        <span>Occupants: {image.noOfOccupant}</span>
                      </h1>
                      <p className="text-[25px] uppercase">{image.name}</p>
                      <div className="price flex justify-between items-center">
                        <p>
                          <span className="text-[25px] text-yellow-300">{image.price}</span> per night
                        </p>
                        <Button href="/book" label="BOOK" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
