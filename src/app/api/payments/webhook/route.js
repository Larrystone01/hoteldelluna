import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req) {
  try {
    // 1️⃣ Read raw body
    const rawBody = await req.text();

    // 2️⃣ Verify Paystack signature
    const signature = req.headers.get("x-paystack-signature");
    const computedHash = crypto
      .createHmac("sha512", process.env.PAYSTACK_TEST_SECRET_KEY)
      .update(rawBody)
      .digest("hex");

    if (computedHash !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // 3️⃣ Parse event
    const event = JSON.parse(rawBody);

    // Only process successful charges
    if (event.event !== "charge.success") {
      return NextResponse.json({ received: true });
    }

    const paymentData = event.data;
    const bookingId = paymentData.metadata?.booking_id;
    const paymentReference = paymentData.reference;

    if (!bookingId || !paymentReference) {
      return NextResponse.json(
        { error: "Missing booking_id or payment reference" },
        { status: 400 }
      );
    }

    // 4️⃣ Fetch booking
    const { data: booking, error: bookingFetchError } = await supabaseServer
      .from("booking")
      .select("id, status")
      .eq("id", bookingId)
      .single();

    if (bookingFetchError || !booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    // Prevent double processing
    if (booking.status === "booked") {
      return NextResponse.json({ received: true });
    }

    // Only confirm bookings that are still on hold
    if (booking.status !== "hold") {
      return NextResponse.json({ received: true });
    }

    // 5️⃣ Update booking → BOOKED
    const { error: bookingUpdateError } = await supabaseServer
      .from("booking")
      .update({
        status: "booked",
        payment_reference: paymentReference,
        paid_at: new Date().toISOString(),
      })
      .eq("id", bookingId);

    if (bookingUpdateError) {
      throw bookingUpdateError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
