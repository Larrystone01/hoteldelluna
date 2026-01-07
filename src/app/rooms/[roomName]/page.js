import { supabaseServer } from "@/lib/supabaseServer";
import RoomPage from "./components/Room";

export default async function SingleRoom({ params }) {
  const { roomName } = await params;

  const { data: room, error } = await supabaseServer
    .from("rooms")
    .select("*")
    .eq("slug", roomName)
    .single();

  if (error || !room) {
    return (
      <div className="p-10 text-center text-red-500">
        <p>Room Not Found</p>
        <p>Kindly Check you Internet and try again</p>
      </div>
    );
  }

  return <RoomPage room={room} />;
}
