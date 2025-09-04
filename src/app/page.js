import NavAndFooterWrap from "@/components/wrapper/Index";
import Slider from "@/components/content/backgroundSlider";
import Button from "@/components/Button";
import SubHero from "@/components/content/subHero";
import { GlobalContextProvider } from "@/context/context";
import { imageData } from "@/lib/image";
import HeroRoomShowCase from "@/components/content/roomSection";

export default function Home() {
  return (
    <GlobalContextProvider imageData={imageData}>
      <Slider interval={4000}>
        <NavAndFooterWrap>
          <div className="container px-6">
            <section className="text-white">
              <div className="hero-container flex justify-center items-center h-screen">
                <div className="hero text-center">
                  <p>Welcome To Hotel Del Luna</p>
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
          </div>
        </NavAndFooterWrap>
      </Slider>
    </GlobalContextProvider>
  );
}
