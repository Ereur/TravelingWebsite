"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Increment from "@/assets/icons/Increment";
import Decrement from "@/assets/icons/Decrement";

// import { count } from "console";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function PersonesMenu() {
  const [NumberOfAdults, setNumberOfAdults] = React.useState(0);
  const [NumberOfChildren, setNumberOfChildren] = React.useState(0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full h-full ">
        <Button
          variant="default"
          className="bg-background hover:bg-[#916A2D] text-mainFont"
        >
          {NumberOfAdults} Adults . {NumberOfChildren} Childrens
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-[#5B340A] border-[#916A2D]"
        // placement="bottom-start"
      >
        <div className="flex gap-4 p-4 flex-col">
          <div id="Adults" className="flex  items-center justify-between">
            <h1 className="text-mainFont">Adults</h1>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  setNumberOfAdults((prev) => {
                    if (prev === 0) {
                      return 0;
                    }
                    return prev - 1;
                  });
                }}
              >
                <Decrement size={24} className=" text-[#B2AC88]" />
              </button>
              <h1 className="text-bold  text-mainFont">{NumberOfAdults}</h1>
              <button
                onClick={() => {
                  setNumberOfAdults((prev) => prev + 1);
                }}
              >
                <Increment size={24} className="text-[#B2AC88]" />
              </button>
            </div>
          </div>
          <div id="Adults" className="flex  items-center justify-between">
            <h1 className="text-mainFont">Childrens</h1>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  setNumberOfChildren((prev) => {
                    if (prev === 0) {
                      return 0;
                    }
                    return prev - 1;
                  });
                }}
              >
                <Decrement size={24} className=" text-[#B2AC88]" />
              </button>
              <h1 className="text-bold  text-mainFont">{NumberOfChildren}</h1>
              <button
                onClick={() => {
                  setNumberOfChildren((prev) => prev + 1);
                }}
              >
                <Increment size={24} className="text-[#B2AC88]" />
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setNumberOfAdults(0);
              setNumberOfChildren(0);
            }}
          >
            <h1 className="text-white font-bold hover:underline-offset-1 hover:underline text-md">
              CLEAR
            </h1>
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
