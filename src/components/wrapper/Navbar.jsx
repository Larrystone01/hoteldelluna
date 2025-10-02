"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  {
    id: "home",
    label: "HOME",
    href: "/",
  },
  {
    id: "about",
    label: "ABOUT US",
    href: "/about",
  },
  {
    id: "services",
    label: "SERVICES",
    href: "/services",
  },
  {
    id: "rooms",
    label: "ROOMS",
    href: "/rooms",
  },
  {
    id: "facilities",
    label: "FACILITIES",
    href: "/facilities",
  },
  {
    id: "booking",
    label: "BOOK US",
    href: "/booking",
  },
  {
    id: "contact",
    label: "CONTACT",
    href: "/contact",
  },
  {
    id: "blog",
    label: "BLOGS",
    href: "/blogs",
  },
];

export default function navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  const handleHamburgerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${
          isScrolled ? "bg-black/90" : "bg-transparent"
        } fixed top-0 z-40 w-full overflow-hidden`}
      >
        <div className="container px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="logo w-20">
              {/* <img src="/images/logo.jpeg" alt="hotel's logo" /> */}
              <Link className="text-4xl font-bold text-white" href="/">
                HDL
              </Link>
            </div>
            {/* Nav Dropdown */}
            <div
              className={`nav-links md:flex md:bg-inherit space-y-3 p-4 bg-white text-black md:text-white md:static fixed top-18 right-0 -z-20 md:z-0 gap-5 w-full md:w-auto ${
                open
                  ? "translate-y-0 duration-300 ease-in-out"
                  : "-translate-y-100 md:translate-y-0 duration-300 ease-out"
              }`}
            >
              {navItems.map((item) => {
                const isActive = pathName === item.href;
                return (
                  <div className="md:text-white" key={item.id}>
                    <Link
                      href={item.href}
                      className={`relative ${
                        isActive
                          ? "text-yellow-400 after:absolute after:content"
                          : "md:text-white"
                      } hover:text-yellow-400 text-[12px]`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>
            <button
              className="hamburger-close md:hidden text-white hover:text-yellow-400"
              onClick={handleHamburgerToggle}
            >
              {open ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
