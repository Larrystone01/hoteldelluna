import Button from "../Button";
import Image from "next/image";

export default function SubHero() {
  return (
    <>
      <section className="sub-hero space-y-15 md:space-y-0 my-10 md:my-20">
        <div className="first-grid md:grid grid-cols-2 gap-8 space-y-10">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/hotel-view-bg.jpg"
              alt="hotel front-view"
              fill
              loading="lazy"
              className="h-full"
            />
          </div>
          <div className="write-up flex flex-col justify-center items-center gap-5">
            <h1 className="heading text-[40px] md:text-[50px]">
              Where Elegance Meets Relaxation
            </h1>
            <p>
              Discover a luxurious haven in the heart of Ilorin, Kwara, Nigeria.
              Our hotel offers impeccable service, modern comfort, and a unique
              blend of Nigerian hospitality.
            </p>
            <div className="self-start">
              <Button label={"MORE ABOUT US"} href="/about" width="200px" />
            </div>
          </div>
        </div>
        <div className="second-grid md:grid grid-cols-2 gap-8 space-y-10">
          <div className="relative w-full h-[400px] order-2">
            <Image
              src="/images/hotel-view-bg2.jpg"
              alt="hotel front-view"
              fill
              className="object-cover"
            />
          </div>
          <div className="write-up flex flex-col justify-center items-center gap-5 order-1">
            <h1 className="heading text-[40px] md:text-[50px]">
              Experience Exceptional Stay
            </h1>
            <p>
              At Hotel Del Luna, we pride ourselves on attention to detail and a
              passion for creating cherished memories. Our rooms are designed to
              provide the perfect harmony of comfort, culture, and relaxation.
            </p>
            <div className="self-start">
              <Button label={"CHOOSE A ROOM"} href="/rooms" width="210px" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
