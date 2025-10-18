"use client";
import NavAndFooterWrap from "@/components/wrapper/Index";
import Slider from "@/components/content/backgroundSlider";
import Button from "@/components/Button";
import SubHero from "@/components/content/subHero";
import { GlobalContextProvider } from "@/context/context";
import { roomData } from "@/lib/data";
import HeroRoomShowCase from "@/components/content/roomSection";
import FacilitiesShowcase from "./facilities/component/ServiceShowcase";
import { Cinzel } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";

const playfair = Cinzel({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Home() {
  return (
    <GlobalContextProvider imageData={roomData}>
      <Slider interval={4000}>
        <NavAndFooterWrap>
          <div className="container px-6 mx-auto">
            <section className="text-white">
              <div className="hero-container flex justify-center items-center h-screen">
                <div className="hero text-center">
                  <h1
                    className={`hero-text text-[25px] ${playfair.className} text-[]`}
                  >
                    <Typewriter
                      words={["Welcome To Hotel Del Luna"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </h1>
                  <h1 className="md:text-[60px] text-[30px]">
                    Explore More. Stay Better{" "}
                    <span className="block">
                      {" "}
                      Your Comfort is Our Priority{" "}
                    </span>
                    .
                  </h1>
                  <Button href="/about" label={"Explore"} />
                </div>
              </div>
            </section>
            <SubHero />
            <HeroRoomShowCase />
            <FacilitiesShowcase limit={3} btnLabel="VIEW MORE" width="150px" />
          </div>
        </NavAndFooterWrap>
      </Slider>
    </GlobalContextProvider>
  );
}
