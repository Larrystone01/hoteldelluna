import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";
import RoomDisplay from "./components/roomshowcase";
import BreadCrumbs from "@/components/content/breadcrumbs";
import SeoPage from "../components/seopage";
import { supabaseServer } from "@/lib/supabaseServer";

export const metadata = {
  title: "Rooms & Suites | Hotel Del Luna, Ilorin",
  description:
    "Explore our luxury rooms and suites at Hotel Del Luna in Ilorin. Enjoy comfort, modern amenities, and affordable luxury for business and leisure stays.",
  alternates: { canonical: "https://hoteldelluna.vercel.app/rooms" },
  openGraph: {
    title: "Rooms & Suites | Hotel Del Luna, Ilorin",
    description:
      "Discover comfortable and luxurious rooms at Hotel Del Luna in Ilorin. Perfect for business travelers, families, and leisure guests.",
    url: "https://hoteldelluna.vercel.app/rooms",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dfex2qeg7/image/upload/grand-vista_evf4te.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Del Luna Rooms and Suites",
      },
    ],
  },
};

export default async function HotelRooms() {
  const { data: rooms, error } = await supabaseServer.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new error("Failed to Fetch Rooms");
  }
  return (
    <>
      <Slider images={["/images/skyline-deluxe-2.jpg"]}>
        <NavAndFooterWrap>
          <SeoPage
            hidden={true}
            title="Rooms and Suites at Hotel Del Luna, Ilorin"
            intro="Hotel Del Luna offers a selection of modern, comfortable, and luxurious rooms in Ilorin, designed to meet the needs of business and leisure travelers."
            sections={[
              {
                heading: "Luxury Hotel Rooms in Ilorin",
                content:
                  "Our hotel rooms are thoughtfully designed to provide maximum comfort, privacy, and relaxation during your stay.",
                list: [
                  "Standard rooms with modern furnishings",
                  "Deluxe rooms for extra comfort",
                  "Spacious suites for extended stays",
                ],
              },
              {
                heading: "Modern Room Amenities",
                content:
                  "Each room at Hotel Del Luna is equipped with essential amenities to ensure a convenient and enjoyable experience.",
                list: [
                  "Air conditioning",
                  "Free high-speed Wi-Fi",
                  "Flat-screen TV",
                  "Clean private bathrooms",
                ],
              },
              {
                heading: "Ideal for Business and Leisure Travelers",
                content:
                  "Whether you are visiting Ilorin for work or relaxation, our rooms provide the perfect balance of comfort and functionality.",
              },
              {
                heading: "Affordable Luxury Accommodation",
                content:
                  "Hotel Del Luna combines luxury and affordability, making it one of the preferred hotels in Ilorin for quality accommodation.",
              },
            ]}
            schema={{
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Del Luna",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ilorin",
                addressCountry: "NG",
              },
              url: "https://hoteldelluna.vercel.app",
            }}
          />
          <section className="container px-6 mx-auto">
            <div className="flex justify-center items-end h-screen">
              <div className="rooms-hero w-3xl text-center pb-10">
                <h1 className="text-[50px] text-white">
                  Exquisite, Luxurious & Comfortable Rooms
                </h1>
              </div>
            </div>
            <BreadCrumbs />
            <RoomDisplay room={rooms} />
          </section>
        </NavAndFooterWrap>
      </Slider>
    </>
  );
}
