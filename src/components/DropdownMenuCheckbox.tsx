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
import { count } from "console";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const moroccanCities = [
  {
    city: "Casablanca",
    checked: false,
  },
  {
    city: "Fez",
    checked: false,
  },
  {
    city: "Tangier",
    checked: false,
  },
  {
    city: "Marrakesh",
    checked: false,
  },
  {
    city: "Rabat",
    checked: false,
  },
  {
    city: "Agadir",
    checked: false,
  },
  {
    city: "Meknes",
    checked: false,
  },
  {
    city: "Oujda",
    checked: false,
  },
  {
    city: "Kenitra",
    checked: false,
  },
  {
    city: "Tetouan",
    checked: false,
  },
];

moroccanCities.sort();

type MoroccanCitiesType = typeof moroccanCities;

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] =
    React.useState<MoroccanCitiesType>(moroccanCities);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full h-full ">
        <Button
          variant="default"
          className="bg-background hover:bg-[#916A2D] text-mainFont"
        >
          Where ?
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-[#5B340A] border-[#916A2D]"
        // placement="bottom-start"
      >
        <DropdownMenuLabel className="text-white">
          Morrocan Countries
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-" />
        {/* <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
          className="text-mainFont"
        >
          Marrakech{" "}
        </DropdownMenuCheckboxItem> */}
        {showStatusBar.map((city) => (
          <DropdownMenuCheckboxItem
            key={city.city}
            checked={city.checked}
            onCheckedChange={(checked) => {
              setShowStatusBar((prev) =>
                prev.map((item) =>
                  item.city === city.city ? { ...item, checked } : item
                )
              );
            }}
            className="text-mainFont"
          >
            {city.city}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
