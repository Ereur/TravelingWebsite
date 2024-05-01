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
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  // const segment = useSelectedLayoutSegment();
  const [isMobile, setIsMobile] = useState(false);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
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
            <button className="bg-[#B2AC88] px-4 py-2 rounded-full hover:bg-[#8F896B]">
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
              <p className="text-center text-xs text-white font-montserrat font-medium ">
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
              <p className="text-center max-w-[500px] text-xs text-white font-montserrat font-medium">
                Unlock the secrets of Morocco with our expert guides. From
                vibrant souks to Sahara adventures, we&apos;ll craft your
                perfect journey, Free Pre-booking
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center ">
            <h1 className="text-lg  text-[#D9B99B] font-montserrat font-black ">
              Top Destinations
            </h1>
            <p className="text-center text-xs text-white font-montserrat font-medium">
              Discover Morocco&apos;s top destinations with us.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center ">
            <h1 className="text-lg  text-[#D9B99B] font-montserrat font-black ">
              24/7 support
            </h1>
            <p className="text-center text-xs text-white font-montserrat font-medium">
              Round-the-clock support, 24/7, because your peace of mind matters.
            </p>
          </div>
        </div>
      </section>
      {/* PopularTrips */}
      <section
        id="popularTrips"
        className="flex w-full flex-col justify-center items-center pt-12 xl:pt-12 "
      >
        <h1 className="text-2xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
          Explore Our Popular Trips
        </h1>
        {/* <div className="w-full " id="caroussel"></div> */}
        <Carousel
          className="w-full flex flex-col justify-center mt-8 items-center"
          orientation={"horizontal"}
        >
          <CarouselContent className="w-[100vw] h-[500px] flex justify-center items-center -translate-y-1/2 gap-4 px-12 ">
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
            className={`w-8 h-8 left-0 ml-2 bg-[#C16029] border-0 -translate-x-0 hover:bg-[#A14A23]`}
          />
          <CarouselNext
            className={`w-8 h-8  
              right-0 mr-2
             bg-[#C16029] border-0 -translate-x-0 hover:bg-[#A14A23] `}
          />
        </Carousel>
        <div className="flex ">
          <button className="bg-[#B2AC88] px-4 py-2 rounded-full hover:bg-[#8F896B]">
            <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
              VIEW ALL
            </h1>
          </button>
        </div>
      </section>
      {/* Testmonials */}
      <section
        id="Testmonials"
        className="flex flex-col justify-center xl:pt-28 pt-16"
      >
        <h1 className="text-center text-xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
          What Our Customer Say About us
        </h1>
        {/* <div className="w-full flex flex-col justify-center mt-12 items-center gap-4">
          
        </div> */}
        <Carousel
          className="w-full  flex justify-center  items-center gap-4 "
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-full  gap-4 cursor-pointer flex -ml-0 justify-center items-center">
            <CarouselItem className="w-full flex flex-col justify-center pl-0 xl:mt-12 mt-4 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-white">
                Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can&apos;t wait to book with them again!
              </p>
              <div>
                <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                  By
                  <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                    Esther Howard
                  </span>
                </p>
                <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                  TRAVELLER
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center pl-0 xl:mt-12 mt-4 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-white">
                Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can&apos;t wait to book with them again!
              </p>
              <div>
                <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                  By
                  <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                    Esther Howard
                  </span>
                </p>
                <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                  TRAVELLER
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center pl-0 xl:mt-12 mt-4 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-white">
                Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can&apos;t wait to book with them again!
              </p>
              <div>
                <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                  By
                  <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                    Esther Howard
                  </span>
                </p>
                <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                  TRAVELLER
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center pl-0 xl:mt-12 mt-4 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-white">
                Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can&apos;t wait to book with them again!
              </p>
              <div>
                <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                  By
                  <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                    Esther Howard
                  </span>
                </p>
                <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                  TRAVELLER
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center pl-0 xl:mt-12 mt-4 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-white">
                Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can&apos;t wait to book with them again!
              </p>
              <div>
                <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                  By
                  <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                    Esther Howard
                  </span>
                </p>
                <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                  TRAVELLER
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full flex flex-col justify-center pl-0 xl:mt-12 mt-4 items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-center font-medium  text-xs max-w-[700px] text-white">
                Absolutely amazing experience with this travel agency! From the
                vibrant markets of Marrakech to the breathtaking dunes of the
                Sahara, every moment was unforgettable. Their attention to
                detail and personalized service made our trip to Morocco truly
                magical. Can&apos;t wait to book with them again!
              </p>
              <div>
                <p className="text-center font-medium  text-xs max-w-[700px] text-[#D9B99B]">
                  By
                  <span className="ml-2 text-center font-bold  text-xs max-w-[700px] text-white">
                    Esther Howard
                  </span>
                </p>
                <p className="text-center font-bold  text-xs max-w-[700px] text-[#D9B99B]">
                  TRAVELLER
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="flex w-full justify-center mt-4 ">
          <button className="bg-[#B2AC88] px-4 py-2 rounded-full hover:bg-[#8F896B]">
            <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
              BOOK A CALL
            </h1>
          </button>
        </div>
      </section>
      {/* CustomTours */}
      <section
        id="customtours"
        className="flex flex-col justify-center items-center xl:pt-28 pt-16"
      >
        <h1 className="text-center text-xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
          Create Your Custom Moroccan Adventure Today !
        </h1>
        <h1 className="text-center text-xl  xl:text-4xl font-bold font-montserrat mt-4 text-[#D9B99B]">
          Let&apos;s Craft Your Dream Journey Together
        </h1>
        <div className="max-w-[700px]" id="form">
          <form
            action=""
            className="grid xl:grid-cols-2 xl:grid-flow-col  grid-cols-1 mt-8 gap-4 w-full"
          >
            <DateRangePicker
              className="xl:col-span-2 col-span-full w-full"
              ButtonClassName="w-full justify-start text-left font-normal bg-[#5B340A] border-[#5B340A] hover:bg-[#916A2D] "
            />
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
            <button className="bg-[#B2AC88] px-4 py-2 rounded-full hover:bg-[#8F896B]">
              <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
                SUBMIT
              </h1>
            </button>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section
        id="FAQ"
        className="w-full flex justify-center flex-col items-center  xl:gap-16 gap-8 xl:pt-28 pt-16"
      >
        <h1 className="text-center text-xl  xl:text-4xl font-bold font-montserrat text-[#D9B99B]">
          Dive into our FAQ section for quick insights and clarity.
        </h1>
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
    </>
  );
}
