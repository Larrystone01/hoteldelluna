import React from "react";
import NavAndFooterWrap from "@/components/wrapper/Index";
import Slider from "@/components/content/backgroundSlider";
import { facilitiesData } from "@/lib/data";
import FacilitiesShowcase from "./component/ServiceShowcase";
import BreadCrumbs from "@/components/content/breadcrumbs";

export const metadata = {
  title: "Hotel Facilities | Hotel Del Luna, Ilorin",
  description:
    "Discover the premium facilities at Hotel Del Luna in Ilorin including restaurant, spa, pool, and modern amenities for a luxurious stay.",
  alternates: { canonical: "https://hoteldelluna.vercel.app/facilities" },
  openGraph: {
    title: "Hotel Facilities | Hotel Del Luna, Ilorin",
    description:
      "Explore Hotel Del Luna’s facilities in Ilorin. Enjoy luxury accommodations, modern amenities, and exceptional services during your stay.",
    url: "https://hoteldelluna.vercel.app/facilities",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dfex2qeg7/image/upload/gym_gjbnut.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Del Luna Facilities",
      },
    ],
  },
};
const page = () => {
  return (
    <Slider images={["/images/hotel-view-3.jpg"]}>
      <NavAndFooterWrap>
        <div className="container px-6 mx-auto">
          <section className="service-page-container text-blue-900">
            <div className="service-text flex flex-col justify-center items-center h-screen">
              <h1 className="uppercase text-[40px] font-bold text-yellow-500">
                Our Facilities
              </h1>
              <p className="md:text-[30px] text-center relative text-white bg-black/20">
                “At Hotel Del Luna, we make every stay effortless, comfortable,
                and memorable. Whether for business or leisure, our services are
                designed to keep you relaxed and cared for.”
              </p>
            </div>
          </section>
          <section className="my-14">
            <BreadCrumbs />
            <FacilitiesShowcase facilityData={facilitiesData} />
          </section>
        </div>
      </NavAndFooterWrap>
    </Slider>
  );
};

export default page;
