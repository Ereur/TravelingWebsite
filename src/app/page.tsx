"use client";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { DateRangePicker } from "@/components/DateRangePicker";
import { TourCard } from "@/components/TourCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  // const segment = useSelectedLayoutSegment();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(segment);
  return (
    <>
      <div
        id="heroBackground"
        className="absolute top-0 w-full z-10  h-[60vh] "
      >
        <div
          id="home"
          className="w-full  h-[60vh] "
          style={{
            backgroundImage: `url('/herosection.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <h1>HELLO FROM HOME</h1> */}
        </div>
        <div className="w-full absolute top-0 h-[61vh] z-10 opacity-55 bg-gradient-to-t from-[#784101] to-transparent"></div>
        <div className="w-full absolute top-0 h-[61vh] z-10 bg-gradient-to-t from-[#784101] to-transparent"></div>
      </div>
      <div className="  pt-32 xl:mt-36  w-full relative   z-10   ">
        <div className="flex flex-col h-full w-full justify-start items-center xl:items-start ">
          <div className="flex xl:ml-20 flex-col xl:gap-4" id="quote">
            <p className="text-[#D9B99B] xl:text-xs text-[8px] tracking-wide font-montserrat font-bold">
              We Beleive In Travelling Experience
            </p>
            <h1 className="text-[#D9B99B] xl:text-[4rem] text-2xl tracking-widest font-montserrat font-bold">
              Life is Either A Daring
            </h1>
            <h1 className="text-[#D9B99B] xl:text-[4rem] text-2xl xl:mt-4 font-montserrat tracking-widest  font-black">
              Adventure Or Nothing !
            </h1>
          </div>
          <div className="flex justify-start xl:ml-20 xl:mt-8 mt-4">
            <button className="bg-[#B2AC88] px-4 py-2 rounded-full">
              <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
                Start Tours
              </h1>
            </button>
          </div>
        </div>
      </div>
      <section className="relative z-20   mt-8 xl:mt-12" id="services">
        <div id="headline" className="">
          <div className="flex flex-row justify-center items-center gap-2 ">
            <h1 className="text-xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
              We take care
            </h1>
            <div
              style={{
                backgroundImage: `url('/sky.jpeg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
              className="w-[120px] h-[20px] xl:w-[180px] xl:h-[25px]  bg-white rounded-full"
            ></div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 ">
            <div
              className="w-[120px] h-[20px] bg-white rounded-full xl:w-[180px] xl:h-[25px]"
              style={{
                backgroundImage: `url('/care1.jpeg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
            <h1 className="text-xl xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
              Of your Tripe
            </h1>
          </div>
        </div>
        <div
          id="ServicesBody"
          className="flex flex-col xl:grid xl:grid-cols-2 xl:mt-16 xl:items-center justify-center gap-4 xl:gap-12"
        >
          <div className="flex flex-col items-center justify-center mt-8 xl:mt-0 ">
            <h1 className="text-lg  text-[#D9B99B] font-montserrat font-black ">
              Travel Guide
            </h1>
            <div>
              <p className="text-center text-xs text-[#D9B99B] font-montserrat font-medium ">
                unforgettable experiences. Discover Morocco with hassle-free
                reservations.
              </p>
            </div>
          </div>
          <div className="flex  flex-col items-center justify-center ">
            <h1 className="text-lg  text-[#D9B99B] font-montserrat font-black ">
              Easy Booking
            </h1>
            <div>
              <p className="text-center max-w-[500px] text-xs text-[#D9B99B] font-montserrat font-medium">
                Unlock the secrets of Morocco with our expert guides. From
                vibrant souks to Sahara adventures, we'll craft your perfect
                journey, Free Pre-booking
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center ">
            <h1 className="text-lg  text-[#D9B99B] font-montserrat font-black ">
              Top Destinations
            </h1>
            <p className="text-center text-xs text-[#D9B99B] font-montserrat font-medium">
              Discover Morocco's top destinations with us.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center ">
            <h1 className="text-lg  text-[#D9B99B] font-montserrat font-black ">
              24/7 support
            </h1>
            <p className="text-center text-xs text-[#D9B99B] font-montserrat font-medium">
              Round-the-clock support, 24/7, because your peace of mind matters.
            </p>
          </div>
        </div>
      </section>
      <section
        id="popularTrips"
        className="flex w-full flex-col justify-center items-center mt-8 xl:pt-12 gap-8"
      >
        <h1 className="text-xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
          Explore Our Popular Trips
        </h1>
        {/* <div className="w-full " id="caroussel"></div> */}
        <Carousel
          className="w-full flex flex-col justify-center  items-center"
          orientation={isMobile ? "vertical" : "horizontal"}
        >
          <CarouselContent className="w-[100vw] h-[600px] flex justify-center items-center -translate-y-1/2 gap-4 px-12 ">
            <CarouselItem
              className={`xl:basis-1/3 flex justify-center items-center`}
            >
              <TourCard />
            </CarouselItem>
            <CarouselItem className="xl:basis-1/3 flex justify-center items-center">
              <TourCard />
            </CarouselItem>
            <CarouselItem className="xl:basis-1/3 flex justify-center items-center">
              <TourCard />
            </CarouselItem>
            <CarouselItem className="xl:basis-1/3 flex justify-center items-center">
              <TourCard />
            </CarouselItem>
            <CarouselItem className="xl:basis-1/3 flex justify-center items-center">
              <TourCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={`w-8 h-8  ${
              isMobile ? "top-0 self-center " : "left-0 ml-2"
            }  bg-[#C16029] border-0 -translate-x-0 hover:bg-[#A14A23]`}
          />
          <CarouselNext
            className={`w-8 h-8   ${
              isMobile ? "bottom-4 m-0" : "right-0 mr-2"
            }  bg-[#C16029] border-0 -translate-x-0 hover:bg-[#A14A23] `}
          />
        </Carousel>
        <div className="flex    ">
          <button className="bg-[#B2AC88] px-4 py-2 rounded-full">
            <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
              VIEW ALL
            </h1>
          </button>
        </div>
      </section>
      <section
        id="Testmonials"
        className="flex flex-col justify-center xl:pt-28 pt-16"
      >
        <h1 className="text-center text-xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
          What Our Customer Say About us
        </h1>
        {/* <div className="w-full flex flex-col justify-center mt-12 items-center gap-4">
          
        </div> */}
        <Carousel className="w-full  flex justify-center  items-center gap-4">
          <CarouselContent className="w-full  gap-4 cursor-pointer flex justify-center items-center">
            <CarouselItem className="w-full flex flex-col justify-center mt-12 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                "Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can't wait to book with them again!"
              </p>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                By
                <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                  Esther Howard
                </span>
              </p>
              <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                "TRAVELLER"
              </p>
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center mt-12 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                "Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can't wait to book with them again!"
              </p>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                By
                <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                  Esther Howard
                </span>
              </p>
              {/* <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                "TRAVELLER"
              </p> */}
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center mt-12 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                "Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can't wait to book with them again!"
              </p>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                By
                <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                  Esther Howard
                </span>
              </p>
              <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                "TRAVELLER"
              </p>
            </CarouselItem>
            {/* <CarouselItem className="w-full flex flex-col justify-center mt-12 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                "Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can't wait to book with them again!"
              </p>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                By
                <span className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                  Esther Howard
                </span>
              </p>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                "TRAVELLER"
              </p>
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center mt-12 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                "Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can't wait to book with them again!"
              </p>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                By
                <span className="text-center font-bold  text-xs max-w-[700px] text-white">
                  Esther Howard
                </span>
              </p>
              <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                "TRAVELLER"
              </p>
            </CarouselItem> */}
          </CarouselContent>
        </Carousel>
        <div className="flex w-full justify-center mt-4 ">
          <button className="bg-[#B2AC88] px-4 py-2 rounded-full">
            <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
              BOOK A CALL
            </h1>
          </button>
        </div>
      </section>
      <section
        id="customtours"
        className="flex flex-col justify-center items-center xl:pt-28 pt-16"
      >
        <h1 className="text-center text-xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
          Create Your Custom Moroccan Adventure Today !
        </h1>
        <h1 className="text-center text-xl  xl:text-4xl font-bold font-montserrat mt-4 text-[#D9B99B]">
          Let's Craft Your Dream Journey Together
        </h1>
        <div className="max-w-[700px]" id="form">
          <form
            action=""
            className="grid  xl:grid-rows-4 xl:grid-cols-2 xl:grid-flow-col grid-flow-row grid-cols-1 mt-8 gap-4 w-full"
          >
            <DateRangePicker className="xl:col-span-2 col-span-full w-full" />
            <Input
              type="email"
              placeholder="First Name"
              className="col-span-full xl:col-span-1 text-[#D9B99B] focus:outline-none	 bg-[#5B340A] border-0 placeholder:text-white placeholder:text-opacity-25 "
            />
            <Input
              type="email"
              placeholder="Last Name"
              className="text-[#D9B99B] col-span-full xl:col-span-1 xl:row-start-2 xl:col-start-2 focus:outline-none	 bg-[#5B340A] border-0 placeholder:text-white placeholder:text-opacity-25 "
            />
            <Input
              type="email"
              placeholder="Phone (optional)"
              className="text-[#D9B99B] xl:col-span-1 focus:outline-none col-span-full	 bg-[#5B340A] border-0 placeholder:text-white placeholder:text-opacity-25 "
            />
            <Input
              type="email"
              placeholder="Email"
              className="text-[#D9B99B] xl:col-span-1 xl:row-start-3 xl:col-start-2 focus:outline-none	col-span-full bg-[#5B340A] border-0 placeholder:text-white placeholder:text-opacity-25 "
            />
            <textarea
              placeholder="Write any additional details about your trip"
              className="xl:col-span-2 xl:row-start-4 placeholder:p-2  text-[#D9B99B] placeholder:ml-4  focus:outline-none col-span-full placeholder:text-xs	 bg-[#5B340A] border-0 placeholder:text-white placeholder:text-opacity-25 "
            >
              {/* <Input type="textearea" placeholder="Email" /> */}
            </textarea>
            {/* <Input type="textearea" placeholder="Email" /> */}
          </form>
          <div className="flex mt-8 w-full justify-center items-center   ">
            <button className="bg-[#B2AC88] px-4 py-2 rounded-full">
              <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
                SUBMIT
              </h1>
            </button>
          </div>
        </div>
      </section>
      <section id="FAQ" className="w-full flex justify-center xl:pt-28 pt-16">
        <div className="max-w-[600px] w-full flex gap-4 flex-col">
          {[...Array(5)].map((_, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full "
            >
              <AccordionItem
                value="item-1"
                className="bg-[#C16029] border-0 rounded-lg"
              >
                <AccordionTrigger className="bg-[#C16029] rounded-lg h-[45px]  ">
                  <p className="font-bold font-montserrat text-white px-4">
                    How do I book a trip with your travel agency?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="bg-[#C16029]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
      <section
        id="Footer"
        className="absolute bottom-100 w-full xl:h-[65vh] h-[20vh] mt-16 overflow-hidden "
      >
        {/* <img src="" alt="" /> */}
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
    </>
  );
}
