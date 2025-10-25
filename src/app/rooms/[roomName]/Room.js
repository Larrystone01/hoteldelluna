"use client";
import * as Icons from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";
import BreadCrumbs from "@/components/content/breadcrumbs";

export default function RoomPage({ Room }) {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(true);
  };
  // console.log(room);

  if (!Room) {
    return (
      <div className="text-center py-20 text-red-500">Room not found.</div>
    );
  }
  return (
    <>
      <Slider images={[Room.src]}>
        <NavAndFooterWrap>
          <section className="container px-6 mx-auto">
            <div className="h-screen flex flex-col justify-center items-center">
              <h1 className="font-bold text-[70px] text-white uppercase">
                {Room.name}
              </h1>
              <div className="">
                <BreadCrumbs />
              </div>
            </div>
            <main className="room-details w-full py-16 relative">
              <div
                className="room-image w-full mx-auto h-[600px] relative cursor-pointer"
                onClick={handleModal}
              >
                <Image
                  src={Room.src}
                  // width={700}
                  // height={500}
                  fill
                  className="object-cover"
                  alt={Room.slug}
                />
              </div>
              <div className="detail-container mt-10 flex flex-col gap-5">
                <h1 className="text-[50px] font-bold">{Room.name}</h1>
                <p className="capitalize font-light text-2xl text-[16px]">
                  from {Room.price} / night
                </p>
                <p>{Room.description}</p>
                <div className="peaks">
                  <h1 className="mb-5 text-[30px] font-bold">Amenities</h1>
                  <div className="peak grid grid-cols-2 md:grid-cols-3 space-y-3">
                    {Room.peaks.map((peak, index) => {
                      const Icon = Icons[peak.icon];
                      return (
                        <div className="flex flex-col gap-2 w-fit" key={index}>
                          <span className="text-gray-700">
                            <Icon size={30} />
                          </span>
                          <p className="text-[25px]">{peak.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {openModal && (
                <section
                  className="modal-section absolute bg-black/80 inset-0 h-[100vsh] flex flex-col justify-center items-center w-screen max-w-none left-1/2 right-1/2 -mx-[50vw]"
                  onClick={() => setOpenModal(false)}
                >
                  <button
                    className="close-btn top-6 ml-[380px] cursor-pointer mb-3"
                    // onClick={setOpenModal(false)}
                  >
                    <X color="white" />
                  </button>
                  <div
                    className="w-[400px] h-[400px] relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image src={Room.src} fill alt="modal-img" />
                  </div>
                </section>
              )}
            </main>
          </section>
        </NavAndFooterWrap>
      </Slider>
    </>
  );
}
