import React from "react";
import NavAndFooterWrap from "@/components/wrapper/Index";
import Slider from "@/components/content/backgroundSlider";
import { GlobalContextProvider } from "@/context/context";
import { facilitiesData } from "@/lib/data";
import FacilitiesShowcase from "./component/ServiceShowcase";
import BreadCrumbs from "@/components/content/breadcrumbs";

const page = () => {
  return (
    // <GlobalContextProvider imageData={facilitiesData}>
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
    // </GlobalContextProvider>
  );
};

export default page;
