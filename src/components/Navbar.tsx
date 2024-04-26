"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import App from "./menu";
const Navbar = () => {
  // const pathname = usePathname();
  const [navItems, setNavItems] = useState([
    { label: "HOME", href: "/", hash: "#home" },
    { label: "TOUR", href: "/tours", hash: "#tours" },
    { label: "TOP TRIPS", href: "/#popularTrips", hash: "#popularTrips" },
    { label: "CUSTOM TOURS", href: "/#customtours", hash: "#customtours" },
    { label: "TESTIMONIAL", href: "/#Testmonials", hash: "#Testmonials" },
    { label: "FAQ", href: "/#FAQ", hash: "#FAQ" },
  ]);
  // const [hash, setHash] = useState("");
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash == "") {
        setActiveHash("#home");
        console.log("hash", window.location.hash);
      } else {
        setActiveHash(window.location.hash);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);

  function changeHash(hash: string) {
    window.location.hash = hash;
  }

  return (
    <>
      {/* for mobile */}
      <App key={0} />
      {/* for desktop */}

      <nav className="hidden  sticky top-0 z-50 xl:flex flex-col justify-center items-center ">
        <div className=" w-full flex justify-center items-center z-50 bg-[#D9B99B]">
          <p className="font-bold text-md font-montserrat text-black ">
            Unlock the Magic of Morocco: Secure Your Adventure with Free
            Pre-Booking! 🌟
          </p>
          <button className="flex p-2 justify-center h-[90%] rounded-xl ml-4 bg-[#D9B99B] hover:bg-[#8F896B] ">
            <Link href="/#customtours">Pre-book Now!🔥🔥</Link>
          </button>
        </div>
        <ul className="flex w-[50%] gap-4 bg-[#975C1F] bg-opacity-55 justify-center backdrop-blur-xl items-center py-4 px-10 rounded-2xl">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={() => changeHash(item.hash)}>
                <p
                  className={`${
                    activeHash == item.hash
                      ? "text-[#D9B99B] underline underline-offset-4"
                      : "text-white"
                  } text-md font-montserrat font-extrabold`}
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
