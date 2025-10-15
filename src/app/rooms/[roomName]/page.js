import { roomData } from "@/lib/data";

export default async function Room({ params }) {
  const { roomName } = await params;
  const room = roomData.find((r) => r.slug === roomName);
  // console.log(room);

  if (!room) {
    return (
      <div className="text-center py-20 text-red-500">Room not found.</div>
    );
  }
  return (
    <>
      <h1>This is {room.name}</h1>
    </>
  );
}
