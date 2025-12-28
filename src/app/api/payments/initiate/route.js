import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req) {
  try {
    const { booking_id } = await req.json();

    if (!booking_id) {
      return NextResponse.json(
        { error: "Booking ID is required" },
        { status: 400 }
      );
    }
    const { data: booking, error } = await supabaseServer
      .from("booking")
      .select("*")
      .eq("id", booking_id)
      .single();

    if (error || !booking) {
      return NextResponse.json({ error: "Booking Not Found" }, { status: 404 });
    }

    if (booking.status !== "hold") {
      return NextResponse.json(
        { error: "Booking is Not Eligible for payment" },
        { status: 409 }
      );
    }
    if (
      booking.hold_expires_at &&
      new Date(booking.hold_expires_at) < new Date()
    ) {
      return NextResponse.json(
        { error: "Booking Hold has expired" },
        { status: 410 }
      );
    }

    const PAYSTACK_URL = process.env.NEXT_PUBLIC_PAYSTACK_URL;

    const customerRes = await fetch("https://api.paystack.co/customer", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: booking.email,
        first_name: booking.full_name.split(" ")[0],
        last_name: booking.full_name.split(" ").slice(1).join(" ") || " ",
        phone: booking.phone,
      }),
    });

    const customerData = await customerRes.json();
    console.log(customerData);

    // if (!customerRes.ok || !customerData.data) {
    //   console.error("Paystack customer creation failed:", customerData);
    //   return NextResponse.json(
    //     {
    //       error: customerData.message || "Failed to create customer",
    //       details: customerData,
    //     },
    //     { status: 400 }
    //   );
    // }
    const customerCode = customerData.data.customer_code;

    const paystackRes = await fetch(PAYSTACK_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: booking.email,
        amount: booking.total_price * 100,
        fullname: booking.full_name,
        phone: booking.phone,
        customer: customerCode,
        currency: "NGN",
        metadata: {
          booking_id: booking.id,
          room_name: booking.room_name,
        },
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      }),
    });
    const paystackData = await paystackRes.json();

    if (!paystackData.status) {
      return NextResponse.json(
        { error: "Payment initialization failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      authorization_url: paystackData.data.authorization_url,
      reference: paystackData.data.reference,
    });
  } catch (err) {
    console.error("Payment initiate error", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
