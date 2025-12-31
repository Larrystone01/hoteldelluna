"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Asterisk } from "lucide-react";
import DateRangePicker from "./content/DateRangePicker";
import { useRoom } from "@/context/roomContext";
import { useDates } from "@/context/dateContext";

export default function CheckAvailability({
  room_id,
  room,
  showAvailabilityStatus = false,
  navigateTo = null,
  setRooms,
}) {
  const { dates, setDates } = useDates();
  const [errors, setErrors] = useState({ check_in: "", check_out: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { setSelectedRoom, selectedRoom } = useRoom();
  const router = useRouter();

  useEffect(() => {
    setResult(null);
  }, [dates.check_in, dates.check_out]);

  const getLabel = () => {
    if (!showAvailabilityStatus) return "Check Availability";
    if (loading) return "Checking....";
    if (result === true) return "Reserve Room";
    if (result === false) return "Room Is not Available";
    return "Check Availability";
  };

  useEffect(() => {
    if (result === false) {
      const timer = setTimeout(() => setResult(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  async function handleCheck() {
    if (!dates.check_in || !dates.check_out) {
      alert("Please Select both the check-in and the check-out dates");
      let newErrors = { check_in: "", check_out: "" };
      if (!dates.check_in) newErrors.check_in = "Please enter a check in date";
      if (!dates.check_out)
        newErrors.check_out = "Please enter a check out date";

      if (newErrors.check_in || newErrors.check_out) {
        setErrors(newErrors);
        // setErrors(onClearError({ check_in: "", check_out: "" }));
      }
      return;
    }
    if (!dates.check_in && !dates.check_out) {
      let newError = "Please Select both Arrival and Departure Dates";
      setErrors(newError);
    }
    try {
      setLoading(true);
      setErrors({ check_in: "", check_out: "" });
      setResult(null);
      const res = await fetch("/api/check-availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          check_in: dates.check_in,
          check_out: dates.check_out,
          ...(room_id && { room_name: room_id }),
        }),
      });
      const data = await res.json();

      if (setRooms && Array.isArray(data.rooms)) {
        setRooms(data.rooms);
      }
      setResult(data.available);
      console.log(data);
      setDates({ check_in: dates.check_in, check_out: dates.check_out });
    } catch (error) {
      console.error("Error Checking Availability:", error);
      setResult({ error: "An error occured, please try again" });
    } finally {
      setLoading(false);
    }
  }

  function handleButtonClick() {
    if (result === true && navigateTo) {
      setSelectedRoom((room) => ({
        ...room,
        checkInDate: dates.check_in,
        checkOutDate: dates.check_out,
      }));
      router.push(navigateTo);
      return;
    }

    handleCheck();
  }
  return (
    <>
      <aside className="bg-black text-white h-fit">
        <div className="px-4 pt-5">
          <form
            className="form-container"
            // onSubmit={handleCheck}
            id="availability-form"
          >
            <h1 className="text-center text-[25px] uppercase pb-6">
              Check Availability
            </h1>
            <div className="input-side w-full">
              <DateRangePicker
                dates={dates}
                setDates={setDates}
                error={errors}
                setResult={setResult}
                onClearError={() => {
                  setErrors(null);
                }}
              />
            </div>
          </form>
          {showAvailabilityStatus &&
            result !== null &&
            (result ? (
              <p>This Room is available for Booking</p>
            ) : (
              <p>This Room is Booked for the chosen date</p>
            ))}
        </div>
        <button
          form="availability-form"
          type="button"
          onClick={handleButtonClick}
          disabled={loading || result === false}
          className="cursor-pointer w-full uppercase bg-yellow-300 text-center hover:bg-amber-200 p-3 mt-4"
        >
          {getLabel()}
        </button>
      </aside>
    </>
  );
}
