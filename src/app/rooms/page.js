import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";

export default function HotelRooms() {
  return (
    <>
      <NavAndFooterWrap>
        <Slider images={["/images/skyline-deluxe-2.jpg"]}>
          <div className="container px-6 mx-auto">
            <section className="flex justify-center items-end h-screen">
              <div className="rooms-hero w-3xl text-center pb-10">
                <h1 className="text-[50px] text-white">
                  Exquisite, Luxurious & Comfortable Rooms
                </h1>
              </div>
            </section>
            
          </div>
        </Slider>
      </NavAndFooterWrap>
    </>
  );
}
