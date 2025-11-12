// import { NextResponse } from "next/server";
// import { supabaseServer as supabase } from "@/lib/supabaseServer";
// import { roomData } from "@/lib/data";

// export async function POST() {
//   try {
//     // 1️⃣ Clean and prepare your data
//     const cleanedData = roomData.map((room) => ({
//       name: room.name.trim(),
//       slug: room.slug,
//       price: Number(room.price.replace(/[^0-9]/g, "")), // remove symbols
//       no_of_occupant: room.noOfOccupant,
//       room_category: room.roomCategory,
//       description: room.description,
//       image_url: room.src,
//       peaks: room.peaks,
//     }));

//     // 2️⃣ Fetch all existing room names from the DB
//     const { data: existingRooms, error: fetchError } = await supabase
//       .from("rooms")
//       .select("name");

//     if (fetchError) throw fetchError;

//     const existingNames = new Set(existingRooms.map((r) => r.name));

//     // 3️⃣ Filter out rooms that already exist
//     const newRooms = cleanedData.filter(
//       (room) => !existingNames.has(room.name)
//     );

//     if (newRooms.length === 0) {
//       return NextResponse.json(
//         { message: "No new rooms to insert" },
//         { status: 200 }
//       );
//     }

//     // 4️⃣ Insert only non-duplicate rooms
//     const { data, error } = await supabase.from("rooms").insert(newRooms);

//     if (error) throw error;

//     return NextResponse.json(
//       { message: "Rooms inserted successfully", data },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Unexpected error inserting rooms:", error);
//     return NextResponse.json(
//       { error: error.message || "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// // export async function GET() {
// //   try {
// //     const { data, error } = await supabase.from("rooms").select("*").limit(1);
// //     if (error) throw error;
// //     return NextResponse.json({ success: true, data });
// //   } catch (err) {
// //     return NextResponse.json({ success: false, message: err.message });
// //   }
// // }
