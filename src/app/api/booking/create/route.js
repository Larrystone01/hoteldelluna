import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req) {
  try {
    const { room_slug, check_in, check_out, email, full_name, phone } =
      await req.json();

    const errors = {};

    if (!full_name) errors.fullName = "Full name is required";
    if (!room_slug) errors.room_slug = "Room Type is required";
    if (!check_in) errors.check_in = "Check In date is required";
    if (!check_out) errors.check_out = "Check Out date is required";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone Number is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const { data: room, error: roomError } = await supabaseServer
      .from("rooms")
      .select("id,price,name")
      .eq("slug", room_slug)
      .single();

    if (roomError || !room) {
      return NextResponse.json({ error: "Room Not Found" }, { status: 404 });
    }

    await supabaseServer
      .from("booking")
      .update({ status: "expired" })
      .eq("status", "hold")
      .lt("hold_expires_at", new Date().toISOString());

    // Check Availability Again
    const { data: overlappingBookings } = await supabaseServer
      .from("booking")
      .select("id")
      .eq("room_name", room.name)
      .in("status", ["booked", "hold"])
      .lt("check_in", check_out)
      .gt("check_out", check_in);

    if (overlappingBookings.length > 0) {
      return NextResponse.json(
        { error: "Room is not available for the selected date" },
        { status: 409 }
      );
    }

    // Calaculate the price again
    const nights =
      (new Date(check_out) - new Date(check_in)) / (1000 * 60 * 60 * 24);

    const total_price = nights * room.price;

    // Create booking here
    const { data: booking, error: bookingError } = await supabaseServer
      .from("booking")
      .insert([
        {
          room_name: room.name,
          check_in,
          check_out,
          full_name,
          email,
          phone,
          total_price,
          status: "hold",
          // hold_expires_at: new Date(Date.now() + 15 * 60 * 1000).toISOString,
          amount_expected: total_price,
        },
      ])
      .select()
      .single();

    if (bookingError) throw bookingError;
    return NextResponse.json(
      {
        success: true,
        total_price,
        bookingId: booking.id,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
