import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Button = ({ href = "", label, width = "120px" }) => {
  return (
    <div className="flex justify-center items-center">
      <Link
        href={href}
        className={`relative bg-yellow-400 text-white px-4 py-2 flex justify-between group overflow-hidden`}
        style={{ minWidth: width }}
      >
        <span className="absolute inset-0 bg-yellow-600 -translate-x-full group-hover:translate-x-0 duration-300 transition-transform ease-in"></span>
        <span className="z-10">
          {label}{" "}
          <span className="absolute right-2 group-hover:left-0 group-hover:translate-x-[calc(100%-1.5rem)] duration-1000 ease-out transition-transform">
            <ArrowRight />
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Button;
