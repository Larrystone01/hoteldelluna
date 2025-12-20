"use client";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";
import { supabase } from "@/lib/supabaseClient";
import { useRoom } from "@/context/roomContext";
import { useDates } from "@/context/dateContext";
import DateRangePicker from "@/components/content/DateRangePicker";
import { toast } from "react-toastify";

function BookingContent() {
  const { selectedRoom, setSelectedRoom } = useRoom();
  const { dates, setDates } = useDates();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isEditing, setIsEditing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    totalAmount: 0,
    country: "",
    adults: "",
    children: "",
    specialRequests: "",
  });

  const countries = [
    "Nigeria",
    "United States",
    "United Kingdom",
    "Canada",
    "Ghana",
    "South Africa",
    "Kenya",
    "Australia",
    "Germany",
    "France",
  ];
  const roomName = searchParams.get("room");

  useEffect(() => {
    async function fetchRooms() {
      const { data, error } = await supabase.from("rooms").select("*");
      if (error) {
        console.error("Error Fetching Rooms:", error.message);
      }
      setRooms(data ?? []);
    }
    fetchRooms();
  }, []);

  useEffect(() => {
    if (!rooms.length || !roomName) return;
    const matchedRoom = rooms.find((r) => r.slug === roomName);
    console.log(matchedRoom);
    setRoom(matchedRoom);
    if (matchedRoom) {
      setSelectedRoom(matchedRoom);
      setFormData((prev) => ({
        ...prev,
        roomType: matchedRoom.name,
      }));
    }
  }, [rooms, roomName]);

  const toDateOnly = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  async function handleSubmit() {
    // if (
    //   !formData.fullName ||
    //   !formData.email ||
    //   !formData.phone ||
    //   !formData.roomType ||
    //   !formData.checkIn ||
    //   !formData.checkOut
    // ) {
    //   toast.info("Please fill in all required fields");
    //   return;
    // }

    try {
      setLoading(true);
      const res = await fetch("api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          room_slug: formData.roomType,
          check_in: toDateOnly(dates.check_in),
          check_out: toDateOnly(dates.check_out),
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        // Using Toast, using a single point to display which error
        if (data.errors) {
          Object.values(data.errors).forEach((msg) => {
            toast.error(msg);
          });
          // Displaying the Errors for the ones affected
          setFieldErrors(data.errors);
        } else if (data.error) {
          toast.error(data.error);
        } else {
          toast.error("Something went wrong");
        }
        return;
      }
      setFieldErrors({});
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        checkIn: "",
        checkOut: "",
        totalAmount: 0,
        children: "",
        adults: "",
        specialRequests: "",
      });
      setDates({ check_in: null, check_out: null });
      setIsEditing(true);
      // localStorage.removeItem("selectedRoom");
    } catch (error) {
      console.error("Booking Failed", error.message);
      toast.error("Room Is Not Available for the selected Date");
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formattedDate = (value) => {
    if (!value) return;
    return new Date(value).toDateString();
  };

  // No date selected
  const noDatesSelected = !dates?.check_in || !dates?.check_out;

  const getNumberofNights = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.ceil((outDate - inDate) / oneDay);
  };

  const night = getNumberofNights(dates.check_in, dates.check_out);

  // useEffect(() => {
  //   // If global room state has dates, use them
  //   if (room?.checkInDate || room?.checkOutDate) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       checkIn: formattedDate(room?.checkInDate),
  //       checkOut: formattedDate(room?.checkOutDate),
  //     }));
  //     return; // stop here, room takes priority
  //   }

  //   // Otherwise, use local selected dates
  //   if (dates?.check_in || dates?.check_out) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       checkIn: dates?.check_in ? formattedDate(dates.check_in) : "",
  //       checkOut: dates?.check_out ? formattedDate(dates.check_out) : "",
  //     }));
  //   }
  // }, [room, dates]);

  const backUpImage = "/images/booking-img.jpg";

  const sliderImage = selectedRoom?.image_url || backUpImage;

  useEffect(() => {
    if (!selectedRoom || night <= 0) return;

    setFormData((prev) => ({
      ...prev,
      totalAmount: night * selectedRoom.price,
    }));
  }, [selectedRoom, night]);

  useEffect(() => {
    if (selectedRoom?.slug && rooms.length > 0) {
      setFormData((prev) => ({
        ...prev,
        roomType: selectedRoom.slug,
      }));
    }
  }, [selectedRoom, rooms]);

  return (
    <>
      <Slider images={[sliderImage]}>
        <NavAndFooterWrap>
          <div className="h-[100vh] text-white text-[40px] flex justify-center items-center">
            Booking confirmation
          </div>
          <div className="md:px-6 px-3 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container booking-form">
              <div className="min-h-screen w-full md:p-6 pt-6 flex items-center justify-center">
                <div className="max-w-5xl w-full bg-white shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-950 to-blue-700 p-6">
                    <h1 className="text-3xl font-bold text-white text-center">
                      Complete Your Booking
                    </h1>
                    <p className="text-indigo-100 mt-1 text-center">
                      Just a few details to confirm your stay
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 md:p-8 p-4">
                    {/* Booking Form - Left Side */}
                    <div className="md:col-span-2 order-2">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Booking Form
                      </h2>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                            placeholder="Enter your full name"
                            required
                          />
                          {fieldErrors.full_name && (
                            <p className="text-red-600 text-sm">
                              {fieldErrors.full_name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                            placeholder="your.email@example.com"
                            required
                          />
                          {fieldErrors.email && (
                            <p className="text-red-600 text-sm">
                              {fieldErrors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                            placeholder="+234 xxx xxx xxxx"
                            required
                          />
                          {fieldErrors.phone && (
                            <p className="text-red-600 text-sm">
                              {fieldErrors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors bg-white"
                            required
                          >
                            <option value="">Select your country</option>
                            {countries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Adults
                            </label>
                            <input
                              type="number"
                              name="adults"
                              value={formData.adults}
                              onChange={handleChange}
                              min="1"
                              max="10"
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Children
                            </label>
                            <input
                              type="number"
                              name="children"
                              value={formData.children}
                              onChange={handleChange}
                              min="0"
                              max="10"
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Special Requests
                          </label>
                          <textarea
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                            placeholder="Any special requirements or requests..."
                          ></textarea>
                        </div>

                        <button
                          onClick={handleSubmit}
                          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all shadow-lg cursor-pointer"
                        >
                          CONFIRM BOOKING
                        </button>
                        <div className="md:mt-6 mt-3 md:p-4 p-2 md:w-fit bg-green-50 rounded-lg border border-green-200">
                          <p className="md:text-sm text-[10px] text-green-800 md:text-justify text-center">
                            <span className="font-semibold">
                              ✓ Free Cancellation
                            </span>{" "}
                            until 48 hours before check-in
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Summary - Right Side */}
                    <div className="md:col-span-1 order-1">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Room Details
                      </h2>

                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-100 space-y-4">
                        <div className="pb-4 border-b border-indigo-200">
                          <p className="text-sm text-gray-600 mb-1">
                            Room Type
                          </p>
                          <select
                            name="roomType"
                            className="text-xl font-bold text-indigo-900 w-full outline-none"
                            onChange={(e) => {
                              const slug = e.target.value;
                              setFormData((prev) => ({
                                ...prev,
                                roomType: slug,
                              }));
                              const foundRoom = rooms.find(
                                (r) => r.slug === slug
                              );
                              setSelectedRoom(foundRoom || null);
                            }}
                            value={formData.roomType || ""}
                          >
                            <option value="">Select a room</option>
                            {rooms.map((room) => {
                              return (
                                <option key={room.id} value={room.slug}>
                                  {room.name}
                                </option>
                              );
                            })}
                          </select>
                          {fieldErrors.room_slug && (
                            <p className="text-red-600 text-sm">
                              {fieldErrors.room_slug}
                            </p>
                          )}
                        </div>

                        {isEditing || noDatesSelected ? (
                          <div className="space-y-4">
                            {/* Date picker */}
                            <DateRangePicker
                              dates={dates}
                              setDates={setDates}
                              setResult={setResult}
                            />

                            {/* Save / Cancel buttons */}
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <button
                                className="bg-indigo-600 text-white px-4 py-2 rounded"
                                onClick={() => {
                                  if (dates.check_in && dates.check_out) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      checkIn: formattedDate(dates.check_in),
                                      checkOut: formattedDate(dates.check_out),
                                    }));
                                    setIsEditing(false);
                                  } else {
                                    // alert(
                                    //   "Please select both check-in and check-out dates."
                                    // );
                                    toast.warning(
                                      "Please select both check-in and check-out dates"
                                    );
                                  }
                                }}
                              >
                                Save Dates
                              </button>
                              <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                                onClick={() => {
                                  if (!dates.check_in || !dates.check_out) {
                                    alert(
                                      "Please select both check-in and check-out dates"
                                    );
                                  } else {
                                    setIsEditing(false);
                                  }
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : formData.checkIn && formData.checkOut ? (
                          <>
                            {/* Check-in */}
                            <div className="pb-4 border-b border-indigo-200">
                              <p className="text-sm text-gray-600 mb-1">
                                Check-in
                              </p>
                              <p className="text-lg font-semibold text-gray-800">
                                {formData.checkIn}
                              </p>
                            </div>

                            {/* Check-out */}
                            <div className="pb-4 border-b border-indigo-200">
                              <p className="text-sm text-gray-600 mb-1">
                                Check-out
                              </p>
                              <p className="text-lg font-semibold text-gray-800">
                                {formData.checkOut}
                              </p>
                            </div>
                          </>
                        ) : (
                          <DateRangePicker dates={dates} setDates={setDates} />
                        )}

                        {/* Total Amount */}
                        <div className="pt-2">
                          <p className="text-sm text-gray-600 mb-1">
                            Total Amount
                          </p>
                          <p className="text-3xl font-bold text-indigo-600">
                            ₦{formData.totalAmount || 0}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {night}{" "}
                            {night > 1 ? "nights of stay" : "night of stay"}
                          </p>
                        </div>

                        {/* Edit Details button */}
                        {!isEditing && (
                          <button
                            className="w-full mt-6 bg-white text-indigo-600 font-semibold py-3 rounded-lg border-2 border-indigo-200 hover:bg-indigo-50 transition-colors"
                            onClick={() => setIsEditing(true)}
                          >
                            Edit Details
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavAndFooterWrap>
      </Slider>
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <BookingContent />
    </Suspense>
  );
}
