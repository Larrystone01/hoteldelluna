import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(request) {
  try {
    const { check_in, check_out, room_id } = await request.json();
    if (!check_in || !check_out) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const checkInDate = new Date(check_in);
    const checkOutDate = new Date(check_out);

    const query = supabaseServer.from("booking").select("*");

    if (room_id) {
      query.eq("room_id", room_id);
    }

    query.gte("check_out", check_in).lte("check_in", check_out);

    const { data: existingBookings, error } = await supabaseServer
      .from("booking")
      .select("*")
      .eq("id", room_id)
      .gte("check_out", check_in)
      .lte("check_in", check_out);
    // .or(`and(check_in.lte.${check_out},check_out.gte.${check_in})`);
    if (error) throw error;

    const isAvailable = existingBookings.length === 0;
    return NextResponse.json({
      room_id: room_id || null,
      available: isAvailable,
      overlapping_bookings: existingBookings,
    });
  } catch (error) {
    console.error("Error checking availability:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
