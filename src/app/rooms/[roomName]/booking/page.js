"use client";
import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";
import { useRoom } from "@/context/roomContext";

export default function BookingPage() {
  const { selectedRoom: room } = useRoom();
  if (!room) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">
          No room selected. Please go back to the rooms page.
        </p>
      </div>
    );
  }
  return (
    <>
      <Slider images={[room.image_url]}>
        <NavAndFooterWrap>
          <div className="h-[70vh]">Welcome to {room.name}</div>
        </NavAndFooterWrap>
      </Slider>
    </>
  );
}
