"use client";
import { useState, useEffect } from "react";
import { Asterisk } from "lucide-react";
import DateRangePicker from "./content/DateRangePicker";

export default function CheckAvailability({ room_id, initialDates }) {
  const [dates, setDates] = useState(
    initialDates || { check_in: null, check_out: null }
  );
  const [errors, setErrors] = useState({ check_in: "", check_out: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (room_id && dates.check_in && dates.check_out) {
      handleCheck();
    }
  }, []);

  async function handleCheck(e) {
    e.preventDefault();
    if (!dates.check_in || !dates.check_out) {
      alert("Please Select both the check-in and the check-out dates");
      let newErrors = { check_in: "", check_out: "" };
      if (!dates.check_in) newErrors.check_in = "Please enter a check in date";
      if (!dates.check_out)
        newErrors.check_out = "Please enter a check out date";

      if (newErrors.check_in || newErrors.check_out) {
        setErrors(newErrors);
      }
      return;
    }
    if (!dates.check_in && !dates.check_out) {
      let newError = "Please Select both Arrival and Departure Dates";
      setErrors(newError);
    }
    try {
      setLoading(true);
      setResult(null);
      const res = await fetch("api/check-availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          check_in: dates.check_in,
          check_out: dates.check_out,
          ...(room_id && { roomId: room_id }),
        }),
      });
      const data = await res.json();
      setErrors({ check_in: "", check_out: "" });
      setResult(data);
    } catch (error) {
      console.error("Error Checking Availability:", error);
      setResult({ error: "An error occured, please try again" });
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <aside className="bg-black text-white h-fit">
        <div className="px-4 pt-5">
          <form
            className="form-container"
            onSubmit={handleCheck}
            id="availability-form"
          >
            <h1 className="text-center text-[25px]">Check Availability</h1>
            <p className="flex justify-center items-center text-[12px] my-4 text-center">
              required field are followed by <Asterisk color="red" size={10} />
            </p>
            <div className="input-side w-full">
              <DateRangePicker
                dates={dates}
                setDates={setDates}
                error={errors}
              />
            </div>
          </form>
        </div>
        <button
          form="availability-form"
          type="submit"
          className="cursor-pointer w-full uppercase bg-yellow-300 text-center hover:bg-amber-200 p-3 mt-4"
        >
          check availability
        </button>
      </aside>
    </>
  );
}
