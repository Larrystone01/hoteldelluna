"use client";
import { roomData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function RoomDisplay() {
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 4;
  const totalPages = Math.ceil(roomData.length / roomsPerPage);
  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = roomData.slice(startIndex, startIndex + roomsPerPage);
  const handleSwitch = (page) => {
    setCurrentPage(page);
  };
  const handleNext = () => {
    setCurrentPage((prev) => {
      if (prev < totalPages) {
        return prev + 1;
      }
      return prev; // stay on the last page
    });
  };

  const handlePrev = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev; // stay on the first page
    });
  };

  return (
    <>
      <section className="my-6 md:grid md:grid-cols-4 gap-6">
        <div className="room-container col-span-3 items-start flex flex-col gap-7">
          {currentRooms.map((room) => {
            return (
              <div
                className="room flex flex-col md:flex-row gap-10 mb-5 bg-gray-200 w-full"
                key={room.id}
              >
                <div className="relative md:w-[500px] h-[400px] ">
                  <Image
                    src={room.src}
                    fill
                    className="w-full h-48 object-cover"
                    alt={room.name}
                  />
                </div>
                {/* Room Details */}
                <div className="room-details flex flex-col space-y-5 justify-center px-5 md:px-0 md:w-1/3">
                  <h1 className="text-[30px] font-bold uppercase">
                    {room.name}
                  </h1>
                  <p>
                    from{" "}
                    <span className="text-yellow-800 font-bold">
                      {room.price}
                    </span>{" "}
                    per night
                  </p>
                  <div className="peaks grid grid-cols-2">
                    {room.peaks.map((peak, index) => {
                      return (
                        <div key={index} className="flex gap-3 mb-3">
                          <span>{peak.icon}</span>
                          <span>{peak.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="buttons flex space-x-1 mb-4 md:mb-0">
                    <Link
                      href={`rooms/${room.slug}`}
                      className="uppercase bg-gray-400 px-5 py-2 text-[12px] hover:bg-transparent border-1 border-gray-400"
                    >
                      {" "}
                      Details
                    </Link>
                    <Link
                      href={`rooms/${room.slug}`}
                      className="uppercase bg-yellow-400 px-5 py-2 text-[12px] hover:bg-transparent border-1 border-yellow-400"
                    >
                      {" "}
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="navigation-pagination flex justify-between w-full mb-3.5">
            <button onClick={handlePrev} className="cursor-pointer">
              Prev
            </button>
            <div className="pagination flex space-x-4">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={index}
                    className={`cursor-pointer ${
                      currentPage === page ? "text-yellow-300" : ""
                    }`}
                    onClick={() => {
                      handleSwitch(page);
                    }}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
            <button onClick={handleNext} className="cursor-pointer">
              Next
            </button>
          </div>
        </div>
        <aside className="col-span-1 bg-black -z-20 h-fit">
          <h1 className="text-white">Check Availability</h1>
        </aside>
      </section>
    </>
  );
}
