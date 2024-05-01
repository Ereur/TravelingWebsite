// "use client";
import type { Metadata } from "next";
import "./globals.css";

// import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import React from "react";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

export const metadata: Metadata = {
  title: "Travelling website",
  description:
    "Embark on an enchanting journey through the vibrant tapestry of Morocco with Morrocan traveling. Dive into the rich culture, explore ancient medinas, and traverse the majestic Sahara Desert. Our curated guides and expert tips unlock the secrets of Morocco's hidden gems, from the bustling souks of Marrakech to the blue-hued streets of Chefchaouen. Find your perfect oasis in a riad, taste the flavors of Moroccan cuisine, and immerse yourself in the warmth of Berber hospitality. Let [Your Traveling Website Name] be your gateway to the magic of Morocco.",
};

import { useSelectedLayoutSegment } from "next/navigation";

export default function RootLayout({
  children,
  contact,
  about,
  customtours,
}: Readonly<{
  children: React.ReactNode;
  contact: React.ReactNode;
  about: React.ReactNode;
  customtours: React.ReactNode;
}>) {
  // const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body className={`scroll-smooth	debug-screens bg-background`}>
        <Navbar />
        <main className="xl:mt-[-120px] bg-background">{children}</main>
        {/* Footer */}
        <section
          id="Footer"
          className="absolute top-100 w-full xl:h-[450px] h-[250px] mt-16 overflow-hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="1440"
            // height="727"
            viewBox="0 0 1440 727"
            fill="none"
            className=" w-full absolute "
          >
            <path
              d="M778.876 61.93C487.94 130.193 122.897 45.2531 -13 0.5L-27 721.889L1456.19 738C1481.7 579.475 1517.42 246.313 1456.19 181.868C1379.66 101.313 1142.55 -23.3992 778.876 61.93Z"
              fill="#975C1F"
            />
          </svg>
          <div className=" relative w-full h-full grid grid-cols-3 z-10 items-center">
            <div className="flex flex-col w-full justify-center items-center xl:gap-4 gap-2">
              <h1 className="xl:text-lg text-xs  font-bold font-montserrat text-white">
                HOME
              </h1>
              <p className="font-bold xl:text-lg text-xs font-montserrat text-white">
                TOUR
              </p>
              <p className="font-bold font-montserrat xl:text-lg text-xs text-white">
                CUSTOM TOURS
              </p>
              <p className="font-bold font-montserrat xl:text-lg text-xs text-white">
                ABOUT
              </p>
              <p className="font-bold font-montserrat xl:text-lg text-xs text-white">
                CONTACT
              </p>
            </div>
            <div className="flex flex-col w-full justify-center items-center xl:gap-4 gap-2">
              <h1 className="xl:text-lg text-xs  font-bold font-montserrat text-white">
                HOME
              </h1>
              <p className="font-bold xl:text-lg text-xs font-montserrat text-white">
                TOUR
              </p>
              <p className="font-bold font-montserrat xl:text-lg text-xs text-white">
                CUSTOM TOURS
              </p>
              <p className="font-bold font-montserrat xl:text-lg text-xs text-white">
                ABOUT
              </p>
              <p className="font-bold font-montserrat xl:text-lg text-xs text-white">
                CONTACT
              </p>
            </div>
            <div className="xl:flex hidden text-lg flex-col w-full  justify-center items-center">
              <h1 className="font-bold font-montserrat text-[#D9B99B] ">
                Subscribe To Get Our{" "}
              </h1>
              <h1 className="font-bold text-lg font-montserrat text-[#D9B99B] ">
                Articles About Morocco{" "}
              </h1>
              <div className="xl:w-[250px] xl:h-[38px] w-[115px] h-[15px] relative bg-[#5B340A] rounded-lg xl:mt-4">
                <input
                  placeholder="Enter your Email "
                  className="relative w-[80%] h-full bg-[#5B340A] text-[#D9B99B]  placeholder:text-xs  focus:outline-none rounded-lg text-xs xl:px-4"
                />
                <div className="absolute right-0 top-0 overflow-hidden rounded-r-lg bg-white h-full w-[20%]">
                  <button className="w-full h-full bg-[#B2AC88] hover:bg-[#8F896B]">
                    <h1 className="text-white xl:text-[8px] text-[4px] font-bold font-montserrat">
                      SUBSCRIBE
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
