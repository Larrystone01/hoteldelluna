import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";
import RoomDisplay from "./components/roomshowcase";
import BreadCrumbs from "@/components/content/breadcrumbs";

export default function HotelRooms() {
  return (
    <>
      <Slider images={["/images/skyline-deluxe-2.jpg"]}>
        <NavAndFooterWrap>
          <section className="container px-6 mx-auto">
            <div className="flex justify-center items-end h-screen">
              <div className="rooms-hero w-3xl text-center pb-10">
                <h1 className="text-[50px] text-white">
                  Exquisite, Luxurious & Comfortable Rooms
                </h1>
              </div>
            </div>
            <BreadCrumbs />
            <RoomDisplay />
          </section>
        </NavAndFooterWrap>
      </Slider>
    </>
  );
}
