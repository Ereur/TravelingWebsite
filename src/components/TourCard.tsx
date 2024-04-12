import LogmentSolid from "@/assets/icons/LogmentSolid";
import Transport from "@/assets/icons/Transport";
import Guid from "@/assets/icons/Guid";
import Food from "@/assets/icons/Food";
import Location from "@/assets/icons/Location";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TourCard: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full h-[500px] max-w-[350px]   max-h-[500px] rounded-[40px] overflow-hidden "
      id="card"
    >
      {/* <div id="TourCaroussel" className="h-1/2 bg-white"> */}
      <Carousel className="w-full ">
        <CarouselContent>
          <CarouselItem>
            <img
              src="/herosection.jpeg"
              alt=""
              className="cover rounded-t-[40px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/herosection.jpeg"
              alt=""
              className="cover rounded-t-[40px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/herosection.jpeg"
              alt=""
              className="cover rounded-t-[40px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="w-8 h-8 left-0 ml-2 bg-[#C16029] border-0 -translate-x-0 hover:bg-[#A14A23]" />
        <CarouselNext className="w-8 h-8 right-0 mr-2 bg-[#C16029] border-0 -translate-x-0 hover:bg-[#A14A23]" />
      </Carousel>
      {/* </div> */}
      <div id="Tourbody" className="h-1/2 relative">
        <div className="w-full h-[117%] mt-[-40px] bg-[#C16029] rounded-[40px]">
          <div className="flex w-full  justify-center gap-4 items-center px-6 -translate-y-1/2 ">
            <div className="w-1/4 aspect-square  bg-[#C16029] shadow-2xl rounded-2xl flex justify-center items-center">
              <div
                id="icon"
                className="flex flex-col w-full  items-center gap-2"
              >
                <LogmentSolid className="text-xl flex items-center " />
                <h1 className=" text-[8px] font-bold font-montserrat text-white">
                  LODGIN
                </h1>
              </div>
            </div>
            <div className="w-1/4 aspect-square  bg-[#C16029] shadow-2xl rounded-2xl  flex justify-center items-center">
              <div
                id="icon"
                className="flex flex-col w-full  items-center gap-2"
              >
                <Transport className="text-xs" />
                <h1 className=" text-[8px] font-bold font-montserrat text-white">
                  TRANSPORT
                </h1>
              </div>
            </div>
            <div className="w-1/4  aspect-square bg-[#C16029]  shadow-2xl rounded-2xl flex justify-center items-center">
              <div
                id="icon"
                className="flex flex-col w-full  items-center gap-2"
              >
                <Guid className="text-xs " />
                <h1 className=" text-[8px] font-bold font-montserrat text-white">
                  Guide
                </h1>
              </div>
            </div>
            <div className="w-1/4 aspect-square  bg-[#C16029] shadow-2xl rounded-2xl flex justify-center items-center">
              <div
                id="icon"
                className="flex flex-col w-full  items-center gap-2"
              >
                <Food className="text-xs" />
                <h1 className="  text-[8px] font-bold font-montserrat text-white">
                  FOOD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 -translate-y-6 ">
            <div className="flex items-center gap-2">
              <Location className="w-[16px]" />
              <h1
                id="tourBaselocation"
                className="text-xs font-bold font-montserrat text-white"
              >
                Marrakech
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <LogmentSolid className="" />
              <h1
                id="details"
                className="text-xs font-bold font-montserrat text-white"
              >
                0 Nights
              </h1>
            </div>
          </div>
          <div className="w-full h-[60%]  overflow-hidden overflow-ellipsis -translate-y-2">
            <p className="text-xs text-center font-bold  text-[#D9B99B]">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ex
              id elit hendrerit ultrices. Integer auctor lectus nec luctus
              varius. Nulla facilisi. Vivamus fermentum massa nec ante
              consectetur, eu accumsan leo sollicitudin. Phasellus fermentum
              augue nec ex posuere, eget interdum mi fermentum. Vivamus varius
              lectus at tortor gravida, id vestibulum velit efficitur. Nullam
              mattis risus eget urna tincidunt, eget tristique orci cursus.
              Integer sit amet metus eget lorem dignissim vulputate.
            </p>
          </div>
          <div className="w-full flex justify-center -translate-y-8">
            <button className="bg-[#B2AC88] px-4 py-2 rounded-full ">
              <h1 className="xl:text-lg text-xs font-bold font-montserrat text-white">
                View tour
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
