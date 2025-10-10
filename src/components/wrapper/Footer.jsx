import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-950 py-8">
        <div className="container px-6 mx-auto">
          <div className="footer-container">
            <div className="top-nav text-white flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center items-center">
              <Link href="/" className="uppercase">
                home
              </Link>
              <Link href="/about" className="uppercase">
                about
              </Link>
              <Link href="/services" className="uppercase">
                services
              </Link>
              <Link href="/rooms" className="uppercase">
                rooms
              </Link>
              <Link href="/contact" className="uppercase">
                contact us
              </Link>
              <Link href="/blogs" className="uppercase">
                our blogs
              </Link>
            </div>
            <div className="straight-line h-[1px] mt-4 -mx-6 bg-gray-500"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
