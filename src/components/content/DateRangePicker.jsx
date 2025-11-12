"use client";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function DateRangePicker({ dates, setDates, error }) {
  return (
    <div className="flex flex-col gap-6">
      {/* ✅ Check-in Date Picker */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1 uppercase">
          arrival date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left text-black font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
              {dates.check_in ? (
                format(dates.check_in, "PPPP")
              ) : (
                <span>Select date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dates.check_in}
              onSelect={(date) => {
                // Reset check-out if it’s before the new check-in
                if (dates.check_out && date && date > dates.check_out) {
                  setDates({ check_in: date, check_out: null });
                } else {
                  setDates({ ...dates, check_in: date });
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {error?.check_in && (
          <p className="text-red-500 text-sm mt-1">{error.check_in}</p>
        )}
      </div>

      {/* ✅ Check-out Date Picker */}
      <div className="flex flex-col items-start">
        <label className="text-sm font-medium mb-1 uppercase">
          departure date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left text-black font-normal"
              disabled={!dates.check_in}
            >
              <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
              {dates.check_out ? (
                format(dates.check_out, "PPPP")
              ) : (
                <span>Select date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dates.check_out}
              onSelect={(date) => setDates({ ...dates, check_out: date })}
              disabled={(date) => !dates.check_in || date <= dates.check_in}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {error?.check_out && (
          <p className="text-red-500 text-sm mt-1">{error.check_out}</p>
        )}
      </div>
    </div>
  );
}
