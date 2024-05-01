"use client";
import React, { HTMLAttributes, HtmlHTMLAttributes } from "react";

// interface DateRangePickerProps  {
//     divAtribute:HtmlHTMLAttributes<div>
// }

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateRangePicker({
  className,
  ButtonClassName,
}: React.HTMLAttributes<HTMLDivElement> & {ButtonClassName?:string} )  {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              ButtonClassName,
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-mainFont" />
            {date?.from ? (
              date.to ? (
                <p className="text-mainFont">
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </p>
              ) : (
                <p className="text-mainFont">
                  {format(date.from, "LLL dd, y")}
                </p>
              )
            ) : (
              <span className="text-white text-opacity-25">Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-[#5B340A] border-[#916A2D]"
          align="start"
        >
          <Calendar
            className="text-mainFont bg-[#5B340A]"
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
