import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(request) {
  try {
    const { check_in, check_out, roomId } = await request.json();
    if (!check_in || !check_out) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const query = supabaseServer.from("booking").select("*");

    if (roomId) {
      query.eq("id", roomId);
    }

    query.gte("check_out", check_in).lte("check_in", check_out);
    const { data: existingBookings, error } = await query;

    // const { data: existingBookings, error } = await supabaseServer
    //   .from("booking")
    //   .select("*")
    //   .eq("room_id", room_id)
    //   .gte("check_out", check_in)
    //   .lte("check_in", check_out);
    // .or(`and(check_in.lte.${check_out},check_out.gte.${check_in})`);
    if (error) throw error;

    const isAvailable = existingBookings.length === 0;
    return NextResponse.json({
      id: roomId || null,
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
