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

export const metadata = {
  icons: {
    icon: [
      // Dark theme icons (white logo for dark backgrounds)
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon-light-16x16.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "16x16",
        type: "image/png",
      },
      // Light theme icons (dark logo for light backgrounds)
      {
        url: "/icon-dark.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: light)",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon-dark-16x16.png",
        media: "(prefers-color-scheme: light)",
        sizes: "16x16",
        type: "image/png",
      },
      "/icon-dark.ico",
    ],
    shortcut: ["/icon-light.ico", "/icon-dark.ico"],
    apple: "/apple-touch-icon-dark.png",
  },
};
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
