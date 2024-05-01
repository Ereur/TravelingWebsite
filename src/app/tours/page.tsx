"use client";
import { Input } from "@/components/ui/input";
import { DateRangePicker } from "@/components/DateRangePicker";
import { DropdownMenuCheckboxes } from "@/components/DropdownMenuCheckbox";
import { PersonesMenu } from "@/components/PersonesMenu";
import { TourCard } from "@/components/TourCard";

export default function tours() {
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
        ></div>
        <div className="w-full absolute top-0 h-[61vh] z-10 opacity-55 bg-gradient-to-t from-[#784101] to-transparent"></div>
        <div className="w-full absolute top-0 h-[61vh] z-10 bg-gradient-to-t from-[#784101] to-transparent"></div>
      </div>
      <div
        id="Search"
        className="relative flex z-20  flex-col justify-center w-full h-[250px] items-center pt-32 gap-8"
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
            Discover Morocco
          </h1>
          <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
            Where History Meets Adventure
          </h1>
        </div>
      </div>
      <div className="sticky top-[20px] flex z-20 justify-center items-center">
        <div className="mt-20 grid grid-cols-3 bg-background w-[750px] z-20 h-[65px]  rounded-3xl  border-4 border-[#B2AC88] overflow-hidden">
          <PersonesMenu />
          <DateRangePicker
            className=" w-full"
            ButtonClassName="w-full justify-start h-full border-0 text-left font-normal   hover:bg-[#916A2D] "
          />
          {/* <DateRangePicker
            className=" w-full"
            ButtonClassName="w-full justify-start h-full  text-left font-normal  border-0  hover:bg-[#916A2D] "
          /> */}
          {/* <DateRangePicker className=" w-full" ButtonClassName="w-full justify-start h-full  text-left font-normal  border-[#5B340A] hover:bg-[#916A2D] " /> */}
          <DropdownMenuCheckboxes />
        </div>
      </div>
      <div className="h-[20px]"></div>
      <div className="flex justify-between items-center px-9 flex-wrap">
        <div className="w-1/3">
          <TourCard />
        </div>
        <div className="w-1/3">
          <TourCard />
        </div>
        <div className="w-1/3">
          <TourCard />
        </div>
        <div className="w-1/3">
          <TourCard />
        </div>
        <div className="w-1/3">
          <TourCard />
        </div>
        <div className="w-1/3">
          <TourCard />
        </div>
      </div>
    </>

    // <section
    //   id="ToursSearch"
    //   className="w-full h-[350px] flex justify-center items-end"
    // >
    //   <form action="max-w-[700px]">
    //     {/* <Input className="" placeholder="When do you want to go " type="date" /> */}
    //   </form>
    // </section>
  );
}
