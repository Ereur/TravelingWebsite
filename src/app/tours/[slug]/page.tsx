"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useRouter } from "next/navigation";

export default function ToursPage() {
  const [value, setValue] = React.useState("THE TRIP");

  const router = useRouter();
  // console.log(router.query.slug);
  router.push("/tours/1/thetrip");
  console.log(router);
  return null;
  // <Tabs
  //   defaultValue="THE TRIP"
  //   className="flex flex-col   bg-white w-full h-[100vh] items-center justify-center "
  // >
  //   <div>test </div>
  //   <TabsList className="bg-white w-full  flex justify-center mt-[30px] items-end gap-4 px-8">
  //     <TabsTrigger
  //       onClick={() => {
  //         if (value !== "THE TRIP") {
  //           setValue("THE TRIP");
  //         }
  //       }}
  //       value="THE TRIP"
  //       className={`relative flex w-[400vw] justify-center ${
  //         value === "THE TRIP" ? "border-[#B2AC88]" : "border-transparent"
  //       }  border-b-4 border-rounded rounded-full`}
  //     >
  //       <h1>THE TRIP</h1>
  //     </TabsTrigger>
  //     <TabsTrigger
  //       onClick={() => {
  //         if (value !== "DATES & PRICING") {
  //           setValue("DATES & PRICING");
  //         }
  //       }}
  //       value="DATES & PRICING"
  //       className={`relative flex w-[400vw] justify-center ${
  //         value === "DATES & PRICING"
  //           ? "border-[#B2AC88]"
  //           : "border-transparent"
  //       }  border-b-4  border-rounded-full rounded-full `}
  //     >
  //       DATES & PRICING
  //     </TabsTrigger>
  //   </TabsList>
  //   <TabsContent value="THE TRIP" className="h-full overflow-scroll w-full">
  //     <div className="flex flex-col gap-4 items-center">
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Discover Morocco
  //       </h1>
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Where History Meets Adventure
  //       </h1>
  //     </div>
  //     <div className="flex flex-col gap-4 items-center">
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Discover Morocco
  //       </h1>
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Where History Meets Adventure
  //       </h1>
  //     </div>
  //     <div className="flex flex-col gap-4 items-center">
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Discover Morocco
  //       </h1>
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Where History Meets Adventure
  //       </h1>
  //     </div>
  //     <div className="flex flex-col gap-4 items-center">
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Discover Morocco
  //       </h1>
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Where History Meets Adventure
  //       </h1>
  //     </div>
  //     <div className="flex flex-col gap-4 items-center">
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Discover Morocco
  //       </h1>
  //       <h1 className="text-[#D9B99B] xl:text-[2rem] text-2xl tracking-widest font-montserrat font-bold">
  //         Where History Meets Adventure
  //       </h1>
  //     </div>
  //   </TabsContent>
  //   <TabsContent value="DATES & PRICING">Helloo im dates</TabsContent>
  // </Tabs>
}
