"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RoomProvider } from "@/context/roomContext";
import { DateProvider } from "@/context/dateContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DateProvider>
          <RoomProvider>{children}</RoomProvider>
        </DateProvider>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          style={{ maxWidth: "90%", margin: "12px" }}
        />
      </body>
    </html>
  );
}
