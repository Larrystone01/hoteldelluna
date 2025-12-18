"use client";
import * as Icons from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import CheckAvailability from "@/components/checkAvailability";
import { useRoom } from "@/context/roomContext";

export default function RoomDisplay() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { selectedRoom, setSelectedRoom } = useRoom();
  const router = useRouter();
  useEffect(() => {
    async function fetchRooms() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("rooms").select("*");
        if (error) {
          console.error("Error fetching Rooms:", error.message);
          setError("Error Loading Rooms Kindly Refresh the page");
        }
        setRooms(data || []);
      } catch (err) {
        console.error("Error fetching rooms:", err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  const roomsPerPage = 4;
  const totalPages = Math.ceil(rooms.length / roomsPerPage);
  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = rooms.slice(startIndex, startIndex + roomsPerPage);
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

  const handleBook = (room) => {
    setSelectedRoom(room);
    router.push(`/booking?room=${room.slug}`);
  };

  const handleDetails = (room) => {
    setSelectedRoom(room);
    router.push(`rooms/${room.slug}`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 text-lg font-medium">
          Loading rooms...
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="my-6 lg:grid lg:grid-cols-4 gap-6">
        <div className="room-container col-span-3 items-start flex flex-col gap-7">
          {error && <div></div>}
          {currentRooms.map((room) => {
            return (
              <div
                className="room flex flex-col lg:flex-row gap-10 mb-5 bg-gray-200 w-full h-full"
                key={room.id}
              >
                <div className="relative w-full h-[400px] lg:w-1/2 lg:h-[400px]">
                  <Image
                    src={room.image_url}
                    fill
                    className="w-full h-1/2 object-cover"
                    alt={room.name}
                  />
                </div>
                {/* Room Details */}
                <div className="room-details flex flex-col space-y-5 justify-center px-5 lg:w-1/2 w-full">
                  <h1 className="text-[30px] font-bold uppercase dark:text-black">
                    {room.name}
                  </h1>
                  <p className="dark:text-black">
                    from{" "}
                    <span className="text-yellow-800 font-bold">
                      ₦{room.price}
                    </span>{" "}
                    per night
                  </p>
                  <div className="peaks grid grid-cols-2 dark:text-black">
                    {room.peaks.map((peak, index) => {
                      const Icon = Icons[peak.icon];
                      return (
                        <div key={index} className="flex gap-3 mb-3">
                          <span className="">
                            <Icon size={20} />
                          </span>
                          <span>{peak.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="buttons flex space-x-1 mb-4">
                    <button
                      onClick={() => handleDetails(room)}
                      className="uppercase bg-gray-400 px-5 py-2 text-[12px] hover:bg-transparent border-1 border-gray-400 cursor-pointer"
                    >
                      {" "}
                      Details
                    </button>
                    <button
                      className="uppercase bg-yellow-400 px-5 py-2 text-[12px] hover:bg-transparent border-1 border-yellow-400 cursor-pointer"
                      onClick={() => handleBook(room)}
                    >
                      {" "}
                      Book now
                    </button>
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
        <div className="aside lg:col-span-1">
          <CheckAvailability setRooms={setRooms} />
        </div>
      </section>
    </>
  );
}
