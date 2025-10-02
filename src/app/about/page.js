import React from "react";
import Image from "next/image";
import NavAndFooterWrap from "@/components/wrapper/Index";
import Slider from "@/components/content/backgroundSlider";
import Button from "@/components/Button";
import BreadCrumbs from "@/components/content/breadcrumbs";

export default function AboutPage() {
  return (
    <Slider images={["/images/lobby.jpg"]}>
      <NavAndFooterWrap>
        <div className="container px-6 mx-auto">
          <section className="about-hero">
            <div className="flex justify-center items-center text-white h-screen text-center">
              <p className="text-[30px]">
                "Nestled in the heart of the city, Hotel Del Luna combines
                timeless elegance with modern comfort. Our mission is to create
                unforgettable experiences for every guest by offering premium
                services, luxurious rooms, and exceptional hospitality"
              </p>
            </div>
          </section>
          <section className="py-16">
            <BreadCrumbs />
            <div className="about-grid md:grid md:grid-cols-2 gap-8">
              <div className="about-part">
                <h1 className="text-[60px] leading-none">
                  Start your Amazing Adventure!
                </h1>
                <div className="flex flex-col space-y-3 text-[16px] mt-3">
                  <p>
                    Hotel Del Luna welcomes guests with exceptional service,
                    efficiency, natural warmth, and an inviting ambiance. We
                    strive to make your stay feel like a home away from home,
                    whether you're here for business, recreation, or leisure.
                    Our hotel offers unmatched services and facilities.
                  </p>{" "}
                  <p>
                    Located in a serene residential area of the city, we are
                    close to major business hubs and multinational companies.
                    Known for our warm hospitality and guest comfort, we offer
                    luxurious, well-furnished rooms equipped with modern
                    amenities such as Wi-Fi, flat-screen TVs, and fridges.
                  </p>{" "}
                  <p>
                    Our accommodations include Deluxe, Signature Stay, Garden
                    Retreat, Business Suites, Queen Suite, and King Suite, along
                    with a board meeting room and business center. We also
                    provide versatile event and conference halls. Our friendly
                    staff is dedicated to ensuring you have an excellent
                    experience. Your search for an exceptional hotel ends here.
                  </p>
                  <div className="self-start">
                    <Button width="200px" label={"Watch Video"} href="/" />
                  </div>
                </div>
              </div>
              <div className="image-part relative">
                <Image
                  src="/images/hotel-view.jpeg"
                  alt="background-image"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </NavAndFooterWrap>
    </Slider>
  );
}
