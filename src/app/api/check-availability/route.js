import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(request) {
  try {
    const { check_in, check_out, room_id } = await request.json();

    if (!check_in || !check_out) {
      return NextResponse.json(
        { error: "Missing check_in or check_out" },
        { status: 400 }
      );
    }

    // 1️⃣ Find overlapping bookings
    let bookingQuery = supabaseServer
      .from("booking")
      .select("room_name")
      .lt("check_in", check_out)
      .gt("check_out", check_in);

    // If checking a specific room
    if (room_id) {
      bookingQuery = bookingQuery.eq("room_name", room_id);
    }

    const { data: overlappingBookings, error: bookingError } =
      await bookingQuery;

    if (bookingError) throw bookingError;

    // 2️⃣ CASE A: Specific room check
    if (room_id) {
      return NextResponse.json({
        room_id,
        available: overlappingBookings.length === 0,
      });
    }

    // 3️⃣ CASE B: Get all available rooms
    const bookedRooms = overlappingBookings.map((b) => b.room_name);

    let roomsQuery = supabaseServer.from("rooms").select("*");

    if (bookedRooms.length > 0) {
      roomsQuery = roomsQuery.not("slug", "in", `(${bookedRooms.join(",")})`);
    }

    const { data: availableRooms, error: roomsError } = await roomsQuery;

    if (roomsError) throw roomsError;

    return NextResponse.json({
      available: true,
      rooms: availableRooms,
    });
  } catch (error) {
    console.error("Availability check failed:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
