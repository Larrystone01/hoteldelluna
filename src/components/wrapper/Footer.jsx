import Link from "next/link";
import Logo from "../logo";
import {
  siInstagram,
  siX,
  siTripadvisor,
  siGithub,
  siFacebook,
  siYoutube,
} from "simple-icons";
import { navItems } from "@/lib/data";
import Button from "../Button";

export default function Footer() {
  const footerItems = navItems.slice(0, 6);
  return (
    <>
      <footer className="bg-[#1e2a3a] pt-8">
        <div className="container px-6 mx-auto overflow-hidden">
          <div className="footer-container">
            <div className="top-nav text-white text-[12px] flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center items-center">
              {footerItems.map((item) => {
                return (
                  <Link
                    href={item.href}
                    key={item.id}
                    className="hover:text-yellow-300"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="straight-line h-[0.5px] mt-4 md:-mx-[58px] -mx-6 bg-gray-700"></div>
          </div>
          <div className="social-icons flex justify-center items-center my-5 space-x-5">
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <svg
                width="32"
                height="32"
                fill={`#fff`} // official Twitter color
                viewBox="0 0 24 24"
              >
                <path d={siX.path} />
              </svg>
            </Link>
            <Link href="https://instagram.com">
              <svg width="32" height="32" fill={`#fff`} viewBox="0 0 24 24">
                <path d={siInstagram.path} />
              </svg>
            </Link>
            <Link href="https://instagram.com">
              <svg width="32" height="32" fill={`#fff`} viewBox="0 0 24 24">
                <path d={siTripadvisor.path} />
              </svg>
            </Link>
            <Link href="https://instagram.com">
              <svg width="32" height="32" fill={`#fff`} viewBox="0 0 24 24">
                <path d={siYoutube.path} />
              </svg>
            </Link>
            <Link href="https://instagram.com">
              <svg width="32" height="32" fill={`#fff`} viewBox="0 0 24 24">
                <path d={siFacebook.path} />
              </svg>
            </Link>
          </div>
          <div className="logo flex justify-center items-center my-8">
            <Link href="/" className=" max-w-[200px]">
              <Logo />
            </Link>
          </div>
          <div className="address flex flex-col items-center text-white mb-8">
            <p>54, Sunnie Ododo Street</p>
            <p>Ilorin 240103,</p>
            <p>Kwara, Nigeria</p>
          </div>
          <div className="contact flex flex-col items-center text-[white] mb-5">
            <a href="tel:+2349032434188">Tel: +234 9032434188</a>
            <p>Reservations: 09032434188 / 09019273781</p>
            <a href="mailto:olanrewajuakinwalire@gmail.com">
              Email: olanrewajuakinwalire@gmail.com
            </a>
          </div>
          <div className="subscribe-input flex md:flex-row flex-col gap-2 md:gap-0 justify-center items-center mx-auto text-white w-full md:max-w-[350px] mb-5">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your email"
              className="outline-none bg-white text-black w-full pl-2 py-2"
            />
            <div className="button w-full md:w-fit text-[#1e2a3a]">
              <Button
                width="100%"
                label={"SEND"}
                arrow={false}
                color="#1e2a3a"
              />
            </div>
          </div>
          <div className="designed-by text-center text-white mt-5 pb-2">
            <p>
              &copy; Hotel Del Luna | Designed by <a href="#">Larrystone</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
