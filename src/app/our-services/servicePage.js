"use client";
import { useState } from "react";
import { services } from "@/lib/data";
import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";
import SeoPage from "../components/seopage";
import Link from "next/link";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "amenities", label: "Amenities" },
    { id: "dining", label: "Dining" },
    { id: "wellness", label: "Wellness" },
    { id: "business", label: "Business" },
    { id: "transport", label: "Transport" },
    { id: "family", label: "Family" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <Slider images={["/images/lobby.jpg"]}>
      <NavAndFooterWrap>
        {/* Hero Section */}
        {/* SEO SETUP (not dispalayed) */}
        <SeoPage
          hidden={true}
          title="Hotel Services — Hotel Del Luna in Ilorin"
          intro="Hotel Del Luna in Ilorin offers a wide range of premium services to make your stay comfortable, convenient, and memorable."
          sections={[
            {
              heading: "Room Service",
              content:
                "Enjoy 24-hour room service with a variety of meal options delivered right to your room.",
              list: [
                "Breakfast, lunch, and dinner options",
                "Beverages and snacks",
                "Fast and reliable delivery",
              ],
            },
            {
              heading: "Concierge Services",
              content:
                "Our concierge team is available to assist with bookings, recommendations, and personalized guest requests.",
              list: [
                "Tour arrangements",
                "Transport bookings",
                "Special requests assistance",
              ],
            },
            {
              heading: "Event Planning",
              content:
                "Host your corporate or private events with our dedicated event planning services and professional support.",
              list: [
                "Conference and meeting setup",
                "Private parties and celebrations",
                "Audio-visual equipment and catering",
              ],
            },
            {
              heading: "Guest Assistance",
              content:
                "We prioritize your comfort and convenience with attentive and professional staff.",
              list: [
                "24-hour front desk support",
                "Housekeeping and laundry services",
                "Luggage assistance",
              ],
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
        <div className="relative text-white py-24 overflow-hidden h-full">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-full">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience luxury and comfort with our comprehensive range of
              premium services designed to make your stay unforgettable.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-yellow-800 text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 hover:bg-yellow-100 shadow"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="bg-slate-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-800 transition-all">
                  <div className="text-slate-700 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Premium Features Section */}
          <div className="bg-slate-800 rounded-3xl p-12 text-white mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Luxury Rooms" },
                { number: "24/7", label: "Guest Support" },
                { number: "5-Star", label: "Rating" },
                { number: "10+", label: "Years Experience" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-bold mb-2 bg-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Event Hosting
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Weddings and receptions up to 500 guests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Corporate conferences and seminars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Private parties and celebrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Professional event planning assistance</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Special Packages
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Honeymoon packages with romantic amenities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Long-stay discounts for extended visits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Corporate group booking rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-800 font-bold">•</span>
                    <span>Seasonal promotions and special offers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Book your stay today and enjoy all our premium services designed
              to make your visit memorable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="bg-yellow-500 text-white px-8 py-4 font-semibold hover:bg-yellow-400 transition shadow-lg hover:shadow-xl"
              >
                Book Now
              </Link>
              <Link
                href="/rooms"
                className="bg-white text-slate-800 px-8 py-4 font-semibold hover:bg-slate-50 transition shadow-lg border-2 border-slate-800"
              >
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </NavAndFooterWrap>
    </Slider>
  );
}
